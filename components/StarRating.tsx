import React from 'react';

export interface StarRatingProps {
  value: number; // 0..5 in 0.5 steps ok
  outOf?: number;
}

export default function StarRating({ value, outOf = 5 }: StarRatingProps) {
  const full = Math.floor(value);
  const half = value - full >= 0.5 ? 1 : 0;
  const empty = Math.max(outOf - full - half, 0);
  return (
    <div className="inline-flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f${i}`} className="text-accent">★</span>
      ))}
      {half === 1 && <span className="text-accent/70">☆</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e${i}`} className="text-white/20">★</span>
      ))}
    </div>
  );
}

