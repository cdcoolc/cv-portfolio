import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import ProfileImage from '../components/ProfileImage';
import Footer from '../components/Footer';
import { FadeIn, Stagger } from '../components/anim';

export default function Page() {
  return (
    <main id="main" className="canvas">
      <section className="hero-card" aria-label="Hero">
        <Header variant="card" />
        <div className="hero-card__grid">
          <div className="hero-card__content">
            <Stagger>
              <p className="hero-card__eyebrow">Financial Reporting &amp; FP&amp;A</p>
              <h1 className="hero-card__title">Masih Azizpour</h1>
              <p className="hero-card__subtitle">I&apos;m a Finance Partner</p>
              <p className="hero-card__description">
                I help leadership teams translate raw data into confident, forward-looking decisions. Forecasting,
                reporting, and analytics across Power BI, Alteryx, Oracle/SAP, and SQL.
              </p>
              <div className="hero-card__cta">
                <Button href="/resume.pdf" variant="primary">
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
