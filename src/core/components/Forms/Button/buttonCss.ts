import {css} from '@emotion/react';

import {boxCss} from '../../Box/boxCss';
import {themeConst} from '../../../utils/types/theme';
import type {ButtonProps} from './Button';
import type {Breakpoints} from '../../../utils/types/break';

export const buttonCss = (props: ButtonProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    padding: 0.8em 1em;

    ${boxCss(props, breakpoint)}

    cursor: pointer;
    outline: none;
    text-decoration: none;

    font: ${themeConst('theme:font.button')};
    font-size: ${props[`${breakpoint}size`]};

    color: ${themeConst('theme:button.color', themeConst('theme:foreground'))};
    border: ${themeConst('theme:button.border')};
    box-shadow: ${themeConst('theme:button.shadow')};
    border-radius: ${themeConst('theme:button.radius')};
    background-color: ${themeConst('theme:button.background')};

    scale: ${themeConst('theme:button.scale')};
    rotate: ${themeConst('theme:button.rotate')};
    translate: ${themeConst('theme:button.translate')};

    transition: ${themeConst('theme:button.transition')} all;

    &:hover {
        color: ${themeConst('theme:button.hover.color', themeConst('theme:foreground'))};
        border: ${themeConst('theme:button.hover.border')};
        box-shadow: ${themeConst('theme:button.hover.shadow')};
        border-radius: ${themeConst('theme:button.hover.radius')};
        background-color: ${themeConst('theme:button.hover.background')};

        scale: ${themeConst('theme:button.hover.scale')};
        rotate: ${themeConst('theme:button.hover.rotate')};
        translate: ${themeConst('theme:button.hover.translate')};
    }

    &:active,
    &:focus-visible {
        color: ${themeConst('theme:button.hover.color', themeConst('theme:foreground'))};
        border: ${themeConst('theme:button.focus.border')};
        box-shadow: ${themeConst('theme:button.focus.shadow')};
        border-radius: ${themeConst('theme:button.focus.radius')};
        background-color: ${themeConst('theme:button.focus.background')};

        scale: ${themeConst('theme:button.focus.scale')};
        rotate: ${themeConst('theme:button.focus.rotate')};
        translate: ${themeConst('theme:button.focus.translate')};
    }

    &:disabled {
        cursor: default;
        color: ${themeConst('theme:button.disabled.color', themeConst('theme:foreground'))};
        border: ${themeConst('theme:button.disabled.border')};
        box-shadow: ${themeConst('theme:button.disabled.shadow')};
        border-radius: ${themeConst('theme:button.disabled.radius')};
        background-color: ${themeConst('theme:button.disabled.background')};

        scale: ${themeConst('theme:button.disabled.scale')};
        rotate: ${themeConst('theme:button.disabled.rotate')};
        translate: ${themeConst('theme:button.disabled.translate')};
    }
`;
