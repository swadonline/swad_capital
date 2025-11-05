'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReactNode, useState, useEffect } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeInDown' | 'scaleIn' | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown' | 'zoomIn' | 'flipInX' | 'flipInY' | 'bounceIn' | 'rotateIn' | 'fadeIn';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function AnimatedSection({ 
  children, 
  animation = 'fadeInUp',
  delay = 0,
  duration = 800,
  className = '',
  threshold = 0.1,
  triggerOnce = true
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const durationClass = `duration-${duration}`;
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeInUp':
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
        case 'fadeInLeft':
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`;
        case 'fadeInRight':
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`;
        case 'fadeInDown':
          return `${baseClasses} ${durationClass} opacity-0 -translate-y-8`;
        case 'fadeIn':
          return `${baseClasses} ${durationClass} opacity-0`;
        case 'scaleIn':
          return `${baseClasses} ${durationClass} opacity-0 scale-95`;
        case 'zoomIn':
          return `${baseClasses} ${durationClass} opacity-0 scale-50`;
        case 'slideInLeft':
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-12`;
        case 'slideInRight':
          return `${baseClasses} ${durationClass} opacity-0 translate-x-12`;
        case 'slideInUp':
          return `${baseClasses} ${durationClass} opacity-0 translate-y-12`;
        case 'slideInDown':
          return `${baseClasses} ${durationClass} opacity-0 -translate-y-12`;
        case 'flipInX':
          return `${baseClasses} ${durationClass} opacity-0 rotate-x-90`;
        case 'flipInY':
          return `${baseClasses} ${durationClass} opacity-0 rotate-y-90`;
        case 'bounceIn':
          return `${baseClasses} ${durationClass} opacity-0 scale-75`;
        case 'rotateIn':
          return `${baseClasses} ${durationClass} opacity-0 rotate-12 scale-95`;
        default:
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} ${durationClass} opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0`;
  };

  return (
    <div 
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}