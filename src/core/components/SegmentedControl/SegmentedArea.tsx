import styled from '@emotion/styled';
import {useEffect, useId, useMemo, useRef} from 'react';
import type {ChangeEvent} from 'react';

import {Flex} from '../Flex/Flex';
import {surfaceCss} from '../../utils/surfaceCss';
import {themeConst} from '../../utils/types/theme';

const Control = styled.div`
    --area-offset-width: auto;
    --area-offset-height: auto;
    --area-offset-left: 0;
    --area-offset-top: 0;
    display: flex;
    flex-direction: column;
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
        ${surfaceCss({}, 'input.hover')}
        width: var(--area-offset-width);
        height: var(--area-offset-height);
        transform: translate(var(--area-offset-left), var(--area-offset-top));
        position: absolute;
        top: 1px; // 💩
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
    segments: SegmentValue[][];
};

export const SegmentedArea = ({name, value, onChange, segments}: Props) => {
    const id = useId();
    const controlRef = useRef<HTMLDivElement>(null);
    const activePosition = useMemo(() => {
        for (let y = 0; y < segments.length; ++y) {
            const row = segments[y]!;
            for (let x = 0; x < row.length; ++x) {
                const segment = row[x]!;
                if (segment.value === value) {
                    return {x, y};
                }
            }
        }
        return null;
    }, [segments, value]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {offsetWidth, offsetHeight, offsetTop, offsetLeft} = event.currentTarget.parentElement!;
        controlRef.current?.style?.setProperty('--area-offset-width', `${offsetWidth}px`);
        controlRef.current?.style?.setProperty('--area-offset-height', `${offsetHeight}px`);
        controlRef.current?.style?.setProperty('--area-offset-top', `${offsetTop}px`);
        controlRef.current?.style?.setProperty('--area-offset-left', `${offsetLeft}px`);
        onChange(event.currentTarget.value);
    };

    useEffect(() => {
        const initialElement = controlRef.current?.querySelector('[data-selected]') as HTMLElement;
        controlRef.current?.style?.setProperty('--area-offset-width', `${initialElement?.offsetWidth}px`);
        controlRef.current?.style?.setProperty('--area-offset-height', `${initialElement?.offsetHeight}px`);
        controlRef.current?.style?.setProperty('--area-offset-top', `${initialElement?.offsetTop}px`);
        controlRef.current?.style?.setProperty('--area-offset-left', `${initialElement?.offsetLeft}px`);
    }, [segments]);

    return (
        <Control ref={controlRef}>
            {segments.map((row, y) => (
                <Flex key={y}>
                    {row?.map((segment, x) => (
                        <Segment key={segment.value} data-selected={(x === activePosition?.x && y === activePosition?.y) || undefined}>
                            <input
                                type="radio"
                                value={segment.value}
                                id={`${id}-${segment.value}`}
                                name={name}
                                onChange={handleChange}
                                checked={x === activePosition?.x && y === activePosition?.y}
                            />
                            <label htmlFor={`${id}-${segment.value}`}>
                                {typeof segment.label === 'function' ? segment.label(x === activePosition?.x && y === activePosition?.y) : segment.label}
                            </label>
                        </Segment>
                    ))}
                </Flex>
            ))}
        </Control>
    );
};
