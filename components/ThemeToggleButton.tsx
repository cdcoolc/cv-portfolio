'use client';

import React from 'react';
import { Moon, SunMedium } from 'lucide-react';
import { useTheme } from './ThemeProvider';

type ThemeToggleVariant = 'nav' | 'drawer';

export interface ThemeToggleButtonProps {
  variant?: ThemeToggleVariant;
}

const labels: Record<'emerald' | 'slate', string> = {
  emerald: 'Emerald',
  slate: 'Slate',
};

export default function ThemeToggleButton({ variant = 'nav' }: ThemeToggleButtonProps) {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === 'emerald' ? Moon : SunMedium;
  const label = theme === 'emerald' ? 'Switch to Slate theme' : 'Switch to Emerald theme';

  return (
    <button
      type="button"
      aria-pressed={theme === 'slate'}
      aria-label={label}
      className={`site-header__theme-toggle ${variant === 'drawer' ? 'site-header__theme-toggle--drawer' : ''}`}
      onClick={toggleTheme}
    >
      <span className="site-header__theme-icon" aria-hidden>
        <Icon size={16} />
      </span>
      <span className="site-header__theme-label">
        <span className="site-header__theme-label-primary">{labels[theme]}</span>
        <span className="site-header__theme-label-secondary">{label}</span>
      </span>
    </button>
  );
}
