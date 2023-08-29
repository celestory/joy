import {css} from '@emotion/react';

import {boxCss} from '../../Box/boxCss';
import {themeConst} from '../../../utils/types/theme';
import {surfaceCss} from '../../../utils/surfaceCss';
import type {SelectProps} from './Select';
import type {Breakpoints} from '../../../utils/types/break';

export const selectCss = (props: SelectProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    padding: 0.8em;

    ${boxCss(props, breakpoint)}

    cursor: pointer;
    outline: none;

    ${surfaceCss({}, 'input')}

    color: ${themeConst('theme:input.color', themeConst('theme:foreground'))};

    font: ${themeConst('theme:font.ui')};
    font-size: ${props[`${breakpoint}size`]};

    transition: ${themeConst('theme:input.transition')} all;

    &:hover {
        ${surfaceCss({}, 'input._hover')}
    }
`;

/* 💩 */
/* &:focus-visible {
        border: ${themeConst('theme:input._focus.border')};
        background: ${themeConst('theme:input._focus.background')};
        border-radius: ${themeConst('theme:input._focus.radius')};
    } */
