import type {InputHTMLAttributes} from 'react';

import {inputCss} from './inputCss';
import {createStyledWithBreakpoints} from '../../../utils/breakpoints';
import type {BoxProps} from '../../Box/Box';
import type {OmitStrict} from '../../../utils/types/utils';
import type {CSSFontSize} from '../../../utils/types/theme';
import type {MakeBreakpoints, WithBreakpoint} from '../../../utils/types/break';

interface BaseProps extends OmitStrict<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: WithBreakpoint<CSSFontSize>;
}

export type InputProps = OmitStrict<BoxProps, 'el'> & MakeBreakpoints<BaseProps>;

const StyledInput = createStyledWithBreakpoints(inputCss, 'input');

export const Input = ({style, className, ...props}: InputProps) => {
    return <StyledInput style={style!} className={className} {...props} />;
};
