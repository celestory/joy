import {css} from '@emotion/react';

import {boxCss} from '../Box/boxCss';
import {fontWeightToCss, themeProp} from '../../utils/types/theme';
import type {Breakpoints} from '../../utils/types/break';
import type {TextBoxProps} from './TextBox';

export const textBoxCss = (props: TextBoxProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    ${boxCss(props, breakpoint)}

    color: ${themeProp(props.color)};

    font: ${themeProp(props.font, 'theme:font.ui')};
    font-size: ${props[`${breakpoint}size`]};
    font-style: ${props.italic ? 'italic' : undefined};
    font-weight: ${fontWeightToCss[props.weight || 'default']};

    text-align: ${props.textAlign};
    line-height: ${props.lineHeight};
`;
