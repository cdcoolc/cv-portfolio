'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import CasePageNumber from '@/components/CasePageNumber';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { FadeIn } from '@/components/anim';
import {
  Map,
  AlertTriangle,
  ClipboardList,
  CalendarCheck,
  Workflow,
  Target,
  ShieldCheck,
  ServerCog,
  FileSpreadsheet,
} from 'lucide-react';

type TabId = 'overview' | 'star' | 'technical';
type JurisdictionId = 'california' | 'texas' | 'newyork';

const tabs = [
  { id: 'overview' as const, label: 'Overview', icon: Map },
  { id: 'star' as const, label: 'STAR Method', icon: Target },
  { id: 'technical' as const, label: 'Technical', icon: Workflow },
];

const summaryStats = [
  { label: 'Manual review reduction', value: '70%', detail: 'less analyst time' },
  { label: 'On-time filings', value: '100%', detail: '18 months, 45+ states' },
  { label: 'Audit findings', value: '0', detail: 'three clean examinations' },
];

const jurisdictionData: Record<
  JurisdictionId,
  { label: string; rate: number; exceptions: number; filingFreq: string; status: 'compliant' | 'review'; description: string }
> = {
  california: {
    label: 'California',
    rate: 7.25,
    exceptions: 12,
    filingFreq: 'Monthly',
    status: 'compliant',
    description: 'Base state rate layered with district add-ons and marketplace facilitator logic.',
  },
  texas: {
    label: 'Texas',
    rate: 6.25,
    exceptions: 8,
    filingFreq: 'Quarterly',
    status: 'compliant',
    description: 'State rate plus local options driven by ship-to ZIP and situs rules.',
  },
  newyork: {
    label: 'New York',
    rate: 4.0,
    exceptions: 15,
    filingFreq: 'Quarterly',
    status: 'review',
    description: 'Complex home rule jurisdictions with frequent rate and boundary changes.',
  },
};

const featureHighlights = [
  {
    title: 'Tax rule mapping',
    value: '45+ states',
    description: 'Tied Oracle transaction codes and product taxability to jurisdiction rates and exemptions.',
    icon: Map,
  },
  {
    title: 'Exception detection',
    value: 'Daily scans',
    description: 'Flagged missing tax codes, expired certificates, and nexus breaches with auto-alerts.',
    icon: AlertTriangle,
  },
  {
    title: 'Audit trail',
    value: 'Transaction level',
    description: 'Stored calculations, overrides, and attachments for every filing-ready record.',
    icon: ClipboardList,
  },
  {
    title: 'Filing scheduler',
    value: '45+ calendars',
    description: 'Tracked due dates, triggered pre-filing validations, and produced GL-reconciled packets.',
    icon: CalendarCheck,
  },
];

const objectives = [
  'Centralize sales and use tax rules for 45+ jurisdictions within Oracle ERP.',
  'Eliminate manual spreadsheets by automating rate updates, nexus tracking, and certificate monitoring.',
  'Surface exceptions daily so the tax team can resolve issues before audits or filings.',
  'Guarantee on-time submissions with audit-ready documentation.',
];

const actionSteps = [
  {
    title: 'Rule inventory',
    detail: 'Documented taxability, exemptions, and filing cadences per state and loaded them into governed tables.',
  },
  {
    title: 'Oracle + Vertex integration',
    detail: 'Connected ERP transactions to Vertex O Series for rate determination and address validation.',
  },
  {
    title: 'Exception workflow',
    detail: 'Built PL/SQL jobs and BI Publisher reports that highlight missing data and route alerts.',
  },
  {
    title: 'Filing automation',
    detail: 'Scheduled pre-filing QA, created packet templates, and archived approvals in SharePoint.',
  },
];

const starSituation =
  'Rapid expansion created nexus in 45+ states, but tax rules lived in scattered spreadsheets and Oracle rates stayed outdated. Analysts spent 120+ hours each month reviewing transactions, missed two filing deadlines, and incurred $15K in penalties.';

const starTaskObjectives = [
  'Map every Oracle transaction to the correct jurisdiction rate and filing cadence.',
  'Automate exception detection so the tax team focuses on resolution instead of discovery.',
  'Prove compliance via clean audits and zero late filings.',
  'Enable future state expansion without adding headcount.',
];

const starActionSteps = [
  {
    title: 'Data consolidation',
    detail: 'Merged ERP transaction history, exemption certificates, and prior audit notes into a single repository.',
  },
  {
    title: 'Rule engine build',
    detail: 'Authored mapping tables for product taxability, nexus thresholds, and local jurisdictions with Vertex APIs.',
  },
  {
    title: 'Automation + alerting',
    detail: 'Developed PL/SQL routines that run nightly checks and send Teams/Outlook alerts for critical exceptions.',
  },
  {
    title: 'Governance + training',
    detail: 'Rolled out filing calendars, documentation standards, and playbooks for tax analysts and controllers.',
  },
];

