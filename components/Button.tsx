"use client";
import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'icon';
type ButtonSize = 'sm' | 'md' | 'lg';
type MotionButtonProps = Omit<HTMLMotionProps<'button'>, 'href' | 'children'>;

export interface ButtonProps extends MotionButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
}

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border border-white/60 text-white tracking-[0.25em] uppercase bg-transparent hover:bg-white/10',
  secondary:
    'text-white/80 hover:text-white tracking-[0.3em] uppercase btn-secondary',
  accent:
    'bg-white text-[#07895c] shadow-lg hover:bg-white/90 tracking-[0.2em] uppercase',
  icon:
    'bg-transparent text-text hover:bg-white/10 border border-white/20',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-5 text-xs',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-8 text-base',
};

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60';

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const content =
    variant === 'secondary' ? (
      <span className="btn-secondary__label">{children}</span>
    ) : (
      children
    );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={cx(
          'inline-flex items-center justify-center rounded-full transition-all duration-200',
          focusRing,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
      >
        {content}
      </Link>
    );
  }
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cx(
        'inline-flex items-center justify-center rounded-full transition-all duration-200',
        focusRing,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {content}
    </motion.button>
  );
}

export default Button;
