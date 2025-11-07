'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import CasePageNumber from '../../../components/CasePageNumber';
import Section from '../../../components/Section';
import Button from '../../../components/Button';
import { FadeIn } from '../../../components/anim';
import { Gauge, AlertTriangle, PieChart, CalendarClock, Workflow, Target, ShieldCheck } from 'lucide-react';

type TabId = 'overview' | 'star' | 'technical';
type MetricId = 'dpo' | 'overdue' | 'concentration';

const tabs = [
  { id: 'overview' as const, label: 'Overview', icon: Gauge },
  { id: 'star' as const, label: 'STAR Method', icon: Target },
  { id: 'technical' as const, label: 'Technical', icon: Workflow },
];

const summaryStats = [
  { label: 'Issue identification', value: '85%', detail: 'alerts triggered vs 5-7 day lag' },
  { label: 'Working capital optimized', value: '$2.1M', detail: 'captured through DPO lift' },
  { label: 'Overdue reduction', value: '40%', detail: 'drop in invoices past term' },
];

const metricInsights: Record<
  MetricId,
  { label: string; description: string; current: string; target: string; trend: string; status: 'good' | 'warning'; note: string }
> = {
  dpo: {
    label: 'Days Payable Outstanding',
    description: 'Average time to pay suppliers',
    current: '42 days',
    target: '45 days',
    trend: '+3 days vs prior quarter',
    status: 'good',
    note: 'Guardrails 40-50 days; alerts fire if breached for 2 refreshes.',
  },
  overdue: {
    label: 'Overdue invoices',
    description: 'Invoices past contractual terms',
    current: '127 invoices / $8.4M',
    target: '<=100 invoices',
    trend: '-15 invoices since March',
    status: 'warning',
    note: 'Escalates to AP leads at 120 invoices or $6M exposure.',
  },
  concentration: {
    label: 'Supplier concentration',
    description: 'Top 10 vendors as % of total spend',
    current: '68%',
    target: '<=60%',
    trend: '-5 pts after sourcing push',
    status: 'warning',
    note: 'Triggers diversification workflow at 65% share.',
  },
};

const featureHighlights = [
  {
    title: 'DPO trend analysis',
    value: '40-50 day guardrail',
    description:
      'MoM comparisons, industry benchmarking, and forward-looking scenarios showing impact of term changes or discount capture.',
    icon: Gauge,
  },
  {
    title: 'Overdue monitoring',
    value: '4 tier aging heatmap',
    description: 'Aging buckets (1-30, 31-60, 61-90, 90+) with alerts tied to supplier and business unit owners.',
    icon: AlertTriangle,
  },
  {
    title: 'Supplier concentration',
    value: 'Top 10 = 68%',
    description: 'Pareto analysis, dependency scoring, and trend lines that flag single-source risk early.',
    icon: PieChart,
  },
  {
    title: 'Cash flow forecast',
    value: '30-day runway',
    description: 'Integrates treasury positions to show when payment batches should shift to protect liquidity.',
    icon: CalendarClock,
  },
];

const objectives = [
  'Give finance a live DPO, overdue, and concentration pulse instead of weekly slide decks.',
  'Blend Oracle + SAP AP data into governed fact tables with audit-grade lineage.',
  'Stand up alerts and scenario views so AP leaders act before penalties or strained supplier relationships.',
  'Codify KPIs that hold business units accountable to terms, discounts, and diversification targets.',
];

const actionSteps = [
  {
    title: 'Data inventory + integration',
    detail: 'Mapped SAP, Oracle, and bank files, standardized vendor IDs, and scripted nightly PowerShell/SQL extracts.',
  },
  {
    title: 'Semantic modeling',
    detail:
      'Built Power BI dataflows with aging buckets, payment term logic, and currency normalization ready for RLS policies.',
  },
  {
    title: 'Metric design',
    detail:
      'Codified DPO, overdue exposure, and supplier share formulas with what-if parameters for early payments vs deferrals.',
  },
  {
    title: 'Alert automation',
    detail: 'Power Automate flows post Teams/email alerts whenever thresholds breach for two refreshes.',
  },
  {
    title: 'Executive enablement',
    detail: 'Bookmarks, drillthroughs, and user guides so CFO staff can self-serve by BU, supplier tier, or payment term.',
  },
];

const starSituation =
  'Leadership had no real-time AP telemetry; finance teams stitched together Oracle and SAP exports each week, leaving DPO, overdue exposure, and supplier dependencies invisible until close.';

