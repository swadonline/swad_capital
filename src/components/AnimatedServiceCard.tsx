'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface AnimatedServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
  delay?: number;
}

export default function AnimatedServiceCard({
  title,
  description,
  link,
  icon,
  delay = 0,
}: AnimatedServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay }}
    >
      <Link
        href={link}
        className="group block h-full p-10 bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-corporate-gray-200 hover:border-primary/30 relative overflow-hidden"
      >
        {/* Continuously animated background orb */}
        <motion.div
          className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 10, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Pulsing glow on hover */}
        <motion.div
          className="absolute top-0 right-0 w-24 h-24 bg-primary/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative">
          {/* Continuously pulsing icon container */}
          <motion.div
            className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: delay * 0.5,
            }}
            whileHover={{
              scale: 1.15,
              rotate: [0, -5, 5, -5, 0],
            }}
          >
            {icon}
          </motion.div>

          <h3 className="text-xl font-display font-bold text-corporate-gray-900 mb-4 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-corporate-gray-600 leading-relaxed mb-6">
            {description}
          </p>
          
          <motion.div
            className="text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center"
            whileHover={{ x: 8 }}
          >
            Learn more
            <motion.svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

