import React from 'react';
import Header from '@/components/Header';
import Button from '@/components/Button';
import ProfileImage from '@/components/ProfileImage';
import Footer from '@/components/Footer';
import { FadeIn, Stagger } from '@/components/anim';

export default function Page() {
  return (
    <main id="main" className="canvas canvas--home">
      <section className="hero-card" aria-label="Hero">
        <Header variant="card" />
        <div className="hero-card__grid">
          <div className="hero-card__content">
            <Stagger>
              <p className="hero-card__eyebrow">Financial Reporting &amp; FP&amp;A</p>
              <div className="hero-card__title-block">
                <h1 className="hero-card__title" aria-label="Masih Azizpour">
                  <span className="hero-card__title-line">Masih</span>
                  <span className="hero-card__title-line">Azizpour</span>
                </h1>
                <div className="hero-card__subtitle">
                  <span>I&apos;m a Finance Partner</span>
                  <span className="hero-card__subtitle-rule" aria-hidden />
                </div>
              </div>
              <p className="hero-card__description">
                I help leadership teams translate raw data into confident, forward-looking decisions. Forecasting,
                reporting, and analytics across Power BI, Alteryx, Oracle/SAP, and SQL.
              </p>
              <div className="hero-card__cta">
                <Button href="/resume.pdf" variant="primary" target="_blank" rel="noreferrer noopener">
                  Download CV
                </Button>
                <Button href="/about" variant="secondary">
                  About More
                </Button>
              </div>
            </Stagger>
          </div>
          <FadeIn>
            <div className="hero-card__image" aria-hidden>
              <ProfileImage size={360} priority />
            </div>
          </FadeIn>
        </div>
        <Footer pageNumber="01" />
      </section>
    </main>
  );
}
