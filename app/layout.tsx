import '@/styles/design-tokens.css';
import '@/styles/base.css';
import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import PageTransition from '@/components/PageTransition';
import ScrollManager from '@/components/ScrollManager';
import Script from 'next/script';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-family-primary',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Masih Azizpour — Financial Reporting & FP&A',
    template: '%s — Masih Azizpour',
  },
  description:
    'Financial Reporting & FP&A professional — forecasting, reporting, and analytics. Power BI, Alteryx, SQL, Oracle/SAP.',
  applicationName: 'Masih Azizpour Portfolio',
  authors: [{ name: 'Masih Azizpour', url: 'https://www.linkedin.com/in/masih-a-717b55145' }],
  keywords: [
    'FP&A',
    'Financial Reporting',
    'Power BI',
    'Alteryx',
    'SQL',
    'Oracle',
    'SAP',
    'Finance',
    'Analytics',
  ],
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Masih Azizpour — Financial Reporting & FP&A',
    description:
      'Forecasting, reporting, and analytics — turning complex data into actionable insights.',
    siteName: 'Masih Azizpour Portfolio',
  },
  twitter: {
    card: 'summary',
    title: 'Masih Azizpour — Financial Reporting & FP&A',
    description:
      'Forecasting, reporting, and analytics — turning complex data into actionable insights.',
  },
  other: {
    'theme-color': '#02100f',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#070a0f',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${poppins.variable} min-h-dvh bg-bg text-text antialiased selection:bg-white/20 selection:text-bg overflow-x-hidden`}
      >
        {/* Skip link for keyboard users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] rounded bg-surface px-4 py-2 ring-1 ring-white/20"
        >
          Skip to content
        </a>

        {/* JSON-LD Person schema */}
        <Script id="ld-person" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Masih Azizpour',
            jobTitle: 'Financial Reporting & FP&A Professional',
            email: 'mailto:masih.azizpour@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Jacksonville',
              addressRegion: 'FL',
              addressCountry: 'US',
            },
            sameAs: [
              'https://www.linkedin.com/in/masih-a-717b55145',
              'mailto:masih.azizpour@gmail.com',
            ],
            url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
          })}
        </Script>
        <ScrollManager />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
