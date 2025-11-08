'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import CasePageNumber from '@/components/CasePageNumber';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { FadeIn } from '@/components/anim';
import {
  Calculator,
  TrendingUp,
  Landmark,
  BarChart3,
  Layers,
  ClipboardCheck,
  FileSpreadsheet,
  Workflow,
  Target,
  ShieldCheck,
} from 'lucide-react';

type TabId = 'overview' | 'star' | 'technical';
type ScenarioId = 'base' | 'optimistic' | 'conservative';

const tabs = [
  { id: 'overview' as const, label: 'Overview', icon: BarChart3 },
  { id: 'star' as const, label: 'STAR Method', icon: Target },
  { id: 'technical' as const, label: 'Technical', icon: Workflow },
];

const summaryStats = [
  { label: 'Deal structuring speed', value: '60%', detail: 'analysis time reduction' },
  { label: 'Renewal accuracy', value: '+/-3%', detail: 'forecast variance vs actuals' },
  { label: 'Active users', value: '15+', detail: 'sales and credit teammates' },
];

const scenarioData: Record<
  ScenarioId,
  { label: string; residual: number; irr: number; renewalProb: number; taxSavings: number; description: string }
> = {
  base: {
    label: 'Base case',
    residual: 25,
    irr: 8.2,
    renewalProb: 68,
    taxSavings: 22,
    description: 'Standard market assumptions aligned to historical averages.',
  },
  optimistic: {
    label: 'Optimistic',
    residual: 30,
    irr: 9.1,
    renewalProb: 75,
    taxSavings: 25,
    description: 'Stronger resale curves, higher renewal appetite, and tighter spreads.',
  },
  conservative: {
    label: 'Conservative',
    residual: 20,
    irr: 7.3,
    renewalProb: 62,
    taxSavings: 19,
    description: 'Soft pricing environment with muted residuals and lower win rates.',
  },
};

const featureHighlights = [
  {
    title: 'Renewal probability engine',
    value: 'Weighted scoring',
    description: 'Combines equipment age, payment history, and market signals to rank every contract.',
    icon: TrendingUp,
  },
  {
    title: 'Dynamic pricing calculator',
    value: 'Goal Seek ready',
    description: 'Solves for payment, IRR, or residual targets with built-in sensitivity sliders.',
    icon: Calculator,
  },
  {
    title: 'Tax impact analyzer',
    value: 'MACRS + 179',
    description: 'Models depreciation schedules, bonus programs, and lease vs purchase cash flows.',
    icon: Landmark,
  },
  {
    title: 'Executive dashboard',
    value: 'Portfolio view',
    description: 'Interactive pivots and charts summarizing renewals, pricing ranges, and margin lift.',
    icon: BarChart3,
  },
];

const objectives = [
  'Equip sales and credit with unified pricing, renewal, and tax models for every deal.',
  'Reduce manual spreadsheet mashups so RFPs move from 3-5 days to under one day.',
  'Improve renewal forecasts so inventory planning and funding needs are accurate.',
  'Quantify tax outcomes to guide clients toward the most accretive structure.',
];

const actionSteps = [
  {
    title: 'Portfolio data inventory',
    detail: 'Consolidated 5 years of lease performance, renewal history, and residual outcomes across regions.',
  },
  {
    title: 'Scenario engine build',
    detail: 'Constructed modular Excel models with named ranges, data tables, and scenario toggles.',
  },
  {
    title: 'Pricing and IRR logic',
    detail: 'Layered financial functions (XIRR, XNPV, PMT) plus Goal Seek macros to solve pricing targets.',
  },
  {
    title: 'Tax modeling module',
    detail: 'Automated MACRS schedules, Section 179, and bonus depreciation comparisons.',
  },
  {
    title: 'Enablement and QA',
    detail: 'Authored playbooks, trained 15+ users, and instituted change logs with versioned backups.',
  },
];

