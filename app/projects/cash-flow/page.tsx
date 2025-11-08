'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import CasePageNumber from '@/components/CasePageNumber';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { FadeIn } from '@/components/anim';
import {
  DollarSign,
  Target,
  Settings,
  BarChart3,
  Database,
  Workflow,
  ShieldCheck,
  TrendingUp,
  Gauge,
  RefreshCw,
} from 'lucide-react';

type TabId = 'overview' | 'star' | 'technical';

const tabs = [
  { id: 'overview' as const, label: 'Overview', icon: DollarSign },
  { id: 'star' as const, label: 'STAR Method', icon: Target },
  { id: 'technical' as const, label: 'Technical', icon: Settings },
];

const quarterData = {
  q1: { label: 'Q1 FY24', cashIn: 1485000000, cashOut: 1345000000, net: 140000000, confidence: 94 },
  q2: { label: 'Q2 FY24', cashIn: 1612000000, cashOut: 1478000000, net: 134000000, confidence: 91 },
  q3: { label: 'Q3 FY24', cashIn: 1425000000, cashOut: 1389000000, net: 36000000, confidence: 87 },
  q4: { label: 'Q4 FY24', cashIn: 1558000000, cashOut: 1502000000, net: 56000000, confidence: 85 },
} as const;

const summaryStats = [
  { label: 'Manual prep reduced', value: '40%', detail: 'hours removed from quarter-close prep' },
  { label: 'Forecast accuracy gain', value: '+6 pts', detail: 'vs prior quarter' },
  { label: 'Visibility horizon', value: '13 weeks', detail: 'rolling liquidity outlook' },
];

const outcomes = [
  {
    title: 'Decision speed',
    value: 'same-day',
    description: 'Treasury reviews cash deltas the day data lands, not at week end.',
    icon: TrendingUp,
  },
  {
    title: 'Exception coverage',
    value: '100%',
    description: 'Every variance over $250K triggers an automated alert in Power BI.',
    icon: ShieldCheck,
  },
  {
    title: 'Refresh cadence',
    value: 'Hourly',
    description: 'Parametrized Alteryx flows rebuild fact tables without engineer help.',
    icon: RefreshCw,
  },
];

const starSituation =
  'Quarter-close forecasts depended on 15-hour spreadsheet roll-ups from Oracle, SAP, and scattered bank portals, so treasury was operating on stale data and holding $8–12M in buffer cash while managing $400M–$500M in monthly outflows.';

const starTaskObjectives = [
  'Integrate Oracle AP/AR and live bank feeds into a single governed workflow.',
  'Automate the monthly rolling forecast so prep time falls from 15+ hours to under two.',
  'Deliver real-time Power BI dashboards for treasury huddles and daily decision-making.',
  'Improve forecast accuracy enough to reduce excess reserves by $3–5M.',
];

const starActionSteps = [
  {
    title: 'Data source integration via SQL',
    detail:
      'Built ODBC connections to Oracle Financials and SAP banking modules, extracted AP payment runs, AR collections, procurement schedules, and standardized the data dictionary for audit.',
  },
  {
    title: 'Alteryx workflow development',
    detail:
      'Authored macros that cleanse and classify inflows/outflows, apply filters, joins, unions, multi-row formulas, and run on Alteryx Server every morning with automated alerting.',
  },
  {
    title: 'Forecast logic & business rules',
    detail:
      'Applied collection curves by aging bucket, enforced actual payment terms (2/10 net-30, standard net-30, etc.), and added override inputs for one-time events like tax payments.',
  },
  {
    title: 'Power BI storytelling',
    detail:
      'Designed executive and drill-down pages with variance tracking, row-level security, scheduled refresh, and Teams notifications for every exception over $250K.',
  },
];

const starResults = [
  'Cut prep workload by 90% (15 hours → 1.5 hours) every quarter-close cycle.',
  'Lifted four-week forecast accuracy to 96% and freed $4.2M in idle reserves.',
  'Rolled the solution out to 8 regional treasury teams and 25+ daily users.',
  'Flagged a $1.8M shortfall early, enabling a proactive line-of-credit draw.',
  'Recognized with an FIS Innovation Award for treasury automation.',
];

const pipelines = [
  {
    title: 'Ingest',
    description: 'Oracle AP/AR extracts and SFTP bank feeds land in staging tables.',
    icon: Database,
  },
  {
    title: 'Transform',
    description: 'Reusable Alteryx macros align charts of accounts, tag drivers, and reconcile to GL totals.',
    icon: Workflow,
  },
  {
    title: 'Model',
    description: 'SQL stored procedures apply seasonal drivers and create the 13-week rolling view.',
    icon: BarChart3,
  },
  {
    title: 'Visualize',
    description: 'Power BI dashboards highlight variances, confidence scores, and cash runway by entity.',
    icon: Gauge,
  },
];

