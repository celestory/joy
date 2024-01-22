import {memo, type PropsWithChildren} from 'react';

import {autoGridCss} from './autoGridCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {BoxProps} from '../Box/Box';
import type {FlexAlign} from '../Flex/flexCss';
import type {MakeBreakpoints, WithBreakpoint} from '../../utils/types/break';

interface BaseProps {
    gap?: WithBreakpoint<`${number}rem`>;
    mode?: 'fill' | 'fit';
    align?: WithBreakpoint<FlexAlign>;
    minColumn?: `${number}rem`;
}

export type AutoGridProps = BoxProps & MakeBreakpoints<BaseProps>;

const Element = createStyledWithBreakpoints(autoGridCss);

export const AutoGrid = memo(({el, style, className, children, ...props}: PropsWithChildren<AutoGridProps>) => {
    return (
        <Element {...props} el={el} style={style!} className={className}>
            {children}
        </Element>
    );
});
