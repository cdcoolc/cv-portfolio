import React from 'react';

export interface PageNumberProps {
  value: string; // e.g., "01"
}

export default function PageNumber({ value }: PageNumberProps) {
  return (
    <div className="page-indicator" aria-hidden>
      <span className="page-indicator__line" />
      <span className="tabular-nums">{value}</span>
      <span className="page-indicator__line page-indicator__line--long" />
    </div>
  );
}
