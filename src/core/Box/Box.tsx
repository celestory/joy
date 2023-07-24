import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {useMemo} from 'react';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';

import {boxCss} from './boxCss';
import {breakpoints} from '../types/break';
import type {PropsWithStyle} from '../types/utilities';
import type {CSSSize, CSSMargin, CSSPadding, CSSOverflow} from '../types/theme';
import type {Breakpoints, WithBreakpoint, MakeBreakpoints} from '../types/break';

type BaseProps = {
    el?: keyof JSX.IntrinsicElements;
    display?: 'initial' | 'none';
    overflow?: CSSOverflow;
    //
    width?: WithBreakpoint<CSSSize>;
    minWidth?: WithBreakpoint<CSSSize>;
    maxWidth?: WithBreakpoint<CSSSize>;
    //
    minHeight?: WithBreakpoint<CSSSize>;
    //
    margin?: WithBreakpoint<CSSMargin>;
    padding?: WithBreakpoint<CSSPadding>;
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

const styledBoxOptions: StyledOptions<BoxProps> = {
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        ![
            'el',
            'hidden',
            'overflow',
            'width',
            'minWidth',
            'maxWidth',
            'height',
            'minHeight',
            'maxHeight',
            'item',
            'gap',
            'align',
            'direction',
            'distribute',
            'area',
        ].includes(prop),
};
const styledBox = styled('div', styledBoxOptions)<BoxProps>``;

export const Box = ({el, style, className, children, ...props}: PropsWithStyle<BoxProps>) => {
    const boxClassName = useMemo(() => {
        return css`
            ${boxCss(props)}
            ${Object.entries(breakpoints).map(([prefix, width]) => {
                return css`
                    @media (min-width: ${width}) {
                        ${boxCss(props, `${prefix as Breakpoints}-`)}
                    }
                `;
            })};
        `;
    }, [props]);

    const Element = el ? styledBox.withComponent(el) : styledBox;
    return (
        <Element style={style!} className={`${boxClassName}${className || ''}`} {...props}>
            {children}
        </Element>
    );
};
