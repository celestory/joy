import {useMemo, type InputHTMLAttributes} from 'react';

import {InputWrapper, inputCss} from './inputCss';
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

const filteredProps = ['onChange', 'onBlur', 'onFocus'];
export const Input = ({style, className, type, ...props}: InputProps) => {
    const inputEl = useMemo(
        () => <StyledInput {...props} style={style!} className={type === 'search' ? undefined : className} type={type} />,
        [className, props, style, type],
    );
    const forwardedProps = useMemo(
        () =>
            Object.entries(props).reduce((p, [key, value]) => {
                return filteredProps.includes(key) ? p : {...p, [key]: value};
            }, {}),
        [props],
    );
    if (type === 'search') {
        return (
            <InputWrapper className={className} {...forwardedProps} onChange={undefined}>
                <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5.5" cy="5.5" r="4.5" stroke="black" strokeWidth="2" />
                    <rect width="6.98326" height="2.09498" rx="1.04749" transform="matrix(0.708801 0.705408 -0.708801 0.705408 9.01477 7.59613)" fill="black" />
                </svg>

                {inputEl}
            </InputWrapper>
        );
    }
    return inputEl;
};

const StyledTextArea = createStyledWithBreakpoints(inputCss, 'textarea');

export const TextArea = ({style, className, type, ...props}: InputProps) => {
    return <StyledTextArea {...props} style={style!} className={className} type={type} />;
};
