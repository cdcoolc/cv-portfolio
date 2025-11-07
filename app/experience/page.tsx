import Section from '../../components/Section';
import Header from '../../components/Header';
import PageNumber from '../../components/PageNumber';
import ExperienceShowcase, { type ExperienceEntry } from '../../components/ExperienceShowcase';

const experienceItems: ExperienceEntry[] = [
  {
    company: 'FIS Global',
    role: 'Financial Reporting Analyst II',
    tenure: '2022 - 2025',
    location: 'Jacksonville, FL',
    summary:
      'Partnered with treasury, FP&A, and operations teams to modernize cash flow governance, accelerate reporting, and deploy automated analytics that kept leadership aligned on liquidity decisions.',
    achievements: [
      {
        lead: 'Orchestrated',
        detail:
          'treasury and FP&A integration for end-to-end cash-flow forecasting with IFRS and GAAP accuracy.',
      },
      {
        lead: 'Automated',
        detail:
          'forecasting workflows with Alteryx and SQL, reducing manual effort by 40% and hardening validation.',
      },
      {
        lead: 'Pioneered',
        detail:
          'Power BI reporting that delivered real-time visibility into payables, cutting reporting cycle time by 30%.',
      },
    ],
    focusAreas: ['Cash Flow', 'Power BI', 'Alteryx', 'Oracle/SAP'],
    icon: 'analysis',
  },
  {
    company: 'CIT Bank N.A.',
    role: 'End of Lease Specialist III',
    tenure: '2017 - 2022',
    location: 'Jacksonville, FL',
    summary:
      'Managed the financial close-out of complex lease portfolios, balancing asset valuation, tax compliance, and customer experience for technology and heavy equipment clients.',
    achievements: [
      {
        lead: 'Managed',
        detail:
          '$100M+ in equipment lease assets across technology and heavy machinery, coordinating finance, tax, and legal.',
      },
      {
        lead: 'Conducted',
        detail:
          'cash-flow and valuation analyses that helped the portfolio exceed performance targets by 110%.',
      },
      {
        lead: 'Ensured',
        detail:
          'Sales & Use Tax compliance while supporting ERP implementation through scenario testing and QA.',
      },
    ],
    focusAreas: ['Asset Strategy', 'Valuation', 'Compliance', 'ERP'],
    icon: 'bank',
  },
  {
    company: 'Independent Venture',
    role: 'Business Owner & Operator',
    tenure: '2014 - 2024',
    location: 'Jacksonville, FL',
    summary:
      'Built and operated a retail concept end-to-end, overseeing finance, budgeting, vendor relations, and customer strategy while scaling profitably.',
    achievements: [
      {
        lead: 'Led',
        detail:
          'strategic planning, budgeting, and multi-channel cash-flow forecasting without outside capital.',
      },
      {
        lead: 'Optimized',
        detail:
          'inventory and vendor terms to sustain growth while preserving healthy margins and working capital.',
      },
      {
        lead: 'Built',
        detail:
          'repeatable reporting rituals for tax, compliance, and KPI tracking to align a lean operations team.',
      },
    ],
    focusAreas: ['Strategy', 'Budgeting', 'Vendor Ops', 'Customer Experience'],
    icon: 'builder',
  },
];

export default function ExperiencePage() {
  return (
    <main id="main" className="canvas">
      <section className="hero-card hero-card--section">
        <Header variant="card" />
        <div className="hero-card__section">
          <Section title="Leadership Portfolio" subtitle="Experience" variant="plain">
            <ExperienceShowcase items={experienceItems} />
          </Section>
        </div>
        <div className="hero-card__section-indicator">
          <PageNumber value="04" />
        </div>
      </section>
    </main>
  );
}
