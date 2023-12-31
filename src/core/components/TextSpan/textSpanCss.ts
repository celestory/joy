import {css} from '@emotion/react';

import {themeProp, fontWeightToCss, themeConst} from '../../utils/types/theme';
import type {Breakpoints} from '../../utils/types/break';
import type {TextSpanProps} from './TextSpan';

export const textSpanCss = (props: TextSpanProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    color: ${themeProp(props.fg, themeConst('theme:colors.fg'))};

    font: ${themeProp(props.font, themeConst('theme:fonts.ui'))};
    font-size: ${props[`${breakpoint}size`]};
    font-style: ${props.italic ? 'italic' : undefined};
    font-weight: ${fontWeightToCss[props.weight || 'default']};

    text-align: ${props.textAlign};
    line-height: ${props.lineHeight};
    letter-spacing: ${props.letterSpacing};
    ${props.breakWord &&
    css`
        word-wrap: break-word;
    `}
`;
