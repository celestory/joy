import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {useMemo} from 'react';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';

import {breakpoints} from './types/break';
import type {PropsWithStyle} from './types/utilities';
import type {CSSSize, CSSMargin, CSSPadding, CSSOverflow} from './types/theme';
import type {Breakpoints, WithBreakpoint, MakeBreakpoints} from './types/break';

type CSSAlign = keyof typeof alignToCss;
type CSSDirection = keyof typeof directionToCss;
type CSSDistribute = keyof typeof distributeToCss;

const alignToCss = {
    end: 'flex-end',
    start: 'flex-start',
    center: 'center',
    stretch: 'stretch',
    default: undefined,
};
const directionToCss = {
    x: 'row',
    y: 'column',
    default: undefined,
};
const distributeToCss = {
    end: 'flex-end',
    start: 'flex-start',
    center: 'center',
    around: 'space-around',
    evenly: 'space-evenly',
    between: 'space-between',
    default: undefined,
};

type BaseProps = {
    el?: keyof JSX.IntrinsicElements;
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
type ItemProps = FlexItemProps | GridItemProps;

type FlexItemProps = {
    item?: 'flex';
    //
    gap?: WithBreakpoint<CSSPadding>;
    align?: WithBreakpoint<CSSAlign>;
    direction?: WithBreakpoint<CSSDirection>;
    distribute?: WithBreakpoint<CSSDistribute>;
};

type GridItemProps = {
    item?: 'grid';
    //
    area?: string;
};

type BoxProps = MakeBreakpoints<BaseProps> & MakeBreakpoints<ItemProps>;

const styledBoxOptions: StyledOptions<BoxProps> = {
    shouldForwardProp: prop =>
        isPropValid(prop) && !['el', 'hidden', 'overflow', 'width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'maxHeight'].includes(prop),
};
const styledBox = styled('div', styledBoxOptions)<BoxProps>``;

const boxCss = (props: BoxProps, breakpoint: `${Breakpoints}-` | '' = '') => css`
    width: ${props[`${breakpoint}width`]};
`;

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
