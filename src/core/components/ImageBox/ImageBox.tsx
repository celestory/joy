import type {ImgHTMLAttributes} from 'react';

import {imageBoxCss} from './imageBoxCss';
import {createStyledWithBreakpoints} from '../../utils/breakpoints';
import type {BoxProps} from '../Box/Box';
import type {OmitStrict} from '../../utils/types/utils';
import type {CSSRadius, WithTheme} from '../../utils/types/theme';
import type {MakeBreakpoints, WithBreakpoint} from '../../utils/types/break';

type BaseProps = {
    fit?: 'content' | 'cover';
    radius?: WithTheme<WithBreakpoint<CSSRadius>>;
} & ImgHTMLAttributes<HTMLImageElement>;

export type ImageBoxProps = OmitStrict<BoxProps, 'el'> & MakeBreakpoints<BaseProps>;

const StyledImg = createStyledWithBreakpoints(imageBoxCss, 'img');

export const ImageBox = ({style, className, ...props}: ImageBoxProps) => {
    return <StyledImg style={style!} className={className} {...props} />;
};
