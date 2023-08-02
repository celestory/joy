import styled from '@emotion/styled';
import {forwardRef} from 'react';
import type {PropsWithChildren} from 'react';

import {animations} from '../../utils/animations';
import type {Animation} from '../../utils/animations';

interface DialogProps {
    animation?: Animation;
}

const StyledDialog = styled.dialog<DialogProps>`
    animation: 0.3s ease-in-out 0s ${props => animations[props.animation || 'center'].in} forwards;
    &.joyDialogClosing {
        animation: 0.3s ease-in-out 0s ${props => animations[props.animation || 'center'].out} forwards;
    }
`;

export const Dialog = forwardRef<HTMLDialogElement, PropsWithChildren<DialogProps>>(({animation = 'center', children}, ref) => {
    return (
        <StyledDialog ref={ref} animation={animation}>
            {children}
        </StyledDialog>
    );
});
