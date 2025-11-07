import React from 'react';
import Section from '../../components/Section';
import Header from '../../components/Header';
import PageNumber from '../../components/PageNumber';
import SkillsExplorer, { SkillCategory } from '../../components/SkillsExplorer';

const categories: SkillCategory[] = [
  {
    id: 'technical',
    label: 'Technical Skills',
    description: 'Core FP&A + reporting strengths',
    items: [
      { title: 'Financial Reporting & Forecasting', context: 'Driver-based modeling' },
      { title: 'SQL', context: 'Analytics & data querying' },
      { title: 'Database Management', context: 'Governance & integrity' },
      { title: 'Power BI', context: 'Executive dashboard development' },
      { title: 'Oracle/SAP', context: 'ERP system management' },
      { title: 'Alteryx', context: 'Automation & workflow design' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Software',
    description: 'Platforms I use daily',
    items: [
      { title: 'Power BI', context: 'KPI monitoring' },
      { title: 'Excel & Google Sheets', context: 'Advanced financial models' },
      { title: 'Alteryx', context: 'ETL & repeatable automation' },
      { title: 'SQL Server & BigQuery', context: 'Data warehousing' },
      { title: 'Oracle ERP & SAP', context: 'Finance operations' },
      { title: 'Python', context: 'Ad-hoc analysis & automation' },
    ],
  },
  {
    id: 'soft',
    label: 'Soft Skills',
    description: 'How I collaborate',
    items: [
      { title: 'Stakeholder Communication', context: 'Executive-ready storytelling' },
      { title: 'Problem Solving', context: 'Structured, hypothesis-driven' },
      { title: 'Prioritization', context: 'Outcome-focused roadmaps' },
      { title: 'Cross-Functional Leadership', context: 'Finance, ops, and product' },
      { title: 'Attention to Detail', context: 'Audit-ready insights' },
      { title: 'Coaching & Enablement', context: 'Upskilling partners' },
    ],
  },
];

export default function SkillsPage() {
  return (
    <main id="main" className="canvas">
      <section className="hero-card hero-card--section">
        <Header variant="card" />
        <div className="hero-card__section">
          <Section title="My Skills & Expertise" variant="plain">
            <SkillsExplorer categories={categories} />
          </Section>
        </div>
        <div className="hero-card__section-indicator">
          <PageNumber value="03" />
        </div>
      </section>
    </main>
  );
}
