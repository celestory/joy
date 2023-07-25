import {css} from '@emotion/react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';

import {autoGridCss} from './autoGridCss';
import type {BoxProps} from '../Box/Box';
import type {PropsWithStyle} from '../../types/utilities';
import {breakpoints} from '../../types/break';
import type {Breakpoints, MakeBreakpoints, WithBreakpoint} from '../../types/break';

type BaseProps = {
    gap?: WithBreakpoint<`${number}rem`>;
    mode?: 'fill' | 'fit';
    minColumn?: `${number}rem`;
};

export type AutoGridProps = BoxProps & MakeBreakpoints<BaseProps>;

const options: StyledOptions<BoxProps> = {
    shouldForwardProp: prop => isPropValid(prop) && !['el', 'gap', 'mode', 'minColumn'].includes(prop),
};
const styledDiv = styled('div', options)<AutoGridProps>`
    ${props => autoGridCss(props)}
    ${props =>
        Object.entries(breakpoints).map(([prefix, width]) => {
            return css`
                @media (min-width: ${width}) {
                    ${autoGridCss(props, `${prefix as Breakpoints}-`)}
                }
            `;
        })}
` as any;

export const AutoGrid = ({el, style, className, children, ...props}: PropsWithStyle<AutoGridProps>) => {
    const Element = el ? styledDiv.withComponent(el) : styledDiv;
    return (
        <Element style={style!} className={className} {...props}>
            {children}
        </Element>
    );
};
