import {useCallback, useEffect, useState} from 'react';
import type {ChangeEvent} from 'react';

export const useLocationState = <T extends string>(defaultPath?: T) => {
    const getPathName = useCallback((): T => {
        const base = window.location.pathname.substring(1);
        return base === '' && defaultPath ? defaultPath : (base as T);
    }, [defaultPath]);
    const [pathName, setPathName] = useState<T>(getPathName());
    const handleChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        window.history.pushState({}, '💩', e.target.value);
        setPathName(e.target.value as T);
    }, []);
    useEffect(() => {
        const listener = () => {
            setPathName(getPathName());
        };
        window.addEventListener('popstate', listener);
        return () => window.removeEventListener('popstate', listener);
    }, [getPathName]);
    return [pathName, handleChange] as const;
};
