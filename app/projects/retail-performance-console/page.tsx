'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import CasePageNumber from '@/components/CasePageNumber';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { FadeIn } from '@/components/anim';
import {
  ShoppingCart,
  BarChart3,
  Target,
  Workflow,
  Calculator,
  TrendingUp,
  Settings,
  ShieldCheck,
} from 'lucide-react';

type TabId = 'overview' | 'star' | 'technical';
type MonthId = 'month1' | 'month2' | 'month3';

const tabs = [
  { id: 'overview' as const, label: 'Overview', icon: ShoppingCart },
  { id: 'star' as const, label: 'STAR Method', icon: Target },
  { id: 'technical' as const, label: 'Technical', icon: Workflow },
];

const summaryStats = [
  { label: 'Outside capital', value: '$0', detail: 'fully bootstrapped' },
  { label: 'Inventory turns', value: '5.2x', detail: 'average in peak season' },
  { label: 'Cash buffer', value: '$10K', detail: 'alert threshold maintained' },
];

const monthlyData: Record<
  MonthId,
  { revenue: number; cashPosition: number; inventoryTurns: number; promoROI: number }
> = {
  month1: { revenue: 42500, cashPosition: 18200, inventoryTurns: 4.2, promoROI: 285 },
  month2: { revenue: 48300, cashPosition: 22100, inventoryTurns: 4.8, promoROI: 312 },
  month3: { revenue: 51200, cashPosition: 26400, inventoryTurns: 5.1, promoROI: 298 },
};

const featureHighlights = [
  {
    title: 'Cash flow cockpit',
    value: '30-day view',
    description: 'Daily cash forecast factoring POS trends, vendor terms, and recurring spend.',
    icon: Calculator,
  },
  {
    title: 'Inventory turns',
    value: 'SKU + category',
    description: 'Tracks lead times, dead stock, and reorder triggers to keep capital moving.',
    icon: TrendingUp,
  },
  {
    title: 'Promo ROI',
    value: 'Per campaign',
    description: 'Baseline vs actual sales with margin math so every promotion has accountability.',
    icon: BarChart3,
  },
  {
    title: 'Budget vs actual',
    value: 'Mobile ready',
    description: 'Expense guardrails and alerts keep the business aligned without outside capital.',
    icon: Settings,
  },
];

const objectives = [
  'See daily cash position plus a 30-day forecast with alerts under $10K.',
  'Monitor inventory turns by SKU to prevent dead stock tying up cash.',
  'Attribute promotional spend to incremental sales and gross margin.',
  'Watch budget vs actual in real time while traveling between stores.',
];

const actionSteps = [
  {
    title: 'Data integration',
    detail: 'Connected Square POS, QuickBooks, Excel inventory trackers, budget sheets, and promo logs.',
  },
  {
    title: 'Cash modeling',
    detail: 'Built 13-week moving-average forecast layered with vendor payment schedules and recurring costs.',
  },
  {
    title: 'Inventory analytics',
    detail: 'Calculated turns, reorder points, and dead-stock lists with lead-time assumptions.',
  },
  {
    title: 'Promo measurement',
    detail: 'Tagged transactions by campaign, compared to baselines, and ranked ROI across promos.',
  },
];

const starSituation =
  'Launching a retail venture alongside my finance role meant bootstrapping every dollar. POS reports showed sales, but I lacked a consolidated view of cash, inventory, and marketing performance. Decisions risked being anecdotal instead of data-driven.';

const starTaskObjectives = [
  'Provide daily visibility into cash and a 30-day runway.',
  'Track inventory turns and dead stock by category and SKU.',
  'Measure promotional ROI and tie spend to gross margin.',
  'Keep budget vs actual accessible on mobile while on the go.',
];

const starActionSteps = [
  {
    title: 'Integrate sources',
    detail: 'Square, QuickBooks, Excel, and Google Sheets all flowed into Power BI via Power Query refreshes.',
  },
  {
    title: 'Forecast cash',
    detail: 'Layered sales seasonality with AP schedules and recurring expenses, plus alerts when cash < $10K.',
  },
  {
    title: 'Optimize inventory',
    detail: 'Lead-time based reorder triggers, dead-stock tracking, and category-level turn goals.',
  },
  {
    title: 'Measure promos',
    detail: 'Promo codes captured incremental sales, margin, and cost to rank campaign ROI.',
  },
];

const starResults = [
  'Bootstrapped the venture with $0 outside capital while staying cash-positive every month.',
  'Improved average inventory turns to 5.2x and reduced dead stock to under 3% of on-hand value.',
  'Promo ROI tracking doubled repeat campaign performance compared to early tests.',
  'Mobile-ready dashboards meant budget and vendor decisions happened same-day, even while traveling.',
];

