import {css} from '@emotion/react';
import styled from '@emotion/styled';
import {useRef, useEffect, useCallback} from 'react';
import type {MouseEvent, PropsWithChildren, SyntheticEvent} from 'react';

import {flexCss} from '../Flex/flexCss';
import {animations} from '../../utils/animations';
import {surfaceCss} from '../../utils/surfaceCss';
import type {CardProps} from '../Card/Card';
import type {Animation} from '../../utils/animations';
import {themeConst} from '../../../joy';

type DialogProps = {
    isOpen: boolean;
    animation?: Animation;
    noBackdrop?: boolean;
    animationDuration?: `${number}s`;
    onRequestClose?: () => void;
} & CardProps;

const StyledDialog = styled.dialog<Omit<DialogProps, 'isOpen' | 'onClose'> & {closing: boolean}>`
    ${props => flexCss(props)}
    ${props => surfaceCss(props, 'card')}
    &:not([open]) {
        display: none;
    }
    &[open] {
        animation: ${props =>
            css`
                ${props.animationDuration} ease-in-out 0s ${animations[props.animation!][props.closing ? 'out' : 'in']} forwards
            `};
    }

    &[open]::backdrop {
        animation: ${props =>
            css`
                ${props.animationDuration} ease-in-out 0s ${animations.fade[props.closing ? 'out' : 'in']} forwards
            `};
    }

    ${props =>
        props.noBackdrop === undefined &&
        css`
            &::backdrop {
                backdrop-filter: blur(${themeConst('theme:backdrop.blur')});
                background-color: ${themeConst('theme:backdrop.color')};
            }
        `}
`;

export const Dialog = ({
    isOpen,
    onRequestClose,
    animation = 'center',
    animationDuration = '0.3s',
    noBackdrop,
    children,
    ...props
}: PropsWithChildren<DialogProps>) => {
    const ref = useRef<HTMLDialogElement>(null);

    const handleClick = useCallback(
        (event: MouseEvent<HTMLDialogElement>) => {
            if (event.target === ref.current) {
                onRequestClose?.();
            }
        },
        [onRequestClose],
    );

    const handleCancel = useCallback(
        (event: SyntheticEvent<HTMLDialogElement>) => {
            event.preventDefault();
            onRequestClose?.();
        },
        [onRequestClose],
    );

    const handleAnimationEnd = useCallback(() => {
        if (!isOpen) {
            ref.current?.close();
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            ref.current?.showModal();
        }
    }, [isOpen]);

    return (
        <StyledDialog
            ref={ref}
            el="dialog"
            closing={!isOpen}
            animation={animation}
            noBackdrop={noBackdrop}
            animationDuration={animationDuration}
            onClick={handleClick}
            onCancel={handleCancel}
            onAnimationEnd={handleAnimationEnd}
            {...props}
        >
            {children}
        </StyledDialog>
    );
};
