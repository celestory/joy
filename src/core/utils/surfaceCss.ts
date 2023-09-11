import {css} from '@emotion/react';
import {themeConst, themeProp} from './types/theme';
import type {CSSBorder, CSSColor, CSSRadius, CSSShadow, ThemeKey, WithTheme} from './types/theme';

interface SurfaceProps {
    bg?: WithTheme<CSSColor | undefined>;
    border?: WithTheme<CSSBorder | undefined>;
    radius?: WithTheme<CSSRadius | undefined>;
    shadow?: WithTheme<CSSShadow | undefined>;
}

// TODO: can themeNamespace be typed? we expect to find border/shadow/bg/radius
export const surfaceCss = ({border, radius, shadow, bg}: SurfaceProps, themeNamespace: string) => css`
    border: ${themeProp(border, themeConst(`theme:${themeNamespace}.border` as ThemeKey<string>))};
    box-shadow: ${themeProp(shadow, themeConst(`theme:${themeNamespace}.shadow` as ThemeKey<string>))};
    border-radius: ${themeProp(radius, themeConst(`theme:${themeNamespace}.radius` as ThemeKey<string>))};
    background-color: ${themeProp(bg, themeConst(`theme:${themeNamespace}.bg` as ThemeKey<string>))};
`;
