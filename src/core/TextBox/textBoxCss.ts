import {css} from '@emotion/react';

import {boxCss} from '../Box/boxCss';
import type {Breakpoints} from '../types/break';
import type {TextBoxProps} from './TextBox';

export const textBoxCss = (props: TextBoxProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    ${boxCss(props, breakpoint)}

    color: ${props.color};
    font-size: ${props[`${breakpoint}size`]};
`;
