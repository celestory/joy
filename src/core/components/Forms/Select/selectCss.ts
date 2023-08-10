import {css} from '@emotion/react';

import {boxCss} from '../../Box/boxCss';
import {themeProp} from '../../../utils/types/theme';
import {surfaceCss} from '../../../utils/surfaceCss';
import type {SelectProps} from './Select';
import type {Breakpoints} from '../../../utils/types/break';

export const selectCss = (props: SelectProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    padding: 0.8em;

    ${boxCss(props, breakpoint)}

    cursor: pointer;
    outline: none;

    ${surfaceCss({}, 'input')}

    color: ${themeProp('theme:input.color', 'theme:foreground')};

    font: ${themeProp('theme:font.ui')};
    font-size: ${props[`${breakpoint}size`]};

    transition: ${themeProp('theme:input.transition')} all;

    &:hover {
        ${surfaceCss({}, 'input.hover')}
    }

    /* 💩 */
    /* &:focus-visible {
        border: ${themeProp('theme:input.focus.border')};
        background: ${themeProp('theme:input.focus.background')};
        border-radius: ${themeProp('theme:input.focus.radius')};
    } */
`;
