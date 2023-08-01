import {useCallback, useState} from 'react';
import type {FormEvent, ChangeEvent} from 'react';

type InputEvent =
    | string
    | FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    | ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export const useInputState = <T extends string>(initialValue: T) => {
    const [value, setValue] = useState<T>(initialValue);
    const handleChange = useCallback((e: InputEvent) => {
        if (typeof e === 'string') {
            setValue(e as T);
        } else {
            setValue((e as FormEvent<HTMLInputElement>).currentTarget.value as T);
        }
    }, []);
    return [value, handleChange] as const;
};
