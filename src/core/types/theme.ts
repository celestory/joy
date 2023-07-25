export type CSSFont = 'serif' | 'sans-serif' | 'monospace';
export type CSSWidth = '0' | `${number}rem` | `${number}%` | 'fit-content';
export type CSSHeight = '0' | `${number}rem` | 'fill';
export type CSSColor = `#${string}` | `hsla(${number}, ${number}%, ${number}%, ${number})`;
export type CSSMargin = '0' | `${number}rem` | `${number}%` | 'auto';
export type CSSPadding = '0' | `${number}rem` | `${number}em`;
export type CSSOverflow = 'auto' | 'hidden' | 'visible';
export type CSSPosition = 'absolute' | 'relative';
export type CSSFontSize = `${number}rem`;
export type CSSFontWeight = keyof typeof fontWeightToCss;

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

export interface Theme {
    // typography
    mainFont: CSSFont;
    textFont: CSSFont;
    titleFont: CSSFont;
    monoFont?: CSSFont;

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
}

export type ThemeProp<PropType> = PropType | `theme.${keyof PathSelector<Theme, PropType> & string}`;
export type PathSelector<T, PropType = string> = {
    [K in keyof T as T[K] extends object
        ? `${K & string}.${keyof PathSelector<T[K], PropType> & string}`
        : T[K] extends PropType
        ? `${K & string}`
        : never]: unknown;
};
