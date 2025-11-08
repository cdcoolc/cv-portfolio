import React from 'react';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { FadeIn } from '@/components/anim';
import Header from '@/components/Header';
import PageNumber from '@/components/PageNumber';

interface ProjectVisual {
  gradient: string;
  alt: string;
}

interface ProjectItem {
  title: string;
  desc: string;
  tags: string[];
  image: ProjectVisual;
  href?: string;
}

const projects: ProjectItem[] = [
  {
    title: 'Cash Flow Forecast Automation',
    desc: 'Connected Oracle, SAP, and bank data into an Alteryx + SQL workflow that refreshed weekly cash projections and fed Power BI visuals for treasury.',
    tags: ['Alteryx', 'SQL', 'Power BI'],
    image: {
      gradient: 'linear-gradient(135deg, #101828 0%, #3B82F6 45%, #0F172A 100%)',
      alt: 'Gradient hinting at flowing financial data',
    },
    href: '/projects/cash-flow',
  },
  {
    title: 'Accounts Payable Pulse Dashboard',
    desc: 'Designed a Power BI dashboard that showed DPO, overdue trends, and supplier concentration so finance leaders could act before month end.',
    tags: ['Power BI', 'AP', 'Data Viz'],
    image: {
      gradient: 'linear-gradient(125deg, #0B1220 0%, #475569 35%, #8B2E3C 100%)',
      alt: 'Slate gradient resembling dashboard tiles',
    },
    href: '/projects/accounts-payable-pulse',
  },
  {
    title: 'Lease Portfolio Playbook',
    desc: 'Built Excel models for $100M+ technology equipment leases, combining renewal, pricing, and tax impact views for sales and credit partners.',
    tags: ['Excel', 'Lease Ops', 'Valuation'],
    image: {
      gradient: 'linear-gradient(145deg, #1C0F16 0%, #8B2E3C 55%, #F59E0B 100%)',
      alt: 'Warm gradient reflecting asset reports',
    },
    href: '/projects/lease-portfolio-playbook',
  },
  {
    title: 'Sales & Use Tax Compliance Tracker',
    desc: 'Mapped multi-state tax rules to ERP transactions and surfaced exceptions so audits stayed clean and filings stayed on schedule.',
    tags: ['Compliance', 'Oracle', 'Process'],
    image: {
      gradient: 'linear-gradient(140deg, #0F172A 0%, #1D2538 50%, #8B2E3C 100%)',
      alt: 'Deep slate gradient for compliance workflows',
    },
    href: '/projects/sales-tax-compliance',
  },
  {
    title: 'Asset Disposition Scorecard',
    desc: 'Used Power BI to blend market comps, book values, and tax exposure, helping the team make data-backed hold vs. sell decisions.',
    tags: ['Power BI', 'Asset Strategy', 'Analytics'],
    image: {
      gradient: 'linear-gradient(135deg, #120D16 0%, #8B2E3C 45%, #3B82F6 100%)',
      alt: 'Gradient nodding to asset performance',
    },
    href: '/projects/asset-disposition-scorecard',
  },
  {
    title: 'Retail Performance Console',
    desc: 'For my own retail venture, combined POS, vendor, and budgeting data to watch cash, inventory turns, and promo ROI without outside capital.',
    tags: ['Entrepreneurship', 'Budgeting', 'Power BI'],
    image: {
      gradient: 'linear-gradient(120deg, #0F172A 0%, #334155 40%, #8B2E3C 100%)',
      alt: 'Slate and burgundy gradient for retail analytics',
    },
    href: '/projects/retail-performance-console',
  },
];

export default function ProjectsPage() {
  return (
    <main id="main" className="canvas">
      <section className="hero-card hero-card--section">
        <Header variant="card" />
        <div className="hero-card__section">
          <Section title="Featured Projects" variant="plain">
            <div className="project-grid">
              {projects.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.05} className="h-full">
                  <Card className="overflow-hidden group project-card">
                    <div
                      className="project-card__media"
                      style={{ backgroundImage: p.image.gradient }}
                      role="img"
                      aria-label={p.image.alt}
                    >
                      <div className="project-card__media-grid" />
                    </div>
                    <div className="project-card__body">
                      <h4 className="project-card__title">{p.title}</h4>
                      <p className="project-card__description">{p.desc}</p>
                      <div className="project-card__tags">
                        {p.tags.map((t) => (
                          <span key={t} className="project-card__tag">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="project-card__cta">
                        <Button variant="secondary" size="sm" href={p.href}>
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
