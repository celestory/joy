import {forwardRef, memo} from 'react';
import type {PropsWithChildren} from 'react';

import {flexCss} from './flexCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {CSSGap} from '../../utils/types/theme';
import type {BoxProps} from '../Box/Box';
import type {WithBreakpoint, MakeBreakpoints} from '../../utils/types/break';
import type {FlexAlign, FlexDirection, FlexDistribute} from './flexCss';

interface BaseProps {
    gap?: WithBreakpoint<CSSGap>;
    wrap?: WithBreakpoint<boolean>;
    direction?: WithBreakpoint<FlexDirection>;
    align?: WithBreakpoint<FlexAlign>;
    distribute?: WithBreakpoint<FlexDistribute>;
}

// FIXME: should generate all props (including parent, breakpoints, etc.)
const excludedProps = ['gap', 'wrap', 'direction', 'align', 'distribute'];

export type FlexProps = BoxProps & MakeBreakpoints<BaseProps>;

const Element = createStyledWithBreakpoints(flexCss, 'div', excludedProps);

export const Flex = memo(
    forwardRef<HTMLElement, PropsWithChildren<FlexProps>>(({el, style, className, children, ...props}, ref) => {
        return (
            <Element {...props} as={el} ref={ref} style={style!} className={className}>
                {children}
            </Element>
        );
    }),
);
