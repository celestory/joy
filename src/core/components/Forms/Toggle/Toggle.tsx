import styled from '@emotion/styled';
import type {InputHTMLAttributes} from 'react';

import {surfaceCss} from '../../../utils/surfaceCss';
import {themeConst} from '../../../utils/types/theme';
import type {CSSColor, WithTheme} from '../../../utils/types/theme';

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
    bg?: WithTheme<CSSColor>;
}

const StyledInput = styled.input<{bg?: WithTheme<CSSColor>}>`
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
        ${props => surfaceCss({bg: props.bg}, 'toggle._checked')}
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

export const Toggle = ({bg, ...props}: ToggleProps) => {
    return <StyledInput {...props} type="checkbox" role="switch" bg={bg} />;
};
