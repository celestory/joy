import {css} from '@emotion/react';
import {themeProp} from './types/theme';
import type {CSSBorder, CSSColor, CSSRadius, CSSShadow, WithTheme} from './types/theme';

interface SurfaceProps {
    border?: WithTheme<CSSBorder>;
    radius?: WithTheme<CSSRadius>;
    shadow?: WithTheme<CSSShadow>;
    background?: WithTheme<CSSColor>;
}

export const surfaceCss = ({border, radius, shadow, background}: SurfaceProps, themeNamespace = 'surface') => css`
    border: ${themeProp(border, `theme:${themeNamespace}.border`)};
    box-shadow: ${themeProp(shadow, `theme:${themeNamespace}.shadow`)};
    background: ${themeProp(background, `theme:${themeNamespace}.background`)};
    border-radius: ${themeProp(radius, `theme:${themeNamespace}.radius`)};
`;
