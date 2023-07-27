export type CSSGap = '0' | `${number}rem`;
export type CSSFont = 'serif' | 'sans-serif' | 'monospace';
export type CSSWidth = '0' | `${number}rem` | `${number}%` | 'fit-content';
export type CSSHeight = '0' | `${number}rem` | 'fill';
export type CSSRadius = '0' | `${number}rem` | `${number}%`;
export type CSSColor = `#${string}` | 'magenta' | 'transparent';
export type CSSBorder = 'none' | `${number}px ${'solid' | 'dashed' | 'dotted'} ${CSSColor}`;
export type CSSMargin = '0' | `${number}rem` | `${number}%` | 'auto';
export type CSSPadding = '0' | `${number}rem` | `${number}em`;
export type CSSOverflow = 'auto' | 'hidden' | 'visible';
export type CSSPosition = 'absolute' | 'relative';
export type CSSFontSize = `${number}rem`;
export type CSSFontWeight = keyof typeof fontWeightToCss;

export type WithTheme<PropType> = PropType | `${typeof themePrefix}${keyof PathSelector<Theme, PropType> & string}`;
export type PathSelector<T, PropType = string> = {
    [K in keyof T as T[K] extends object
        ? `${K & string}.${keyof PathSelector<T[K], PropType> & string}`
        : T[K] extends PropType
        ? `${K & string}`
        : never]: unknown;
};

export interface Theme {
    // typography
    mainFont: CSSFont;
    textFont: CSSFont;
    titleFont: CSSFont;
    monoFont?: CSSFont;

    // effects
    radius?: CSSRadius;

    // monochrome
    foreground: CSSColor;
    subForeground: CSSColor;
    disabledForeground: CSSColor;
    background: CSSColor;
    subBackground: CSSColor;
    disabledBackground: CSSColor;

    // colors
    red: CSSColor;
    blue: CSSColor;
    lime: CSSColor;
    gray: CSSColor;
    pink: CSSColor;
    white: CSSColor;
    black: CSSColor;
    green: CSSColor;
    indigo: CSSColor;
    orange: CSSColor;
    purple: CSSColor;
    yellow: CSSColor;
    magenta: CSSColor;
    turquoise: CSSColor;

    // input
    input: {
        color: CSSColor;
        radius: CSSRadius;
        border: CSSBorder;
        background: CSSColor;
        transition: `${number}s`;

        hover: {
            radius: CSSRadius;
            border: CSSBorder;
            background: CSSColor;
        };

        focus: {
            radius: CSSRadius;
            border: CSSBorder;
            background: CSSColor;
        };
    };

    // button
    button: {
        color: CSSColor;
        radius: CSSRadius;
        border: CSSBorder;
        background: CSSColor;
        transition: `${number}s`;

        hover: {
            radius: CSSRadius;
            border: CSSBorder;
            background: CSSColor;
        };

        focus: {
            radius: CSSRadius;
            border: CSSBorder;
            background: CSSColor;
        };
    };
}

const themePrefix = 'theme:';
// TODO: get rid of defaultValue and type prop: T to prop: T | ThemeKey
export const themeProp = <T extends WithTheme<any>>(prop: T, defaultValue?: string) => {
    if (typeof prop === 'string' && prop.startsWith(themePrefix)) {
        const propsWithoutPrefix = prop.replace(themePrefix, '--joy-').replaceAll('.', '-');
        return `var(${propsWithoutPrefix})`;
    }
    if (typeof prop === 'undefined' && defaultValue) {
        const propsWithoutPrefix = defaultValue.replace(themePrefix, '--joy-').replaceAll('.', '-');
        return `var(${propsWithoutPrefix})`;
    }
    return prop;
};

export const fontWeightToCss = {
    thin: '100',
    extraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
    default: undefined,
};
