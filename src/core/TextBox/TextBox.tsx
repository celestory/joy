import {css} from '@emotion/react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';

import {textBoxCss} from './textBoxCss';
import {breakpoints} from '../types/break';
import type {BoxProps} from '../Box/Box';
import type {PropsWithStyle} from '../types/utilities';
import type {CSSColor, CSSFontSize} from '../types/theme';
import type {Breakpoints, MakeBreakpoints, WithBreakpoint} from '../types/break';

type BaseProps = {
    size?: WithBreakpoint<CSSFontSize>;
    color?: CSSColor;
};

export type TextBoxProps = BoxProps & MakeBreakpoints<BaseProps>;

const options: StyledOptions<BoxProps> = {
    shouldForwardProp: prop => isPropValid(prop) && !['size', 'color'].includes(prop),
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
