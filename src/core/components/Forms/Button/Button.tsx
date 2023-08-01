import type {ButtonHTMLAttributes, LinkHTMLAttributes} from 'react';

import {buttonCss} from './buttonCss';
import {createStyledWithBreakpoints} from '../../../utils/breakpoints';
import type {BoxProps} from '../../Box/Box';
import type {OmitStrict} from '../../../utils/types/utils';
import type {CSSFontSize} from '../../../utils/types/theme';
import type {MakeBreakpoints, WithBreakpoint} from '../../../utils/types/break';

type BaseProps = MakeBreakpoints<{size?: WithBreakpoint<CSSFontSize>}>;

export type ButtonProps = OmitStrict<BoxProps, 'el'> & BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = createStyledWithBreakpoints(buttonCss, 'button');

export const Button = ({style, className, ...props}: ButtonProps) => {
    return <StyledButton style={style!} className={className} {...props} />;
};

export type LinkButtonProps = OmitStrict<BoxProps, 'el'> & BaseProps & LinkHTMLAttributes<HTMLAnchorElement>;

const StyledLinkButton = createStyledWithBreakpoints(buttonCss, 'a');

export const LinkButton = ({style, className, ...props}: LinkButtonProps) => {
    return <StyledLinkButton style={style!} className={className} {...props} />;
};
