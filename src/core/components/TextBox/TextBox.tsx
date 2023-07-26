import type {PropsWithChildren} from 'react';

import {textBoxCss} from './textBoxCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {BoxProps} from '../Box/Box';
import type {MakeBreakpoints, WithBreakpoint} from '../../utils/types/break';
import type {CSSFont, CSSColor, CSSFontSize, CSSFontWeight, WithTheme} from '../../utils/types/theme';

type BaseProps = {
    font?: WithTheme<CSSFont>;
    size?: WithBreakpoint<CSSFontSize>;
    color?: WithTheme<CSSColor>;
    italic?: boolean;
    weight?: WithTheme<CSSFontWeight>;
    textAlign?: 'start' | 'center' | 'end';
    lineHeight?: number;
};

export type TextBoxProps = BoxProps & MakeBreakpoints<BaseProps>;

const styledDiv = createStyledWithBreakpoints(textBoxCss);

export const TextBox = ({el, style, className, children, ...props}: PropsWithChildren<TextBoxProps>) => {
    const Element = el ? styledDiv.withComponent(el) : styledDiv;
    return (
        <Element style={style!} className={className} {...props}>
            {children}
        </Element>
    );
};
