import {useEffect, useRef, useState} from 'react';

type Props = {rootMargin: `${number}%` | '0'};

export const useIntersectionObserver = ({rootMargin}: Props) => {
    const scrollRef = useRef<HTMLElement>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry?.isIntersecting ?? false);
            },
            {rootMargin},
        );
        if (scrollRef.current) {
            observer.observe(scrollRef.current);
        }
        return () => observer.disconnect();
    }, [isIntersecting, rootMargin, scrollRef]);
    return [scrollRef, isIntersecting] as const;
};
