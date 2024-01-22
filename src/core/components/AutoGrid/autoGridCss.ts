import {css} from '@emotion/react';

import {boxCss} from '../Box/boxCss';
import {alignToCss} from '../Flex/flexCss';
import type {Breakpoints} from '../../utils/types/break';
import type {AutoGridProps} from './AutoGrid';

export const autoGridCss = (props: AutoGridProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    ${boxCss(props, breakpoint)}

    display: ${props[`${breakpoint}hidden`] ? 'none' : 'grid'};
    gap: ${props[`${breakpoint}gap`]};
    align-items: ${alignToCss[props[`${breakpoint}align`] || 'default']};
    grid-template-columns: repeat(auto-${props.mode ?? 'fit'}, minmax(${props.minColumn}, 1fr));
`;