const technicalTools = [
  {
    title: 'Alteryx Designer',
    bullets: [
      'Input/Output connectors to SQL Server + bank APIs',
      'Join, Union, Summarize, Multi-Row Formula tools',
      'Formula/Filter logic for operating vs investing flows',
      'Server scheduling with error handling + alerts',
    ],
  },
  {
    title: 'SQL & Databases',
    bullets: [
      'Oracle Financials (AP/AR) + SAP banking via ODBC',
      'Common table expressions and window functions',
      'Audit-ready data dictionary + lineage',
      'Staging + fact tables powering Power BI',
    ],
  },
  {
    title: 'Power BI',
    bullets: [
      'DAX measures for net cash, accuracy, days cash on hand',
      'Row-level security by entity/region',
      'Executive, treasury ops, and drill-down layouts',
      'Scheduled refresh with Teams/email alerts',
    ],
  },
];

const workflowStages = [
  {
    step: '1',
    title: 'Data ingestion',
    detail:
      'Input Data tools pull Oracle AP/AR runs, SAP ledgers, and bank feeds; quality checks flag missing files and assign record IDs for audit tracking.',
  },
  {
    step: '2',
    title: 'Transformation',
    detail:
      'Filter separates paid/unpaid invoices, formulas calculate payment timing and collection curves, and Date tools bucket the 13-week horizon.',
  },
  {
    step: '3',
    title: 'Consolidation',
    detail:
      'Union and Summarize tools aggregate inflows/outflows, running totals calculate liquidity runway, and Join steps merge manual overrides from Excel.',
  },
  {
    step: '4',
    title: 'Output',
    detail:
      'Results write to SQL for Power BI, an Excel backup is versioned, and an automated email shares completion plus data quality alerts with treasury.',
  },
];

const technicalStack = [
  { label: 'Alteryx Designer', detail: 'Data prep, macros, and orchestration' },
  { label: 'SQL Server', detail: 'Staging + forecast fact tables' },
  { label: 'Power BI', detail: 'Executive dashboard + alerting' },
  { label: 'Oracle & SAP', detail: 'Source systems for AP/AR + treasury modules' },
];

const powerBiSections = [
  {
    title: 'Executive summary',
    bullets: [
      '13-week cash waterfall',
      'KPI cards for current/projected balance',
      'Daily balance trend + cash by category',
    ],
  },
  {
    title: 'Drill-down workbench',
    bullets: [
      'AR aging matrix with collection forecast',
      'AP payments by vendor and term',
      'Bank balances by institution, variance view',
    ],
  },
];

const keyDaxMeasures = ['Net Cash Position = [Total Inflows] - [Total Outflows]', 'Forecast Accuracy = 1 - ABS([Forecast] - [Actual]) / [Actual]', 'Days Cash on Hand = [Current Balance] / [Avg Daily Outflow]'];

const sqlSnippet = `WITH scheduled_payments AS (
  SELECT 
    ap.invoice_id,
    ap.vendor_id,
    v.vendor_name,
    ap.invoice_amount,
    ap.invoice_date,
    ap.due_date,
    ap.payment_terms,
    CASE 
      WHEN ap.payment_terms = '2/10 NET 30' THEN ap.invoice_date + 10
      WHEN ap.payment_terms LIKE 'NET%' THEN ap.due_date
      ELSE ap.due_date
    END AS expected_payment_date,
    CASE
      WHEN ap.payment_terms = '2/10 NET 30' THEN ap.invoice_amount * 0.98
      ELSE ap.invoice_amount
    END AS expected_payment_amount
  FROM oracle_ap_invoices ap
  JOIN oracle_vendors v ON ap.vendor_id = v.vendor_id
  WHERE ap.payment_status = 'UNPAID'
),
weekly_forecast AS (
  SELECT 
    TRUNC(expected_payment_date, 'IW') AS week_start_date,
    vendor_name,
    COUNT(*) AS invoice_count,
    SUM(expected_payment_amount) AS total_payment_amount
  FROM scheduled_payments
  WHERE expected_payment_date <= SYSDATE + 91
  GROUP BY TRUNC(expected_payment_date, 'IW'), vendor_name
)
SELECT 
  week_start_date,
  vendor_name,
  invoice_count,
  total_payment_amount,
  SUM(total_payment_amount) OVER (
    ORDER BY week_start_date
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS cumulative_outflow
FROM weekly_forecast
ORDER BY week_start_date, total_payment_amount DESC;`;

const qaChecklist = [
  'Dual-ledger reconciliation to IFRS + GAAP rules before publishing',
  'Variance explanations captured as metadata tags within Power BI',
  'Automated alert when bank feeds deviate > 0.5% from ERP balances',
];

