'use client';

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.15,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
    delay = 0
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Add a small delay for smoother animation
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
            if (triggerOnce) {
              observer.unobserve(element);
            }
          }, delay);
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, delay, hasAnimated]);

  return { elementRef, isVisible };
}

// Hook for staggered animations
export function useStaggeredScrollAnimation(
  itemCount: number,
  options: UseScrollAnimationOptions = {}
) {
  const { elementRef, isVisible } = useScrollAnimation(options);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false)
  );

  useEffect(() => {
    if (isVisible) {
      const delays = Array.from({ length: itemCount }, (_, index) => index * 100);
      
      delays.forEach((delay, index) => {
        setTimeout(() => {
          setVisibleItems(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }, delay);
      });
    }
  }, [isVisible, itemCount]);

  return { elementRef, isVisible, visibleItems };
}
