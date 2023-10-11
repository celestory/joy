import {
    flip,
    shift,
    offset,
    autoUpdate,
    //
    useRole,
    useClick,
    useDismiss,
    useFloating,
    useInteractions,
    FloatingFocusManager,
} from '@floating-ui/react';
import {cloneElement, memo, useMemo} from 'react';
import type {Placement} from '@floating-ui/react';
import type {PropsWithChildren, ReactNode} from 'react';

type Props = {
    isOpen: boolean;
    onChange: (value: boolean) => void;
    //
    target: ReactNode;
    placement?: Placement;
};

export const Popover = memo(function Popover({isOpen, onChange, target, placement, children}: PropsWithChildren<Props>) {
    const {refs, floatingStyles, context} = useFloating({
        placement,
        open: isOpen,
        onOpenChange: onChange,
        middleware: [offset(10), flip(), shift()],
        whileElementsMounted: autoUpdate,
    });
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);
    const {getReferenceProps, getFloatingProps} = useInteractions([click, dismiss, role]);
    const targetWithProps = useMemo(
        () => cloneElement(target as any, {ref: refs.setReference, ...getReferenceProps()}),
        [getReferenceProps, refs.setReference, target],
    );
    const childrenWithProps = useMemo(
        () => cloneElement(children as any, {ref: refs.setFloating, style: floatingStyles, ...getFloatingProps()}),
        [children, floatingStyles, getFloatingProps, refs.setFloating],
    );
    return (
        <>
            {targetWithProps}
            {isOpen && (
                <FloatingFocusManager context={context} modal={false}>
                    {childrenWithProps}
                </FloatingFocusManager>
            )}
        </>
    );
});
