import type {CSSProperties, PropsWithChildren} from 'react';

import {textSpanCss} from './textSpanCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {MakeBreakpoints, WithBreakpoint} from '../../utils/types/break';
import type {CSSFont, CSSColor, CSSFontSize, CSSFontWeight, WithTheme} from '../../utils/types/theme';

type BaseProps = {
    style?: CSSProperties;
    className?: string;
    //
    el?: 'span' | 'strong' | 'em';
    font?: WithTheme<CSSFont>;
    size?: WithBreakpoint<CSSFontSize>;
    color?: WithTheme<CSSColor>;
    italic?: boolean;
    weight?: WithTheme<CSSFontWeight>;
    textAlign?: 'start' | 'center' | 'end';
    lineHeight?: number;
};

export type TextSpanProps = MakeBreakpoints<BaseProps>;

const styledDiv = createStyledWithBreakpoints(textSpanCss);

export const TextSpan = ({el = 'span', style, className, children, ...props}: PropsWithChildren<TextSpanProps>) => {
    const Element = el ? styledDiv.withComponent(el) : styledDiv;
    return (
        <Element style={style!} className={className} {...props}>
            {children}
        </Element>
    );
};
