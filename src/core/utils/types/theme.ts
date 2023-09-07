export type CSSNumber<Unit extends string> = '0' | `${number}${Unit}`;
export type CSSGap = CSSNumber<'rem'>;
export type CSSFont = `normal ${number} 1em ${string}` | `var(--${string})`;
export type CSSWidth = CSSNumber<'rem' | '%'> | 'fit-content';
export type CSSHeight = CSSNumber<'rem'> | 'fill';
export type CSSRadius = CSSNumber<'rem' | 'em' | '%'>;
export type CSSColor = `#${string}` | 'magenta' | 'transparent';
export type CSSBorder = 'none' | `${number}px ${'solid' | 'dashed' | 'dotted'} ${CSSColor}`;
export type CSSShadow = `${number}em ${number}em ${number}em ${number}em ${CSSColor}`;
export type CSSMargin = '0' | `${number}rem` | `${number}%` | 'auto';
export type CSSPadding = '0' | `${number}rem` | `${number}em`;
export type CSSOverflow = 'auto' | 'hidden' | 'visible';
export type CSSPosition = 'absolute' | 'relative';

export type CSSFontSize = `${number}rem` | `clamp(${number}rem, ${number}vw, ${number}rem)`;
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
    bg?: CSSColor;
    blur?: CSSNumber<'rem'>;
    border?: CSSBorder;
    radius?: CSSRadius;
    shadow?: CSSShadow | CSSShadow[];
};

type Transform = {
    scale?: CSSScale;
    rotate?: CSSRotate;
    translate?: CSSTranslate;
};

// TODO: Default the maximum stuff
export interface Theme {
    // typography
    fonts: {
        ui?: CSSFont;
        mono?: CSSFont;
        button?: CSSFont;
        heading?: CSSFont;
        content?: CSSFont;
        boldContent?: CSSFont;
    };

    colors: {
        bg?: CSSColor;
        fg?: CSSColor;
        area?: CSSColor;
        dimmed?: CSSColor;
        accent?: CSSColor;
        success?: CSSColor;
        error?: CSSColor;
    };

    scrollbar: {
        thumb: CSSColor;
        _hover: {
            thumb: CSSColor;
        };
    };

    card: Surface;
    backdrop: {
        blur: `${number}px`;
        color: CSSColor;
    };

    // input
    input: {
        color: CSSColor;
        transition?: `${number}s`;

        _hover: Surface;
        _focus: Surface;
    } & Surface;

    // button
    button: {
        color?: CSSColor;
        transition?: `${number}s`;

        _hover: {color?: CSSColor} & Surface & Transform;
        _focus: {color?: CSSColor} & Surface & Transform;
        _disabled: {color?: CSSColor} & Surface & Transform;
    } & Surface &
        Transform;

    // toggle
    toggle: {
        thumb: Surface;
        transition?: `${number}s`;
        _checked: Surface;
    } & Surface;

    // checkbox
    checkbox: {
        color: CSSColor;
        transition?: `${number}s`;

        _checked: Surface;
        _disabled: {color?: CSSColor} & Surface;
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
