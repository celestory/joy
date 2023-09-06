import {css} from '@emotion/react';
import {Global} from '@emotion/react';
import type {PropsWithChildren} from 'react';

import {darkTheme} from './themes';
import type {Theme} from '../utils/types/theme';

interface ThemeProviderProps {
    theme: Partial<Theme>;
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

export const ThemeProvider = ({theme, children}: PropsWithChildren<ThemeProviderProps>) => {
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
                `}
            />
            {children}
        </>
    );
};
