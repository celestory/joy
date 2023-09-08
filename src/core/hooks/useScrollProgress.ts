import {useCallback, useState} from 'react';
import type {UIEvent} from 'react';

export const useScrollProgress = (dontStick?: boolean) => {
    const [progress, setProgress] = useState(0);
    const handleScroll = useCallback(
        (e: UIEvent<HTMLDivElement>) => {
            if (!dontStick && progress >= 0.99) {
                setProgress(1);
                return;
            }
            const el = e.currentTarget;
            setProgress(Math.floor(el.scrollTop) / (el.scrollHeight - el.clientHeight));
        },
        [progress, dontStick],
    );
    return [progress, handleScroll] as const;
};
