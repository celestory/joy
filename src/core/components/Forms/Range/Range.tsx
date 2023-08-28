import styled from '@emotion/styled';
import type {InputHTMLAttributes} from 'react';
import {surfaceCss} from '../../../utils/surfaceCss';

const StyledInput = styled.input`
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 15rem;

    /* Removes default focus */
    &:focus {
        outline: none;
    }

    /* slider track */
    &::-webkit-slider-runnable-track {
        ${surfaceCss({}, 'range')}
        height: 0.5rem;
    }

    &::-moz-range-track {
        ${surfaceCss({}, 'range')}
        height: 0.5rem;
    }

    /* slider thumb */
    &::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;

        width: 1rem;
        height: 1rem;
        margin-top: -0.25rem;
        ${surfaceCss({}, 'range.thumb')}
    }

    &::-moz-range-thumb {
        border: none; /*Removes extra border that FF applies*/
        border-radius: 0; /*Removes default border-radius that FF applies*/

        width: 1rem;
        height: 1rem;
        ${surfaceCss({}, 'range.thumb')}
    }

    &:focus::-webkit-slider-thumb {
        outline: 3px solid #053a5f;
    }

    &:focus::-moz-range-thumb {
        outline: 3px solid #053a5f;
    }
`;

export const Range = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return <StyledInput type="range" {...props} />;
};
