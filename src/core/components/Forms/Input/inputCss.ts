import {css} from '@emotion/react';

import {boxCss} from '../../Box/boxCss';
import {themeProp} from '../../../utils/types/theme';
import type {InputProps} from './Input';
import type {Breakpoints} from '../../../utils/types/break';

export const inputCss = (props: InputProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    padding: 0.8em;

    ${boxCss(props, breakpoint)}

    outline: none;

    border: ${themeProp('theme:input.border')};
    background: ${themeProp('theme:input.background')};
    border-radius: ${themeProp('theme:input.radius')};

    color: ${themeProp('theme:input.color', 'theme:foreground')};
    font-size: ${props[`${breakpoint}size`]};
    font-family: ${themeProp('theme:mainFont')};

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
