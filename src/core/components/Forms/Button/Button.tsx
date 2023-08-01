import type {ButtonHTMLAttributes} from 'react';

import {buttonCss} from './buttonCss';
import {createStyledWithBreakpoints} from '../../../utils/breakpoints';
import type {BoxProps} from '../../Box/Box';
import type {OmitStrict} from '../../../utils/types/utils';
import type {CSSFontSize} from '../../../utils/types/theme';
import type {MakeBreakpoints, WithBreakpoint} from '../../../utils/types/break';

type BaseProps = MakeBreakpoints<{size?: WithBreakpoint<CSSFontSize>}> & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = OmitStrict<BoxProps, 'el'> & BaseProps;

const StyledButton = createStyledWithBreakpoints(buttonCss, 'button');

export const Button = ({style, className, ...props}: ButtonProps) => {
    return <StyledButton style={style!} className={className} {...props} />;
};
