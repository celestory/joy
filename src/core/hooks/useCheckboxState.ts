import {useCallback, useState} from 'react';
import type {FormEvent, ChangeEvent} from 'react';

type CheckboxEvent = ChangeEvent<HTMLInputElement> | FormEvent<HTMLInputElement>;

export const useCheckboxState = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = useCallback((e: CheckboxEvent) => {
        setValue(e.currentTarget.checked);
    }, []);
    return [value, handleChange] as const;
};
