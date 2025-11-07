import React from 'react';
import Section from '../../components/Section';
import Card from '../../components/Card';
import { FadeIn } from '../../components/anim';
import Header from '../../components/Header';
import PageNumber from '../../components/PageNumber';

interface ExperienceItem {
  dates: string;
  title: string;
  company: string;
  bullets: string[];
  tags: string[];
}

const items: ExperienceItem[] = [
  {
    dates: '2022 – 2025',
    title: 'Financial Reporting Analyst II',
    company: 'FIS (Fidelity Information Services), Jacksonville, FL',
    bullets: [
      'Collaborated with treasury and FP&A on cash flow forecasting and management reporting.',
      'Automated forecasting workflows using Alteryx and SQL, reducing manual effort by 40%.',
      'Designed Power BI dashboards providing real-time visibility into cash flow and payables.',
    ],
    tags: ['Forecasting', 'Power BI', 'Alteryx', 'SQL', 'Oracle', 'SAP'],
  },
  {
    dates: '2017 – 2022',
    title: 'End of Lease Specialist III',
    company: 'CIT Bank N.A., Jacksonville, FL',
    bullets: [
      'Managed $100M+ equipment lease portfolio in technology and earth-moving assets.',
      'Conducted asset valuation and portfolio cash-flow analyses; achieved 110% of targets.',
      'Ensured Sales & Use Tax compliance and supported ERP implementation testing.',
    ],
    tags: ['Asset Mgmt', 'Valuation', 'Compliance', 'ERP'],
  },
];

export default function ExperiencePage() {
  return (
    <main id="main" className="canvas">
      <section className="hero-card hero-card--section">
        <Header variant="card" />
        <div className="hero-card__section">
          <Section title="Professional Experience" variant="plain">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10" aria-hidden />
              <div className="space-y-10">
                {items.map((it, idx) => (
                  <FadeIn key={idx}>
                    <div className="relative">
                      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 h-3 w-3 rounded-full bg-primary ring-2 ring-white/20" />
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="text-muted md:text-right md:pr-8">
                          <div className="font-medium text-text">{it.dates}</div>
                          <div>{it.company}</div>
                        </div>
                        <Card className="p-5">
                          <h4 className="text-lg font-semibold">{it.title}</h4>
                          <ul className="mt-3 space-y-2 text-muted">
                            {it.bullets.map((b, i) => (
                              <li key={i}>• {b}</li>
                            ))}
                          </ul>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {it.tags.map((t) => (
                              <span key={t} className="rounded-full bg-primary/10 text-primary text-xs px-3 py-1">
                                {t}
                              </span>
                            ))}
                          </div>
                        </Card>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </Section>
        </div>
        <div className="hero-card__section-indicator">
          <PageNumber value="04" />
        </div>
      </section>
    </main>
  );
}
