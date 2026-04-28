import { useEffect, useRef, useState } from 'react';

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useInView(options: InViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px',
      }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [options.threshold, options.rootMargin]);

  return { ref, isInView };
}
