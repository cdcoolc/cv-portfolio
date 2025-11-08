'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  variant?: 'default' | 'card';
}

export function Header({ variant = 'default' }: HeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const links = [
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  const innerClass =
    variant === 'card'
      ? 'site-header__inner'
      : 'site-header__inner site-header__inner--default';

  const navLinkClasses =
    'rounded-full px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60';

  const handleDrawerToggle = () => setIsDrawerOpen((open) => !open);
  const handleDrawerClose = () => setIsDrawerOpen(false);

  return (
    <header className="site-header" role="banner">
      <div className={innerClass}>
        <Link
          href="/"
          className="site-header__logo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/60"
          aria-label="Masih Azizpour home"
        >
          MAS<span className="site-header__logo-dot">.</span>
        </Link>

        <div className="site-header__nav-wrapper">
          <nav
            aria-label="Primary navigation"
            className="site-header__nav site-header__nav--visible"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClasses}
                onClick={handleDrawerClose}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <button
              type="button"
              className={`site-header__toggle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 ${
                isDrawerOpen ? 'site-header__toggle--active' : ''
              }`}
              aria-label={isDrawerOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-nav-drawer"
              onClick={handleDrawerToggle}
              data-state={isDrawerOpen ? 'open' : 'closed'}
            >
              <span className="sr-only">
                {isDrawerOpen ? 'Close menu' : 'Open menu'}
              </span>
              <span className="site-header__toggle-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div
          id="mobile-nav-drawer"
          className="site-header__drawer md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkClasses}
              onClick={handleDrawerClose}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
