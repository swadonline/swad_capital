'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure portal only renders on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle menu toggle with animation
  const toggleMenu = useCallback(() => {
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
  }, [isMenuOpen]);

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
  }, [isMenuOpen, toggleMenu]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const solutionsMenu = [
    { name: 'Hardware', href: '/solutions/hardware' },
    { name: 'Software', href: '/solutions/software' },
    { name: 'Services', href: '/solutions/services' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-corporate-gray-200 relative z-50 sticky top-0">
      <nav className="container-max px-4 md:px-0">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover-scale transition-all duration-300 group">
            <div className="relative w-10 h-10 transition-all duration-300 group-hover:scale-110 bg-white p-1 rounded-md shadow-sm border border-gray-200">
              <Image
                src="/logo/logo.jpeg"
                alt="SWAD Digital Solutions Logo"
                fill
                className="object-contain rounded-md"
                sizes="40px"
                priority
              />
            </div>
            <span className="text-xl font-display font-bold text-corporate-gray-900 transition-colors duration-300 group-hover:text-primary">SWAD Digital</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 stagger-container">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-corporate-gray-700 hover:text-primary transition-all duration-300 font-medium relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            
            {/* Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <Link
                href="/solutions"
                className="text-corporate-gray-700 hover:text-primary transition-all duration-300 font-medium relative"
              >
                Solutions
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
              
              {/* Dropdown Menu */}
              {isSolutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-fade-in-down">
                  <Link
                    href="/solutions"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    All Solutions
                  </Link>
                  {solutionsMenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg transition-all duration-300 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/30"
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

        {/* Mobile Navigation Overlay - Rendered via Portal */}
        {mounted && isMenuOpen && createPortal(
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
                    <div className="relative w-10 h-10 bg-white p-1 rounded-md shadow-sm border border-gray-200">
                      <Image
                        src="/logo/logo.jpeg"
                        alt="SWAD Digital Solutions Logo"
                        fill
                        className="object-contain rounded-md"
                        sizes="40px"
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
                    
                    {/* Solutions in Mobile */}
                    <div className={`border-b border-gray-100 ${
                          showMenuItems 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 translate-x-4'
                        }`}
                        style={{
                          transitionDelay: showMenuItems ? `${navigation.length * 100 + 100}ms` : '0ms'
                        }}>
                      <Link
                        href="/solutions"
                        className="text-base sm:text-lg text-gray-800 hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium py-4 px-4 rounded-lg block"
                        onClick={toggleMenu}
                      >
                        Solutions
                      </Link>
                      <div className="pl-6 space-y-1">
                        {solutionsMenu.map((item, subIndex) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-primary hover:bg-primary/5 transition-all duration-300 py-2 px-4 rounded-lg block"
                            onClick={toggleMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
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
          </div>,
          document.body
        )}
      </nav>
    </header>
  );
};

export default Header;
