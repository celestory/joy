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

export type WithTheme<PropType> = PropType | `${typeof themePrefix}${keyof PathSelector<Theme, PropType> & string}`;
export type PathSelector<T, PropType = string> = {
    [K in keyof T as T[K] extends object
        ? `${K & string}.${keyof PathSelector<T[K], PropType> & string}`
        : T[K] extends PropType | undefined
        ? `${K & string}`
        : never]: unknown;
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

    scrollbar?: {
        thumb: CSSColor;
        hover: {
            thumb: CSSColor;
        };
    };

    card: {
        border?: CSSBorder;
        radius?: CSSRadius;
        shadow?: CSSShadow | CSSShadow[];
        background: CSSColor;
    };

    // input
    input: {
        color: CSSColor;

        // surface
        border?: CSSBorder;
        radius?: CSSRadius;
        shadow?: CSSShadow | CSSShadow[];
        background?: CSSColor;

        transition?: `${number}s`;

        hover: {
            // surface
            border?: CSSBorder;
            radius?: CSSRadius;
            shadow?: CSSShadow | CSSShadow[];
            background?: CSSColor;
        };

        focus: {
            // surface
            border?: CSSBorder;
            radius?: CSSRadius;
            shadow?: CSSShadow | CSSShadow[];
            background?: CSSColor;
        };
    };

    // button
    button: {
        color?: CSSColor;

        // surface
        border?: CSSBorder;
        radius?: CSSRadius;
        shadow?: CSSShadow | CSSShadow[];
        background: CSSColor;

        scale?: CSSScale;
        rotate?: CSSRotate;
        translate?: CSSTranslate;

        transition?: `${number}s`;

        hover: {
            color?: CSSColor;

            // surface
            border?: CSSBorder;
            radius?: CSSRadius;
            shadow?: CSSShadow | CSSShadow[];
            background?: CSSColor;

            scale?: CSSScale;
            rotate?: CSSRotate;
            translate?: CSSTranslate;
        };

        focus: {
            color?: CSSColor;

            // surface
            border?: CSSBorder;
            radius?: CSSRadius;
            shadow?: CSSShadow | CSSShadow[];
            background?: CSSColor;

            scale?: CSSScale;
            rotate?: CSSRotate;
            translate?: CSSTranslate;
        };

        disabled: {
            color?: CSSColor;

            // surface
            border?: CSSBorder;
            radius?: CSSRadius;
            shadow?: CSSShadow | CSSShadow[];
            background?: CSSColor;

            scale?: CSSScale;
            rotate?: CSSRotate;
            translate?: CSSTranslate;
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
    //
    default: undefined,
};