const starTaskObjectives = [
  'Deliver one governed dashboard that tracked DPO, overdue invoices, and concentration risk.',
  'Shorten reporting lag from weekly decks to hourly refreshes.',
  'Embed automation so alerts and escalations happen before penalties accrue.',
  'Prove working-capital wins that justify rolling the model to all business units.',
];

const starActionSteps = [
  {
    title: 'Consolidated data feeds',
    detail:
      'Set up SQL staging tables for Oracle AP, SAP vendor masters, and bank confirmations; reconciled totals nightly.',
  },
  {
    title: 'Metric + rule engine',
    detail:
      'Defined DPO maths, overdue tolerances, supplier share thresholds, and scenario inputs for discount vs defer plays.',
  },
  {
    title: 'Visualization & drilldowns',
    detail:
      'Designed Power BI pages for executive KPIs, overdue heatmaps, supplier Pareto, and 30-day payment forecasts.',
  },
  {
    title: 'Alerting & adoption',
    detail:
      'Power Automate + Teams workflows escalated exceptions, while training + guides onboarded 25+ finance stakeholders.',
  },
];

const starResults = [
  '85% faster issue detection with hourly refreshes and automated alerts.',
  '$2.1M in optimized working capital by nudging DPO into the 42-45 day target range.',
  '40% reduction in overdue invoices (210 -> 127) and $85K in late penalties eliminated.',
  'Dashboard became the CFO staff\'s weekly source for supplier health, risk, and payment planning.',
];

const technicalStack = [
  { label: 'Power BI', detail: 'Executive + drill-down experience, bookmarks, and row-level security' },
  { label: 'SQL Server', detail: 'Staging tables for Oracle + SAP feeds, KPI calc views' },
  { label: 'Power Automate', detail: 'Exception alerting to Teams/email with routing by business unit' },
  { label: 'Azure Files & SFTP', detail: 'Nightly drop zone for ERP extracts and bank confirms' },
];

const technicalTools = [
  {
    title: 'Data modeling',
    bullets: [
      'Power Query transformations for currency, vendor, and term normalization',
      'Calculated tables for aging buckets + concentration metrics',
      'Role-playing date table for invoice vs payment timelines',
    ],
  },
  {
    title: 'Automation',
    bullets: [
      'Power Automate flows triggered on dataset refresh failures',
      'Teams notifications for overdue invoices >$100K or >60 days',
      'Email digests summarizing KPI movement by business unit',
    ],
  },
  {
    title: 'Governance',
    bullets: [
      'Row-level security by region, business unit, and supplier tier',
      'Data dictionary documenting KPI math + owners',
      'Usage metrics to track adoption across 25+ users',
    ],
  },
];

const workflowStages = [
  {
    step: '1',
    title: 'Ingest',
    detail: 'ODBC pulls from Oracle + SAP with checksum validation before landing in SQL staging tables.',
  },
  {
    step: '2',
    title: 'Transform',
    detail: 'Power Query cleans vendor master data, aligns currency, and enriches invoices with payment terms.',
  },
  {
    step: '3',
    title: 'Model',
    detail: 'DAX measures calculate DPO, overdue risk, supplier concentration, and 30-day cash obligations.',
  },
  {
    step: '4',
    title: 'Publish & alert',
    detail: 'Datasets refresh hourly, Power Automate broadcasts exceptions, and Teams tabs host the dashboard.',
  },
];

const powerBiSections = [
  {
    title: 'Executive summary',
    bullets: ['6 KPI cards (AP balance, DPO, overdue count/value)', '30-day payment runway', 'Global slicers'],
  },
  {
    title: 'Overdue deep dive',
    bullets: ['Heatmap by BU and supplier', 'Aging ladder with drillthrough', 'Penalty risk tracker'],
  },
  {
    title: 'Supplier risk',
    bullets: ['Pareto of top suppliers', 'Concentration trend lines', 'Dependency + diversification scoring'],
  },
  {
    title: 'DPO analysis',
    bullets: ['Benchmark vs target range', 'Scenario toggles for discount capture', 'Term-level waterfall'],
  },
];

const keyDaxMeasures = [
  'DPO = (SUM(AP[Outstanding Amount]) / SUM(AP[Daily Outflow])) * 30',
  'Overdue Exposure = CALCULATE(SUM(AP[Invoice Amount]), AP[Days Past Due] > 0)',
  'Supplier Concentration = DIVIDE([Top10 Spend], [Total Spend])',
  'Payment Forecast = CALCULATE(SUM(AP[Invoice Amount]), DATESINPERIOD(Date[Date], TODAY(), 30, DAY))',
];

