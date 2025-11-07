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
                  I’m a financial analyst and data strategist with over seven years of experience transforming complex 
                  financial data into clear, actionable insights. My career has spanned roles in financial reporting, 
                  treasury analytics, and process automation, where I’ve built and optimized reporting systems using Alteryx, SQL, 
                  Power BI, and Oracle Hyperion.
                </p>
                
                <p className="text-muted mt-4">
                  I’m passionate about bridging the gap between finance and technology—turning data challenges into streamlined, 
                  automated solutions that enhance decision-making and efficiency. Beyond analytics, I’m deeply curious about design 
                  and emerging technologies, constantly exploring ways to integrate AI, visualization, and user experience into 
                  financial tools. 
                  </p>
                  <p className="text-muted mt-4">
                    Whether I’m refining a liquidity model, building a Power BI dashboard, or coding a Python script 
                  to automate workflows, my goal is always the same: to make complex information simple, useful, and impactful.
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
