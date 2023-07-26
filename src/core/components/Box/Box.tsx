import {css} from '@emotion/react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';
import type {CSSProperties, PropsWithChildren} from 'react';

import {boxCss} from './boxCss';
import {breakpoints} from '../../types/break';
import type {CSSWidth, CSSHeight, CSSMargin, CSSPadding, CSSOverflow} from '../../types/theme';
import type {Breakpoints, WithBreakpoint, MakeBreakpoints} from '../../types/break';

type BaseProps = {
    style?: CSSProperties;
    className?: string;
    //
    el?: keyof JSX.IntrinsicElements;
    display?: WithBreakpoint<'initial' | 'none'>;
    overflow?: CSSOverflow;
    //
    width?: WithBreakpoint<CSSWidth>;
    minWidth?: WithBreakpoint<CSSWidth>;
    maxWidth?: WithBreakpoint<CSSWidth>;
    //
    height?: WithBreakpoint<CSSHeight>;
    minHeight?: WithBreakpoint<CSSHeight>;
    //
    margin?: WithBreakpoint<CSSMargin | `${CSSMargin} ${CSSMargin}` | `${CSSMargin} ${CSSMargin} ${CSSMargin} ${CSSMargin}`>;
    padding?: WithBreakpoint<CSSPadding | `${CSSPadding} ${CSSPadding}` | `${CSSPadding} ${CSSPadding} ${CSSPadding} ${CSSPadding}`>;
};

type FlexItemProps = {
    item?: 'flex';
    //
    grow?: WithBreakpoint<boolean>;
    basis?: WithBreakpoint<'0' | `${number}rem` | `${number}%`>;
    shrink?: WithBreakpoint<boolean>;
};

type GridItemProps = {
    item?: 'grid';
    //
    area?: WithBreakpoint<string>;
};

export type BoxFlexItemProps = MakeBreakpoints<FlexItemProps>;
export type BoxGridItemProps = MakeBreakpoints<GridItemProps>;
export type BoxProps = MakeBreakpoints<BaseProps> & (BoxFlexItemProps | BoxGridItemProps);

const options: StyledOptions<BoxProps> = {
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        !['el', 'hidden', 'overflow', 'width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'item', 'grow', 'basis', 'shrink', 'area'].includes(prop),
};
const styledDiv = styled('div', options)<BoxProps>`
    ${props => boxCss(props)}
    ${props =>
        Object.entries(breakpoints).map(([prefix, width]) => {
            return css`
                @media (min-width: ${width}) {
                    ${boxCss(props, `${prefix as Breakpoints}-`)}
                }
            `;
        })}
` as any;

export const Box = ({el, style, className, children, ...props}: PropsWithChildren<BoxProps>) => {
    const Element = el ? styledDiv.withComponent(el) : styledDiv;

    return (
        <Element style={style!} className={className} {...props}>
            {children}
        </Element>
    );
};
