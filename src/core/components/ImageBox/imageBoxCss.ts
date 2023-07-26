import {css} from '@emotion/react';

import {boxCss} from '../Box/boxCss';
import type {Breakpoints} from '../../types/break';
import type {ImageBoxProps} from './ImageBox';
import {themeProp} from '../../types/theme';

export const imageBoxCss = (props: ImageBoxProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    ${boxCss(props, breakpoint)}

    object-fit: ${props.fit};
    border-radius: ${themeProp(props[`${breakpoint}radius`])};
`;
