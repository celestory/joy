import styled from '@emotion/styled';
import type {InputHTMLAttributes} from 'react';
import {themeConst} from '../../../utils/types/theme';

const StyledInput = styled.input`
    --thumb-color: ${themeConst('theme:colors.fg')};
    --track-color: ${themeConst('theme:colors.area')};
    --progress-color: ${themeConst('theme:colors.accent')};
    --thumb-height: 1.125em;
    --track-height: 0.125em;
    --brightness-hover: 180%;
    --brightness-down: 80%;
    --clip-edges: 0.125em;

    width: 12.5em;
    position: relative;
    background: transparent;
    overflow: hidden;

    &:active {
        cursor: grabbing;
    }

    &:disabled {
        filter: grayscale(1);
        opacity: 0.3;
        cursor: not-allowed;
    }

    /* === WebKit specific styles === */
    &,
    &::-webkit-slider-runnable-track,
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        transition: all ease 100ms;
        height: var(--thumb-height);
    }

    &::-webkit-slider-runnable-track,
    &::-webkit-slider-thumb {
        position: relative;
    }

    &::-webkit-slider-thumb {
        --thumb-radius: calc((var(--thumb-height) * 0.5) - 1px);
        --clip-top: calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);
        --clip-bottom: calc(var(--thumb-height) - var(--clip-top));
        --clip-further: calc(100% + 1px);
        --box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0 100vmax var(--progress-color);

        cursor: grab;
        overflow: visible;

        width: var(--thumb-width, var(--thumb-height));
        background-color: var(--thumb-color);
        box-shadow: var(--box-fill);
        border-radius: var(--thumb-width, var(--thumb-height));

        filter: brightness(100%);
        clip-path: polygon(
            100% -1px,
            var(--clip-edges) -1px,
            0 var(--clip-top),
            -100vmax var(--clip-top),
            -100vmax var(--clip-bottom),
            0 var(--clip-bottom),
            var(--clip-edges) 100%,
            var(--clip-further) var(--clip-further)
        );
    }

    &:active::-webkit-slider-thumb {
        cursor: grabbing;
        scale: 0.9;
    }

    &::-webkit-slider-runnable-track {
        background: linear-gradient(var(--track-color) 0 0) scroll no-repeat center / 100% calc(var(--track-height) + 1px);
    }

    &:disabled::-webkit-slider-thumb {
        cursor: not-allowed;
    }

    /* === Firefox specific styles === */
    &,
    &::-moz-range-track,
    &::-moz-range-thumb {
        appearance: none;
        transition: all ease 100ms;
        height: var(--thumb-height);
    }

    &::-moz-range-track,
    &::-moz-range-thumb,
    &::-moz-range-progress {
        background: transparent;
    }

    &::-moz-range-thumb {
        background: currentColor;
        border: 0;
        width: var(--thumb-width, var(--thumb-height));
        border-radius: var(--thumb-width, var(--thumb-height));
        cursor: grab;
    }

    &:active::-moz-range-thumb {
        cursor: grabbing;
    }

    &::-moz-range-track {
        width: 100%;
        background: var(--track-color);
    }

    &::-moz-range-progress {
        appearance: none;
        background: var(--progress-color);
        transition-delay: 30ms;
    }

    &::-moz-range-track,
    &::-moz-range-progress {
        height: calc(var(--track-height) + 1px);
        border-radius: var(--track-height);
    }

    &:disabled::-moz-range-thumb {
        cursor: not-allowed;
    }
`;

export const Range = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return <StyledInput {...props} type="range" />;
};
