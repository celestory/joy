import {useCallback, useState} from 'react';
import type {ChangeEvent, FormEvent} from 'react';

type RangeOptions = {
    min?: number;
    max?: number;
    step?: number;
};

export const useRangeState = (initialValue: number, options: RangeOptions) => {
    const [value, setValue] = useState(initialValue);

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement> | FormEvent<HTMLInputElement>) => {
        setValue(parseFloat(event.currentTarget.value));
    }, []);

    return {value, onChange, ...options} as const;
};
