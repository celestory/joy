import {useCallback, useState} from 'react';
import type {FormEvent, ChangeEvent, FormEventHandler, ChangeEventHandler} from 'react';

type InputEventHandler =
    | FormEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

type InputEvent =
    | FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    | ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

export const useInputState = <T extends string>(initialValue: T) => {
    const [value, setValue] = useState<T>(initialValue);
    const handleChange = useCallback<InputEventHandler>((event: InputEvent) => {
        setValue(event.currentTarget.value as T);
    }, []);
    return [value, handleChange] as const;
};
