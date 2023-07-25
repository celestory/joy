import {css} from '@emotion/react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';

import {gridCss} from './gridCss';
import {breakpoints} from '../types/break';
import type {BoxProps} from '../Box/Box';
import type {PropsWithStyle} from '../types/utilities';
import type {Breakpoints, MakeBreakpoints, WithBreakpoint} from '../types/break';

type BaseProps = {
    gap?: WithBreakpoint<`${number}rem`>;
    areas?: WithBreakpoint<string>; // FIXME: better typing?
};

export type GridProps = BoxProps & MakeBreakpoints<BaseProps>;

const options: StyledOptions<BoxProps> = {
    shouldForwardProp: prop => isPropValid(prop) && !['el', 'gap', 'areas'].includes(prop),
};
const styledDiv = styled('div', options)<GridProps>`
    ${props => gridCss(props)}
    ${props =>
        Object.entries(breakpoints).map(([prefix, width]) => {
            return css`
                @media (min-width: ${width}) {
                    ${gridCss(props, `${prefix as Breakpoints}-`)}
                }
            `;
        })}
`;

export const Grid = ({el, style, className, children, ...props}: PropsWithStyle<GridProps>) => {
    const Element = el ? styledDiv.withComponent(el) : styledDiv;
    return (
        <Element style={style!} className={className} {...props}>
            {children}
        </Element>
    );
};
