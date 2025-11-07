'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  variant?: 'default' | 'card';
}

export function Header({ variant = 'default' }: HeaderProps) {
  const [open, setOpen] = useState(false);
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

        <nav aria-label="Primary navigation" className="site-header__nav">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="site-header__toggle md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="site-header__drawer" role="dialog" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
