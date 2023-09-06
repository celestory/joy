import styled from '@emotion/styled';
import {forwardRef} from 'react';
import type {PropsWithChildren} from 'react';

import {Card} from '../Card/Card';
import {animations} from '../../utils/animations';
import type {CardProps} from '../Card/Card';
import type {Animation} from '../../utils/animations';

type DialogProps = {
    animation?: Animation;
} & CardProps;

const StyledDialog = styled(Card)<DialogProps>`
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
