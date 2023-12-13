import {forwardRef, memo, type PropsWithChildren} from 'react';

import {textBoxCss} from './textBoxCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {BoxProps} from '../Box/Box';
import type {TextProps} from '../TextSpan/TextSpan';
import type {MakeBreakpoints} from '../../utils/types/break';

export type TextBoxProps = BoxProps & MakeBreakpoints<TextProps>;

const Element = createStyledWithBreakpoints(textBoxCss);

export const TextBox = memo(
    forwardRef<HTMLElement, PropsWithChildren<TextBoxProps>>(({el, style, className, children, ...props}, ref) => {
        return (
            <Element {...props} as={el} ref={ref} style={style!} className={className}>
                {children}
            </Element>
        );
    }),
);