const technicalStack = [
  { label: 'Power BI', detail: 'Power Query, DAX, drill-through mobile layouts' },
  { label: 'Square POS', detail: 'Real-time sales feed with promo code tagging' },
  { label: 'QuickBooks Online', detail: 'Vendor invoices, GL balances, AP aging' },
  { label: 'Excel + Google Sheets', detail: 'Inventory, budget, and campaign trackers' },
];

const technicalTools = [
  {
    title: 'Modeling',
    bullets: ['13-week moving average measures', 'Dynamic what-if parameters for promos', 'Rolling cash forecast tables'],
  },
  {
    title: 'Visualization',
    bullets: ['Mobile-friendly KPI cards', 'Inventory heat maps', 'Promo leaderboard dashboards'],
  },
  {
    title: 'Automation',
    bullets: ['Scheduled refresh with email alerts', 'Power Automate push notifications for low cash', 'Change log snapshots'],
  },
];

const workflowStages = [
  { step: '1', title: 'Ingest', detail: 'Square, QuickBooks, and spreadsheets refresh via dataflows each morning.' },
  {
    step: '2',
    title: 'Model',
    detail: 'Cash, inventory, and promo measures compute forecasts, turns, and ROIs.',
  },
  {
    step: '3',
    title: 'Monitor',
    detail: 'Dashboards show KPIs, and alerts trigger when thresholds breach.',
  },
  {
    step: '4',
    title: 'Act',
    detail: 'Decisions on ordering, promos, and spend happen daily with data in hand.',
  },
];

const keyDaxMeasures = [
  `Inventory Turns =
VAR COGS = CALCULATE(SUM(Sales[COGS]), DATESINPERIOD(Calendar[Date], MAX(Calendar[Date]), -365, DAY))
VAR AvgInv = AVERAGE(Inventory[Value])
RETURN DIVIDE(COGS, AvgInv, 0)`,
  `Promo ROI =
VAR PromoSales = CALCULATE([Total Sales], Sales[Promo_Code] <> BLANK())
VAR Baseline = [Avg Daily Sales] * [Promo Days]
VAR Incremental = PromoSales - Baseline
VAR Margin = Incremental * [Margin %]
VAR Cost = [Discount] + [Marketing Spend]
RETURN DIVIDE((Margin - Cost), Cost, 0) * 100`,
];

const qaChecklist = [
  'Daily refresh checks ensure POS uploads land before business opens.',
  'Threshold alerts tested weekly so cash and inventory notifications never miss.',
  'Promo tagging spot-audited after each campaign to keep ROI accurate.',
  'Budget vs actual reviewed monthly with annotated deltas stored in the dashboard.',
];

export default function RetailPerformanceConsolePage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [month, setMonth] = useState<MonthId>('month1');

  const monthMeta = monthlyData[month];

  const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

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
                <h1>Retail Performance Console</h1>
                <p>
                  Built a Power BI console for my own retail business that unifies POS, vendor, and budgeting data so I
                  can steer cash, inventory, and promo ROI without outside capital.
                </p>
                <div className="case-meta">
                  <span>Independent Retail Venture</span>
                  <span>Entrepreneur & Analyst</span>
                  <span>Self-funded</span>
                </div>
              </div>
              <div className="case-tags">
                {['Entrepreneurship', 'Budgeting', 'Power BI'].map((tag) => (
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
                      Bootstrapping meant no margin for wasted cash, aging stock, or empty marketing spend. By wiring all
                      systems into one console, I ran the store like a mini FP&A function-watching cash runway, turning
                      inventory faster, and doubling down on campaigns that actually paid back.
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
                        <p>Monthly metrics</p>
                        <small>Snapshot of the KPI tiles I reviewed daily</small>
                      </div>
                    </div>
                    <div className="case-weekly__controls">
                      {(Object.keys(monthlyData) as MonthId[]).map((id, idx) => (
                        <button
                          key={id}
                          type="button"
                          className={`case-weekly__pill ${month === id ? 'is-active' : ''}`}
                          onClick={() => setMonth(id)}
                        >
                          Month {idx + 1}
                        </button>
                      ))}
                    </div>
                    <div className="case-weekly__grid">
                      <div>
                        <p>Revenue</p>
                        <strong>{formatCurrency(monthMeta.revenue)}</strong>
                      </div>
                      <div>
                        <p>Cash position</p>
                        <strong>{formatCurrency(monthMeta.cashPosition)}</strong>
                      </div>
                      <div>
                        <p>Inventory turns</p>
                        <strong>{monthMeta.inventoryTurns}x</strong>
                      </div>
                      <div>
                        <p>Promo ROI</p>
                        <strong>{monthMeta.promoROI}%</strong>
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
                    <p className="case-star__summary">Build a console that would:</p>
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
                    <h3>DAX measures</h3>
                    <div className="case-dax">
                      <h4>Key calculations</h4>
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
          <CasePageNumber current="05" parent="06" />
        </div>
      </section>
    </main>
  );
}
