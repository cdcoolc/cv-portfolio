import React from 'react';
import Section from '../../components/Section';
import ProfileImage from '../../components/ProfileImage';
import Card from '../../components/Card';
import { FadeIn, Stagger } from '../../components/anim';
import Header from '../../components/Header';
import PageNumber from '../../components/PageNumber';

const PRINCIPLES = [
  { title: 'Clarity', desc: 'Communicate insights simply and effectively.' },
  { title: 'Rigor', desc: 'Ground recommendations in sound analysis.' },
  { title: 'Ownership', desc: 'Deliver outcomes end-to-end with accountability.' },
];

const CREDENTIALS = [
  'B.B.A., Finance & Financial Services - University of North Florida',
  'Business Owner & Operator (2014-2024)',
];

export default function AboutPage() {
  return (
    <main id="main" className="canvas">
      <section className="hero-card hero-card--section">
        <Header variant="card" />
        <div className="hero-card__section">
          <Section title="About Me" subtitle="Who I Am" variant="plain">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[0.3fr_0.7fr]">
              <FadeIn>
                <div className="flex justify-center md:justify-start">
                  <ProfileImage size={200} />
                </div>
              </FadeIn>
              <Stagger>
                <div className="max-w-[72ch] space-y-6 text-muted leading-relaxed">
                  <p>
                    I&apos;m a financial analyst and data strategist with seven-plus years of experience translating complex
                    financial data into clear, actionable insights. My work spans financial reporting, treasury analytics, and
                    process automation where I build and optimize reporting systems with Alteryx, SQL, Power BI, and Oracle Hyperion.
                  </p>
                  <p>
                    I&apos;m passionate about bridging the gap between finance and technology&mdash;turning ambiguous data sets into
                    streamlined, automated workflows that level up decision-making. I stay curious about design and emerging tech,
                    exploring ways to fold AI, visualization, and UX patterns into financial tools.
                  </p>
                  <p>
                    Whether I&apos;m refining a liquidity model, building a Power BI dashboard, or scripting Python automations, my
                    goal stays the same: make complex information simple, useful, and impactful.
                  </p>
                </div>
              </Stagger>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold">Values &amp; Principles</h3>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                {PRINCIPLES.map((principle) => (
                  <FadeIn key={principle.title}>
                    <Card className="p-4 md:p-6">
                      <h4 className="font-medium">{principle.title}</h4>
                      <p className="mt-2 text-sm text-muted">{principle.desc}</p>
                    </Card>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold">Credentials</h3>
              <ul className="mt-4 space-y-2 text-muted">
                {CREDENTIALS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
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
