import {useCallback, useRef} from 'react';

export const useDialogState = () => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const openDialog = useCallback(() => {
        dialogRef.current?.showModal();
    }, []);
    const closeDialog = useCallback(() => {
        if (dialogRef.current) {
            dialogRef.current.classList.add('joyDialogClosing');
            setTimeout(() => {
                dialogRef.current?.close();
                dialogRef.current?.classList.remove('joyDialogClosing');
            }, 300); // 💩
        }
    }, []);
    return [dialogRef, openDialog, closeDialog] as const;
};
