import { useEffect, useState, useCallback } from 'react';

/**
 * Custom hook to observe when a DOM element enters or leaves the viewport.
 *
 * @param {Object} options - IntersectionObserver options.
 * @param {Element|null} options.root - The element that is used as the viewport for checking visibility.
 * @param {string} options.rootMargin - Margin around the root.
 * @param {number|number[]} options.threshold - At what percentage of the target's visibility the observer's callback should be executed.
 * @param {boolean} options.freezeOnceVisible - Whether to stop observing once the element becomes visible.
 * @param {function} options.onChange - Optional callback to be invoked when intersection changes.
 * @returns {[function, boolean]} - A ref setter function and the current intersection state.
 */
export default function useIntersectionObserver({
  root = null,
  rootMargin = '0px',
  threshold = 0.1,
  freezeOnceVisible = false,
  onChange = null,
} = {}) {
  const [ref, setRef] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observerCallback = useCallback(
    ([entry], observerInstance) => {
      setIsIntersecting(entry.isIntersecting);
      if (onChange) {
        onChange(entry);
      }

      if (entry.isIntersecting && freezeOnceVisible) {
        observerInstance.disconnect();
      }
    },
    [freezeOnceVisible, onChange]
  );

  useEffect(() => {
    if (!ref || !(ref instanceof Element)) return;

    const observer = new IntersectionObserver(observerCallback, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, root, rootMargin, threshold, observerCallback]);

  return [setRef, isIntersecting];
}
