import {useCallback, useState} from 'react';
import type {FormEvent, ChangeEvent, FormEventHandler, ChangeEventHandler} from 'react';

type InputEl = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type InputEvent<T extends string> = FormEvent<InputEl> | ChangeEvent<InputEl> | T;
type InputEventHandler = FormEventHandler<InputEl> | ChangeEventHandler<InputEl>;

export const useInputState = <T extends string>(initialValue: T) => {
    const handleChange = useCallback<InputEventHandler>((event: InputEvent<T>) => {
        setValue(typeof event === 'string' ? event : (event.currentTarget.value as T));
    }, []);
    const [value, setValue] = useState<T>(initialValue);
    return [value, handleChange, setValue] as const;
};
