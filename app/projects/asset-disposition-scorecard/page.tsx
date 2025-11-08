'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import CasePageNumber from '@/components/CasePageNumber';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { FadeIn } from '@/components/anim';
import {
  Truck,
  BarChart3,
  TrendingUp,
  Settings,
  Target,
  Workflow,
  Calculator,
  ShieldCheck,
} from 'lucide-react';

type TabId = 'overview' | 'star' | 'technical';
type AssetId = 'asset1' | 'asset2' | 'asset3';

const tabs = [
  { id: 'overview' as const, label: 'Overview', icon: Truck },
  { id: 'star' as const, label: 'STAR Method', icon: Target },
  { id: 'technical' as const, label: 'Technical', icon: Workflow },
];

const summaryStats = [
  { label: 'Recovery lift', value: '8.3 pts', detail: '82% to 90.3% of book value' },
  { label: 'Time-to-disposition', value: '38 days', detail: 'down from 75-day average' },
  { label: 'Realized value', value: '$2.8M', detail: 'incremental proceeds in 12 months' },
];

const assetData: Record<
  AssetId,
  { label: string; marketValue: number; bookValue: number; taxExposure: number; recommendation: 'Hold' | 'Sell'; score: number }
> = {
  asset1: {
    label: 'Enterprise network gear',
    marketValue: 245,
    bookValue: 280,
    taxExposure: 12,
    recommendation: 'Hold',
    score: 72,
  },
  asset2: {
    label: 'Fleet GPS hardware',
    marketValue: 185,
    bookValue: 165,
    taxExposure: 8,
    recommendation: 'Sell',
    score: 85,
  },
  asset3: {
    label: 'Data center servers',
    marketValue: 320,
    bookValue: 310,
    taxExposure: 15,
    recommendation: 'Sell',
    score: 78,
  },
};

const featureHighlights = [
  {
    title: 'Market comps',
    value: 'J.D. Power + auctions',
    description: 'Blended external pricing with condition adjustments and seasonal factors.',
    icon: BarChart3,
  },
  {
    title: 'Book vs market gap',
    value: 'Live delta',
    description: 'Tracked every asset’s book value vs. fair market value to time dispositions.',
    icon: TrendingUp,
  },
  {
    title: 'Tax exposure',
    value: 'Recapture logic',
    description: 'Modeled Section 179, bonus depreciation, and recapture risk for each sale.',
    icon: Calculator,
  },
  {
    title: 'Disposition scoring',
    value: '0-100 scale',
    description: 'Weighted market strength, value gap, tax efficiency, and carrying cost.',
    icon: Settings,
  },
];

const objectives = [
  'Unify market comps, book values, and tax exposure inside one governed scorecard.',
  'Prioritize hold vs sell decisions with a quantitative algorithm and visual heat maps.',
  'Give portfolio leaders a live pipeline with recovery projections and timing signals.',
  'Cut average time-to-disposition under 45 days and lift net recovery by 5-7%.',
];

const actionSteps = [
  {
    title: 'Data integration',
    detail: 'Linked LeaseWave equipment data, Oracle GL balances, market APIs, and historical sale results.',
  },
  {
    title: 'Comparable analysis',
    detail: 'Calculated fair value using regional comps, condition factors, and auction benchmarks.',
  },
  {
    title: 'Tax modeling',
    detail: 'Built recapture checks for Section 179 and bonus depreciation to expose true proceeds.',
  },
  {
    title: 'Scoring engine',
    detail: 'Weighted market strength, book gap, tax efficiency, and carrying costs for every asset.',
  },
];

const starSituation =
  'End-of-term assets worth $650M cycled through the Equipment Finance division, but teams relied on spreadsheets and lagging market intel. Recovery rates stalled near 82% of book and dispositions averaged 75 days, tying up capital and warehousing space.';

const starTaskObjectives = [
  'Blend market comps, book values, and tax exposure into one view.',
  'Score hold vs sell options so leadership can prioritize the best candidates.',
  'Provide portfolio-level visibility that accelerates disposition timing.',
  'Improve recovery rates by at least five points without adding headcount.',
];

const starActionSteps = [
  {
    title: 'Data integration & modeling',
    detail:
      'Connected Power BI to LeaseWave, Oracle GL, valuation APIs, and internal sale history; modeled relationships on asset ID.',
  },
  {
    title: 'Market comparable logic',
    detail:
      'Pulled regional pricing, condition factors, and auction feeds to calculate fair value and six-month averages.',
  },
  {
    title: 'Tax exposure math',
    detail:
      'Captured Section 179 and bonus claims, then measured potential recapture if market value exceeded book.',
  },
  {
    title: 'Disposition scoring',
    detail: 'Weighted market strength (40%), book gap (25%), tax efficiency (20%), carrying costs (15%).',
  },
];

const starResults = [
  'Recovery rate improved from 82% to 90.3%, unlocking $2.8M in additional proceeds.',
  'Average time-to-disposition dropped from 75 days to 38 days, reducing holding cost by $420K per year.',
  'Dashboard became the standard for eight lease specialists managing $650M in assets.',
  'Enabled $12M in tax-optimized sales with minimal recapture risk (saved $180K in taxes).',
];

