import styled from '@emotion/styled';
import {forwardRef, memo} from 'react';
import type {PropsWithChildren} from 'react';

import {Flex} from '../Flex/Flex';
import {surfaceCss} from '../../utils/surfaceCss';
import type {FlexProps} from '../Flex/Flex';
import type {CSSBorder, CSSColor, CSSRadius, CSSShadow, WithTheme} from '../../utils/types/theme';

export type CardProps = {
    zIndex?: number;
    bg?: WithTheme<CSSColor>;
    border?: WithTheme<CSSBorder>;
    radius?: WithTheme<CSSRadius>;
    shadow?: WithTheme<CSSShadow>;
} & FlexProps;

const Element = styled(Flex)<CardProps>`
    z-index: ${props => props.zIndex};
    /* FIXME: try to remove spread */
    ${props => surfaceCss({...props}, 'card')}
` as any;

export const Card = memo(
    forwardRef<HTMLElement, PropsWithChildren<CardProps>>(({el, style, className, children, ...props}, ref) => {
        return (
            <Element {...props} as={el} ref={ref} style={style!} className={className}>
                {children}
            </Element>
        );
    }),
);
