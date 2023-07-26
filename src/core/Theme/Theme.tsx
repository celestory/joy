import {Global} from '@emotion/react';
import createCache from '@emotion/cache';
import {css, CacheProvider} from '@emotion/react';
import type {PropsWithChildren} from 'react';

import type {Theme} from '../utils/types/theme';

type Props = {
    theme: Theme;
};
const styledCache = createCache({
    key: 'joy',
    stylisPlugins: [],
});

const createThemeVariables = (theme: object, parent = 'joy'): string[] => {
    return Object.entries(theme).reduce((cssVariables, [key, value]) => {
        if (typeof value !== 'string') {
            return [...cssVariables, ...createThemeVariables(value, `${parent}-${key}`)];
        }
        return [...cssVariables, `--${parent}-${key}: ${value};`];
    }, [] as string[]);
};

export const ThemeProvider = ({theme, children}: PropsWithChildren<Props>) => {
    const cssVariables = createThemeVariables(theme).join('\n');

    return (
        <CacheProvider value={styledCache}>
            <Global
                styles={css`
                    :root {
                        ${cssVariables}
                    }
                `}
            />
            {children}
        </CacheProvider>
    );
};
