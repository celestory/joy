import {css} from '@emotion/react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';

import {flexCss} from './flexCss';
import {breakpoints} from '../../types/break';
import type {CSSGap} from '../../types/theme';
import type {BoxProps} from '../Box/Box';
import type {PropsWithStyle} from '../../types/utilities';
import type {FlexAlign, FlexDirection, FlexDistribute} from './flexCss';
import type {Breakpoints, WithBreakpoint, MakeBreakpoints} from '../../types/break';

type BaseProps = {
    gap?: WithBreakpoint<CSSGap>;
    wrap?: WithBreakpoint<boolean>;
    direction?: WithBreakpoint<FlexDirection>;
    align?: WithBreakpoint<FlexAlign>;
    distribute?: WithBreakpoint<FlexDistribute>;
};

export type FlexProps = BoxProps & MakeBreakpoints<BaseProps>;

const options: StyledOptions<BoxProps> = {
    shouldForwardProp: prop => isPropValid(prop) && !['el', 'gap', 'wrap', 'direction', 'align', 'distribute'].includes(prop),
};
const styledDiv = styled('div', options)<FlexProps>`
    ${props => flexCss(props)}
    ${props =>
        Object.entries(breakpoints).map(([prefix, width]) => {
            return css`
                @media (min-width: ${width}) {
                    ${flexCss(props, `${prefix as Breakpoints}-`)}
                }
            `;
        })}
` as any;

export const Flex = ({el, style, className, children, ...props}: PropsWithStyle<FlexProps>) => {
    const Element = el ? styledDiv.withComponent(el) : styledDiv;
    return (
        <Element style={style!} className={className} {...props}>
            {children}
        </Element>
    );
};
