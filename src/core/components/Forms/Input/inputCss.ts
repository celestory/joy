import {css} from '@emotion/react';

import {boxCss} from '../../Box/boxCss';
import {themeProp} from '../../../utils/types/theme';
import {surfaceCss} from '../../../utils/surfaceCss';
import type {InputProps} from './Input';
import type {Breakpoints} from '../../../utils/types/break';

export const inputCss = (props: InputProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    padding: 0.8em;

    ${boxCss(props, breakpoint)}

    outline: none;

    ${surfaceCss({}, 'input')}

    color: ${themeProp('theme:input.color', 'theme:foreground')};

    font: ${themeProp('theme:font.ui')};
    font-size: ${props[`${breakpoint}size`] || '0.8rem'};

    transition: ${themeProp('theme:input.transition')} all;

    &:hover {
        ${surfaceCss({}, 'input.hover')}
    }
    &:focus {
        ${surfaceCss({}, 'input.focus')}
    }
`;
