import {keyframes} from '@emotion/react';

export const none = keyframes`
    from { }
    to { }
`;

export const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const centerIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;
export const centerOut = keyframes`
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: 0;
        transform: scale(0.8);
    }
`;

export const bottomIn = keyframes`
    from {
        transform: translateY(100%);
    }
    to {
        transform: initial;
    }
`;
export const bottomOut = keyframes`
    from {
        transform: initial;
    }
    to {
        transform: translateY(100%);
    }
`;

export const topIn = keyframes`
    from {
        transform: translateY(-100%);
    }
    to {
        transform: initial;
    }
`;
export const topOut = keyframes`
    from {
        transform: initial;
    }
    to {
        transform: translateY(-100%);
    }
`;

export const leftIn = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: initial;
    }
`;
export const leftOut = keyframes`
    from {
        transform: initial;
    }
    to {
        transform: translateX(-100%);
    }
`;

export const rightIn = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: initial;
    }
`;
export const rightOut = keyframes`
    from {
        transform: initial;
    }
    to {
        transform: translateX(100%);
    }
`;

export const animations = {
    none: {in: none, out: none},
    fade: {in: fadeIn, out: fadeOut},
    center: {in: centerIn, out: centerOut},
    //
    top: {in: topIn, out: topOut},
    left: {in: leftIn, out: leftOut},
    right: {in: rightIn, out: rightOut},
    bottom: {in: bottomIn, out: bottomOut},
};

export type Animation = keyof typeof animations;
