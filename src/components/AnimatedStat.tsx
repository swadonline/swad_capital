'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedStatProps {
  value: string;
  label: string;
  suffix?: string;
  delay?: number;
}

export default function AnimatedStat({ value, label, suffix = '', delay = 0 }: AnimatedStatProps) {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      onViewportEnter={() => setIsInView(true)}
      className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
    >
      {/* Continuously pulsing background */}
      <motion.div
        className="absolute inset-0 bg-primary/5 rounded-2xl"
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay * 0.3,
        }}
      />

      <div className="relative z-10">
        <motion.div
          className="text-5xl md:text-6xl font-display font-bold text-primary-light mb-4"
          animate={isInView ? {
            scale: [1, 1.05, 1],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: delay * 0.2,
          }}
        >
          {value}
          {suffix && <span className="text-4xl">{suffix}</span>}
        </motion.div>
        <div className="text-lg text-corporate-gray-300 font-medium">{label}</div>
      </div>
    </motion.div>
  );
}

