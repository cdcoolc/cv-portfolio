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
    'text-white/80 hover:text-white tracking-[0.3em] uppercase underline underline-offset-8 decoration-white/40',
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
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={cx(
          'inline-flex items-center justify-center rounded-full transition-all duration-200 will-change-transform',
          'hover:-translate-y-0.5',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
      >
        {children}
      </Link>
    );
  }
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cx(
        'inline-flex items-center justify-center rounded-full transition-all duration-200 will-change-transform',
        'hover:-translate-y-0.5',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
