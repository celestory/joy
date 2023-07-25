import {useCallback, useState} from 'react';
import type {FormEvent, ChangeEvent} from 'react';

type InputStringChangeEvent =
    | string
    | FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    | ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
export type InputStringChangeCallback = (e: InputStringChangeEvent) => void;

export const useInputState = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);
    const handleChange = useCallback((e: InputStringChangeEvent) => {
        if (typeof e === 'string') {
            setValue(e as string);
        } else {
            setValue((e as FormEvent<HTMLInputElement>).currentTarget.value);
        }
    }, []);
    return [value, handleChange] as const;
};
