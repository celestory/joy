import {css} from '@emotion/react';

import {boxCss} from '../../Box/boxCss';
import {surfaceCss} from '../../../utils/surfaceCss';
import {themeConst, themeProp} from '../../../utils/types/theme';
import type {ButtonProps} from './Button';
import type {Breakpoints} from '../../../utils/types/break';

export const buttonCss = (props: ButtonProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    display: flex;
    place-items: center;
    justify-content: center;
    gap: 0.6em;
    padding: 0.8em 1em;

    ${boxCss(props, breakpoint)}

    cursor: pointer;
    outline: none;
    text-decoration: none;

    font: ${themeConst('theme:fonts.button')};
    font-size: ${props[`${breakpoint}size`]};

    color: ${themeProp(props.fg, themeConst('theme:button.fg'))};
    opacity: ${themeProp(props.opacity, themeConst('theme:button.opacity'))};
    ${surfaceCss({bg: props.bg}, 'button')}
    scale: ${themeConst('theme:button.scale')};
    rotate: ${themeConst('theme:button.rotate')};
    translate: ${themeConst('theme:button.translate')};

    transition: ${themeConst('theme:button.transition')} all;

    &:hover {
        color: ${themeProp(props.fg, themeConst('theme:button._hover.fg'))};
        opacity: ${themeProp(props.opacity, themeConst('theme:button._hover.opacity'))};
        ${surfaceCss({bg: props.bg}, 'button._hover')}
        scale: ${themeConst('theme:button._hover.scale')};
        rotate: ${themeConst('theme:button._hover.rotate')};
        translate: ${themeConst('theme:button._hover.translate')};
    }

    &:active,
    &:focus-visible {
        color: ${themeProp(props.fg, themeConst('theme:button._focus.fg'))};
        opacity: ${themeProp(props.opacity, themeConst('theme:button._focus.opacity'))};
        ${surfaceCss({bg: props.bg}, 'button._focus')}
        scale: ${themeConst('theme:button._focus.scale')};
        rotate: ${themeConst('theme:button._focus.rotate')};
        translate: ${themeConst('theme:button._focus.translate')};
    }

    &:disabled {
        cursor: default;
        color: ${themeProp(props.fg, themeConst('theme:button._disabled.fg'))};
        opacity: ${themeProp(props.opacity, themeConst('theme:button._disabled.opacity'))};
        ${surfaceCss({bg: props.bg}, 'button._disabled')}
        scale: ${themeConst('theme:button._disabled.scale')};
        rotate: ${themeConst('theme:button._disabled.rotate')};
        translate: ${themeConst('theme:button._disabled.translate')};
    }
`;
