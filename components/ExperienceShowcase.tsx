'use client';

import React from 'react';
import { LineChart, Building2, Sparkles } from 'lucide-react';
import { FadeIn } from './anim';

const iconMap = {
  analysis: LineChart,
  bank: Building2,
  builder: Sparkles,
} as const;

export type ExperienceIcon = keyof typeof iconMap;

export interface ExperienceAchievement {
  lead?: string;
  detail: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  tenure: string;
  location: string;
  summary: string;
  achievements: ExperienceAchievement[];
  focusAreas: string[];
  icon: ExperienceIcon;
}

interface ExperienceShowcaseProps {
  items: ExperienceEntry[];
}

export default function ExperienceShowcase({ items }: ExperienceShowcaseProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);

  if (!items.length) {
    return null;
  }

  const safeIndex = Math.min(activeIndex, items.length - 1);
  const activeItem = items[safeIndex];

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
      <FadeIn className="relative">
        <div
          className="pointer-events-none absolute left-[31px] top-6 hidden h-[calc(100%-48px)] w-px bg-white/10 sm:block"
          aria-hidden
        />
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <span className="text-xs uppercase tracking-[0.35em] text-muted">
            Experience
          </span>
          <h3 className="mt-2 text-2xl font-semibold">Leadership Tenure</h3>
          <div className="mt-4 flex flex-col gap-2">
            {items.map((entry, idx) => {
              const isActive = idx === safeIndex;
              const IconComp = iconMap[entry.icon] ?? LineChart;
              return (
                <button
                  key={entry.company}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex w-full items-center gap-4 rounded-2xl border px-4 py-3 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 ${
                    isActive
                      ? 'border-white/30 bg-white/10 text-white shadow-lg ring-1 ring-primary/40'
                      : 'border-transparent text-white/80 hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span
                    className={`grid h-12 w-12 place-items-center rounded-2xl border text-white ${
                      isActive
                        ? 'border-primary/60 bg-primary/10 shadow-inner shadow-primary/40'
                        : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <IconComp className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted">
                      {entry.tenure}
                    </span>
                    <span className="text-sm font-semibold">{entry.company}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="card-surface relative overflow-hidden rounded-[32px] border border-white/10 p-0">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 opacity-80" />
          <div className="relative rounded-[32px] border border-white/5 bg-black/10 p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">
              Leadership Tenure - {activeItem.tenure}
            </p>
            <h3 className="mt-3 text-3xl font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
              {activeItem.role}
            </h3>
            <p className="mt-1 text-base text-white/80">
              {activeItem.company} - {activeItem.location}
            </p>
            <p className="mt-4 text-muted">{activeItem.summary}</p>

            <div className="mt-6 border-t border-white/10 pt-6">
              <h4 className="text-sm uppercase tracking-[0.3em] text-muted">Impact Highlights</h4>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed text-white/90">
                {activeItem.achievements.map((achievement) => (
                  <li key={achievement.detail} className="flex gap-4">
                    <span
                      className="mt-2 h-1 w-8 rounded-full bg-gradient-to-r from-primary to-white/40"
                      aria-hidden
                    />
                    <p>
                      {achievement.lead && (
                        <span className="font-semibold text-white">{achievement.lead} </span>
                      )}
                      {achievement.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {activeItem.focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/80"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
