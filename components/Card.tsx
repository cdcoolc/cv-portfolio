import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={
        'card-surface p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl ' +
        (className ?? '')
      }
      {...props}
    >
      {children}
    </div>
  );
}
