import {useCallback, useState} from 'react';

export const useToggleState = (initialValue = false) => {
    const [isToggle, set] = useState(initialValue);
    const open = useCallback(() => {
        set(true);
    }, []);
    const close = useCallback(() => {
        set(false);
    }, []);
    const toggle = useCallback(() => {
        set(value => !value);
    }, []);
    return {isToggle, set, open, close, toggle} as const;
};
