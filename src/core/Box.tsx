// @ts-nocheck

import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {useMemo} from 'react';
import isPropValid from '@emotion/is-prop-valid';
import type {StyledOptions} from '@emotion/styled';
import type {ReactNode, CSSProperties} from 'react';

import {prefixes} from './types/prefixes';
import type {CSSSize, CSSColor, CSSPadding, CSSOverflow, ThemeProp, CSSMargin} from './types/theme';
import type {Prefixes, WithPrefix, FlattenPrefixes} from './types/prefixes';

type CSSAlign = keyof typeof alignToCss;
type CSSDirection = keyof typeof directionToCss;
type CSSDistribute = keyof typeof distributeToCss;

const alignToCss = {
    end: 'flex-end',
    start: 'flex-start',
    center: 'center',
    stretch: 'stretch',
    default: undefined,
};

const directionToCss = {
    x: 'row',
    y: 'column',
    default: undefined,
};

const distributeToCss = {
    end: 'flex-end',
    start: 'flex-start',
    center: 'center',
    around: 'space-around',
    evenly: 'space-evenly',
    between: 'space-between',
    default: undefined,
};

type AllProps = {
    el?: keyof JSX.IntrinsicElements;
    hidden?: WithPrefix<boolean>;
    overflow?: CSSOverflow;
    //
    width?: WithPrefix<CSSSize>;
    minWidth?: WithPrefix<CSSSize>;
    maxWidth?: WithPrefix<CSSSize>;
    //
    height?: WithPrefix<CSSSize>;
    minHeight?: WithPrefix<CSSSize>;
    maxHeight?: WithPrefix<CSSSize>;
    //
    margin?: WithPrefix<ThemeProp<CSSMargin>> | WithPrefix<`${CSSMargin} ${CSSMargin}`> | WithPrefix<`${CSSMargin} ${CSSMargin} ${CSSMargin} ${CSSMargin}`>;
    padding?:
        | WithPrefix<ThemeProp<CSSPadding>>
        | WithPrefix<`${CSSPadding} ${CSSPadding}`>
        | WithPrefix<`${CSSPadding} ${CSSPadding} ${CSSPadding} ${CSSPadding}`>;
    //
    background?: WithPrefix<ThemeProp<CSSColor>>;
};
type ItemProps = FlexItemProps | GridItemProps;
type StyleProps = {style?: CSSProperties; className?: string; children?: ReactNode};
type DisplayProps = FlexProps | GridProps | AutoGridProps;

type FlexProps = {
    display?: 'flex';
    //
    grow?: WithPrefix<boolean>;
    shrink?: WithPrefix<boolean>;
};

type FlexItemProps = {
    item?: 'flex';
    //
    gap?: WithPrefix<CSSPadding>;
    align?: WithPrefix<CSSAlign>;
    direction?: WithPrefix<CSSDirection>;
    distribute?: WithPrefix<CSSDistribute>;
};

type GridProps = {
    display?: 'grid';
    //
    areas?: string[];
};

type GridItemProps = {
    item?: 'grid';
    //
    area?: string;
};

type AutoGridProps = {
    display: 'auto-grid';
};

type BoxProps = StyleProps & FlattenPrefixes<AllProps> & FlattenPrefixes<ItemProps> & FlattenPrefixes<DisplayProps>;

const styledBoxOptions: StyledOptions<BoxProps> = {
    shouldForwardProp: prop =>
        isPropValid(prop) && !['el', 'hidden', 'overflow', 'width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'maxHeight'].includes(prop),
};
const styledBox = styled('div', styledBoxOptions)<BoxProps>``;

const boxCss = (props: BoxProps, prefix: `${Prefixes}-` | '' = '') => css`
    display: ${props[`${prefix}hidden`] ? 'none' : 'flex'};
    box-sizing: border-box;

    width: ${props[`${prefix}width`]};
    max-width: ${props[`${prefix}maxWidth`]};
    min-width: ${props[`${prefix}minWidth`]};

    height: ${props[`${prefix}height`]};
    max-height: ${props[`${prefix}maxHeight`]};
    min-height: ${props[`${prefix}minHeight`]};

    flex-grow: ${props[`${prefix}grow`] ? 1 : undefined};
    ${props[`${prefix}grow`] && `flex-basis: 0;`}
    flex-shrink: ${props[`${prefix}shrink`] ? 1 : 0};

    flex-direction: ${directionToCss[props[`${prefix}direction`] || 'default']};
    gap: ${props[`${prefix}gap`]};
    align-items: ${alignToCss[props[`${prefix}align`] || 'default']};
    justify-content: ${distributeToCss[props[`${prefix}distribute`] || 'default']};

    margin: ${props[`${prefix}margin`]};
    padding: ${props[`${prefix}padding`]};

    background: ${props[`${prefix}background`]};
`;

export const Box = ({el, style, className, children, ...props}: BoxProps) => {
    const boxClassName = useMemo(() => {
        return css`
            ${boxCss(props)}
            ${Object.entries(prefixes).map(([prefix, width]) => {
                return css`
                    @media (min-width: ${width}) {
                        ${boxCss(props, `${prefix as Prefixes}-`)}
                    }
                `;
            })};
        `;
    }, [props]);

    const Element = el ? styledBox.withComponent(el) : styledBox;
    return (
        <Element style={style!} className={`${boxClassName}${className || ''}`} {...props}>
            {children}
        </Element>
    );
};
