import React from 'react';
import Section from '../../components/Section';
import ProfileImage from '../../components/ProfileImage';
import Card from '../../components/Card';
import { FadeIn, Stagger } from '../../components/anim';
import Header from '../../components/Header';
import PageNumber from '../../components/PageNumber';

export default function AboutPage() {
  return (
    <main id="main" className="canvas">
      <section className="hero-card hero-card--section">
        <Header variant="card" />
        <div className="hero-card__section">
          <Section title="About Me" subtitle="Who I Am" variant="plain">
            <div className="grid grid-cols-1 md:grid-cols-[0.3fr_0.7fr] gap-10 items-start">
              <FadeIn>
                <div className="flex justify-center md:justify-start">
                  <ProfileImage size={200} />
                </div>
              </FadeIn>
              <Stagger>
                <p className="text-muted">
                  Financial Reporting and FP&A professional with 7+ years of experience in cash flow
                  forecasting, management reporting, and business intelligence.
                </p>
                <p className="text-muted">
                  Advanced in Power BI, Alteryx, Oracle ERP, SAP, and SQL. I focus on automation,
                  accuracy, and clarity—turning complex data into actionable insights.
                </p>
              </Stagger>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold">Values & Principles</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: 'Clarity', desc: 'Communicate insights simply and effectively.' },
                  { title: 'Rigor', desc: 'Ground recommendations in sound analysis.' },
                  { title: 'Ownership', desc: 'Deliver outcomes end-to-end with accountability.' },
                ].map((v) => (
                  <FadeIn key={v.title}>
                    <Card className="p-5">
                      <h4 className="font-medium">{v.title}</h4>
                      <p className="mt-2 text-muted text-sm">{v.desc}</p>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold">Credentials</h3>
              <ul className="mt-4 space-y-2 text-muted">
                <li>• B.B.A., Dual Major: Finance and Financial Services — University of North Florida</li>
                <li>• Business Owner & Operator (2014—2024)</li>
              </ul>
            </div>
          </Section>
        </div>
        <div className="hero-card__section-indicator">
          <PageNumber value="02" />
        </div>
      </section>
    </main>
  );
}
