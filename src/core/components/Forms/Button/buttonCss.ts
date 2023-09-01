import {css} from '@emotion/react';

import {boxCss} from '../../Box/boxCss';
import {themeConst} from '../../../utils/types/theme';
import type {ButtonProps} from './Button';
import type {Breakpoints} from '../../../utils/types/break';
import {surfaceCss} from '../../../utils/surfaceCss';

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

    color: ${themeConst('theme:button.color', themeConst('theme:colors.fg'))};
    ${surfaceCss({}, 'button')}
    scale: ${themeConst('theme:button.scale')};
    rotate: ${themeConst('theme:button.rotate')};
    translate: ${themeConst('theme:button.translate')};

    transition: ${themeConst('theme:button.transition')} all;

    &:hover {
        color: ${themeConst('theme:button._hover.color', themeConst('theme:colors.fg'))};
        ${surfaceCss({}, 'button._hover')}
        scale: ${themeConst('theme:button._hover.scale')};
        rotate: ${themeConst('theme:button._hover.rotate')};
        translate: ${themeConst('theme:button._hover.translate')};
    }

    &:active,
    &:focus-visible {
        color: ${themeConst('theme:button._focus.color', themeConst('theme:colors.fg'))};
        ${surfaceCss({}, 'button._focus')}
        scale: ${themeConst('theme:button._focus.scale')};
        rotate: ${themeConst('theme:button._focus.rotate')};
        translate: ${themeConst('theme:button._focus.translate')};
    }

    &:disabled {
        cursor: default;
        color: ${themeConst('theme:button._disabled.color', themeConst('theme:colors.fg'))};

        ${surfaceCss({}, 'button._disabled')}

        scale: ${themeConst('theme:button._disabled.scale')};
        rotate: ${themeConst('theme:button._disabled.rotate')};
        translate: ${themeConst('theme:button._disabled.translate')};
    }
`;
