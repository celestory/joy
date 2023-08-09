import {css} from '@emotion/react';

import {boxCss} from '../Box/boxCss';
import type {FlexProps} from './Flex';
import type {Breakpoints} from '../../utils/types/break';

const directionToCss = {
    x: 'row',
    y: 'column',
    //
    default: undefined,
};
export type FlexDirection = keyof Omit<typeof directionToCss, 'default'>;

const alignToCss = {
    end: 'flex-end',
    start: 'flex-start',
    center: 'center',
    stretch: 'stretch',
    //
    default: undefined,
};
export type FlexAlign = keyof Omit<typeof alignToCss, 'default'>;

const distributeToCss = {
    end: 'flex-end',
    start: 'flex-start',
    center: 'center',
    around: 'space-around',
    evenly: 'space-evenly',
    between: 'space-between',
    //
    default: undefined,
};
export type FlexDistribute = keyof Omit<typeof distributeToCss, 'default'>;

export const flexCss = (props: FlexProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    ${boxCss(props, breakpoint)}

    display: ${props[`${breakpoint}hidden`] === true ? 'none' : 'flex'};
    flex-direction: ${directionToCss[props[`${breakpoint}direction`] || 'default']};
    flex-wrap: ${props.wrap ? 'wrap' : undefined};
    gap: ${props[`${breakpoint}gap`]};
    align-items: ${alignToCss[props[`${breakpoint}align`] || 'default']};
    justify-content: ${distributeToCss[props[`${breakpoint}distribute`] || 'default']};
`;
