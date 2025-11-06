'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import AnimatedSection from './AnimatedSection';

interface Advantage {
  title: string;
  desc: string;
  icon: ReactNode;
}

interface AnimatedAdvantageProps {
  advantages: Advantage[];
}

export default function AnimatedAdvantage({ advantages }: AnimatedAdvantageProps) {
  return (
    <div className="space-y-8">
      {advantages.map((item, index) => (
        <AnimatedSection key={index} animation="fadeInLeft" delay={index * 0.1}>
          <div className="flex items-start space-x-6 group">
            <motion.div
              className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300 relative"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.5,
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
              }}
            >
              <motion.div
                className="text-primary"
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.3,
                }}
              >
                {item.icon}
              </motion.div>
              {/* Pulsing glow */}
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-xl blur-md -z-10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.4,
                }}
              />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-xl font-display font-bold text-corporate-gray-900 mb-3">{item.title}</h3>
              <p className="text-corporate-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}