const technicalStack = [
  { label: 'Power BI', detail: 'Power Query, DAX measures, drill-through asset pages' },
  { label: 'LeaseWave + Oracle', detail: 'Equipment attributes and book value balances' },
  { label: 'J.D. Power & auction feeds', detail: 'Market comp API plus IronPlanet / Ritchie Bros results' },
  { label: 'Internal disposition DB', detail: 'Historical sale outcomes and recovery benchmarks' },
];

const technicalTools = [
  {
    title: 'Modeling techniques',
    bullets: ['Power Query transformations', 'Calculated tables for conditions', 'Relationship modeling on Asset ID'],
  },
  {
    title: 'Analytics & UX',
    bullets: ['Heat maps by score', 'Drill-through detail tabs', 'Mobile-friendly KPI cards'],
  },
  {
    title: 'Automation & QA',
    bullets: ['Scheduled refresh with data-quality checks', 'Exception alerts for stale market data', 'Versioned change log'],
  },
];

const workflowStages = [
  { step: '1', title: 'Ingest', detail: 'LeaseWave, Oracle, and comp feeds land in Power BI dataflows nightly.' },
  {
    step: '2',
    title: 'Model',
    detail: 'Relationships align asset IDs, while DAX measures compute fair value, book gap, and tax exposure.',
  },
  {
    step: '3',
    title: 'Score',
    detail: 'Weighted algorithm assigns 0-100 score and flags recommended action.',
  },
  {
    step: '4',
    title: 'Decide',
    detail: 'Portfolio dashboard visualizes pipeline, recovery forecast, and tax impacts for approvals.',
  },
];

const keyDaxMeasures = [
  `Disposition Score =
VAR MarketStrength = DIVIDE([Market Value], [SixMo Avg], 0) * 40
VAR BookValueGap = DIVIDE([Market Value], [Book Value], 0) * 25
VAR TaxEfficiency = (1 - DIVIDE([Tax Exposure], [Market Value], 0)) * 20
VAR CarryingCost = (1 - DIVIDE([Days Since Lease End], 180, 0)) * 15
RETURN ROUND(MarketStrength + BookValueGap + TaxEfficiency + CarryingCost, 0)`,
  `Tax Exposure =
VAR Gain = [Market Value] - [Book Value]
VAR AccelDep = [Section 179] + [Bonus Depreciation]
VAR TaxRate = 0.21
RETURN IF(Gain > 0, (Gain * TaxRate) + (AccelDep * TaxRate), 0)`,
];

const qaChecklist = [
  'Weekly reconciliation of book values versus Oracle GL balances within +/-0.5%.',
  'Refresh monitor alerts the team if valuation APIs fail or return stale pricing.',
  'Disposition recommendations reviewed biweekly with asset strategy leadership.',
  'Audit log captures every scoring-weight adjustment for compliance.',
];

function formatCurrency(value: number) {
  return `$${value.toLocaleString()}K`;
}

export default function AssetDispositionScorecardPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [asset, setAsset] = useState<AssetId>('asset1');

  const assetMeta = assetData[asset];

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
                <h1>Asset Disposition Scorecard</h1>
                <p>
                  Built a Power BI scorecard that combines market comps, book values, and tax exposure so lease leaders
                  can decide when to hold or sell every off-lease asset.
                </p>
                <div className="case-meta">
                  <span>CIT Bank</span>
                  <span>Lease Specialist III</span>
                  <span>Equipment Finance</span>
                </div>
              </div>
              <div className="case-tags">
                {['Power BI', 'Asset Strategy', 'Analytics'].map((tag) => (
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
                      Portfolio teams lacked a single system that synthesized market intel, book values, and tax exposure.
                      Without it, assets sat on the lot for months, recovery lagged, and tax surprises eroded proceeds.
                      The scorecard created one narrative so sales, credit, and tax aligned on timing and price.
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
                        <p>Asset analyzer</p>
                        <small>Sample of the hold vs sell toggles the team reviews daily</small>
                      </div>
                    </div>
                    <div className="case-weekly__controls">
                      {(Object.keys(assetData) as AssetId[]).map((id) => (
                        <button
                          key={id}
                          type="button"
                          className={`case-weekly__pill ${asset === id ? 'is-active' : ''}`}
                          onClick={() => setAsset(id)}
                        >
                          {assetData[id].label.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                    <div className="case-weekly__grid">
                      <div>
                        <p>Market value</p>
                        <strong>{formatCurrency(assetMeta.marketValue)}</strong>
                      </div>
                      <div>
                        <p>Book value</p>
                        <strong>{formatCurrency(assetMeta.bookValue)}</strong>
                      </div>
                      <div>
                        <p>Tax exposure</p>
                        <strong>{formatCurrency(assetMeta.taxExposure)}</strong>
                      </div>
                      <div>
                        <p>Recommendation</p>
                        <strong>{assetMeta.recommendation}</strong>
                      </div>
                    </div>
                    <div className="case-weekly__grid">
                      <div>
                        <p>Disposition score</p>
                        <strong>{assetMeta.score}/100</strong>
                      </div>
                      <div>
                        <p>Notes</p>
                        <strong>{assetMeta.label}</strong>
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
                    <p className="case-star__summary">Design a scorecard that would:</p>
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
                    <h3>Workflow</h3>
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
                    <h3>Key measures</h3>
                    <div className="case-dax">
                      <h4>DAX snippets</h4>
                      <div>
                        {keyDaxMeasures.map((snippet) => (
                          <code key={snippet}>{snippet}</code>
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
          <CasePageNumber current="05" parent="05" />
        </div>
      </section>
    </main>
  );
}
