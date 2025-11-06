'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import AnimatedSection from './AnimatedSection';

interface AnimatedFeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export default function AnimatedFeatureCard({
  title,
  description,
  icon,
  delay = 0,
}: AnimatedFeatureCardProps) {
  return (
    <AnimatedSection animation="fadeInUp" delay={delay}>
      <motion.div
        className="group relative p-10 rounded-2xl bg-gradient-to-br from-corporate-gray-50 to-white border border-corporate-gray-200 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl"
        whileHover={{
          y: -5,
        }}
      >
        {/* Continuously animated background orb */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: delay * 0.3,
          }}
        />
        
        <div className="relative">
          {/* Pulsing icon container */}
          <motion.div
            className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
            animate={{
              scale: [1, 1.08, 1],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: delay * 0.4,
            }}
            whileHover={{
              scale: 1.15,
              rotate: [0, -10, 10, 0],
            }}
          >
            <motion.div
              className="text-primary"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: delay * 0.5,
              }}
            >
              {icon}
            </motion.div>
            {/* Glowing ring */}
            <motion.div
              className="absolute inset-0 border-2 border-primary/20 rounded-2xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: delay * 0.6,
              }}
            />
          </motion.div>
          <h3 className="text-2xl font-display font-bold text-corporate-gray-900 mb-4">{title}</h3>
          <p className="text-corporate-gray-600 leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

