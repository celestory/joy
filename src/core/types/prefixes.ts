export type Prefixes = keyof typeof prefixes;
export type WithPrefix<T> = [T];
export type WithPrefixName<T> = (T & string) | `${keyof typeof prefixes}-${T & string}`;
export type FlattenPrefixes<T extends object> = {
    [K in keyof T as T[K] extends WithPrefix<unknown> | undefined ? WithPrefixName<K> : K]: T[K] extends WithPrefix<infer U> | undefined ? U : T[K];
};

export const prefixes = {
    xs: '320px',
    sm: '480px',
    md: '640px',
    lg: '720px',
    xl: '1080px',
    xxl: '1240px',
};
