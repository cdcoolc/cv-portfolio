'use client';

import React, { useMemo, useState } from 'react';
import { FadeIn } from './anim';

export type SkillCategory = {
  id: string;
  label: string;
  description: string;
  items: Array<{ title: string; context: string }>;
};

interface SkillsExplorerProps {
  categories: SkillCategory[];
}

export default function SkillsExplorer({ categories }: SkillsExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<SkillCategory['id']>(
    categories[0]?.id ?? ''
  );

  const activeItems = useMemo(
    () => categories.find((category) => category.id === activeCategory)?.items ?? [],
    [categories, activeCategory]
  );

  const activeDescription = useMemo(
    () => categories.find((category) => category.id === activeCategory)?.description ?? '',
    [categories, activeCategory]
  );

  return (
    <div className="skills-layout">
      <nav className="skills-tabs" aria-label="Skills categories">
        {categories.map((category) => {
          const isActive = category.id === activeCategory;
          return (
            <button
              key={category.id}
              type='button'
              className={`skills-tab ${isActive ? 'skills-tab--active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={isActive}
            >
              <span className="skills-tab__label">{category.label}</span>
              <span className="skills-tab__hint">{category.description}</span>
            </button>
          );
        })}
      </nav>
      <div className="skills-divider" aria-hidden />
      <div className="skills-content">
        <p className="skills-content__summary">{activeDescription}</p>
        <div className="skills-grid">
          {activeItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article className="skills-item">
                <span className="skills-item__bullet" aria-hidden />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.context}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
