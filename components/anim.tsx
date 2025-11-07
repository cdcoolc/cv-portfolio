"use client";
import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.4, delay }}
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

