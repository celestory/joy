import type {PropsWithChildren} from 'react';

import {flexCss} from './flexCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {CSSGap} from '../../utils/types/theme';
import type {BoxProps} from '../Box/Box';
import type {FlexAlign, FlexDirection, FlexDistribute} from './flexCss';
import type {WithBreakpoint, MakeBreakpoints} from '../../utils/types/break';

type BaseProps = {
    gap?: WithBreakpoint<CSSGap>;
    wrap?: WithBreakpoint<boolean>;
    direction?: WithBreakpoint<FlexDirection>;
    align?: WithBreakpoint<FlexAlign>;
    distribute?: WithBreakpoint<FlexDistribute>;
};

export type FlexProps = BoxProps & MakeBreakpoints<BaseProps>;

const styledDiv = createStyledWithBreakpoints(flexCss);

export const Flex = ({el, style, className, children, ...props}: PropsWithChildren<FlexProps>) => {
    const Element = el ? styledDiv.withComponent(el) : styledDiv;
    return (
        <Element style={style!} className={className} {...props}>
            {children}
        </Element>
    );
};
