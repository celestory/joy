import styled from '@emotion/styled';

import {Flex} from '../Flex/Flex';
import {themeProp} from '../../utils/types/theme';
import type {CSSBorder, CSSColor, CSSRadius, CSSShadow} from '../../utils/types/theme';

interface CardProps {
    border?: CSSBorder;
    radius?: CSSRadius;
    shadow?: CSSShadow;
    background?: CSSColor;
}

export const Card = styled(Flex)<CardProps>`
    border: ${props => props.border ?? themeProp('theme:card.border')};
    box-shadow: ${props => props.shadow ?? themeProp('theme:card.shadow')};
    border-radius: ${props => props.radius ?? themeProp('theme:card.radius')};
    background-color: ${props => props.background ?? themeProp('theme:card.background')};
`;
