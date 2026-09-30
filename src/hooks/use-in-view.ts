import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement = HTMLElement>({ threshold = 0.1, triggerOnce = true } = {}) {
    const ref = useRef<T>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                if (triggerOnce && currentRef) {
                    observer.unobserve(currentRef);
                }
            } else if (!triggerOnce) {
                setIsInView(false);
            }
        }, { threshold });

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold, triggerOnce]);

    return { ref, isInView };
}
