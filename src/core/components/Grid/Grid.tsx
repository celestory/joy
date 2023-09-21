import {memo, type PropsWithChildren} from 'react';

import {gridCss} from './gridCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {CSSGap} from '../../utils/types/theme';
import type {BoxProps} from '../Box/Box';
import type {MakeBreakpoints, WithBreakpoint} from '../../utils/types/break';

interface BaseProps {
    gap?: WithBreakpoint<CSSGap | `${CSSGap} ${CSSGap}`>;
    fitColumns?: boolean;
    areas?: WithBreakpoint<string>; // FIXME: better typing?
}

export type GridProps = BoxProps & MakeBreakpoints<BaseProps>;

const Element = createStyledWithBreakpoints(gridCss);

export const Grid = memo(({el, style, className, children, ...props}: PropsWithChildren<GridProps>) => {
    return (
        <Element {...props} as={el} style={style!} className={className}>
            {children}
        </Element>
    );
});