const starResults = [
  'Manual compliance review time dropped 70%, freeing 80+ hours monthly.',
  'Achieved 100% on-time filing rate for 18 straight months across 45+ jurisdictions.',
  'Passed three state audits with zero findings and caught $180K in tax under-collections.',
  'Reduced exemption certificate expirations from 22% to 4% while scaling into eight new states.',
];

const technicalStack = [
  { label: 'Oracle E-Business Suite', detail: 'Receivables, Payables, and BI Publisher reporting' },
  { label: 'Vertex O Series', detail: 'Jurisdiction determination, rate updates, API lookups' },
  { label: 'PL/SQL + SQL Server', detail: 'Exception queries, reconciliation, and automation jobs' },
  { label: 'SharePoint + Power Automate', detail: 'Filing calendar, approvals, and documentation storage' },
];

const technicalTools = [
  {
    title: 'Data integration',
    bullets: ['Oracle concurrent programs', 'Vertex REST API connectors', 'Address verification service'],
  },
  {
    title: 'Analytics & reporting',
    bullets: ['BI Publisher exception decks', 'Excel pivot packs for filings', 'Power Query reconciliations'],
  },
  {
    title: 'Governance',
    bullets: ['SharePoint approvals with versioning', 'Outlook reminders + Teams alerts', 'Audit-ready change logs'],
  },
];

const workflowStages = [
  { step: '1', title: 'Ingest', detail: 'Oracle transactions, certificates, and vertex rate files load nightly.' },
  {
    step: '2',
    title: 'Rule mapping',
    detail: 'Mapping tables assign jurisdiction, rate, and filing frequency to each record.',
  },
  {
    step: '3',
    title: 'Exception scan',
    detail: 'PL/SQL routines flag missing data, rate mismatches, or nexus breaches and open tickets.',
  },
  {
    step: '4',
    title: 'Filing + archive',
    detail: 'Validated data feeds packet templates, reconciles to GL, and archives support for audits.',
  },
];

const complianceModules = [
  {
    title: 'Rule management',
    bullets: ['Product taxability tables', 'Nexus tracker', 'District rate overrides'],
  },
  {
    title: 'Exception center',
    bullets: ['Missing tax code queue', 'Certificate expiry dashboard', 'Under-collection monitor'],
  },
  {
    title: 'Filing workspace',
    bullets: ['Jurisdiction calendars', 'Pre-filing checklist', 'Submission status tracker'],
  },
  {
    title: 'Audit vault',
    bullets: ['Transaction drill, supporting docs', 'Change log exports', 'Audit response templates'],
  },
];

const keyQueries = [
  `SELECT trx_number, tax_rate, vertex_rate
FROM ar_tax_extract
WHERE ABS(tax_rate - vertex_rate) > 0.25;`,
  `SELECT certificate_id, customer_name, expiry_date
FROM exemption_certs
WHERE expiry_date <= ADD_MONTHS(SYSDATE, 1);`,
];

const qaChecklist = [
  'Monthly reconciliation of tax accruals to GL balances within +/-0.3%',
  'Quarterly audit of Vertex rule tables vs documented taxability matrix',
  'Exception SLA tracking to ensure critical items close within 2 business days',
  'Annual disaster-recovery test of filing archives and approvals',
];

