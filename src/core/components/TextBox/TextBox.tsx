import {memo, type PropsWithChildren} from 'react';

import {textBoxCss} from './textBoxCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {BoxProps} from '../Box/Box';
import type {TextProps} from '../TextSpan/TextSpan';
import type {MakeBreakpoints} from '../../utils/types/break';

export type TextBoxProps = BoxProps & MakeBreakpoints<TextProps>;

const Element = createStyledWithBreakpoints(textBoxCss);

export const TextBox = memo(({el, style, className, children, ...props}: PropsWithChildren<TextBoxProps>) => {
    return (
        <Element {...props} as={el} style={style!} className={className}>
            {children}
        </Element>
    );
});
