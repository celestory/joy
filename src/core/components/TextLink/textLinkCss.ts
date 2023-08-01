import {css} from '@emotion/react';

import {textSpanCss} from '../TextSpan/textSpanCss';
import type {Breakpoints} from '../../utils/types/break';
import type {TextLinkProps} from './TextLink';

export const textLinkCss = (props: TextLinkProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    ${textSpanCss(props, breakpoint)}
    &:focus-visible {
        border-radius: 2px;
        outline: 2px solid var(--joy-blue); // 💩
    }
`;
