import {css} from '@emotion/react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';

import {textBoxCss} from './textBoxCss';
import {breakpoints} from '../../types/break';
import type {BoxProps} from '../Box/Box';
import type {PropsWithStyle} from '../../types/utilities';
import type {Breakpoints, MakeBreakpoints, WithBreakpoint} from '../../types/break';
import type {CSSFont, CSSColor, CSSFontSize, CSSFontWeight, WithTheme} from '../../types/theme';

type BaseProps = {
    font?: WithTheme<CSSFont>;
    size?: WithBreakpoint<CSSFontSize>;
    color?: WithTheme<CSSColor>;
    weight?: WithTheme<CSSFontWeight>;
    lineHeight?: WithBreakpoint<number>;
};

export type TextBoxProps = BoxProps & MakeBreakpoints<BaseProps>;

const options: StyledOptions<BoxProps> = {
    shouldForwardProp: prop => isPropValid(prop) && !['font', 'size', 'color', 'lineHeight'].includes(prop),
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

export const TextBox = ({el, style, className, children, ...props}: PropsWithStyle<TextBoxProps>) => {
    const Element = el ? styledDiv.withComponent(el) : styledDiv;
    return (
        <Element style={style!} className={className} {...props}>
            {children}
        </Element>
    );
};
