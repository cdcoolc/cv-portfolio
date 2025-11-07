'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  variant?: 'default' | 'card';
}

export function Header({ variant = 'default' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const handleMenuOpen = () => setMenuOpen(true);
  const handleMenuClose = () => setMenuOpen(false);
  const handleToggleClick = () => setMenuOpen((v) => !v);
  const handleFocusOut = (event: React.FocusEvent<HTMLDivElement>) => {
    const nextFocus = event.relatedTarget as Node | null;
    if (!nextFocus || !event.currentTarget.contains(nextFocus)) {
      handleMenuClose();
    }
  };

  return (
    <header className="site-header" role="banner">
      <div className={innerClass}>
        <Link
          href="/"
          className="site-header__logo"
          aria-label="Masih Azizpour home"
        >
          MAS<span className="site-header__logo-dot">.</span>
        </Link>

        <div
          className="site-header__nav-wrapper"
          onMouseEnter={handleMenuOpen}
          onMouseLeave={handleMenuClose}
          onFocusCapture={handleMenuOpen}
          onBlurCapture={handleFocusOut}
        >
          <nav
            aria-label="Primary navigation"
            aria-hidden={!menuOpen}
            className={`site-header__nav ${menuOpen ? 'site-header__nav--visible' : ''}`}
          >
            {links.map((link) => (
              <Link key={link.href} href={link.href} tabIndex={menuOpen ? 0 : -1}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="site-header__actions">
            <button
              className={`site-header__toggle ${menuOpen ? 'site-header__toggle--active' : ''}`}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={handleToggleClick}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="site-header__drawer md:hidden" role="dialog" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
