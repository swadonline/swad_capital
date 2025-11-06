'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface CorporateHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  className?: string;
  size?: 'large' | 'medium';
}

export default function CorporateHero({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  className = '',
  size = 'medium',
}: CorporateHeroProps) {
  const heightClass = size === 'large' ? 'min-h-[90vh]' : 'min-h-[50vh]';
  
  return (
    <section className={`relative ${heightClass} flex items-center justify-center overflow-hidden ${backgroundImage ? '' : 'bg-gradient-to-b from-corporate-gray-900 via-corporate-gray-800 to-corporate-gray-900'} ${className}`}>
      {/* Background Pattern - only show if no background image */}
      {!backgroundImage && (
        <>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }} />
          </div>

          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(108, 0, 0, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(108, 0, 0, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(108, 0, 0, 0.1) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </>
      )}

      {backgroundImage && (
        <>
          {/* Background Image with subtle blur for depth */}
          <div className="absolute inset-0" aria-hidden="true">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//Z"
            />
          </div>
          {/* Strong gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-corporate-gray-900/90 via-corporate-gray-900/80 to-corporate-gray-900/90" />
          {/* Additional overlay for depth and brand color integration */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-transparent to-primary/15" />
          {/* Subtle vignette effect for depth */}
          <div 
            className="absolute inset-0" 
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(17, 24, 39, 0.3) 100%)'
            }}
          />
        </>
      )}

      <div className={`container-max relative z-10 px-4 sm:px-6 lg:px-8 ${size === 'large' ? 'py-24 lg:py-32' : 'py-16 lg:py-20'}`}>
        <div className="max-w-5xl mx-auto text-center">
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm md:text-base font-medium text-corporate-gray-400 uppercase tracking-wider mb-6"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-display-2 font-display font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-corporate-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {ctaText && ctaLink && (
              <Link
                href={ctaLink}
                className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-primary-light hover:shadow-2xl hover:shadow-primary/30 hover:scale-105"
              >
                <span className="relative z-10">{ctaText}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            )}

            {secondaryCtaText && secondaryCtaLink && (
              <Link
                href={secondaryCtaLink}
                className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                {secondaryCtaText}
              </Link>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - only show on large size */}
      {size === 'large' && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-3 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}

