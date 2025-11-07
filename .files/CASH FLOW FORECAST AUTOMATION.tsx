import React, { useState } from 'react';
import { TrendingUp, Database, BarChart3, Settings, CheckCircle2, Target, Lightbulb, Award, DollarSign } from 'lucide-react';

export default function CashFlowProjectShowcase() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedWeek, setSelectedWeek] = useState('week1');
  
  const weeklyData = {
    week1: { cashIn: 4850, cashOut: 3920, netPosition: 930, confidence: 94 },
    week2: { cashIn: 5210, cashOut: 4180, netPosition: 1030, confidence: 89 },
    week3: { cashIn: 4680, cashOut: 4450, netPosition: 230, confidence: 82 }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: DollarSign },
    { id: 'star', label: 'STAR Method', icon: Target },
    { id: 'technical', label: 'Technical Details', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">
                Cash Flow Forecast Automation
              </h1>
              <p className="text-slate-600 text-lg">
                Connected Oracle, SAP, and bank data into an Alteryx + SQL workflow that refreshed weekly cash projections and fed Power BI visuals for treasury
              </p>
              <p className="text-slate-500 text-sm mt-2">
                Financial Reporting Analyst | FIS Global
              </p>
            </div>
            <div className="flex gap-2 flex-wrap justify-end">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                Alteryx
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                SQL
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Power BI
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-6 p-2">
          <div className="flex gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Project Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Designed and implemented an automated cash flow forecasting solution for FIS Treasury by 
                  integrating disparate data sources (Oracle AP/AR, SAP banking modules, and live bank feeds) 
                  using Alteryx workflows and SQL queries. The system generates weekly 13-week rolling forecasts 
                  with real-time visibility into cash positions via Power BI dashboards.
                </p>
              </div>

              {/* Interactive Weekly Forecast Demo */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <BarChart3 className="text-emerald-600" />
                  Weekly Cash Position Forecast
                </h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Select Week:
                  </label>
                  <div className="flex gap-3">
                    {Object.keys(weeklyData).map((week, idx) => (
                      <button
                        key={week}
                        onClick={() => setSelectedWeek(week)}
                        className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                          selectedWeek === week
                            ? 'bg-emerald-600 text-white shadow-lg'
                            : 'bg-white text-slate-700 hover:bg-emerald-100 border border-slate-200'
                        }`}
                      >
                        Week {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Cash Inflows</div>
                    <div className="text-2xl font-bold text-green-600">
                      ${weeklyData[selectedWeek].cashIn}K
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Cash Outflows</div>
                    <div className="text-2xl font-bold text-red-600">
                      ${weeklyData[selectedWeek].cashOut}K
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Net Position</div>
                    <div className="text-2xl font-bold text-emerald-600">
                      ${weeklyData[selectedWeek].netPosition}K
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Confidence</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {weeklyData[selectedWeek].confidence}%
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Automated data extraction from Oracle AP/AR modules',
                    'SAP bank account integration via ODBC connections',
                    'Alteryx workflows for ETL and data transformation',
                    'SQL queries for payment timing and AR collection analysis',
                    '13-week rolling forecast with weekly refresh',
                    'Power BI dashboard with drill-down capabilities'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-emerald-600 mt-1 flex-shrink-0" size={20} />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'star' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">STAR Method Breakdown</h2>

              {/* Situation */}
              <div className="border-l-4 border-emerald-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Lightbulb className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Situation</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  At FIS Global, the Treasury department was struggling with manual cash flow forecasting that 
                  required 15+ hours weekly from finance analysts. Data was scattered across Oracle Financials 
                  (AP invoices, AR collections), SAP (bank transactions), and multiple bank portals (real-time 
                  balances). The team manually compiled Excel files from each system, often working with stale 
                  data that was 3-5 days old. This led to poor visibility into upcoming cash needs, causing the 
                  company to maintain excessive cash reserves ($8-12M) as a safety buffer. Treasury leadership 
                  needed real-time visibility and accurate 13-week rolling forecasts to optimize working capital 
                  and make informed investment decisions.
                </p>
              </div>

              {/* Task */}
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Target className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Task</h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-3">
                  My objective was to design an automated cash flow forecasting solution that would:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Integrate data from Oracle AP/AR, SAP banking, and live bank feeds into a single workflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Automate weekly 13-week rolling cash forecasts with minimal manual intervention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Reduce forecast preparation time from 15+ hours to under 2 hours per week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Provide Treasury with real-time visibility via interactive Power BI dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Improve forecast accuracy to enable reduction in cash reserves by $3-5M</span>
                  </li>
                </ul>
              </div>

              {/* Action */}
              <div className="border-l-4 border-purple-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <Settings className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Action</h3>
                </div>
                <div className="space-y-4 text-slate-700">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">1. Data Source Integration via SQL</h4>
                    <p className="leading-relaxed">
                      Wrote SQL queries to extract scheduled AP payment runs from Oracle (payment date, vendor, 
                      amount, payment terms), AR collection forecasts based on aging buckets and historical 
                      payment patterns, and procurement contract obligations with payment schedules. Created ODBC 
                      connections to SAP to pull daily bank transaction logs and account balances. Documented all 
                      data mappings and field definitions for audit trail.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">2. Alteryx Workflow Development</h4>
                    <p className="leading-relaxed">
                      Built Alteryx workflows to orchestrate the entire ETL process: Input Data tools connected 
                      to SQL outputs and bank API feeds; Filter and Formula tools to categorize cash flows 
                      (operating, investing, financing); Summarize tools to aggregate by week and cash category; 
                      Union tools to combine multiple data sources; Join tools to match AP invoices with payment 
                      schedules and AR invoices with collection forecasts. Implemented error handling and data 
                      quality checks to flag missing or anomalous values. Configured workflows to run automatically 
                      every Monday morning via Alteryx Server.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">3. Cash Forecast Logic & Business Rules</h4>
                    <p className="leading-relaxed">
                      Leveraged my AP/AR experience to build forecasting logic: AP outflows based on invoice due 
                      dates adjusted for actual payment terms (tracked 2-of-10 net-30 vs standard net-30); AR 
                      inflows calculated using historical collection curves by aging bucket (0-30 days: 92% 
                      collected, 31-60: 78%, etc.); Procurement commitments pulled from contract payment schedules; 
                      Payroll and recurring expenses from GL actuals. Added manual adjustment capability for 
                      one-time items (tax payments, dividends, capex).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">4. Power BI Dashboard & Visualization</h4>
                    <p className="leading-relaxed">
                      Designed Power BI report with multiple views: Executive summary showing 13-week waterfall 
                      (opening balance + inflows - outflows = ending balance); Weekly detail drill-down by cash 
                      category with variance to prior week forecast; AR aging heatmap showing collection timing; 
                      AP payment schedule with vendor concentration analysis; Bank account balance trends across 
                      multiple accounts. Implemented row-level security so regional teams could only view their 
                      business unit data. Published to Power BI Service with scheduled daily refresh.
                    </p>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="border-l-4 border-orange-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Result</h3>
                </div>
                <div className="bg-orange-50 rounded-lg p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-3xl font-bold text-orange-600 mb-1">90%</div>
                      <div className="text-sm text-slate-600">Time Saved</div>
                      <div className="text-xs text-slate-500 mt-1">From 15hrs to 1.5hrs weekly</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-3xl font-bold text-orange-600 mb-1">$4.2M</div>
                      <div className="text-sm text-slate-600">Cash Freed Up</div>
                      <div className="text-xs text-slate-500 mt-1">Reduced reserve buffer</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                      <span>Reduced weekly forecast preparation time from 15 hours to 1.5 hours (90% reduction)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                      <span>Improved 4-week forecast accuracy to 96%, enabling Treasury to reduce cash reserves by $4.2M</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                      <span>Deployed company-wide to 8 regional treasury teams across North America and EMEA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                      <span>Power BI dashboard used by 25+ treasury and finance stakeholders daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                      <span>Early identification of $1.8M cash shortfall, allowing proactive line of credit draw</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={18} />
                      <span>Recognized with FIS Innovation Award for process automation and treasury optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Technical Implementation</h2>

              {/* Tools & Technologies */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Database className="text-emerald-600" />
                  Tools & Technologies
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Alteryx Designer</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Input/Output data tools</li>
                      <li>• Join, Union, Summarize tools</li>
                      <li>• Formula and Filter tools</li>
                      <li>• Alteryx Server for scheduling</li>
                      <li>• Workflow error handling</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">SQL & Databases</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Oracle Financials (AP/AR)</li>
                      <li>• SAP ERP banking modules</li>
                      <li>• ODBC connections</li>
                      <li>• Complex joins & CTEs</li>
                      <li>• Window functions</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Power BI</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• DAX measures</li>
                      <li>• Data modeling</li>
                      <li>• Interactive visualizations</li>
                      <li>• Row-level security</li>
                      <li>• Scheduled refresh</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Workflow Architecture */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Alteryx Workflow Architecture</h3>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Data Ingestion Stage</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Multiple Input Data tools connect to SQL Server (hosting Oracle AP/AR extracts), SAP 
                          via ODBC, and bank API endpoints. Data Quality tool validates completeness and flags 
                          anomalies. Record ID tool adds unique identifiers for audit tracking.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Transformation Stage</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Filter tool separates paid vs unpaid invoices. Formula tools calculate payment dates 
                          based on terms, collection timing based on AR aging, and categorize cash flows. 
                          Multi-Row Formula tool applies collection curves based on historical patterns. 
                          Date tools project weekly buckets for 13-week forecast horizon.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Consolidation Stage</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Union tool combines cash inflows (AR collections, other income) and outflows (AP 
                          payments, payroll, capex). Summarize tool aggregates by week and cash category. 
                          Running Total tool calculates cumulative cash position. Join tool brings in manual 
                          adjustments from Excel input file.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Output Stage</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Output Data tool writes to SQL Server table that serves as Power BI data source. 
                          Separate output creates Excel file backup with timestamp. Email tool sends summary 
                          report to Treasury team with forecast completion status and data quality alerts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SQL Query Examples */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Sample SQL Query - AP Payment Forecast</h3>
                <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-green-400 font-mono">
{`WITH scheduled_payments AS (
  SELECT 
    ap.invoice_id,
    ap.vendor_id,
    v.vendor_name,
    ap.invoice_amount,
    ap.invoice_date,
    ap.due_date,
    ap.payment_terms,
    CASE 
      WHEN ap.payment_terms = '2/10 NET 30' 
        THEN ap.invoice_date + 10  -- Take discount
      WHEN ap.payment_terms LIKE 'NET%'
        THEN ap.due_date
      ELSE ap.due_date
    END AS expected_payment_date,
    CASE
      WHEN ap.payment_terms = '2/10 NET 30'
        THEN ap.invoice_amount * 0.98  -- Apply 2% discount
      ELSE ap.invoice_amount
    END AS expected_payment_amount
  FROM oracle_ap_invoices ap
  JOIN oracle_vendors v ON ap.vendor_id = v.vendor_id
  WHERE ap.payment_status = 'UNPAID'
    AND ap.invoice_date >= ADD_MONTHS(SYSDATE, -6)
),
weekly_forecast AS (
  SELECT 
    TRUNC(expected_payment_date, 'IW') AS week_start_date,
    vendor_name,
    COUNT(*) AS invoice_count,
    SUM(expected_payment_amount) AS total_payment_amount
  FROM scheduled_payments
  WHERE expected_payment_date <= SYSDATE + 91  -- 13 weeks
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
ORDER BY week_start_date, total_payment_amount DESC;`}
                  </pre>
                </div>
              </div>

              {/* Power BI Details */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Power BI Dashboard Components</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Executive Summary Page</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Waterfall chart: 13-week cash flow</li>
                      <li>• KPI cards: Current balance, projected balance</li>
                      <li>• Line chart: Daily balance trend</li>
                      <li>• Bar chart: Cash by category</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Detail Drill-Down Pages</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• AR aging matrix with collection forecast</li>
                      <li>• AP payment schedule by vendor</li>
                      <li>• Bank account balances by institution</li>
                      <li>• Variance analysis: Forecast vs actual</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-slate-800 mb-2">Key DAX Measures</h4>
                  <div className="bg-white rounded p-3 font-mono text-xs text-slate-700 mt-2">
                    Net Cash Position = [Total Inflows] - [Total Outflows]<br/>
                    Forecast Accuracy = 1 - ABS([Forecast] - [Actual]) / [Actual]<br/>
                    Days Cash on Hand = [Current Balance] / [Avg Daily Outflow]
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}