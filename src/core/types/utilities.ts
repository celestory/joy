import type {CSSProperties, PropsWithChildren} from 'react';

export type PropsWithStyle<T> = PropsWithChildren<T> & {style?: CSSProperties; className?: string};
