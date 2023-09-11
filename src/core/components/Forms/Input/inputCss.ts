import {css} from '@emotion/react';
import styled from '@emotion/styled';

import {Box} from '../../Box/Box';
import {boxCss} from '../../Box/boxCss';
import {themeConst} from '../../../utils/types/theme';
import {surfaceCss} from '../../../utils/surfaceCss';
import type {InputProps} from './Input';
import type {Breakpoints} from '../../../utils/types/break';

// TODO: handle placeholder

export const inputCss = (props: InputProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    padding: 0.8em;
    &[type='search'] {
        padding-left: 2.6em;
        width: 100%;
        height: 100%;
    }

    outline: none;

    ${boxCss(props, breakpoint)}
    ${surfaceCss({}, 'input')}

    font: ${themeConst('theme:fonts.ui')};
    color: ${themeConst('theme:input.fg')};
    font-size: ${props[`${breakpoint}size`] || '0.8rem'};

    transition: ${themeConst('theme:input.transition')} all;

    &:hover {
        ${surfaceCss({}, 'input._hover')}
    }
    &:focus {
        ${surfaceCss({}, 'input._focus')}
    }
`;

export const InputWrapper = styled(Box)`
    position: relative;
    display: flex;
    align-items: center;
    svg {
        position: absolute;
        left: 0.8em;
        height: calc(100% - 1.6em);
        [fill='black'] {
            fill: ${themeConst('theme:colors.dimmed')};
        }
        [stroke='black'] {
            stroke: ${themeConst('theme:colors.dimmed')};
        }
    }
`;
