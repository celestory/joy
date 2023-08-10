import styled from '@emotion/styled';
import type {InputHTMLAttributes} from 'react';
import {themeProp, type CSSColor, type WithTheme} from '../../../utils/types/theme';

type ToggleProps = {
    color: WithTheme<CSSColor>;
} & InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input<{color?: WithTheme<CSSColor>}>`
    --switch-handle-size: 8px;
    --switch-bg-size: 24px;
    --switch-handle-gap: 3px;
    --switch-fg: ${props => themeProp(props.color, 'theme:brand')}; // 💩

    appearance: none;
    box-sizing: content-box;
    display: inline-flex;
    padding-inline: 0 var(--switch-bg-size);
    border: none;
    font-size: 0;
    margin: 0;
    border-radius: 100px;
    border: 4px solid #000;
    transition: var(--switch-duration, 0.2s) cubic-bezier(0.65, 0, 0.5, 1);
    user-select: none;
    outline: none;
    filter: grayscale(1); /* de-colorize the switch */
    cursor: pointer;
    &:checked {
        padding-inline: var(--switch-bg-size) 0;
        filter: none;
    }
    &::before {
        content: '';
        padding: var(--switch-handle-size);
        margin: var(--switch-handle-gap);
        background: var(--switch-fg);
        border-radius: 50%;
        border: 4px solid #000;
        transition: inherit;
    }
`;

// 💩: handle label and errors consistently across inputs

export const Toggle = ({color, ...props}: ToggleProps) => {
    return <StyledInput type="checkbox" role="switch" color={color} {...props} />;
};
