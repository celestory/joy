import {css} from '@emotion/react';

import {boxCss} from '../../Box/boxCss';
import {themeProp} from '../../../utils/types/theme';
import type {ButtonProps} from './Button';
import type {Breakpoints} from '../../../utils/types/break';

export const buttonCss = (props: ButtonProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    padding: 0.8em 1em;

    ${boxCss(props, breakpoint)}

    cursor: pointer;

    border: ${themeProp('theme:button.border')};
    background: ${themeProp('theme:button.background')};
    border-radius: ${themeProp('theme:button.radius')};

    font-family: ${themeProp('theme:mainFont')};
    font-size: ${props[`${breakpoint}size`]};
    font-weight: bold;
    color: ${themeProp('theme:button.color', 'theme:foreground')};
    outline: none;

    transition: ${themeProp('theme:button.transition')} all;

    &:hover {
        border: ${themeProp('theme:button.hover.border')};
        background: ${themeProp('theme:button.hover.background')};
        border-radius: ${themeProp('theme:button.hover.radius')};
    }

    &:active,
    &:focus-visible {
        border: ${themeProp('theme:button.focus.border')};
        background: ${themeProp('theme:button.focus.background')};
        border-radius: ${themeProp('theme:button.focus.radius')};
    }
`;
