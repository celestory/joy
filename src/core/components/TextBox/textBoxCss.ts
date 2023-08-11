import {css} from '@emotion/react';

import {boxCss} from '../Box/boxCss';
import {textSpanCss} from '../TextSpan/textSpanCss';
import type {Breakpoints} from '../../utils/types/break';
import type {TextBoxProps} from './TextBox';
import type {TextSpanProps} from '../TextSpan/TextSpan';

export const textBoxCss = (props: TextBoxProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    ${boxCss(props, breakpoint)}
    ${textSpanCss(props as TextSpanProps, breakpoint)}
`;
