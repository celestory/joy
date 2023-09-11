import styled from '@emotion/styled';
import {Card} from '../Card/Card';
import {themeConst, themeProp} from '../../utils/types/theme';
import type {CSSColor, WithTheme} from '../../utils/types/theme';

export const ProgressBar = styled(Card)<{value: number; fg?: WithTheme<CSSColor>; animated?: boolean}>`
    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: ${props => (1 - props.value) * 100}%;
        bottom: 0;
        transition: ${props => (props.animated ? `0.5s right` : undefined)};
        border-radius: ${props => themeProp(props.radius, themeConst('theme:card.radius'))};
        background-color: ${props => themeProp(props.fg, themeConst('theme:colors.accent'))};
    }
`;
