import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';
import type {ChangeEvent, FC, ReactNode} from 'react';
import {surfaceCss} from '../../../utils/surfaceCss';
import {themeProp} from '../../../utils/types/theme';

interface CheckboxProps {
    checked: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    //
    size?: `${number}rem`;
    //
    label?: ReactNode;
    labelGap?: `${number}rem`;
    labelAlign?: 'start' | 'end';
    //
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

const checkboxOptions: StyledOptions<CheckboxProps> = {
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'fill' && prop !== 'activated' && prop !== 'deactivated' && prop !== 'radius' && prop !== 'check',
};

const CheckBoxWrapper = styled('label', checkboxOptions)<{
    size: `${number}rem`;
    disabled?: boolean;
    labelGap: `${number}rem`;
}>`
    display: flex;
    gap: ${props => props.labelGap};
    align-items: center;
    cursor: pointer;
    user-select: none;
    input[type='checkbox'] {
        display: none;
    }
    i {
        display: grid;
        place-content: center;
        //
        width: 24px;
        height: 24px;
        //
        transition: ${themeProp('theme:toggle.transition')} all;
        ${surfaceCss({}, 'checkbox')}

        svg {
            display: block;
            width: 12px;
            fill: none;
            overflow: visible;
            stroke: ${themeProp('theme:checkbox.color', 'theme:foreground')};
            stroke-width: 3;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 16px;
            stroke-dashoffset: 16px;
            //
            transform: translate3d(0, 0, 0);
            transition: all 0.2s ease;
            transition-delay: 0.1s;
        }
    }
    input[type='checkbox']:checked + i {
        ${surfaceCss({}, 'checkbox.checked')}
        svg {
            stroke-dashoffset: 0;
        }
    }
    input[type='checkbox']:disabled + i {
        ${surfaceCss({}, 'checkbox.disabled')}
        svg {
            stroke: ${themeProp('theme:checkbox.disabled.color', 'theme:foreground')};
        }
    }
`;

export const Checkbox: FC<CheckboxProps> = ({checked, onChange, indeterminate, disabled, label, labelGap = '0.5rem', labelAlign = 'end'}) => {
    return (
        <CheckBoxWrapper size="1rem" disabled={disabled} labelGap={labelGap}>
            {labelAlign === 'start' && label}
            <input type="checkbox" disabled={disabled} checked={checked} onChange={onChange} />
            <i>
                <svg viewBox="0 0 12 9">{indeterminate ? <polyline points="2 5 10 5"></polyline> : <polyline points="1 5 4 8 11 1"></polyline>}</svg>
            </i>
            {labelAlign === 'end' && label}
        </CheckBoxWrapper>
    );
};
