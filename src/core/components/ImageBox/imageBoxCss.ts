import {css} from '@emotion/react';

import {boxCss} from '../Box/boxCss';
import {themeProp} from '../../utils/types/theme';
import type {Breakpoints} from '../../utils/types/break';
import type {ImageBoxProps} from './ImageBox';

export const imageBoxCss = (props: ImageBoxProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    ${boxCss(props, breakpoint)}

    object-fit: ${props.fit};
    border-radius: ${themeProp(props[`${breakpoint}radius`])};
`;
