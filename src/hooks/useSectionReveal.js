import { useEffect, useMemo, useRef, useState } from "react";

export function useSectionReveal(options = {}) {
  const {
    threshold = 0.18,
    rootMargin = "0px 0px -8% 0px",
    once = true,
    disabled = false,
    initialVisible = false,
  } = options;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(initialVisible);

  const thresholdKey = Array.isArray(threshold)
    ? threshold.join(",")
    : String(threshold);

  const observerThreshold = useMemo(() => threshold, [thresholdKey]);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    if (disabled) {
      setIsVisible(true);
      return;
    }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: observerThreshold,
        rootMargin,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [observerThreshold, rootMargin, once, disabled]);

  return [ref, isVisible];
}