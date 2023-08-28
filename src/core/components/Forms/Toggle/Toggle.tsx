import styled from '@emotion/styled';
import type {InputHTMLAttributes} from 'react';

import {surfaceCss} from '../../../utils/surfaceCss';
import {themeConst, type CSSColor, type WithTheme} from '../../../utils/types/theme';

type ToggleProps = {
    color?: WithTheme<CSSColor>;
} & InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input<{color?: WithTheme<CSSColor>}>`
    --toggle-width: 1.4rem;
    --toggle-thumb-gap: 0.1rem;
    --toggle-thumb-size: 0.6rem;

    display: inline-flex;

    cursor: pointer;
    outline: none;
    font-size: 0;
    appearance: none;
    user-select: none;

    margin: 0;
    padding-inline: 0 var(--toggle-width);
    transition: ${themeConst('theme:toggle.transition')} all;

    ${surfaceCss({}, 'toggle')}

    &:checked {
        padding-inline: var(--toggle-width) 0;
        ${props => surfaceCss({background: props.color}, 'toggle.checked')}
    }
    &::before {
        content: '';
        margin: var(--toggle-thumb-gap);
        padding: var(--toggle-thumb-size);
        transition: inherit;
        ${surfaceCss({}, 'toggle.thumb')}
    }
`;

// 💩: handle label and errors consistently across inputs

export const Toggle = ({color, ...props}: ToggleProps) => {
    return <StyledInput type="checkbox" role="switch" color={color} {...props} />;
};
