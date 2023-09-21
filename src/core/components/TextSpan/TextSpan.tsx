import type {CSSProperties, PropsWithChildren} from 'react';

import {textSpanCss} from './textSpanCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {MakeBreakpoints, WithBreakpoint} from '../../utils/types/break';
import type {CSSFont, CSSColor, CSSFontSize, CSSFontWeight, WithTheme} from '../../utils/types/theme';

export interface TextProps {
    fg?: WithTheme<CSSColor>;
    font?: WithTheme<CSSFont>;
    size?: WithBreakpoint<CSSFontSize>;
    italic?: boolean;
    weight?: WithTheme<CSSFontWeight>;
    textAlign?: 'start' | 'center' | 'end';
    lineHeight?: number;
    letterSpacing?: `${number}px`;
}

interface BaseProps extends TextProps {
    el?: 'span' | 'strong' | 'em';
    style?: CSSProperties;
    className?: string;
}

export type TextSpanProps = MakeBreakpoints<BaseProps>;

const Element = createStyledWithBreakpoints(textSpanCss);

export const TextSpan = ({el = 'span', style, className, children, ...props}: PropsWithChildren<TextSpanProps>) => {
    return (
        <Element {...props} as={el} style={style!} className={className}>
            {children}
        </Element>
    );
};
