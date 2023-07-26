import {css} from '@emotion/react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';
import type {ImgHTMLAttributes} from 'react';

import {imageBoxCss} from './imageBoxCss';
import {breakpoints} from '../../types/break';
import type {BoxProps} from '../Box/Box';
import type {OmitStrict} from '../../types/utils';
import type {CSSRadius, WithTheme} from '../../types/theme';
import type {Breakpoints, MakeBreakpoints, WithBreakpoint} from '../../types/break';

type BaseProps = {
    fit?: 'content' | 'cover';
    radius?: WithTheme<WithBreakpoint<CSSRadius>>;
} & ImgHTMLAttributes<HTMLImageElement>;

export type ImageBoxProps = OmitStrict<BoxProps, 'el'> & MakeBreakpoints<BaseProps>;

const options: StyledOptions<ImageBoxProps> = {
    shouldForwardProp: prop => isPropValid(prop) && !['fit', 'radius'].includes(prop),
};
const StyledImg = styled('img', options)<ImageBoxProps>`
    ${props => imageBoxCss(props)}
    ${props =>
        Object.entries(breakpoints).map(([prefix, width]) => {
            return css`
                @media (min-width: ${width}) {
                    ${imageBoxCss(props, `${prefix as Breakpoints}-`)}
                }
            `;
        })}
` as any;

export const ImageBox = ({style, className, ...props}: ImageBoxProps) => {
    return <StyledImg style={style!} className={className} {...props} />;
};
