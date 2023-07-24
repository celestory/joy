type BreakpointName<T> = (T & string) | `${keyof typeof breakpoints}-${T & string}`;

export type Breakpoints = keyof typeof breakpoints;
export type WithBreakpoint<T> = [T];
export type MakeBreakpoints<T extends object> = {
    [K in keyof T as T[K] extends WithBreakpoint<unknown> | undefined ? BreakpointName<K> : K]: T[K] extends WithBreakpoint<infer U> | undefined ? U : T[K];
};

export const breakpoints = {
    xs: '320px',
    sm: '480px',
    md: '640px',
    lg: '720px',
    xl: '1080px',
    xxl: '1240px',
};
