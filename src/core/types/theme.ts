export type CSSFont = 'Arial' | 'Lucida';
export type CSSSize = '0' | `${number}rem` | `${number}%` | 'fit-content';
export type CSSColor = `#${string}` | `hsla(${number}, ${number}%, ${number}%, ${number})`;
export type CSSMargin = '0' | `${number}rem` | `${number}%` | 'auto';
export type CSSPadding = '0' | `${number}rem` | `${number}em`;
export type CSSOverflow = 'auto' | 'hidden' | 'visible';
export type CSSPosition = 'absolute' | 'relative';
export type CSSFontSize = `${number}rem`;

export interface Theme {
    font: CSSFont;
    fontSize: CSSFontSize;
    //
    margin: CSSMargin;
    padding: CSSPadding;
    //
    red: CSSColor;
    green: CSSColor;

    subStuff: {
        red: CSSColor;
        green: CSSColor;
    };
}

export type ThemeProp<PropType> = PropType | `theme.${keyof PathSelector<Theme, PropType> & string}`;
export type PathSelector<T, PropType = string> = {
    [K in keyof T as T[K] extends object
        ? `${K & string}.${keyof PathSelector<T[K], PropType> & string}`
        : T[K] extends PropType
        ? `${K & string}`
        : never]: unknown;
};
