import styled from '@emotion/styled';
import type {ChangeEvent} from 'react';
import {useEffect, useId, useMemo, useRef} from 'react';

import {surfaceCss} from '../../utils/surfaceCss';
import {themeConst} from '../../utils/types/theme';

const Control = styled.div`
    --control-offset-width: auto;
    --control-offset-left: 0;
    display: inline-flex;
    justify-content: space-between;
    position: relative;
    font: ${themeConst('theme:font.button')};
    font-size: 0.8rem; // 💩
    ${surfaceCss({}, 'input')}
    input {
        display: none;
    }
    &::before {
        content: '';
        ${surfaceCss({}, 'input._hover')}
        width: var(--control-offset-width);
        transform: translateX(var(--control-offset-left));
        position: absolute;
        top: 2px; // 💩
        bottom: 2px;
        left: 0;
        z-index: 0;
        transition: transform 0.3s cubic-bezier(0, 0.95, 0.38, 0.98), width 0.3s cubic-bezier(0, 0.95, 0.38, 0.98);
    }
`;
const Segment = styled.div`
    position: relative;
    text-align: center;
    z-index: 1;
    label {
        cursor: pointer;
        display: block;
        padding: 0.8em;
        transition: color 0.3s ease;
        color: ${themeConst('theme:subForeground')};
        &:hover {
            color: ${themeConst('theme:foreground')};
        }
    }
    &[data-selected] label {
        color: ${themeConst('theme:foreground')};
    }
`;

type SegmentValue = {value: string; label: string | React.ReactNode | ((selected: boolean) => React.ReactNode)};
type Props = {
    name?: string;
    value: string;
    onChange: (value: string) => void;
    segments: SegmentValue[];
};

export const SegmentedControl = ({name, value, onChange, segments}: Props) => {
    const id = useId();
    const controlRef = useRef<HTMLDivElement>(null);
    const activeIndex = useMemo(() => segments.findIndex(segment => segment.value === value), [segments, value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {offsetWidth, offsetLeft} = event.currentTarget.parentElement!;
        controlRef.current?.style?.setProperty('--control-offset-width', `${offsetWidth}px`);
        controlRef.current?.style?.setProperty('--control-offset-left', `${offsetLeft}px`);
        onChange(event.currentTarget.value);
    };

    useEffect(() => {
        const initialElement = controlRef.current?.querySelector('[data-selected]') as HTMLElement;
        controlRef.current?.style?.setProperty('--control-offset-width', `${initialElement?.offsetWidth}px`);
        controlRef.current?.style?.setProperty('--control-offset-left', `${initialElement?.offsetLeft}px`);
    }, [segments]);

    return (
        <Control ref={controlRef}>
            {segments?.map((segment, i) => (
                <Segment key={segment.value} data-selected={i === activeIndex || undefined}>
                    <input type="radio" id={`${id}-${segment.value}`} value={segment.value} name={name} onChange={handleChange} checked={i === activeIndex} />
                    <label htmlFor={`${id}-${segment.value}`}>{typeof segment.label === 'function' ? segment.label(i === activeIndex) : segment.label}</label>
                </Segment>
            ))}
        </Control>
    );
};
