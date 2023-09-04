import styled from '@emotion/styled';

import {Flex} from '../Flex/Flex';
import {surfaceCss} from '../../utils/surfaceCss';
import type {CSSBorder, CSSColor, CSSRadius, CSSShadow, WithTheme} from '../../utils/types/theme';

interface CardProps {
    bg?: WithTheme<CSSColor>;
    border?: WithTheme<CSSBorder>;
    radius?: WithTheme<CSSRadius>;
    shadow?: WithTheme<CSSShadow>;
}

export const Card = styled(Flex)<CardProps>`
    ${props => surfaceCss({...props}, 'card')}
`;
