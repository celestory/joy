import {useCallback, useState} from 'react';

export const useOpenState = (initialValue = false) => {
    const [isOpen, set] = useState(initialValue);
    const open = useCallback(() => {
        set(true);
    }, []);
    const close = useCallback(() => {
        set(false);
    }, []);
    const toggle = useCallback(() => {
        set(value => !value);
    }, []);
    return {isOpen, set, open, close, toggle} as const;
};
