import type {PropsWithChildren} from 'react';

import {textBoxCss} from './textBoxCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {BoxProps} from '../Box/Box';
import type {TextProps} from '../TextSpan/TextSpan';
import type {MakeBreakpoints} from '../../utils/types/break';

export type TextBoxProps = BoxProps & MakeBreakpoints<TextProps>;

const styledDiv = createStyledWithBreakpoints(textBoxCss);

export const TextBox = ({el, style, className, children, ...props}: PropsWithChildren<TextBoxProps>) => {
    const Element = el ? styledDiv.withComponent(el) : styledDiv;
    return (
        <Element {...props} style={style!} className={className}>
            {children}
        </Element>
    );
};
