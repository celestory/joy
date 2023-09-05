import {useCallback, useRef} from 'react';

export const useDialogState = () => {
    const ref = useRef<HTMLDialogElement>(null);
    const open = useCallback(() => {
        ref.current?.showModal();
    }, []);
    const close = useCallback(() => {
        if (ref.current) {
            ref.current.classList.add('joyDialogClosing');
            setTimeout(() => {
                ref.current?.close();
                ref.current?.classList.remove('joyDialogClosing');
            }, 300); // 💩
        }
    }, []);
    return {ref, open, close} as const;
};