const objectives = [
  'Integrate Oracle AP/AR and bank feeds into one controllable workflow.',
  'Automate the monthly rolling forecast so quarter-close prep drops from 15+ hours to under 2.',
  'Provide treasury with real-time Power BI dashboards for daily cash calls.',
  'Improve accuracy enough to safely reduce reserve requirements by $3–5M.',
];

const actionSteps = [
  {
    title: 'SQL source foundation',
    detail:
      'Built ODBC connections to Oracle and SAP, extracted payment runs, cash ledgers, and contract schedules, and documented mappings for audit readiness.',
  },
  {
    title: 'Alteryx orchestration',
    detail:
      'Authored reusable macros to cleanse, classify (operating/investing/financing), aggregate by day, and trigger validations before writing to SQL staging.',
  },
  {
    title: 'Forecast logic + overrides',
    detail:
      'Applied collection curves to AR, actual payment terms to AP, and added manual adjustments for one-off events so finance could model scenarios in minutes.',
  },
  {
    title: 'Power BI narrative',
    detail:
      'Published executive, treasury-ops, and variance drill-down views with alerting and metadata capture for every exception over $250K.',
  },
];

function formatMillions(value: number) {
  const millions = value / 1_000_000;
  const formatted = millions.toLocaleString('en-US', {
    minimumFractionDigits: millions >= 100 ? 0 : 2,
    maximumFractionDigits: millions >= 100 ? 0 : 2,
  });
  return `$${formatted}M`;
}

export default function CashFlowProjectPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [selectedQuarter, setSelectedQuarter] = useState<keyof typeof quarterData>('q1');

  const quarter = quarterData[selectedQuarter];

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
                <h1>Cash Flow Forecast Automation</h1>
                <p>
                  Connected Oracle, and bank data into an Alteryx + SQL workflow that refreshed quarterly cash
                  projections (driven by daily monitoring of $400M–$500M in monthly outflows) and fed Power BI visuals so
                  treasury could make same-day liquidity calls.
                </p>
                <div className="case-meta">
                  <span>FIS Global</span>
                  <span>Financial Reporting Analyst II</span>
                  <span>2022 – 2025</span>
                </div>
              </div>
              <div className="case-tags">
                {['Alteryx', 'SQL', 'Power BI', 'Oracle', 'SAP'].map((tag) => (
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
                      Treasury spent two days each week reconciling spreadsheets before they could advise on cash deployment.
                      With $400M–$500M in monthly outflows under management, they also needed daily telemetry during each
                      quarter. By engineering a single workflow, we created a rolling 13-week forecast that aggregates to
                      quarterly views, exposes drivers, and keeps every stakeholder working from the same story.
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
                      <BarChart3 size={18} aria-hidden />
                      <div>
                        <p>Quarterly cash position</p>
                        <small>Daily monitoring of $400M–$500M monthly outflows, aggregated into the 13-week model</small>
                      </div>
                    </div>
                    <div className="case-weekly__controls">
                      {(Object.keys(quarterData) as Array<keyof typeof quarterData>).map((key) => (
                        <button
                          key={key}
                          type="button"
                          className={`case-weekly__pill ${selectedQuarter === key ? 'is-active' : ''}`}
                          onClick={() => setSelectedQuarter(key)}
                        >
                          {quarterData[key].label}
                        </button>
                      ))}
                    </div>
                    <div className="case-weekly__grid">
                      <div>
                        <p>Cash in</p>
                        <strong>{formatMillions(quarter.cashIn)}</strong>
                      </div>
                      <div>
                        <p>Cash out</p>
                        <strong>{formatMillions(quarter.cashOut)}</strong>
                      </div>
                      <div>
                        <p>Net position</p>
                        <strong>{formatMillions(quarter.net)}</strong>
                      </div>
                      <div>
                        <p>Confidence</p>
                        <strong>{quarter.confidence}%</strong>
                      </div>
                    </div>
                  </div>

                  <div className="case-objectives">
                    <h3>Key objectives</h3>
                    <ul>
                      {objectives.map((item) => (
                        <li key={item}>{item}</li>
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

                  <div className="case-outcomes">
                    {outcomes.map((item) => {
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
                    <p className="case-star__summary">Design an automated forecasting solution that would:</p>
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
                    <h3>Alteryx workflow architecture</h3>
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

                  <div className="case-sql">
                    <h3>Sample SQL � AP payment forecast</h3>
                    <pre>{sqlSnippet}</pre>
                  </div>

                  <div className="case-powerbi">
                    <h3>Power BI delivery</h3>
                    <div className="case-powerbi__grid">
                      {powerBiSections.map((section) => (
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
                      <h4>Key DAX measures</h4>
                      <div>
                        {keyDaxMeasures.map((measure) => (
                          <code key={measure}>{measure}</code>
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
          <CasePageNumber current="05" parent="01" />
        </div>
      </section>
    </main>
  );
}
