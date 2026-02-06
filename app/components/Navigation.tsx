'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMobileMenu } from '../utils/interactions';
import { common, navigation } from '../content';

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use the custom mobile menu hook
  useMobileMenu();

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-lg border-b border-white/5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-white via-white to-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-primary-500/20 ring-1 ring-white/10 backdrop-blur-sm">
              <img 
                src="/site-logo.svg" 
                alt="TS Global Tech Logo" 
                className="w-12 h-12"
              />
            </div>
            <span 
              className="font-heading font-bold text-xl text-white"
              dangerouslySetInnerHTML={{ __html: common.companyNameShort }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {common.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href={navigation.ctaHref} className="btn-primary">
              {navigation.ctaText}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            id="mobile-menu-btn"
            className="lg:hidden p-2 text-dark-300 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className="lg:hidden absolute top-full left-0 right-0 bg-dark-900/95 backdrop-blur-xl border-t border-white/5 transition-all duration-300 hidden"
      >
        <div className="px-4 py-6 space-y-4">
          {common.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            href={navigation.ctaHref} 
            className="btn-primary w-full justify-center mt-4"
          >
            {navigation.ctaText}
          </Link>
        </div>
      </div>
    </nav>
  );
}
