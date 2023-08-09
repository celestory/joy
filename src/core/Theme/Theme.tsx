import {css} from '@emotion/react';
import {Global} from '@emotion/react';
import type {PropsWithChildren} from 'react';

import type {Theme} from '../utils/types/theme';

type Props = {
    theme: Theme;
};

const createThemeVariables = (theme: object, parent = 'joy'): string[] => {
    // TODO: Handle input.hover.background => input.background if input.hover.background is empty.
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