export default function SalesTaxCompliancePage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [jurisdiction, setJurisdiction] = useState<JurisdictionId>('california');

  const jurisdictionMeta = jurisdictionData[jurisdiction];

  return (
    <main id="main" className="canvas">
      <section className="hero-card hero-card--section">
        <Header variant="card" />
        <div className="hero-card__section">
          <Section className="case-study" variant="plain">
            <div className="case-controls">
              <Button href="/projects" variant="secondary" size="sm" className="case-back">
                Back to projects
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="case-primary-cta"
                target="_blank"
                rel="noreferrer noopener"
                href="/resume.pdf"
              >
                Download CV
              </Button>
            </div>

            <FadeIn className="case-hero">
              <div>
                <p className="case-eyebrow">Project Detail</p>
                <h1>Sales & Use Tax Compliance Tracker</h1>
                <p>
                  Mapped multi-state tax rules to Oracle ERP transactions, automated exception detection, and delivered
                  filing-ready packets so audits stayed clean and every jurisdiction filed on time.
                </p>
                <div className="case-meta">
                  <span>CIT Bank</span>
                  <span>Lease Specialist III</span>
                  <span>Tax Compliance & Operations</span>
                </div>
              </div>
              <div className="case-tags">
                {['Compliance', 'Oracle', 'Process', 'Vertex'].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </FadeIn>

            <div className="case-tabs" role="tablist" aria-label="Project views">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`case-tab ${isActive ? 'case-tab--active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <Icon size={18} aria-hidden />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="case-panel">
              {activeTab === 'overview' && (
                <div className="case-panel__content">
                  <FadeIn className="case-copy">
                    <h2>Why it mattered</h2>
                    <p>
                      With nexus exploding across the US, compliance could no longer rely on spreadsheets and tribal
                      knowledge. Rates shifted monthly, exemption certificates lapsed, and Oracle postings lagged the
                      rules. Building a governed tracker meant real-time visibility into risk, on-time filings, and the
                      operational muscle to scale without more headcount.
                    </p>
                  </FadeIn>

                  <div className="case-stat-grid">
                    {summaryStats.map((stat) => (
                      <div key={stat.label} className="case-stat">
                        <p className="case-stat__value">{stat.value}</p>
                        <p className="case-stat__label">{stat.label}</p>
                        <p className="case-stat__detail">{stat.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="case-weekly">
                    <div className="case-weekly__header">
                      <Map size={18} aria-hidden />
                      <div>
                        <p>Jurisdiction tracker</p>
                        <small>Sample of the multi-state guardrails finance watches every refresh</small>
                      </div>
                    </div>
                    <div className="case-weekly__controls">
                      {(Object.keys(jurisdictionData) as JurisdictionId[]).map((id) => (
                        <button
                          key={id}
                          type="button"
                          className={`case-weekly__pill ${jurisdiction === id ? 'is-active' : ''}`}
                          onClick={() => setJurisdiction(id)}
                        >
                          {jurisdictionData[id].label}
                        </button>
                      ))}
                    </div>
                    <div className="case-weekly__grid">
                      <div>
                        <p>Base rate</p>
                        <strong>{jurisdictionMeta.rate}%</strong>
                      </div>
                      <div>
                        <p>Active exceptions</p>
                        <strong>{jurisdictionMeta.exceptions}</strong>
                      </div>
                      <div>
                        <p>Filing cadence</p>
                        <strong>{jurisdictionMeta.filingFreq}</strong>
                      </div>
                      <div>
                        <p>Status</p>
                        <strong>{jurisdictionMeta.status === 'compliant' ? 'Compliant' : 'Needs review'}</strong>
                      </div>
                    </div>
                    <div className="case-weekly__grid">
                      <div>
                        <p>Description</p>
                        <strong>{jurisdictionMeta.description}</strong>
                      </div>
                    </div>
                  </div>

                  <div className="case-outcomes">
                    {featureHighlights.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="case-outcome">
                          <Icon size={20} aria-hidden />
                          <div>
                            <p className="case-outcome__label">{item.title}</p>
                            <p className="case-outcome__value">{item.value}</p>
                            <p className="case-outcome__detail">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="case-objectives">
                    <h3>Business objectives</h3>
                    <ul>
                      {objectives.map((goal) => (
                        <li key={goal}>{goal}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="case-actions-grid">
                    {actionSteps.map((step) => (
                      <div key={step.title} className="case-action-step">
                        <p className="case-action-step__title">{step.title}</p>
                        <p>{step.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'star' && (
                <div className="case-panel__content case-star-breakdown">
                  <div className="case-star">
                    <p className="case-star__label">Situation</p>
                    <p>{starSituation}</p>
                  </div>

                  <div className="case-star">
                    <p className="case-star__label">Task</p>
                    <p className="case-star__summary">Stand up a compliance tracker that would:</p>
                    <ul className="case-star__list">
                      {starTaskObjectives.map((goal) => (
                        <li key={goal}>{goal}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="case-star">
                    <p className="case-star__label">Action</p>
                    <div className="case-star__steps">
                      {starActionSteps.map((step) => (
                        <div key={step.title} className="case-star__step">
                          <p>{step.title}</p>
                          <small>{step.detail}</small>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="case-star">
                    <p className="case-star__label">Result</p>
                    <ul className="case-star__list">
                      {starResults.map((result) => (
                        <li key={result}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'technical' && (
                <div className="case-panel__content case-technical">
                  <div className="case-stack">
                    <h3>Stack snapshot</h3>
                    <ul>
                      {technicalStack.map((item) => (
                        <li key={item.label}>
                          <span>{item.label}</span>
                          <p>{item.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="case-tech-grid">
                    {technicalTools.map((tool) => (
                      <div key={tool.title} className="case-tech-card">
                        <p className="case-tech-card__title">{tool.title}</p>
                        <ul>
                          {tool.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="case-workflow">
                    <h3>Compliance workflow</h3>
                    <div className="case-workflow__list">
                      {workflowStages.map((stage) => (
                        <div key={stage.step} className="case-workflow__step">
                          <span className="case-workflow__badge">{stage.step}</span>
                          <div>
                            <p>{stage.title}</p>
                            <small>{stage.detail}</small>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="case-powerbi">
                    <h3>Operational modules</h3>
                    <div className="case-powerbi__grid">
                      {complianceModules.map((section) => (
                        <div key={section.title} className="case-powerbi__card">
                          <p className="case-powerbi__title">{section.title}</p>
                          <ul>
                            {section.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="case-dax">
                      <h4>Key queries</h4>
                      <div>
                        {keyQueries.map((query) => (
                          <code key={query}>{query}</code>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="case-qa">
                    <h3>Quality gates</h3>
                    <ul>
                      {qaChecklist.map((item) => (
                        <li key={item}>
                          <ShieldCheck size={16} aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </Section>
        </div>
        <div className="hero-card__section-indicator">
          <CasePageNumber current="05" parent="04" />
        </div>
      </section>
    </main>
  );
}
