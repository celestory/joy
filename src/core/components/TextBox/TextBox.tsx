import {css} from '@emotion/react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';
import type {PropsWithChildren} from 'react';

import {textBoxCss} from './textBoxCss';
import {breakpoints} from '../../types/break';
import type {BoxProps} from '../Box/Box';
import type {Breakpoints, MakeBreakpoints, WithBreakpoint} from '../../types/break';
import type {CSSFont, CSSColor, CSSFontSize, CSSFontWeight, WithTheme} from '../../types/theme';

type BaseProps = {
    font?: WithTheme<CSSFont>;
    size?: WithBreakpoint<CSSFontSize>;
    color?: WithTheme<CSSColor>;
    italic?: boolean;
    weight?: WithTheme<CSSFontWeight>;
    textAlign?: 'start' | 'center' | 'end';
    lineHeight?: number;
};

export type TextBoxProps = BoxProps & MakeBreakpoints<BaseProps>;

const options: StyledOptions<TextBoxProps> = {
    shouldForwardProp: prop => isPropValid(prop) && !['font', 'size', 'color', 'italic', 'weight', 'textAlign', 'lineHeight'].includes(prop),
};
const styledDiv = styled('div', options)<TextBoxProps>`
    ${props => textBoxCss(props)}
    ${props =>
        Object.entries(breakpoints).map(([prefix, width]) => {
            return css`
                @media (min-width: ${width}) {
                    ${textBoxCss(props, `${prefix as Breakpoints}-`)}
                }
            `;
        })}
` as any;

export const TextBox = ({el, style, className, children, ...props}: PropsWithChildren<TextBoxProps>) => {
    const Element = el ? styledDiv.withComponent(el) : styledDiv;
    return (
        <Element style={style!} className={className} {...props}>
            {children}
        </Element>
    );
};
