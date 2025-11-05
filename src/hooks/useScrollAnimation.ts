'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = ({ 
  threshold = 0.15, 
  rootMargin = '0px 0px -100px 0px',
  triggerOnce = true 
}: UseScrollAnimationProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    // Small delay to ensure the element is properly mounted
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce) {
              observer.unobserve(currentElement);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        },
        { 
          threshold,
          rootMargin
        }
      );

      observer.observe(currentElement);

      return () => {
        observer.unobserve(currentElement);
      };
    }, 50);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return {
    ref: elementRef,
    isVisible
  };
};
