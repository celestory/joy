import {useCallback, useState} from 'react';
import type {FormEvent, ChangeEvent} from 'react';

type InputEvent =
    | string
    | FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    | ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export const useInputState = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);
    const handleChange = useCallback((e: InputEvent) => {
        if (typeof e === 'string') {
            setValue(e as string);
        } else {
            setValue((e as FormEvent<HTMLInputElement>).currentTarget.value);
        }
    }, []);
    return [value, handleChange] as const;
};
