import type {CSSProperties, PropsWithChildren} from 'react';

import {boxCss} from './boxCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {WithBreakpoint, MakeBreakpoints} from '../../utils/types/break';
import type {CSSWidth, CSSHeight, CSSMargin, CSSPadding, CSSOverflow} from '../../utils/types/theme';

interface BaseProps {
    role?: string;
    style?: CSSProperties;
    className?: string;
    //
    el?: keyof JSX.IntrinsicElements;
    hidden?: WithBreakpoint<boolean>;
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
}

interface FlexItemProps {
    item?: 'flex';
    //
    grow?: WithBreakpoint<boolean>;
    basis?: WithBreakpoint<'0' | `${number}rem` | `${number}%`>;
    shrink?: WithBreakpoint<boolean>;
}

interface GridItemProps {
    item?: 'grid';
    //
    area?: WithBreakpoint<string>;
}

export type BoxFlexItemProps = MakeBreakpoints<FlexItemProps>;
export type BoxGridItemProps = MakeBreakpoints<GridItemProps>;
export type BoxProps = MakeBreakpoints<BaseProps> & (BoxFlexItemProps | BoxGridItemProps);

const styledDiv = createStyledWithBreakpoints(boxCss);

export const Box = ({el, style, className, children, ...props}: PropsWithChildren<BoxProps>) => {
    const Element = el ? styledDiv.withComponent(el) : styledDiv;
    return (
        <Element style={style!} className={className} {...props}>
            {children}
        </Element>
    );
};
