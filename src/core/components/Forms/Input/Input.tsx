import type {InputHTMLAttributes} from 'react';

import {inputCss} from './inputCss';
import {createStyledWithBreakpoints} from '../../../utils/breakpoints';
import type {BoxProps} from '../../Box/Box';
import type {OmitStrict} from '../../../utils/types/utils';

type BaseProps = InputHTMLAttributes<HTMLInputElement>;

export type InputProps = OmitStrict<BoxProps, 'el'> & BaseProps;

const StyledInput = createStyledWithBreakpoints(inputCss, 'input');

export const Input = ({style, className, ...props}: InputProps) => {
    return <StyledInput style={style!} className={className} {...props} />;
};
