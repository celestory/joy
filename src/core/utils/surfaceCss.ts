import {css} from '@emotion/react';
import {themeConst, themeProp} from './types/theme';
import type {CSSBorder, CSSColor, CSSRadius, CSSShadow, ThemeKey, WithTheme} from './types/theme';

interface SurfaceProps {
    border?: WithTheme<CSSBorder | undefined>;
    radius?: WithTheme<CSSRadius | undefined>;
    shadow?: WithTheme<CSSShadow | undefined>;
    bg?: WithTheme<CSSColor | undefined>;
}

// TODO: can themeNamespace be typed? we expect to find border/shadow/bg/radius
export const surfaceCss = ({border, radius, shadow, bg}: SurfaceProps, themeNamespace: string) => css`
    border: ${themeProp(border, themeConst(`theme:${themeNamespace}.border` as ThemeKey<any>))};
    box-shadow: ${themeProp(shadow, themeConst(`theme:${themeNamespace}.shadow` as ThemeKey<any>))};
    background: ${themeProp(bg, themeConst(`theme:${themeNamespace}.bg` as ThemeKey<any>))};
    border-radius: ${themeProp(radius, themeConst(`theme:${themeNamespace}.radius` as ThemeKey<any>))};
`;
