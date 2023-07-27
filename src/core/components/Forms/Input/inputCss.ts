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

    font-family: ${themeProp('theme:mainFont')};
    color: ${themeProp('theme:input.color', 'theme:foreground')};
    outline: none;

    transition: ${themeProp('theme:input.transition')} all;

    &:hover {
        border: ${themeProp('theme:input.hover.border')};
        background: ${themeProp('theme:input.hover.background')};
        border-radius: ${themeProp('theme:input.hover.radius')};
    }

    &:focus {
        border: ${themeProp('theme:input.focus.border')};
        background: ${themeProp('theme:input.focus.background')};
        border-radius: ${themeProp('theme:input.focus.radius')};
    }
`;
