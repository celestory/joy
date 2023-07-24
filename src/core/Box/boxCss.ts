import {css} from '@emotion/react';

import type {Breakpoints} from '../types/break';
import type {BoxProps, BoxFlexItemProps, BoxGridItemProps} from './Box';

export const boxCss = (props: BoxProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    display: ${props[`${breakpoint}display`]};
    overflow: ${props.overflow};

    width: ${props[`${breakpoint}width`]};
    min-width: ${props[`${breakpoint}minWidth`]};
    max-width: ${props[`${breakpoint}maxWidth`]};

    min-height: ${props[`${breakpoint}minHeight`]};

    margin: ${props[`${breakpoint}margin`]};
    padding: ${props[`${breakpoint}padding`]};

    ${props.item == 'flex' ? boxFlexItemCss(props) : ''}
    ${props.item == 'grid' ? boxGridItemCss(props) : ''}
`;

const boxFlexItemCss = (props: BoxFlexItemProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    flex-grow: ${props[`${breakpoint}grow`] ? 1 : undefined};
    flex-basis: ${props[`${breakpoint}basis`] ? 1 : undefined};
    flex-shrink: ${props[`${breakpoint}shrink`] ? 1 : 0};
`;

const boxGridItemCss = (props: BoxGridItemProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    grid-area: ${props[`${breakpoint}area`]};
`;
