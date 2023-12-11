import {useState} from 'react';
import {useHookableRef, useRafCallback, useResizeObserver} from '@react-hookz/web';
import type {MutableRefObject} from 'react';
import type {UseResizeObserverCallback} from '@react-hookz/web';

interface Measure {
    x: number;
    y: number;
    width: number;
    height: number;
}

export const useMeasure = <T extends Element>(enabled = true): [Measure | undefined, MutableRefObject<T | null>] => {
    const elementRef = useHookableRef<T | null>(null, v => {
        setElement(v);
        return v;
    });
    const [observerHandler] = useRafCallback<UseResizeObserverCallback>(entry => {
        setMeasure({
            x: entry.contentRect.x,
            y: entry.contentRect.y,
            width: entry.contentRect.width,
            height: entry.contentRect.height,
        });
    });
    const [measure, setMeasure] = useState<Measure>();
    const [element, setElement] = useState<T | null>(null);

    useResizeObserver(element, observerHandler, enabled);
    return [measure, elementRef];
};
