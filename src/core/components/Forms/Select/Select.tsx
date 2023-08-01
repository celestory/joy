import type {SelectHTMLAttributes} from 'react';

import {selectCss} from './selectCss';
import {createStyledWithBreakpoints} from '../../../utils/breakpoints';
import type {BoxProps} from '../../Box/Box';
import type {OmitStrict} from '../../../utils/types/utils';
import type {CSSFontSize} from '../../../utils/types/theme';
import type {MakeBreakpoints, WithBreakpoint} from '../../../utils/types/break';

type BaseProps = {
    size?: WithBreakpoint<CSSFontSize>;
} & OmitStrict<SelectHTMLAttributes<HTMLSelectElement>, 'size'>;

export type SelectProps = OmitStrict<BoxProps, 'el'> & MakeBreakpoints<BaseProps>;

const StyledSelect = createStyledWithBreakpoints(selectCss, 'select');

export const Select = ({style, className, ...props}: SelectProps) => {
    return <StyledSelect style={style!} className={className} {...props} />;
};
