import styled from '@emotion/styled';
import {forwardRef} from 'react';
import type {PropsWithChildren} from 'react';

import {Box} from '../Box/Box';
import {animations} from '../../utils/animations';
import type {BoxProps} from '../Box/Box';
import type {Animation} from '../../utils/animations';

type DialogProps = {
    animation?: Animation;
} & BoxProps;

const StyledDialog = styled(Box)<DialogProps>`
    animation: 0.3s ease-in-out 0s ${props => animations[props.animation || 'center'].in} forwards;

    &.joyDialogClosing {
        animation: 0.3s ease-in-out 0s ${props => animations[props.animation || 'center'].out} forwards;
    }
`;

export const Dialog = forwardRef<HTMLElement, PropsWithChildren<DialogProps>>(({animation = 'center', children, ...props}, ref) => {
    return (
        <StyledDialog {...props} el="dialog" ref={ref} animation={animation}>
            {children}
        </StyledDialog>
    );
});
