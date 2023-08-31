import {css} from '@emotion/react';
import {Global} from '@emotion/react';
import type {PropsWithChildren} from 'react';

import {darkTheme} from './themes';
import type {Theme} from '../utils/types/theme';

type Props = {
    theme: Partial<Theme>;
};

const fillTheme = (theme: Partial<Theme>): Theme => {
    const filledTheme = {...darkTheme, ...theme};

    return {
        ...filledTheme,
        input: {
            ...filledTheme.input,
            _focus: {
                shadow: filledTheme.input._focus.shadow || filledTheme.input.shadow,
                border: filledTheme.input._focus.border || filledTheme.input.border,
                radius: filledTheme.input._focus.radius || filledTheme.input.radius,
                bg: filledTheme.input._focus.bg || filledTheme.input.bg,
            },
            _hover: {
                shadow: filledTheme.input._hover.shadow || filledTheme.input.shadow,
                border: filledTheme.input._hover.border || filledTheme.input.border,
                radius: filledTheme.input._hover.radius || filledTheme.input.radius,
                bg: filledTheme.input._hover.bg || filledTheme.input.bg,
            },
        },
    };
};

const createThemeVariables = (theme: object, parent = 'joy'): string[] => {
    return Object.entries(theme).reduce((cssVariables, [key, value]) => {
        if (typeof value === 'object') {
            return [...cssVariables, ...createThemeVariables(value, `${parent}-${key}`)];
        }
        if (typeof value === 'string') {
            console.log(`--${parent}-${key}: ${value};`);
            return [...cssVariables, `--${parent}-${key}: ${value};`];
        }
        return cssVariables;
    }, [] as string[]);
};

export const ThemeProvider = ({theme, children}: PropsWithChildren<Props>) => {
    const filledTheme = fillTheme(theme);
    const cssVariables = createThemeVariables(filledTheme).join('\n');

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
