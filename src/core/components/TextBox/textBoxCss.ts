import {css} from '@emotion/react';

import {boxCss} from '../Box/boxCss';
import {themeProp, fontWeightToCss} from '../../types/theme';
import type {Breakpoints} from '../../types/break';
import type {TextBoxProps} from './TextBox';

export const textBoxCss = (props: TextBoxProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    ${boxCss(props, breakpoint)}

    color: ${themeProp(props.color)};
    font-size: ${props[`${breakpoint}size`]};
    font-family: ${props.font};
    font-weight: ${fontWeightToCss[props.weight || 'default']};

    line-height: ${props.lineHeight};
`;
