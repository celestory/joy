import type {PropsWithChildren} from 'react';

import {gridCss} from './gridCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {CSSGap} from '../../utils/types/theme';
import type {BoxProps} from '../Box/Box';
import type {MakeBreakpoints, WithBreakpoint} from '../../utils/types/break';

type BaseProps = {
    gap?: WithBreakpoint<CSSGap | `${CSSGap} ${CSSGap}`>;
    fitColumns?: boolean;
    areas?: WithBreakpoint<string>; // FIXME: better typing?
};

export type GridProps = BoxProps & MakeBreakpoints<BaseProps>;

const styledDiv = createStyledWithBreakpoints(gridCss);

export const Grid = ({el, style, className, children, ...props}: PropsWithChildren<GridProps>) => {
    const Element = el ? styledDiv.withComponent(el) : styledDiv;
    return (
        <Element style={style!} className={className} {...props}>
            {children}
        </Element>
    );
};
