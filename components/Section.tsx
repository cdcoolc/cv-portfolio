import React from 'react';

export interface SectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'card' | 'plain';
}

export function Section({ title, subtitle, className, children, variant = 'card' }: SectionProps) {
  const Wrapper: React.ElementType = 'div';
  const wrapperClass = variant === 'card' ? 'section-card' : 'section-plain';

  return (
    <section className={className}>
      <div className="container-main container-section">
        <Wrapper className={wrapperClass}>
          {(title || subtitle) && (
            <header>
              {subtitle && (
                <p className="text-sm text-muted tracking-[0.3em] uppercase">{subtitle}</p>
              )}
              {title && (
                <h2
                  className="mt-2 text-3xl font-semibold"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {title}
                </h2>
              )}
            </header>
          )}
          {children}
        </Wrapper>
      </div>
    </section>
  );
}

export default Section;
