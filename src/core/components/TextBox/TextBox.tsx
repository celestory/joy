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
        <Element style={style!} className={className} {...props}>
            {children}
        </Element>
    );
};
