import {css} from '@emotion/react';

import {boxCss} from '../Box/boxCss';
import type {GridProps} from './Grid';
import type {Breakpoints} from '../../utils/types/break';

export const gridCss = (props: GridProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    ${boxCss(props, breakpoint)}

    display: ${props[`${breakpoint}hidden`] ? 'none' : 'grid'};
    gap: ${props[`${breakpoint}gap`]};
    grid-auto-columns: ${props.fitColumns ? 'min-content' : undefined};
    grid-template-areas: ${props[`${breakpoint}areas`]};
`;
