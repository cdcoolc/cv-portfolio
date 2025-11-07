import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={['card-surface', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}
