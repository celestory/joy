import {css} from '@emotion/react';
import {Global} from '@emotion/react';
import type {PropsWithChildren} from 'react';

import type {Theme} from './types/theme';

type Props = {
    theme: Theme;
};

const createThemeVariables = (theme: object, parent: string = 'theme'): string[] => {
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
        <>
            <Global
                styles={css`
                    :root {
                        ${cssVariables}
                    }
                `}
            />
            {children}
        </>
    );
};
