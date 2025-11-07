'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function FadeIn({
  children,
  delay = 0,
  y = 12,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const animate = { opacity: 1, y: 0 };
  const transition = prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, delayStep = 0.08, className }: { children: React.ReactNode[] | React.ReactNode; delayStep?: number; className?: string; }) {
  const items = React.Children.toArray(children);
  return (
    <div className={className}>
      {items.map((child, i) => (
        <FadeIn key={i} delay={i * delayStep}>{child}</FadeIn>
      ))}
    </div>
  );
}
