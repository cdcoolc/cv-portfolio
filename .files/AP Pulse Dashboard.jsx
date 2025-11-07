function App() {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [selectedMetric, setSelectedMetric] = React.useState('dpo');
  
  const metricData = {
    dpo: { 
      label: 'Days Payable Outstanding',
      current: 42,
      target: 45,
      trend: '+3 days',
      status: 'good',
      description: 'Average time to pay suppliers'
    },
    overdue: { 
      label: 'Overdue Invoices',
      current: 127,
      target: 100,
      trend: '-15 invoices',
      status: 'warning',
      description: 'Invoices past due date'
    },
    concentration: { 
      label: 'Supplier Concentration',
      current: 68,
      target: 60,
      trend: '-5%',
      status: 'warning',
      description: 'Top 10 suppliers as % of total spend'
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '💼' },
    { id: 'star', label: 'STAR Method', icon: '⭐' },
    { id: 'technical', label: 'Technical Details', icon: '⚙️' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">
                Accounts Payable Pulse Dashboard
              </h1>
              <p className="text-slate-600 text-lg">
                Designed a Power BI dashboard that showed DPO, overdue trends, and supplier concentration so finance leaders could act before month end
              </p>
              <p className="text-slate-500 text-sm mt-2">
                Financial Analyst II | Accounts Payable Analytics
              </p>
            </div>
            <div className="flex gap-2 flex-wrap justify-end">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Power BI
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                AP
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Data Viz
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg mb-6 p-2">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Project Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Developed an executive-level Power BI dashboard to provide real-time visibility into accounts 
                  payable performance metrics. The dashboard consolidated data from multiple ERP systems to track 
                  Days Payable Outstanding (DPO), identify overdue invoice trends, and monitor supplier concentration 
                  risk. Enabled finance leadership to make proactive decisions before month-end close, improving 
                  working capital management and supplier relationships.
                </p>
              </div>

              {/* Dashboard Capabilities Showcase */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  📊 Dashboard Capabilities - Key Metrics
                </h3>
                
                <p className="text-sm text-slate-600 mb-4">
                  The dashboard provided real-time monitoring of critical AP metrics with drill-down capabilities:
                </p>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Select Metric to Explore:
                  </label>
                  <div className="flex gap-3">
                    {Object.keys(metricData).map((metric) => (
                      <button
                        key={metric}
                        onClick={() => setSelectedMetric(metric)}
                        className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                          selectedMetric === metric
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-white text-slate-700 hover:bg-blue-100 border border-slate-200'
                        }`}
                      >
                        {metricData[metric].label.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 mb-4 border border-slate-200">
                  <div className="text-sm text-slate-600 mb-1">Metric Description</div>
                  <div className="font-semibold text-slate-800 mb-3">
                    {metricData[selectedMetric].description}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      metricData[selectedMetric].status === 'good' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {metricData[selectedMetric].status === 'good' ? 'On Target' : 'Needs Attention'}
                    </span>
                    <span className="text-sm text-slate-600">
                      Trend: {metricData[selectedMetric].trend}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Current Value</div>
                    <div className="text-3xl font-bold text-blue-600">
                      {metricData[selectedMetric].current}
                      {selectedMetric === 'concentration' ? '%' : ''}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {selectedMetric === 'dpo' && 'days'}
                      {selectedMetric === 'overdue' && 'invoices'}
                      {selectedMetric === 'concentration' && 'of total spend'}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Target Value</div>
                    <div className="text-3xl font-bold text-green-600">
                      {metricData[selectedMetric].target}
                      {selectedMetric === 'concentration' ? '%' : ''}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {selectedMetric === 'dpo' && 'optimal range'}
                      {selectedMetric === 'overdue' && 'maximum threshold'}
                      {selectedMetric === 'concentration' && 'risk limit'}
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-blue-100 rounded-lg p-3 text-sm text-blue-800">
                  <strong>Note:</strong> These are illustrative metrics demonstrating the dashboard's analytical capabilities. 
                  Actual values varied by period, business unit, and supplier category.
                </div>
              </div>

              {/* Dashboard Features */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Dashboard Features</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border border-green-200">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">📈</div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">DPO Trend Analysis</h4>
                        <p className="text-sm text-slate-700">
                          Real-time tracking of Days Payable Outstanding with month-over-month comparisons, 
                          industry benchmarking, and forecasting. Drill-down capabilities by business unit, 
                          supplier category, and payment terms. Automated alerts when DPO deviated from target 
                          range (40-50 days).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-5 border border-red-200">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">⚠️</div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Overdue Invoice Monitoring</h4>
                        <p className="text-sm text-slate-700">
                          Aging analysis showing invoices by days overdue (1-30, 31-60, 61-90, 90+ days). 
                          Heatmap visualization highlighting high-risk suppliers and business units. Automated 
                          email notifications to AP team and business owners for invoices approaching critical 
                          aging thresholds.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-5 border border-purple-200">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">🎯</div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Supplier Concentration Risk</h4>
                        <p className="text-sm text-slate-700">
                          Pareto analysis showing top suppliers by spend volume. Concentration metrics tracking 
                          percentage of total spend with top 5, 10, and 20 suppliers. Risk scoring based on 
                          single-source dependencies and geographic concentration. Trend analysis showing 
                          concentration changes over time.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-5 border border-blue-200">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">💰</div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Cash Flow Forecasting</h4>
                        <p className="text-sm text-slate-700">
                          30-day rolling forecast of upcoming payment obligations based on invoice due dates. 
                          Scenario analysis showing impact of early payment discounts vs. extended payment terms. 
                          Integration with treasury cash position data to optimize payment timing and working 
                          capital.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Impact */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Business Impact</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">85%</div>
                    <div className="text-sm text-slate-600">Faster Issue Identification</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">$2.1M</div>
                    <div className="text-sm text-slate-600">Working Capital Optimized</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">40%</div>
                    <div className="text-sm text-slate-600">Reduction in Overdue Invoices</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'star' && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">STAR Method Breakdown</h2>

              {/* Situation */}
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    💡
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Situation</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  The finance organization lacked real-time visibility into accounts payable performance metrics. 
                  AP data was scattered across multiple ERP systems (SAP, Oracle, legacy platforms) with no 
                  centralized reporting. Finance leaders received static Excel reports 5-7 days after month-end, 
                  making it impossible to address issues proactively. Key metrics like Days Payable Outstanding 
                  (DPO), overdue invoice aging, and supplier concentration risk were calculated manually using 
                  different methodologies across business units, leading to inconsistent reporting. The AP team 
                  spent 40+ hours per month compiling reports instead of analyzing trends. Late payment penalties 
                  were increasing due to lack of visibility into aging invoices. Supplier concentration risk was 
                  not monitored systematically, creating potential supply chain vulnerabilities. Leadership needed 
                  a real-time dashboard to monitor AP health and take corrective action before month-end close.
                </p>
              </div>

              {/* Task */}
              <div className="border-l-4 border-green-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white text-xl">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Task</h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-3">
                  My objective was to design and implement a Power BI dashboard that would:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Consolidate AP data from multiple ERP systems (SAP, Oracle, legacy platforms) into a single source of truth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Provide real-time tracking of Days Payable Outstanding (DPO) with trend analysis and benchmarking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Create aging analysis for overdue invoices with automated alerts for high-risk items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Monitor supplier concentration risk using Pareto analysis and risk scoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Enable drill-down capabilities by business unit, supplier category, and payment terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Reduce manual reporting time by 80% and enable proactive decision-making before month-end</span>
                  </li>
                </ul>
              </div>

              {/* Action */}
              <div className="border-l-4 border-purple-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                    ⚙️
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Action</h3>
                </div>
                <div className="space-y-4 text-slate-700">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">1. Data Integration & ETL Pipeline</h4>
                    <p className="leading-relaxed">
                      Built data integration pipeline using Power Query to extract AP data from SAP (primary ERP), 
                      Oracle (legacy system for 2 business units), and SQL Server (vendor master data). Created 
                      incremental refresh logic to pull only new/updated invoices daily, reducing data load time 
                      from 4 hours to 15 minutes. Standardized data schemas across systems by mapping disparate 
                      field names (e.g., "Vendor_ID" in SAP vs. "Supplier_Code" in Oracle) to common data model. 
                      Implemented data quality checks to flag missing invoice dates, duplicate entries, and invalid 
                      GL codes. Built staging tables in Azure SQL Database to store cleansed data before loading 
                      into Power BI. Established automated refresh schedule (6 AM daily) to ensure dashboard showed 
                      current-day data by start of business.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">2. DPO Calculation & Trend Analysis</h4>
                    <p className="leading-relaxed">
                      Developed DAX measures to calculate Days Payable Outstanding using formula: DPO = (Accounts 
                      Payable / Cost of Goods Sold) × Number of Days. Created rolling 12-month trend line showing 
                      DPO evolution with month-over-month variance analysis. Built comparison view showing company 
                      DPO vs. industry benchmarks (sourced from Bloomberg and S&P Capital IQ). Implemented drill-down 
                      hierarchy: Company → Business Unit → Supplier Category → Individual Supplier. Added target 
                      range indicators (40-50 days optimal) with conditional formatting: green for on-target, yellow 
                      for approaching limits, red for out-of-range. Created "What-If" parameter allowing users to 
                      model impact of payment term changes on DPO (e.g., shifting from Net 30 to Net 45).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">3. Overdue Invoice Aging & Alerts</h4>
                    <p className="leading-relaxed">
                      Built aging buckets categorizing overdue invoices: 1-30 days (low risk), 31-60 days (medium 
                      risk), 61-90 days (high risk), 90+ days (critical). Created heatmap visualization showing 
                      overdue concentration by business unit and supplier, with color intensity indicating severity. 
                      Developed automated alert system using Power Automate: emails sent to AP team when invoice 
                      enters 60+ day bucket, escalation to CFO for 90+ day items. Added "Top 10 Overdue Suppliers" 
                      table with contact information and payment history. Implemented trend analysis showing overdue 
                      invoice count and dollar value over time. Created drill-through page showing invoice-level 
                      detail: invoice number, PO reference, goods receipt date, payment terms, days overdue, and 
                      responsible AP analyst.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">4. Supplier Concentration Risk Analysis</h4>
                    <p className="leading-relaxed">
                      Built Pareto chart showing top 20 suppliers by annual spend with cumulative percentage line. 
                      Calculated concentration metrics: Top 5 suppliers (% of total spend), Top 10 suppliers, Top 20 
                      suppliers. Created risk scoring model combining spend concentration, single-source dependencies 
                      (suppliers with no alternatives), and geographic concentration (suppliers in same region). 
                      Developed trend analysis showing how concentration changed over 24 months, highlighting 
                      increasing/decreasing dependencies. Added supplier diversification recommendations: identified 
                      categories with high concentration and suggested alternative suppliers. Implemented geographic 
                      map visualization showing supplier locations with bubble size representing spend volume. Created 
                      "Supplier Health Score" combining payment history, concentration risk, and financial stability 
                      (D&B ratings).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">5. Executive Dashboard & User Training</h4>
                    <p className="leading-relaxed">
                      Designed executive summary page with 6 key KPI cards: Total AP Balance, DPO, Overdue Invoice 
                      Count, Overdue Dollar Value, Top Supplier Concentration %, Average Days to Pay. Created 
                      interactive slicers for filtering by: Business Unit, Supplier Category, Payment Terms, Date 
                      Range. Built 30-day payment forecast showing upcoming obligations by week. Added bookmarks for 
                      common views: "Executive Summary", "Overdue Deep Dive", "Supplier Risk", "DPO Analysis". 
                      Implemented row-level security (RLS) so business unit leaders only see their data. Conducted 
                      training sessions for 25+ finance team members: CFO, Controllers, AP Managers, AP Analysts. 
                      Created user guide with screenshots and step-by-step instructions. Established monthly review 
                      meetings to gather feedback and prioritize enhancements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="border-l-4 border-orange-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white text-xl">
                    🏆
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Result</h3>
                </div>
                <div className="bg-orange-50 rounded-lg p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-3xl font-bold text-orange-600 mb-1">85%</div>
                      <div className="text-sm text-slate-600">Faster Issue Identification</div>
                      <div className="text-xs text-slate-500 mt-1">Real-time alerts vs. 5-7 day lag</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-3xl font-bold text-orange-600 mb-1">$2.1M</div>
                      <div className="text-sm text-slate-600">Working Capital Optimized</div>
                      <div className="text-xs text-slate-500 mt-1">Through improved DPO management</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Reduced manual reporting time by 85% (40 hours/month to 6 hours/month), freeing AP team for analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Improved DPO from 38 days to 44 days (optimal range), optimizing $2.1M in working capital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Reduced overdue invoices by 40% (from 210 to 127 invoices) through proactive monitoring and alerts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Eliminated $85K in annual late payment penalties by identifying aging invoices before critical thresholds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Identified supplier concentration risk: Top 5 suppliers represented 68% of spend, leading to diversification initiative</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Dashboard adopted by CFO for weekly leadership meetings, becoming primary AP performance monitoring tool</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Enabled proactive decision-making: finance leaders could address issues 2-3 weeks before month-end close</span>
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
                  🛠️ Tools & Technologies
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Power BI</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Power Query for ETL</li>
                      <li>• DAX for calculations</li>
                      <li>• Custom visuals and themes</li>
                      <li>• Row-level security (RLS)</li>
                      <li>• Incremental refresh</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Data Sources</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• SAP ERP (primary)</li>
                      <li>• Oracle Financials (legacy)</li>
                      <li>• Azure SQL Database</li>
                      <li>• Excel (vendor master data)</li>
                      <li>• Bloomberg (benchmarks)</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Automation</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Power Automate for alerts</li>
                      <li>• Scheduled refresh (daily 6 AM)</li>
                      <li>• Email notifications</li>
                      <li>• PDF export automation</li>
                      <li>• Data quality checks</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Model Architecture */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Data Model Architecture</h3>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Fact Table: Invoice Transactions</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Central fact table containing invoice-level data: Invoice_ID, Supplier_ID, Business_Unit_ID, 
                          Invoice_Date, Due_Date, Payment_Date, Invoice_Amount, Payment_Amount, Currency, GL_Account, 
                          PO_Number, Payment_Terms. Grain: One row per invoice. Relationships: Many-to-one with 
                          Supplier, Business Unit, Date, and GL Account dimensions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Dimension: Supplier Master</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Supplier attributes: Supplier_ID (PK), Supplier_Name, Supplier_Category (IT, Professional 
                          Services, Manufacturing, etc.), Country, Region, Payment_Terms_Default, D&B_Rating, 
                          Contact_Email. Type 1 slowly changing dimension (overwrites on change). Used for drill-down 
                          and filtering.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Dimension: Date Calendar</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Date dimension with fiscal calendar: Date (PK), Year, Quarter, Month, Week, Day, Fiscal_Year, 
                          Fiscal_Quarter, Fiscal_Month, Is_Weekend, Is_Holiday. Relationships to Invoice_Date, Due_Date, 
                          and Payment_Date in fact table. Enables time intelligence calculations (YTD, MTD, prior period 
                          comparisons).
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Dimension: Business Unit</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Organizational hierarchy: Business_Unit_ID (PK), Business_Unit_Name, Division, Region, 
                          Cost_Center, Business_Unit_Leader. Used for row-level security (RLS) to restrict data access 
                          by business unit. Enables drill-down from company to division to business unit.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Calculated Table: Benchmark Data</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Industry benchmark data imported from Bloomberg: Industry, Year, Quarter, Avg_DPO, 
                          Median_DPO, 25th_Percentile, 75th_Percentile. Refreshed quarterly. Used for comparison 
                          visuals showing company DPO vs. industry benchmarks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DAX Measures */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Key DAX Measures</h3>
                <div className="space-y-4">
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="text-green-400 text-xs font-semibold mb-2">Days Payable Outstanding (DPO)</div>
                    <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`DPO = 
VAR AvgAP = 
    CALCULATE(
        AVERAGE('Invoice'[Invoice_Amount]),
        'Invoice'[Payment_Date] = BLANK()
    )
VAR COGS = [Total_COGS]
VAR Days = 365
RETURN
    DIVIDE(AvgAP, COGS) * Days`}
                    </pre>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="text-green-400 text-xs font-semibold mb-2">Overdue Invoice Count by Aging Bucket</div>
                    <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`Overdue_1_30_Days = 
CALCULATE(
    COUNTROWS('Invoice'),
    'Invoice'[Days_Overdue] >= 1,
    'Invoice'[Days_Overdue] <= 30
)

Overdue_31_60_Days = 
CALCULATE(
    COUNTROWS('Invoice'),
    'Invoice'[Days_Overdue] >= 31,
    'Invoice'[Days_Overdue] <= 60
)`}
                    </pre>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="text-green-400 text-xs font-semibold mb-2">Supplier Concentration (Top 10)</div>
                    <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`Top10_Concentration = 
VAR Top10Spend = 
    CALCULATE(
        [Total_Spend],
        TOPN(10, ALL('Supplier'), [Total_Spend], DESC)
    )
VAR TotalSpend = [Total_Spend]
RETURN
    DIVIDE(Top10Spend, TotalSpend)`}
                    </pre>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="text-green-400 text-xs font-semibold mb-2">DPO Month-over-Month Change</div>
                    <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`DPO_MoM_Change = 
VAR CurrentDPO = [DPO]
VAR PriorDPO = 
    CALCULATE(
        [DPO],
        DATEADD('Date'[Date], -1, MONTH)
    )
RETURN
    CurrentDPO - PriorDPO`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Dashboard Pages */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Dashboard Pages & Visuals</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Page 1: Executive Summary</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• 6 KPI cards (Total AP, DPO, Overdue Count, etc.)</li>
                      <li>• DPO trend line chart (12 months)</li>
                      <li>• Overdue aging donut chart</li>
                      <li>• Top 10 suppliers bar chart</li>
                      <li>• 30-day payment forecast table</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Page 2: DPO Deep Dive</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• DPO vs. benchmark comparison</li>
                      <li>• DPO by business unit matrix</li>
                      <li>• DPO by supplier category</li>
                      <li>• What-If parameter for payment terms</li>
                      <li>• Drill-through to invoice detail</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Page 3: Overdue Analysis</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Aging bucket waterfall chart</li>
                      <li>• Heatmap by business unit & supplier</li>
                      <li>• Top 10 overdue suppliers table</li>
                      <li>• Overdue trend (6 months)</li>
                      <li>• Drill-through to invoice detail</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Page 4: Supplier Risk</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Pareto chart (Top 20 suppliers)</li>
                      <li>• Concentration metrics (Top 5, 10, 20)</li>
                      <li>• Geographic map with spend bubbles</li>
                      <li>• Supplier health score matrix</li>
                      <li>• Concentration trend (24 months)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Power Automate Alerts */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Automated Alert System</h3>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">Alert 1:</span>
                      <span>
                        <strong>Overdue 60+ Days</strong> - Triggered when invoice enters 61-90 day bucket. 
                        Email sent to AP Analyst and AP Manager with invoice details and supplier contact info.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">Alert 2:</span>
                      <span>
                        <strong>Critical Overdue 90+ Days</strong> - Triggered when invoice enters 90+ day bucket. 
                        Email sent to AP Manager, Controller, and CFO with escalation request.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-600 font-bold">Alert 3:</span>
                      <span>
                        <strong>DPO Out of Range</strong> - Triggered when DPO falls below 40 days or exceeds 50 days. 
                        Email sent to Controller with trend analysis and recommended actions.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">Alert 4:</span>
                      <span>
                        <strong>High Concentration Risk</strong> - Triggered when Top 5 supplier concentration exceeds 
                        70%. Email sent to CFO and Procurement Director with diversification recommendations.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Governance */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Security & Governance</h3>
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>
                        <strong>Row-Level Security (RLS):</strong> Business unit leaders restricted to their own data. 
                        CFO and Controllers have access to all data.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>
                        <strong>Data Refresh Schedule:</strong> Daily at 6 AM (incremental refresh for last 7 days). 
                        Full refresh monthly on 1st of month.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>
                        <strong>Version Control:</strong> Dashboard changes tracked in Azure DevOps. Monthly release 
                        cycle with user acceptance testing (UAT).
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>
                        <strong>Data Quality Monitoring:</strong> Automated checks for missing dates, duplicate invoices, 
                        and invalid GL codes. Alerts sent to data steward if quality issues detected.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}