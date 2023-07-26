import {css} from '@emotion/react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';

import {imageBoxCss} from './imageBoxCss';
import {breakpoints} from '../../types/break';
import type {BoxProps} from '../Box/Box';
import type {CSSRadius, WithTheme} from '../../types/theme';
import type {PropsWithStyle} from '../../types/utilities';
import type {Breakpoints, MakeBreakpoints, WithBreakpoint} from '../../types/break';
import type {ImgHTMLAttributes} from 'react';

type BaseProps = {
    fit?: 'content' | 'cover';
    radius?: WithTheme<WithBreakpoint<CSSRadius>>;
} & ImgHTMLAttributes<HTMLImageElement>;

export type ImageBoxProps = Omit<BoxProps, 'el' | 'children'> & MakeBreakpoints<BaseProps>;

const options: StyledOptions<BoxProps> = {
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

export const ImageBox = ({style, className, ...props}: PropsWithStyle<ImageBoxProps>) => {
    return <StyledImg style={style!} className={className} {...props} />;
};
