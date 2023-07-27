import {css} from '@emotion/react';

import {textSpanCss} from '../TextSpan/textSpanCss';
import type {Breakpoints} from '../../utils/types/break';
import type {TextLinkProps} from './TextLink';

export const textLinkCss = (props: TextLinkProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    ${textSpanCss(props, breakpoint)}
`;
