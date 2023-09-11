import styled from '@emotion/styled';
import {useMemo} from 'react';
import {css, keyframes} from '@emotion/react';

import {themeProp, themeConst} from '../../../utils/types/theme';
import type {CSSColor, CSSWidth, WithTheme} from '../../../utils/types/theme';

interface CircleProgressProps {
    size: CSSWidth;
    bg?: WithTheme<CSSColor>;
    fg?: WithTheme<CSSColor>;
    value?: number;
    caption?: boolean;
    thickness?: number;
}

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const spinAnimation = css`
    animation: ${spin} 1s linear infinite;
`;

const Svg = styled.svg<{infinite: boolean}>`
    rotate: -90deg;
    overflow: visible;
    ${props => (props.infinite ? spinAnimation : undefined)};
`;

const Track = styled.circle<{bg?: WithTheme<CSSColor>; thickness: number}>`
    fill: none;
    stroke: ${props => themeProp(props.bg, themeConst('theme:colors.area'))};
    stroke-width: ${props => props.thickness};
`;

const Meter = styled(Track)<{fg?: WithTheme<CSSColor>; circumference: number; dashoffset: number}>`
    fill: none;
    stroke: ${props => themeProp(props.fg, themeConst('theme:colors.accent'))};
    stroke-dasharray: ${props => `${props.circumference} ${props.circumference}`};
    stroke-dashoffset: ${props => props.dashoffset};
    transition: stroke-dashoffset 0.3s;
`;

const Figure = styled.figure<{size: CSSWidth}>`
    position: relative;
    width: ${props => props.size};
    height: ${props => props.size};
    margin: 0;
`;

const Caption = styled.figcaption<{color?: WithTheme<CSSColor>}>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font: ${themeConst('theme:fonts.ui')};
    color: ${props => themeProp(props.color, themeConst('theme:colors.accent'))};
    font-size: 0.9em;
`;

export const ProgressCircle = ({value, bg, fg, size, caption, thickness = 0.15}: CircleProgressProps) => {
    const baseSize = 512; // px
    const radius: number = baseSize / 2;
    const {circumference, dashoffset} = useMemo(() => {
        const circumference = radius * 2 * Math.PI;
        return {
            circumference,
            dashoffset: circumference - (value ?? 0.25) * circumference,
        };
    }, [radius, value]);

    return (
        <Figure
            role="meter"
            size={size}
            aria-valuenow={value || 0}
            aria-valuetext={value ? `${value * 100}%` : 'Infinite Spinner'}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            {value !== undefined && caption && <Caption color={fg}>{(value * 100).toFixed(0)}%</Caption>}
            <Svg infinite={value === undefined} viewBox={`0 0 ${baseSize} ${baseSize}`}>
                <Track bg={bg} thickness={thickness * baseSize} r={baseSize / 2} cx="50%" cy="50%" />
                <Meter fg={fg} thickness={thickness * baseSize} r={baseSize / 2} cx="50%" cy="50%" circumference={circumference} dashoffset={dashoffset} />
            </Svg>
        </Figure>
    );
};
