import {css} from '@emotion/react';

import {themeProp, fontWeightToCss} from '../../utils/types/theme';
import type {Breakpoints} from '../../utils/types/break';
import type {TextSpanProps} from './TextSpan';

export const textSpanCss = (props: TextSpanProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    color: ${themeProp(props.color)};
    font-size: ${props[`${breakpoint}size`]};
    font-family: ${props.font};
    font-style: ${props.italic ? 'italic' : undefined};
    font-weight: ${fontWeightToCss[props.weight || 'default']};

    text-align: ${props.textAlign};
    line-height: ${props.lineHeight};
`;
