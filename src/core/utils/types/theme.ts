export type CSSGap = '0' | `${number}rem`;
export type CSSFont = `normal ${number} 1em ${string}`;
export type CSSWidth = '0' | `${number}rem` | `${number}%` | 'fit-content';
export type CSSHeight = '0' | `${number}rem` | 'fill';
export type CSSRadius = '0' | `${number}rem` | `${number}em` | `${number}%`;
export type CSSColor = `#${string}` | 'magenta' | 'transparent';
export type CSSBorder = 'none' | `${number}px ${'solid' | 'dashed' | 'dotted'} ${CSSColor}`;
export type CSSShadow = `${number}em ${number}em ${number}em ${number}em ${CSSColor}`;
export type CSSMargin = '0' | `${number}rem` | `${number}%` | 'auto';
export type CSSPadding = '0' | `${number}rem` | `${number}em`;
export type CSSOverflow = 'auto' | 'hidden' | 'visible';
export type CSSPosition = 'absolute' | 'relative';

export type CSSFontSize = `${number}rem`;
export type CSSFontWeight = keyof Omit<typeof fontWeightToCss, 'default'>;

export type CSSScale = `${number}`;
export type CSSRotate = `${number}deg`;
export type CSSTranslate = `${'0' | `${number}em`} ${'0' | `${number}em`}`;

export type ThemeKey<PropType> = `${typeof themePrefix}${keyof PathSelector<Theme, PropType> & string}`;
export type WithTheme<PropType> = PropType | ThemeKey<PropType>;
export type PathSelector<T, PropType = string> = {
    [K in keyof T as T[K] extends object
        ? `${K & string}.${keyof PathSelector<T[K], PropType> & string}`
        : T[K] extends PropType | undefined
        ? `${K & string}`
        : never]: unknown;
};

type Surface = {
    border?: CSSBorder;
    radius?: CSSRadius;
    shadow?: CSSShadow | CSSShadow[];
    background?: CSSColor;
};

type Transform = {
    scale?: CSSScale;
    rotate?: CSSRotate;
    translate?: CSSTranslate;
};

// TODO: Default the maximum stuff
export interface Theme {
    // typography
    font: {
        ui?: CSSFont;
        mono?: CSSFont;
        button?: CSSFont;
        heading?: CSSFont;
        content?: CSSFont;
        boldContent?: CSSFont;
    };

    // monochrome
    foreground: CSSColor;
    subForeground: CSSColor;
    background: CSSColor;
    subBackground: CSSColor;

    brand: CSSColor;

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

    scrollbar: {
        thumb: CSSColor;
        hover: {
            thumb: CSSColor;
        };
    };

    card: Surface;

    // input
    input: {
        color: CSSColor;

        transition?: `${number}s`;
        hover: Surface;
        focus: Surface;
    } & Surface;

    // button
    button: {
        color?: CSSColor;

        transition?: `${number}s`;

        hover: {
            color?: CSSColor;
        } & Surface &
            Transform;

        focus: {
            color?: CSSColor;
        } & Surface &
            Transform;

        disabled: {
            color?: CSSColor;
        } & Surface &
            Transform;
    } & Surface &
        Transform;

    // toggle
    toggle: {
        thumb: Surface;
        checked: Surface;
        transition?: `${number}s`;
    } & Surface;

    // checkbox
    checkbox: {
        color: CSSColor;
        checked: Surface;
        disabled: {
            color?: CSSColor;
        } & Surface;
        transition?: `${number}s`;
    } & Surface;

    // range
    range: {
        thumb: Surface;
    } & Surface;
}

const themePrefix = 'theme:';
export const themeProp = <T extends WithTheme<any>>(prop: T, defaultValue?: string) => {
    if (typeof prop === 'string' && prop.startsWith(themePrefix)) {
        const propsWithoutPrefix = prop.replace(themePrefix, '--joy-').replaceAll('.', '-');
        return `var(${propsWithoutPrefix})`;
    }
    if (typeof prop === 'undefined' && defaultValue) {
        return defaultValue;
    }
    return prop;
};
export const themeConst = <T = any>(prop: ThemeKey<T>, defaultValue?: string) => {
    if (prop) {
        const propsWithoutPrefix = prop.replace(themePrefix, '--joy-').replaceAll('.', '-');
        return `var(${propsWithoutPrefix})`;
    }
    return defaultValue;
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
    //
    default: undefined,
};
