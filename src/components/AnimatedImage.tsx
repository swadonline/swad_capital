'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

export default function AnimatedImage() {
  return (
    <AnimatedSection animation="fadeInRight">
      <motion.div
        className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Image
          src="/about-1.jpg"
          alt="Technology infrastructure and innovation"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-corporate-gray-900/20 to-transparent"
          animate={{
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Floating particles overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatedSection>
  );
}

