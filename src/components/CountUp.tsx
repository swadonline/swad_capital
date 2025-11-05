'use client';

import { useCountUp } from '@/hooks/useCountUp';

interface CountUpProps {
  end: number;
  duration?: number;
  start?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function CountUp({ 
  end, 
  duration = 2000, 
  start = 0, 
  suffix = '', 
  prefix = '', 
  className = '' 
}: CountUpProps) {
  const { count, ref } = useCountUp({ 
    end, 
    duration, 
    start, 
    suffix, 
    prefix 
  });

  return (
    <div ref={ref} className={className}>
      {count}
    </div>
  );
}
