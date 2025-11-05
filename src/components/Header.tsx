'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);

  // Handle menu toggle with animation
  const toggleMenu = () => {
    if (isMenuOpen) {
      // Closing animation
      setShowMenuItems(false);
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 300); // Match transition duration
    } else {
      // Opening animation
      setIsMenuOpen(true);
      setIsAnimating(false);
      // Delay showing menu items for staggered effect
      setTimeout(() => {
        setShowMenuItems(true);
      }, 200);
    }
  };

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 animate-slide-in-top relative z-50">
      <nav className="container-max px-4 md:px-0">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover-scale transition-all duration-300 group">
            <div className="relative w-8 h-8 transition-all duration-300 group-hover:scale-110">
              <Image
                src="/logo/logo.jpeg"
                alt="SWAD Digital Solutions Logo"
                fill
                className="object-contain rounded-md"
                sizes="32px"
                priority
              />
            </div>
            <span className="text-xl font-bold text-primary transition-colors duration-300 group-hover:text-primary/80">SWAD Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 stagger-container">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-all duration-300 font-medium relative group hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary hover-scale animate-bounce-in"
              style={{ animationDelay: '0.4s' }}
            >
              Contact Sales
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 flex items-center justify-center relative z-[100001] ${
              isMenuOpen ? 'bg-gray-100' : ''
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              className={`w-6 h-6 transition-all duration-500 ease-in-out ${
                isMenuOpen 
                  ? 'rotate-180 scale-110 text-primary' 
                  : 'hover:scale-110 hover:text-primary'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden mobile-nav-overlay">
            {/* Backdrop */}
            <div 
              className={`mobile-nav-backdrop ${isMenuOpen ? 'open mobile-backdrop-enter' : 'mobile-backdrop-exit'}`}
              onClick={toggleMenu}
            />
            
            {/* Mobile Menu */}
            <div className={`mobile-nav-panel ${isMenuOpen ? 'open mobile-panel-enter' : 'mobile-panel-exit'}`}>
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className={`flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-white shadow-sm transition-all duration-300 transform ${
                  showMenuItems 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-2'
                }`}
                style={{
                  transitionDelay: showMenuItems ? '100ms' : '0ms'
                }}>
                  <div className="flex items-center space-x-3">
                    <div className="relative w-8 h-8">
                      <Image
                        src="/logo/logo.jpeg"
                        alt="SWAD Digital Solutions Logo"
                        fill
                        className="object-contain rounded-md"
                        sizes="32px"
                      />
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-primary">SWAD Digital</span>
                  </div>
                  <button
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    onClick={toggleMenu}
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                
                {/* Navigation Links */}
                <div className="flex-1 px-4 sm:px-6 py-6 sm:py-8 overflow-y-auto bg-white">
                  <div className="flex flex-col space-y-1">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-base sm:text-lg text-gray-800 hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium py-4 px-4 rounded-lg border-b border-gray-100 last:border-b-0 active:bg-primary/10 touch-manipulation transform ${
                          showMenuItems 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-4'
                        }`}
                        style={{
                          transitionDelay: showMenuItems ? `${index * 100 + 100}ms` : '0ms'
                        }}
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Footer */}
                <div className="p-4 sm:p-6 border-t border-gray-200 bg-white shadow-sm">
                  <Link
                    href="/contact"
                    className={`btn-primary w-full text-center block py-3 px-4 text-base sm:text-lg font-medium rounded-lg hover:shadow-md transition-all duration-300 transform ${
                      showMenuItems 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-4 scale-95'
                    }`}
                    style={{
                      transitionDelay: showMenuItems ? `${navigation.length * 100 + 200}ms` : '0ms'
                    }}
                    onClick={toggleMenu}
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
