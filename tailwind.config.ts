import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        contrast: 'var(--color-contrast)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      transitionTimingFunction: {
        'ease-out-custom': 'var(--ease-out)',
        'ease-in-out-custom': 'var(--ease-in-out)',
      },
      transitionDuration: {
        150: 'var(--duration-1)',
        250: 'var(--duration-2)',
        400: 'var(--duration-3)',
      },
    },
  },
  plugins: [],
};

export default config;