const starSituation =
  'The equipment finance group managed $100M+ in technology leases but lacked cohesive tooling. Pricing worksheets, tax calcs, and renewal forecasts lived in separate files, so deals took 3-5 days to analyze and renewal risk was largely guesswork.';

const starTaskObjectives = [
  'Create an Excel playbook covering renewal probability, pricing, and tax impact.',
  'Deliver scenario toggles for optimistic, base, and conservative markets.',
  'Compress deal response time under one day without sacrificing auditability.',
  'Standardize outputs for sales proposals and credit committee reviews.',
];

const starActionSteps = [
  {
    title: 'Unify source data',
    detail: 'Pulled historical lease cash flows, renewal events, and tax treatments into structured tables.',
  },
  {
    title: 'Build renewal scoring model',
    detail: 'Weighted equipment age, customer behavior, geography, and contract length using INDEX/MATCH arrays.',
  },
  {
    title: 'Develop pricing + tax modules',
    detail: 'Connected IRR/NPV calculators with depreciation logic and lease vs buy comparisons.',
  },
  {
    title: 'Automate playbook outputs',
    detail: 'VBA macros generated PDF summaries, refreshed pivots, and logged key assumptions.',
  },
];

const starResults = [
  'Cut pricing analysis time by 60%, turning multi-day RFPs into same-day responses.',
  'Improved renewal forecast accuracy to +/-3%, giving supply chain teams confident demand signals.',
  'Identified $5.2M in tax optimization opportunities through better structure recommendations.',
  'Lifted portfolio IRR by 0.4% ($400K annual revenue) and enabled $28M in renewals in the first quarter.',
];

const technicalStack = [
  { label: 'Excel modeling', detail: 'Dynamic arrays, data tables, Goal Seek/Solver automation' },
  { label: 'Power Query', detail: 'Data ingestion from ERP exports and portfolio trackers' },
  { label: 'VBA macros', detail: 'Scenario resets, PDF export, change logging' },
  { label: 'SharePoint', detail: 'Version control and user-ready distribution' },
];

const technicalTools = [
  {
    title: 'Modeling techniques',
    bullets: ['INDEX/MATCH + XLOOKUP sets', 'XIRR, XNPV, PMT, RATE functions', 'Two-variable data tables'],
  },
  {
    title: 'Visualization & UX',
    bullets: ['Pivot tables with slicers', 'Conditional formatting heatmaps', 'Data validation for guardrails'],
  },
  {
    title: 'Automation & QA',
    bullets: ['VBA macros for routine refresh', 'Error handling prompts before save', 'Change log snapshots per version'],
  },
];

const workflowStages = [
  {
    step: '1',
    title: 'Intake',
    detail: 'Power Query cleans ERP exports and loads contracts, cash flows, and equipment attributes.',
  },
  {
    step: '2',
    title: 'Renewal engine',
    detail: 'Scoring model assigns renewal probabilities and aggregates by segment for planners.',
  },
  {
    step: '3',
    title: 'Pricing + tax modules',
    detail: 'Scenario toggles push through IRR calculators, residual curves, and tax schedules.',
  },
  {
    step: '4',
    title: 'Executive outputs',
    detail: 'Pivot dashboards and automated PDFs summarize outcomes for sales and credit leaders.',
  },
];

const modelSections = [
  {
    title: 'Renewal forecast',
    bullets: ['Probability tiers by equipment class', 'Heatmap of at-risk leases', 'Actions per account owner'],
  },
  {
    title: 'Pricing workbook',
    bullets: ['Payment vs rate sensitivity table', 'Goal Seek buttons for IRR or payment', 'Residual waterfall'],
  },
  {
    title: 'Tax analyzer',
    bullets: ['Lease vs buy cash flow comparison', 'MACRS schedule generator', 'Section 179 toggle'],
  },
  {
    title: 'Executive dashboard',
    bullets: ['Portfolio KPIs (IRR, residual exposure)', 'Renewal funnel stages', 'Regional drilldowns'],
  },
];

