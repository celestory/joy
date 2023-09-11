import {css} from '@emotion/react';
import {Global} from '@emotion/react';
import type {SerializedStyles} from '@emotion/react';
import type {PropsWithChildren} from 'react';

import {darkTheme} from './themes';
import {themeConst} from '../utils/types/theme';
import type {Theme, BaseTheme, CustomTheme} from '../utils/types/theme';

interface ThemeProviderProps {
    theme: Partial<BaseTheme> & CustomTheme;
    styles?: SerializedStyles;
    noReset?: boolean;
}

const applyCascadeToTheme = (theme: Partial<Theme>): Theme => {
    const result = structuredClone({...darkTheme, ...theme});
    const traverse = (current: Partial<Theme>) => {
        const parentKeys = Object.keys(current);
        const finalKeys = parentKeys.filter(key => !key.startsWith('_'));
        for (const key of parentKeys) {
            const value = (current as any)[key];
            if (typeof value === 'object') {
                if (key.startsWith('_')) {
                    for (const finalKey of finalKeys) {
                        if (value[finalKey] === undefined) {
                            value[finalKey] = (current as any)[finalKey];
                        }
                    }
                }
                traverse(value);
            }
        }
    };
    traverse(result);
    return result;
};

const createThemeVariables = (theme: object, parent = 'joy'): string[] => {
    return Object.entries(theme).reduce((cssVariables, [key, value]) => {
        if (typeof value === 'object') {
            return [...cssVariables, ...createThemeVariables(value, `${parent}-${key}`)];
        }
        if (typeof value === 'string') {
            return [...cssVariables, `--${parent}-${key}: ${value};`];
        }
        return cssVariables;
    }, [] as string[]);
};

export const ThemeProvider = ({theme, styles, noReset, children}: PropsWithChildren<ThemeProviderProps>) => {
    const finalTheme = applyCascadeToTheme(theme);
    const cssVariables = createThemeVariables(finalTheme).join('\n');

    return (
        <>
            <Global
                styles={css`
                    :root,
                    ::backdrop {
                        ${cssVariables}
                    }
                    ${!noReset &&
                    css`
                        html,
                        body,
                        #__next {
                            scroll-behavior: smooth;
                            //
                            width: 100%;
                            height: 100%;
                            //
                            margin: 0;
                            padding: 0;
                            font-family: ${themeConst('theme:fonts.ui')};
                            overscroll-behavior-y: none;
                            background-color: ${themeConst('theme:colors.bg')};
                        }

                        body {
                            color: ${themeConst('theme:colors.fg')};
                            box-sizing: border-box;
                        }

                        *,
                        *::before,
                        *::after {
                            box-sizing: border-box;
                        }

                        img,
                        picture,
                        video,
                        canvas,
                        svg {
                            display: block;
                            max-width: 100%;
                        }

                        input,
                        button,
                        textarea,
                        select {
                            font: inherit;
                        }

                        p,
                        h1,
                        h2,
                        h3,
                        h4,
                        h5,
                        h6 {
                            overflow-wrap: break-word;
                        }

                        a {
                            text-decoration: none;
                        }

                        dialog {
                            color: ${themeConst('theme:colors.fg')};
                        }
                    `}
                    ${styles}
                `}
            />
            {children}
        </>
    );
};
