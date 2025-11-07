"use client";
import React, { useEffect, useState } from 'react';

export interface SkillBarProps {
  label: string;
  percent: number; // 0..100
}

export default function SkillBar({ label, percent }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const id = requestAnimationFrame(() => setWidth(percent));
    return () => cancelAnimationFrame(id);
  }, [percent]);
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span>{label}</span>
        <span className="text-muted tabular-nums">{percent}%</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

