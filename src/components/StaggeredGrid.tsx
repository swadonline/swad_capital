'use client';

import { ReactNode } from 'react';
import { useStaggeredScrollAnimation } from '@/lib/useScrollAnimation';

interface StaggeredGridProps {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
  threshold?: number;
  duration?: number;
  animationPattern?: 'wave' | 'cascade' | 'random' | 'columns';
  gridColumns?: 2 | 3 | 4;
}

export default function StaggeredGrid({
  children,
  className = '',
  itemClassName = '',
  staggerDelay = 200,
  threshold = 0.15,
  duration = 1200,
  animationPattern = 'wave',
  gridColumns = 4
}: StaggeredGridProps) {
  const { elementRef, visibleItems } = useStaggeredScrollAnimation(children.length, { 
    threshold,
    rootMargin: '0px 0px -100px 0px'
  });

  const getGridClass = () => {
    switch (gridColumns) {
      case 2: return 'grid-2-col';
      case 3: return 'grid-3-col';
      case 4: return 'grid-4-col';
      default: return 'grid-4-col';
    }
  };

  const getAnimationDelay = (index: number) => {
    switch (animationPattern) {
      case 'wave':
        return index * staggerDelay;
      case 'cascade':
        return Math.floor(index / gridColumns) * (staggerDelay * 2) + (index % gridColumns) * staggerDelay;
      case 'random':
        return Math.random() * (staggerDelay * children.length);
      case 'columns':
        return (index % gridColumns) * staggerDelay + Math.floor(index / gridColumns) * (staggerDelay * 0.5);
      default:
        return index * staggerDelay;
    }
  };

  return (
    <div ref={elementRef} className={`${className} ${getGridClass()}`}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`stagger-item ${visibleItems[index] ? 'animate' : ''} ${itemClassName}`}
          style={{ 
            transitionDelay: `${getAnimationDelay(index)}ms`,
            transitionDuration: `${duration}ms`
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
