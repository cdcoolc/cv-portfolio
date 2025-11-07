import React from 'react';
import Section from '../../components/Section';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { FadeIn } from '../../components/anim';
import Header from '../../components/Header';
import PageNumber from '../../components/PageNumber';

interface ProjectItem {
  title: string;
  desc: string;
  tags: string[];
}

const projects: ProjectItem[] = [
  {
    title: 'Revenue Forecasting Model',
    desc: 'Driver-based financial model with scenario toggles and sensitivity analysis.',
    tags: ['Forecasting', 'Excel', 'SQL'],
  },
  {
    title: 'Executive KPI Dashboard',
    desc: 'Power BI dashboard tracking ARR, churn, CAC, and cohort trends.',
    tags: ['Power BI', 'Data Viz'],
  },
  {
    title: 'Pricing Optimization Study',
    desc: 'Elasticity analysis and ROI framework for proposed pricing tiers.',
    tags: ['Pricing', 'Analytics'],
  },
  {
    title: 'Cash Flow Automation',
    desc: 'Automated weekly cash flow with ETL from ERP to reports.',
    tags: ['Automation', 'ETL'],
  },
];

export default function ProjectsPage() {
  return (
    <main id="main" className="canvas">
      <section className="hero-card hero-card--section">
        <Header variant="card" />
        <div className="hero-card__section">
          <Section title="Featured Projects" variant="plain">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.05}>
                  <Card className="overflow-hidden group">
                    <div className="aspect-video w-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)] transform transition-transform duration-300 group-hover:scale-105" />
                    <div className="p-5">
                      <h4 className="text-lg font-semibold">{p.title}</h4>
                      <p className="mt-2 text-sm text-muted">{p.desc}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="rounded-full bg-primary/10 text-primary text-xs px-3 py-1">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4">
                        <Button variant="secondary" size="sm">
                          View details
                        </Button>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Section>
        </div>
        <div className="hero-card__section-indicator">
          <PageNumber value="05" />
        </div>
      </section>
    </main>
  );
}
