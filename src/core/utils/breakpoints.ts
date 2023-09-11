import {css} from '@emotion/react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';
import type {SerializedStyles} from '@emotion/react';

import {breakpoints} from './types/break';
import type {Breakpoints} from './types/break';

export const createStyledWithBreakpoints = <T extends object>(
    cssFunc: (props: T, prefix?: '' | `${Breakpoints}-`) => SerializedStyles,
    el: keyof JSX.IntrinsicElements = 'div',
    excludedProps?: string[],
) => {
    const options: StyledOptions<T> = {
        shouldForwardProp: prop => isPropValid(prop) && !excludedProps?.includes(prop),
    };
    return styled(el, options)<T>`
        ${props => cssFunc(props)}
        ${props =>
            Object.entries(breakpoints).map(([prefix, width]) => {
                if (Object.keys(props).some(key => key.startsWith(prefix))) {
                    return css`
                        @media (min-width: ${width}) {
                            ${cssFunc(props, `${prefix as Breakpoints}-`)}
                        }
                    `;
                }
                return undefined;
            })}
    ` /* for perfs */ as any;
};
