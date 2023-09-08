import styled from '@emotion/styled';
import {Card} from '../Card/Card';
import {themeConst} from '../../utils/types/theme';

export const ProgressBar = styled(Card)<{value: number; color: string; animated?: boolean}>`
    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: ${props => (1 - props.value) * 100}%;
        bottom: 0;
        border-radius: ${themeConst('theme:card.radius')};
        transition: ${props => (props.animated ? `0.5s right` : undefined)};

        background-color: ${props => props.color};
    }
`;
