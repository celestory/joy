import {css} from '@emotion/react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';
import type {PropsWithChildren} from 'react';

import {autoGridCss} from './autoGridCss';
import {breakpoints} from '../../utils/types/break';
import type {BoxProps} from '../Box/Box';
import type {Breakpoints, MakeBreakpoints, WithBreakpoint} from '../../utils/types/break';

interface BaseProps {
    gap?: WithBreakpoint<`${number}rem`>;
    mode?: 'fill' | 'fit';
    minColumn?: `${number}rem`;
}

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

export const AutoGrid = ({el, style, className, children, ...props}: PropsWithChildren<AutoGridProps>) => {
    const Element = el ? styledDiv.withComponent(el) : styledDiv;
    return (
        <Element {...props} style={style!} className={className}>
            {children}
        </Element>
    );
};
