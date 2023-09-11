import type {ButtonHTMLAttributes, LinkHTMLAttributes} from 'react';

import {buttonCss} from './buttonCss';
import {createStyledWithBreakpoints} from '../../../utils/breakpoints';
import type {BoxProps} from '../../Box/Box';
import type {OmitStrict} from '../../../utils/types/utils';
import type {MakeBreakpoints, WithBreakpoint} from '../../../utils/types/break';
import type {CSSColor, CSSFontSize, WithTheme} from '../../../utils/types/theme';

type BaseProps = {
    fg?: WithTheme<CSSColor>;
    bg?: WithTheme<CSSColor>;
    size?: WithBreakpoint<CSSFontSize>;
    opacity?: WithTheme<`${number}`>;
};

export type ButtonProps = OmitStrict<BoxProps, 'el'> & MakeBreakpoints<BaseProps> & ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = createStyledWithBreakpoints(buttonCss, 'button');

export const Button = ({style, className, ...props}: ButtonProps) => {
    return <StyledButton {...props} style={style!} className={className} />;
};

export type LinkButtonProps = OmitStrict<BoxProps, 'el'> & MakeBreakpoints<BaseProps> & LinkHTMLAttributes<HTMLAnchorElement>;

const StyledLinkButton = createStyledWithBreakpoints(buttonCss, 'a');

export const LinkButton = ({style, className, ...props}: LinkButtonProps) => {
    return <StyledLinkButton {...props} style={style!} className={className} />;
};
