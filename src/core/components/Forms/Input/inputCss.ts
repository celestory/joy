import {css} from '@emotion/react';

import {boxCss} from '../../Box/boxCss';
import {themeProp} from '../../../utils/types/theme';
import type {InputProps} from './Input';
import type {Breakpoints} from '../../../utils/types/break';

export const inputCss = (props: InputProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    ${boxCss(props, breakpoint)}

    border: ${themeProp('theme:input.border')};
    background: ${themeProp('theme:input.background')};
    border-radius: ${themeProp('theme:input.radius')};

    // FIXME: Jerem :)
    color: var(--joy-red);
    outline: 2px solid transparent;
    :focus {
        outline: 2px solid var(--joy-red);
    }

    &:hover {
        border: ${themeProp('theme:input.hover.border')};
        background: ${themeProp('theme:input.hover.background')};
        border-radius: ${themeProp('theme:input.hover.radius')};
    }
`;
