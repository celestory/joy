import styled from '@emotion/styled';
import {forwardRef} from 'react';
import type {PropsWithChildren} from 'react';

import {Flex} from '../Flex/Flex';
import {surfaceCss} from '../../utils/surfaceCss';
import type {FlexProps} from '../Flex/Flex';
import type {CSSBorder, CSSColor, CSSRadius, CSSShadow, WithTheme} from '../../utils/types/theme';

export type CardProps = {
    bg?: WithTheme<CSSColor>;
    border?: WithTheme<CSSBorder>;
    radius?: WithTheme<CSSRadius>;
    shadow?: WithTheme<CSSShadow>;
} & FlexProps;

const styledDiv = styled(Flex)<CardProps>`
    ${props => surfaceCss({...props}, 'card')}
` as any;

export const Card = forwardRef<HTMLElement, PropsWithChildren<CardProps>>(({el, style, className, children, ...props}, ref) => {
    const Element = el ? styledDiv.withComponent(el) : styledDiv;
    return (
        <Element {...props} ref={ref} style={style!} className={className}>
            {children}
        </Element>
    );
});
