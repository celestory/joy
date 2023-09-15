import {css} from '@emotion/react';

import {boxCss} from '../../Box/boxCss';
import {themeConst} from '../../../utils/types/theme';
import {surfaceCss} from '../../../utils/surfaceCss';
import type {SelectProps} from './Select';
import type {Breakpoints} from '../../../utils/types/break';

export const selectCss = (props: SelectProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    padding: 0.8em calc(0.8em + 0.8rem) 0.8em 0.8em;

    appearance: none;

    ${boxCss(props, breakpoint)}

    cursor: pointer;
    outline: none;

    background: url('data:image/svg+xml;utf8,<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="1" width="1.41421" height="7.07104" rx="0.707104" transform="rotate(-45 0 1)" fill="gray"/><rect x="9.00003" y="2.28882e-05" width="1.41421" height="7.07104" rx="0.707104" transform="rotate(45 9.00003 2.28882e-05)" fill="gray"/></svg>')
        calc(100% - 0.5rem) 50% no-repeat;
    ${surfaceCss({}, 'input')}

    color: ${themeConst('theme:input.fg')};

    font: ${themeConst('theme:fonts.ui')};
    font-size: ${props[`${breakpoint}size`] || '0.85rem'};

    transition: ${themeConst('theme:input.transition')} all;

    &:hover {
        ${surfaceCss({}, 'input._hover')}
    }
`;

/* 💩 */
/* &:focus-visible {
        border: ${themeConst('theme:input._focus.border')};
        background: ${themeConst('theme:input._focus.bg')};
        border-radius: ${themeConst('theme:input._focus.radius')};
    } */
