import {css} from '@emotion/react';
import {themeProp} from './types/theme';
import type {CSSBorder, CSSColor, CSSRadius, CSSShadow, WithTheme} from './types/theme';

interface SurfaceProps {
    border?: WithTheme<CSSBorder | undefined>;
    radius?: WithTheme<CSSRadius | undefined>;
    shadow?: WithTheme<CSSShadow | undefined>;
    background?: WithTheme<CSSColor | undefined>;
}

export const surfaceCss = ({border, radius, shadow, background}: SurfaceProps, themeNamespace = 'surface') => css`
    border: ${themeProp(border, `theme:${themeNamespace}.border`)};
    box-shadow: ${themeProp(shadow, `theme:${themeNamespace}.shadow`)};
    background: ${themeProp(background, `theme:${themeNamespace}.background`)};
    border-radius: ${themeProp(radius, `theme:${themeNamespace}.radius`)};
`;
