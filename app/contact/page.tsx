'use client';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { FadeIn, Stagger } from '../../components/anim';
import Header from '../../components/Header';
import PageNumber from '../../components/PageNumber';

type FormField = 'name' | 'email' | 'subject' | 'message';

export default function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const contactEmail = 'masih.azizpour@gmail.com';

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(false);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '').trim();
    const email = String(fd.get('email') || '').trim();
    const subject = String(fd.get('subject') || '').trim();
    const message = String(fd.get('message') || '').trim();
    const errs: Record<string, string> = {};
    if (!name) errs.name = 'Please enter your name';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email';
    if (!subject) errs.subject = 'Please enter a subject';
    if (!message) errs.message = 'Please enter a message';
    setErrors(errs);
    if (Object.keys(errs).length !== 0) return;

    const emailSubject = `[Portfolio] ${subject}`;
    const emailBody = [`Name: ${name}`, `Email: ${email}`, '', message].join('\n');

    const mailtoHref = `mailto:${encodeURIComponent(contactEmail)}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    if (typeof window !== 'undefined') {
      window.location.href = mailtoHref;
    }

    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
  }

  function handleFieldChange(field: FormField) {
    return () => {
      setErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
      if (sent) setSent(false);
    };
  }

  return (
    <main id="main" className="canvas">
      <section className="hero-card hero-card--section hero-card--contact">
        <Header variant="card" />
        <div className="hero-card__grid hero-card__grid--contact">
          <FadeIn className="contact-content">
            <Stagger className="contact-content__copy">
              <p className="hero-card__eyebrow">Connect</p>
              <h1 className="hero-card__title contact-content__title">Let&rsquo;s work together</h1>
              <p className="hero-card__description">
                Share a project idea, request my resume, or start a conversation about financial reporting, FP&amp;A,
                and analytics partnerships.
              </p>
            </Stagger>

            <dl className="contact-details">
              <div className="contact-details__item">
                <dt>Email</dt>
                <dd>
                  {showEmail ? (
                    <a href={`mailto:${contactEmail}`} className="contact-details__value">
                      {contactEmail}
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="contact-details__reveal"
                      onClick={() => setShowEmail(true)}
                    >
                      Show email
                    </button>
                  )}
                </dd>
              </div>
              <div className="contact-details__item">
                <dt>Location</dt>
                <dd>
                  <span className="contact-details__value">Jacksonville, FL</span>
                </dd>
              </div>
            </dl>
            <p className="contact-details__note">
              Reveal the email to write directly, or use the form to reach me securely.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="contact-form-card">
              <form className="contact-form" onSubmit={onSubmit} aria-describedby="form-status" noValidate>
                <div>
                  <label className="contact-form__label" htmlFor="name">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    required
                    autoComplete="name"
                    onChange={handleFieldChange('name')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'err-name' : undefined}
                    className="contact-form__field"
                  />
                  {errors.name && (
                    <p id="err-name" className="contact-form__error">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="contact-form__label" htmlFor="email">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    autoComplete="email"
                    onChange={handleFieldChange('email')}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'err-email' : undefined}
                    className="contact-form__field"
                  />
                  {errors.email && (
                    <p id="err-email" className="contact-form__error">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="contact-form__label" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    autoComplete="off"
                    onChange={handleFieldChange('subject')}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'err-subject' : undefined}
                    className="contact-form__field"
                  />
                  {errors.subject && (
                    <p id="err-subject" className="contact-form__error">
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label className="contact-form__label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    onChange={handleFieldChange('message')}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'err-message' : undefined}
                    className="contact-form__field contact-form__field--textarea"
                  />
                  {errors.message && (
                    <p id="err-message" className="contact-form__error">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div aria-live="polite" id="form-status" className="contact-form__status">
                  {sent && <span>Thanks! Your message was validated locally.</span>}
                </div>
                <Button type="submit" className="contact-form__submit">
                  Send Message
                </Button>
              </form>
            </Card>
          </FadeIn>
        </div>
        <div className="hero-card__section-indicator">
          <PageNumber value="06" />
        </div>
      </section>
    </main>
  );
}
