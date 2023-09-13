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
import type {Placement} from '@floating-ui/react';
import {cloneElement} from 'react';
import type {PropsWithChildren, ReactNode} from 'react';

type Props = {
    isOpen: boolean;
    onChange: (value: boolean) => void;
    //
    target: ReactNode;
    placement?: Placement;
};

export const Popover = ({isOpen, onChange, target, placement, children}: PropsWithChildren<Props>) => {
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
    const targetWithProps = cloneElement(target as any, {ref: refs.setReference, ...getReferenceProps()});
    const childrenWithProps = cloneElement(children as any, {ref: refs.setFloating, style: floatingStyles, ...getFloatingProps()});
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
};
