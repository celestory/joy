export type DeepMerge<T1, T2> = T1 extends object
    ? T2 extends object
        ? MergeToOne<
              {[K in keyof T2 & keyof T1 & RequiredKeys<T1 | T2>]: DeepMerge<T1[K], T2[K]>} & {
                  [K in keyof T2 & keyof T1 & OptionalKeys<T1 | T2>]?: DeepMerge<T1[K], T2[K]>;
              } & {[K in Exclude<RequiredKeys<T1>, keyof T2>]: T1[K]} & {[K in Exclude<OptionalKeys<T1>, keyof T2>]?: T1[K]} & {
                  [K in Exclude<RequiredKeys<T2>, keyof T1>]: T2[K];
              } & {[K in Exclude<OptionalKeys<T2>, keyof T1>]?: T2[K]}
          >
        : T1 extends object
        ? T2
        : T1 | T2
    : T2 extends object
    ? T1
    : T1 | T2;

type MergeToOne<T> = T extends object
    ? {
          [K in keyof T]: K extends RequiredKeys<T> ? Exclude<T[K], undefined> : T[K];
      }
    : never;

type RequiredKeys<T> = {[K in keyof T]-?: NonNullable<unknown> extends Pick<T, K> ? never : K}[keyof T];
type OptionalKeys<T> = {[K in keyof T]-?: NonNullable<unknown> extends Pick<T, K> ? K : never}[keyof T];
