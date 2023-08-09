import {css} from '@emotion/react';

import {boxCss} from '../../Box/boxCss';
import {themeProp} from '../../../utils/types/theme';
import type {ButtonProps} from './Button';
import type {Breakpoints} from '../../../utils/types/break';

export const buttonCss = (props: ButtonProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    padding: 0.8em 1em;

    ${boxCss(props, breakpoint)}

    cursor: pointer;
    outline: none;
    text-decoration: none;

    font: ${themeProp('theme:font.button')};
    font-size: ${props[`${breakpoint}size`]};

    color: ${themeProp('theme:button.color', 'theme:foreground')};
    border: ${themeProp('theme:button.border')};
    border-radius: ${themeProp('theme:button.radius')};
    background-color: ${themeProp('theme:button.background')};

    scale: ${themeProp('theme:button.scale')};
    rotate: ${themeProp('theme:button.rotate')};
    translate: ${themeProp('theme:button.translate')};

    transition: ${themeProp('theme:button.transition')} all;

    &:hover {
        color: ${themeProp('theme:button.hover.color', 'theme:foreground')};
        border: ${themeProp('theme:button.hover.border')};
        border-radius: ${themeProp('theme:button.hover.radius')};
        background-color: ${themeProp('theme:button.hover.background')};

        scale: ${themeProp('theme:button.hover.scale')};
        rotate: ${themeProp('theme:button.hover.rotate')};
        translate: ${themeProp('theme:button.hover.translate')};
    }

    &:active,
    &:focus-visible {
        color: ${themeProp('theme:button.hover.color', 'theme:foreground')};
        border: ${themeProp('theme:button.focus.border')};
        border-radius: ${themeProp('theme:button.focus.radius')};
        background-color: ${themeProp('theme:button.focus.background')};

        scale: ${themeProp('theme:button.focus.scale')};
        rotate: ${themeProp('theme:button.focus.rotate')};
        translate: ${themeProp('theme:button.focus.translate')};
    }
`;
