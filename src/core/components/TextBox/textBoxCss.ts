import {css} from '@emotion/react';

import {boxCss} from '../Box/boxCss';
import {themeProp, fontWeightToCss} from '../../utils/types/theme';
import type {Breakpoints} from '../../utils/types/break';
import type {TextBoxProps} from './TextBox';

export const textBoxCss = (props: TextBoxProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    ${boxCss(props, breakpoint)}

    color: ${themeProp(props.color)};
    font-size: ${props[`${breakpoint}size`]};
    font-family: ${props.font};
    font-style: ${props.italic ? 'italic' : undefined};
    font-weight: ${fontWeightToCss[props.weight || 'default']};

    text-align: ${props.textAlign};
    line-height: ${props.lineHeight};
`;
