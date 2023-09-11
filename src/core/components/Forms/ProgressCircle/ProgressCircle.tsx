import styled from '@emotion/styled';
import {useMemo} from 'react';
import {css, keyframes} from '@emotion/react';

import {Box} from '../../Box/Box';
import {themeProp, themeConst} from '../../../utils/types/theme';
import type {BoxProps} from '../../Box/Box';
import type {CSSColor, WithTheme} from '../../../utils/types/theme';

interface CircleProgressProps {
    bg?: WithTheme<CSSColor>;
    fg?: WithTheme<CSSColor>;
    value?: number;
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

export const ProgressCircle = ({value, bg, fg, thickness = 0.2, ...props}: CircleProgressProps & BoxProps) => {
    const baseSize = 512; // px
    const radius: number = baseSize / 2;
    const {circumference, dashoffset} = useMemo(() => {
        const circumference = radius * 2 * Math.PI;
        return {
            circumference,
            dashoffset: circumference - ((value ?? 25) / 100) * circumference,
        };
    }, [radius, value]);

    return (
        <Box
            {...props}
            el="figure"
            role="meter"
            aria-valuenow={value || 0}
            aria-valuetext={value ? `${value}%` : 'Infinite Spinner'}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <Svg infinite={value === undefined} viewBox={`0 0 ${baseSize} ${baseSize}`}>
                <Track bg={bg} thickness={thickness * baseSize} r={baseSize / 2} cx="50%" cy="50%" />
                <Meter fg={fg} thickness={thickness * baseSize} r={baseSize / 2} cx="50%" cy="50%" circumference={circumference} dashoffset={dashoffset} />
            </Svg>
        </Box>
    );
};