const keyExcelFormulas = [
  '=XNPV(DiscountRate, CashFlows, Dates)',
  '=XIRR(CashFlows, Dates)',
  '=PMT(Rate/12, Term, -Principal, FutureValue)',
  '=SUMPRODUCT(Weights, RenewalScores)',
];

const qaChecklist = [
  'Monthly reconciliation of model outputs to actual lease settlements',
  'Version-controlled workbook with reviewer sign-off before release',
  'Automated error flags for blank mandatory inputs or mismatched terms',
  'Quarterly peer review of formulas, macros, and tax assumptions',
];

const sqlSnippet = `=LET(
  cashflows, FILTER(Table1[Amount], Table1[LeaseID]=A2),
  dates, FILTER(Table1[Date], Table1[LeaseID]=A2),
  xirr, XIRR(cashflows, dates),
  residual, INDEX(ResidualCurve[ResidualPct], MATCH(Term, ResidualCurve[Months], 0)),
  xirr + residual
)`;

export default function LeasePortfolioPlaybookPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [scenario, setScenario] = useState<ScenarioId>('base');

  const scenarioMeta = scenarioData[scenario];

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
                <h1>Lease Portfolio Playbook</h1>
                <p>
                  Built modular Excel models for a $100M+ technology lease book so sales and credit teams could test
                  renewal probability, pricing, and tax outcomes in minutes rather than days.
                </p>
                <div className="case-meta">
                  <span>CIT Bank</span>
                  <span>End of Lease Specialist III</span>
                  <span>Equipment Finance Division</span>
                </div>
              </div>
              <div className="case-tags">
                {['Excel', 'Lease Ops', 'Valuation', 'Tax'].map((tag) => (
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
                      RFPs stalled while analysts stitched together pricing, renewal, and tax spreadsheets. Without a
                      single playbook, every deal required custom math, renewals were forecast with gut feel, and tax
                      recommendations lacked evidence. The new toolkit put every scenario at a click so sales could lead
                      with confidence and credit could keep portfolio returns on target.
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
                      <Layers size={18} aria-hidden />
                      <div>
                        <p>Scenario analyzer</p>
                        <small>Toggle the assumptions sales teams tested during negotiations</small>
                      </div>
                    </div>
                    <div className="case-weekly__controls">
                      {(Object.keys(scenarioData) as ScenarioId[]).map((id) => (
                        <button
                          key={id}
                          type="button"
                          className={`case-weekly__pill ${scenario === id ? 'is-active' : ''}`}
                          onClick={() => setScenario(id)}
                        >
                          {scenarioData[id].label}
                        </button>
                      ))}
                    </div>
                    <div className="case-weekly__grid">
                      <div>
                        <p>Residual value</p>
                        <strong>{scenarioMeta.residual}%</strong>
                      </div>
                      <div>
                        <p>Target IRR</p>
                        <strong>{scenarioMeta.irr}%</strong>
                      </div>
                      <div>
                        <p>Renewal probability</p>
                        <strong>{scenarioMeta.renewalProb}%</strong>
                      </div>
                      <div>
                        <p>Tax savings</p>
                        <strong>{scenarioMeta.taxSavings}%</strong>
                      </div>
                    </div>
                    <div className="case-weekly__grid">
                      <div>
                        <p>Description</p>
                        <strong>{scenarioMeta.description}</strong>
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
                    <p className="case-star__summary">Build a unified lease playbook that would:</p>
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
                    <h3>Model workflow</h3>
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
                    <h3>Model modules</h3>
                    <div className="case-powerbi__grid">
                      {modelSections.map((section) => (
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
                      <h4>Key Excel formulas</h4>
                      <div>
                        {keyExcelFormulas.map((formula) => (
                          <code key={formula}>{formula}</code>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="case-sql">
                    <h3>Scenario snippet</h3>
                    <pre>{sqlSnippet}</pre>
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
          <CasePageNumber current="05" parent="03" />
        </div>
      </section>
    </main>
  );
}
