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
    <div className="skills-layout experience-layout">
      <nav className="skills-tabs" aria-label="Experience timeline">
        {items.map((entry, idx) => {
          const isActive = idx === safeIndex;
          const IconComp = iconMap[entry.icon] ?? LineChart;

          return (
            <button
              key={entry.company}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`skills-tab experience-layout__tab ${isActive ? 'skills-tab--active' : ''}`}
              aria-pressed={isActive}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className="experience-layout__tab-icon" aria-hidden>
                <IconComp className="h-4 w-4" />
              </span>
              <span className="experience-layout__tab-copy">
                <span className="skills-tab__label">{entry.tenure}</span>
                <span className="skills-tab__hint">{entry.company}</span>
              </span>
            </button>
          );
        })}
      </nav>

      <div className="skills-divider" aria-hidden />

      <FadeIn delay={0.05} className="flex-1">
        <div className="skills-content experience-layout__detail">
          <div>
            <p className="experience-layout__eyebrow">Leadership Tenure · {activeItem.tenure}</p>
            <h3 className="experience-layout__role" style={{ fontFamily: 'var(--font-heading)' }}>
              {activeItem.role}
            </h3>
            <p className="experience-layout__location">
              {activeItem.company} — {activeItem.location}
            </p>
            <p className="skills-content__summary experience-layout__summary">{activeItem.summary}</p>
          </div>

          <div className="experience-layout__achievements">
            <p className="experience-layout__section">Impact Highlights</p>
            <ul>
              {activeItem.achievements.map((achievement, idx) => (
                <FadeIn key={achievement.detail} delay={idx * 0.05}>
                  <li className="experience-layout__achievement">
                    <span className="experience-layout__dot" aria-hidden />
                    <p>
                      {achievement.lead && (
                        <span className="experience-layout__lead">{achievement.lead}</span>
                      )}{' '}
                      {achievement.detail}
                    </p>
                  </li>
                </FadeIn>
              ))}
            </ul>
          </div>

          <div className="experience-layout__tags">
            {activeItem.focusAreas.map((area) => (
              <span key={area} className="experience-layout__tag">
                {area}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
