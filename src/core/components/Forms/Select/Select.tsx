import type {SelectHTMLAttributes} from 'react';

import {selectCss} from './selectCss';
import {createStyledWithBreakpoints} from '../../../utils/breakpoints';
import type {BoxProps} from '../../Box/Box';
import type {OmitStrict} from '../../../utils/types/utils';
import type {CSSFontSize} from '../../../utils/types/theme';
import type {MakeBreakpoints, WithBreakpoint} from '../../../utils/types/break';

interface BaseProps extends OmitStrict<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    size?: WithBreakpoint<CSSFontSize>;
}

export type SelectProps = OmitStrict<BoxProps, 'el'> & MakeBreakpoints<BaseProps>;

const StyledSelect = createStyledWithBreakpoints(selectCss, 'select');

export const Select = ({style, className, ...props}: SelectProps) => {
    return <StyledSelect {...props} style={style!} className={className} />;
};