const qaChecklist = [
  'Invoice totals reconcile to ERP within +/-0.3% every refresh',
  'Row-level security validated quarterly with audit team',
  'Alert routing tested monthly to ensure ownership accuracy',
  'Usage telemetry reviewed monthly to prioritize enhancements',
];

const sqlSnippet = `WITH invoice_base AS (
  SELECT
    v.vendor_name,
    i.invoice_number,
    i.invoice_amount,
    i.invoice_date,
    i.due_date,
    DATEDIFF(day, i.due_date, GETDATE()) AS days_past_due,
    CASE
      WHEN DATEDIFF(day, i.due_date, GETDATE()) <= 0 THEN 'Current'
      WHEN DATEDIFF(day, i.due_date, GETDATE()) BETWEEN 1 AND 30 THEN '1-30'
      WHEN DATEDIFF(day, i.due_date, GETDATE()) BETWEEN 31 AND 60 THEN '31-60'
      WHEN DATEDIFF(day, i.due_date, GETDATE()) BETWEEN 61 AND 90 THEN '61-90'
      ELSE '90+'
    END AS aging_bucket
  FROM ap_invoices i
  JOIN vendors v ON i.vendor_id = v.vendor_id
  WHERE i.payment_status <> 'PAID'
),
summary AS (
  SELECT
    aging_bucket,
    COUNT(*) AS invoice_count,
    SUM(invoice_amount) AS exposure
  FROM invoice_base
  GROUP BY aging_bucket
)
SELECT *
FROM summary
ORDER BY CASE aging_bucket
  WHEN 'Current' THEN 0
  WHEN '1-30' THEN 1
  WHEN '31-60' THEN 2
  WHEN '61-90' THEN 3
  ELSE 4
END;`;

export default function AccountsPayablePulsePage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [selectedMetric, setSelectedMetric] = useState<MetricId>('dpo');

  const metric = metricInsights[selectedMetric];

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
                <h1>Accounts Payable Pulse Dashboard</h1>
                <p>
                  Built a Power BI control tower for DPO, overdue exposure, and supplier concentration so AP leaders
                  could intervene ahead of monthly close, avoid late penalties, and optimize working capital.
                </p>
                <div className="case-meta">
                  <span>FIS Global</span>
                  <span>Financial Analyst II</span>
                  <span>Accounts Payable Analytics</span>
                </div>
              </div>
              <div className="case-tags">
                {['Power BI', 'SQL', 'AP Analytics', 'Automation'].map((tag) => (
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
                      AP performance was invisible between weekly reporting cycles, so overdue invoices piled up, DPO
                      drifted out of range, and supplier diversification decisions lagged. By centralizing Oracle,
                      SAP, and bank data into one dashboard, finance gained an hourly pulse on risk, the levers behind
                      DPO, and the cash runway to decide which batches to expedite or defer.
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
                      <Gauge size={18} aria-hidden />
                      <div>
                        <p>Live KPI spotlight</p>
                        <small>Switch between the metrics AP monitored hourly</small>
                      </div>
                    </div>
                    <div className="case-weekly__controls">
                      {(Object.keys(metricInsights) as MetricId[]).map((id) => (
                        <button
                          key={id}
                          type="button"
                          className={`case-weekly__pill ${selectedMetric === id ? 'is-active' : ''}`}
                          onClick={() => setSelectedMetric(id)}
                        >
                          {metricInsights[id].label.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                    <div className="case-weekly__grid">
                      <div>
                        <p>Metric</p>
                        <strong>{metric.label}</strong>
                      </div>
                      <div>
                        <p>Current</p>
                        <strong>{metric.current}</strong>
                      </div>
                      <div>
                        <p>Target</p>
                        <strong>{metric.target}</strong>
                      </div>
                      <div>
                        <p>Trend</p>
                        <strong>{metric.trend}</strong>
                      </div>
                    </div>
                    <div className="case-weekly__grid">
                      <div>
                        <p>Status</p>
                        <strong>{metric.status === 'good' ? 'On target' : 'Needs attention'}</strong>
                      </div>
                      <div>
                        <p>Alerting rule</p>
                        <strong>{metric.note}</strong>
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
                    <p className="case-star__summary">Deliver a single source of truth that would:</p>
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
                    <h3>Workflow architecture</h3>
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
                    <h3>Sample SQL - aging ladder</h3>
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
          <CasePageNumber current="05" parent="02" />
        </div>
      </section>
    </main>
  );
}
