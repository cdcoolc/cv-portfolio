function App() {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [selectedScenario, setSelectedScenario] = React.useState('base');
  
  const scenarioData = {
    base: { 
      label: 'Base Case',
      residual: 25, 
      irr: 8.2, 
      renewalProb: 68,
      taxSavings: 22,
      description: 'Standard market assumptions'
    },
    optimistic: { 
      label: 'Optimistic',
      residual: 30, 
      irr: 9.1, 
      renewalProb: 75,
      taxSavings: 25,
      description: 'Strong market conditions'
    },
    conservative: { 
      label: 'Conservative',
      residual: 20, 
      irr: 7.3, 
      renewalProb: 62,
      taxSavings: 19,
      description: 'Cautious market outlook'
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
                Lease Portfolio Playbook
              </h1>
              <p className="text-slate-600 text-lg">
                Built Excel models for $100M+ technology equipment leases, combining renewal, pricing, and tax impact views for sales and credit partners
              </p>
              <p className="text-slate-500 text-sm mt-2">
                Financial Analyst II | Equipment Finance Division
              </p>
            </div>
            <div className="flex gap-2 flex-wrap justify-end">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Excel
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Lease Ops
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Valuation
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
                  Designed and implemented comprehensive Excel financial models for a $100M+ technology equipment 
                  lease portfolio. The models integrated renewal probability analysis, dynamic pricing scenarios, 
                  and tax impact calculations to support both sales negotiations and credit risk assessments. 
                  Delivered actionable insights that enabled faster deal structuring and improved portfolio 
                  profitability.
                </p>
              </div>

              {/* Model Capabilities Showcase */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  📊 Model Capabilities - Scenario Analysis
                </h3>
                
                <p className="text-sm text-slate-600 mb-4">
                  The models enabled dynamic scenario testing to evaluate lease structures under different market conditions:
                </p>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Select Scenario:
                  </label>
                  <div className="flex gap-3">
                    {Object.keys(scenarioData).map((scenario) => (
                      <button
                        key={scenario}
                        onClick={() => setSelectedScenario(scenario)}
                        className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                          selectedScenario === scenario
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-white text-slate-700 hover:bg-blue-100 border border-slate-200'
                        }`}
                      >
                        {scenarioData[scenario].label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 mb-4 border border-slate-200">
                  <div className="text-sm text-slate-600 mb-1">Scenario Description</div>
                  <div className="font-semibold text-slate-800">
                    {scenarioData[selectedScenario].description}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Residual Value Assumption</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {scenarioData[selectedScenario].residual}%
                    </div>
                    <div className="text-xs text-slate-500 mt-1">of original equipment cost</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Target IRR</div>
                    <div className="text-2xl font-bold text-green-600">
                      {scenarioData[selectedScenario].irr}%
                    </div>
                    <div className="text-xs text-slate-500 mt-1">annual return</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Renewal Probability</div>
                    <div className="text-2xl font-bold text-purple-600">
                      {scenarioData[selectedScenario].renewalProb}%
                    </div>
                    <div className="text-xs text-slate-500 mt-1">based on historical patterns</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Tax Savings Rate</div>
                    <div className="text-2xl font-bold text-emerald-600">
                      {scenarioData[selectedScenario].taxSavings}%
                    </div>
                    <div className="text-xs text-slate-500 mt-1">effective tax benefit</div>
                  </div>
                </div>

                <div className="mt-4 bg-blue-100 rounded-lg p-3 text-sm text-blue-800">
                  <strong>Note:</strong> These are illustrative scenarios demonstrating the model's analytical capabilities. 
                  Actual values varied by equipment type, customer segment, and market conditions.
                </div>
              </div>

              {/* Core Model Components */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Core Model Components</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border border-green-200">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">📈</div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Renewal Probability Engine</h4>
                        <p className="text-sm text-slate-700">
                          Analyzed historical lease data to build predictive models forecasting renewal likelihood 
                          by equipment category, lease term, and customer segment. Incorporated weighted scoring 
                          combining equipment age, payment history, and market conditions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-200">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">💰</div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Dynamic Pricing Calculator</h4>
                        <p className="text-sm text-slate-700">
                          Developed IRR-based pricing engine with sensitivity analysis across residual values, 
                          discount rates, and payment structures. Integrated Goal Seek functionality to back-solve 
                          for payment amounts given target returns.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-5 border border-purple-200">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">🏛️</div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Tax Impact Analyzer</h4>
                        <p className="text-sm text-slate-700">
                          Modeled MACRS depreciation schedules, Section 179 deductions, and bonus depreciation to 
                          quantify tax benefits. Created side-by-side lease vs. purchase comparisons with after-tax 
                          cash flow analysis.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-5 border border-orange-200">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">📊</div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Executive Dashboard</h4>
                        <p className="text-sm text-slate-700">
                          Consolidated all modules into interactive dashboards using pivot tables, slicers, and 
                          dynamic charts. Provided portfolio-level insights with drill-down capabilities for 
                          detailed analysis.
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
                    <div className="text-3xl font-bold text-blue-600 mb-1">60%</div>
                    <div className="text-sm text-slate-600">Faster Deal Structuring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">±3%</div>
                    <div className="text-sm text-slate-600">Forecast Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">15+</div>
                    <div className="text-sm text-slate-600">Team Members Trained</div>
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
                  The equipment finance division managed a $100M+ portfolio of technology leases but lacked 
                  integrated financial models to support decision-making. Sales teams struggled to price deals 
                  competitively while maintaining target IRRs. Credit analysts couldn't quickly assess renewal 
                  risk across the portfolio. Tax implications of lease vs. purchase structures were calculated 
                  manually in disconnected spreadsheets, leading to inconsistent customer recommendations. Deal 
                  structuring took 3-5 days per opportunity, causing delays in competitive RFP responses. 
                  Leadership needed unified models that combined pricing, renewal forecasting, and tax analysis 
                  to accelerate deal velocity and optimize portfolio returns.
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
                  My objective was to develop comprehensive Excel-based financial models that would:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Build renewal probability models using historical data by equipment type, lease term, and customer segment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Create dynamic pricing engines with IRR calculations and sensitivity analysis for multiple scenarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Develop tax impact calculators modeling MACRS depreciation, Section 179 deductions, and bonus depreciation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Integrate all views into executive dashboards for portfolio-level insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Reduce deal structuring time from 3-5 days to under 1 day</span>
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
                    <h4 className="font-semibold text-slate-800 mb-2">1. Renewal Analysis Module</h4>
                    <p className="leading-relaxed">
                      Analyzed 5 years of historical lease data (800+ leases) to identify renewal patterns. Built 
                      predictive models using VLOOKUP and INDEX/MATCH to calculate renewal probabilities by equipment 
                      category (servers: 68%, networking: 72%, storage: 65%), lease term (36mo: 70%, 48mo: 65%, 60mo: 
                      58%), and customer industry vertical. Created data validation dropdowns for user inputs and 
                      conditional formatting to highlight high-risk non-renewals. Implemented weighted scoring model 
                      combining equipment age, customer payment history, and market conditions to generate renewal 
                      confidence scores (0-100%).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">2. Dynamic Pricing Engine</h4>
                    <p className="leading-relaxed">
                      Developed IRR-based pricing calculator using Excel's XIRR function with monthly cash flow 
                      schedules. Built scenario analysis with Data Tables to model pricing sensitivity across residual 
                      value assumptions (10-40% of original cost), discount rates (6-12%), and payment structures 
                      (monthly, quarterly, annual). Created Goal Seek macros to back-solve for payment amounts given 
                      target IRRs. Integrated market rate benchmarking using external data feeds (Bloomberg equipment 
                      indices) via Power Query. Added payment waterfall visualizations showing principal vs. interest 
                      allocation over lease term. Implemented Monte Carlo simulation (1,000 iterations) to stress-test 
                      pricing under various economic scenarios.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">3. Tax Impact Calculator</h4>
                    <p className="leading-relaxed">
                      Built comprehensive tax modeling using IRS depreciation tables for MACRS (5-year and 7-year 
                      property classes). Calculated Section 179 deduction eligibility (up to $1.16M limit) with 
                      phase-out thresholds. Modeled bonus depreciation (100% first-year for qualified property) and 
                      compared lease vs. purchase tax benefits. Created present value calculations using XNPV to 
                      quantify after-tax cash flow advantages. Developed side-by-side comparison tables showing total 
                      cost of ownership under different tax scenarios. Added state tax considerations with adjustable 
                      rates by jurisdiction. Implemented audit trail with cell comments documenting all tax assumptions 
                      and IRS code references.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">4. Executive Dashboard Integration</h4>
                    <p className="leading-relaxed">
                      Consolidated all modules into master dashboard using pivot tables and slicers for dynamic 
                      filtering. Created portfolio summary showing total lease value, weighted average IRR, aggregate 
                      renewal probability, and total tax benefits. Built interactive charts: waterfall chart for cash 
                      flows, scatter plot for IRR vs. renewal probability, heatmap for equipment concentration risk. 
                      Implemented named ranges and structured references for maintainability. Added VBA macros for 
                      one-click report generation and PDF export. Created user guide with embedded instructions and 
                      example scenarios. Established version control and change log to track model updates.
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
                      <div className="text-3xl font-bold text-orange-600 mb-1">60%</div>
                      <div className="text-sm text-slate-600">Time Saved</div>
                      <div className="text-xs text-slate-500 mt-1">Deal structuring: 3-5 days → under 1 day</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-3xl font-bold text-orange-600 mb-1">$5.2M</div>
                      <div className="text-sm text-slate-600">Tax Optimization</div>
                      <div className="text-xs text-slate-500 mt-1">Identified across portfolio</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Reduced pricing analysis time by 60%, enabling faster response to RFPs (3-5 days to under 1 day)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Improved renewal rate forecasting accuracy to ±3%, supporting better capacity planning and inventory management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Identified $5.2M in tax optimization opportunities across the portfolio through lease structure recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Model adopted as standard tool across 15+ sales and credit team members in 3 regional offices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Supported $28M in successful lease renewals in first quarter of implementation (Q1 2024)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Increased portfolio IRR by 0.4% through optimized pricing strategies ($400K annual revenue impact)</span>
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
                    <h4 className="font-semibold text-slate-800 mb-2">Excel Modeling</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Advanced formulas (INDEX/MATCH, SUMIFS)</li>
                      <li>• Financial functions (IRR, XIRR, NPV, XNPV, PMT)</li>
                      <li>• Data Tables for scenario analysis</li>
                      <li>• Goal Seek and Solver</li>
                      <li>• Array formulas and dynamic arrays</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Data & Visualization</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Pivot tables and slicers</li>
                      <li>• Conditional formatting</li>
                      <li>• Data validation and dropdowns</li>
                      <li>• Power Query for data integration</li>
                      <li>• Interactive charts and dashboards</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Automation & VBA</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• VBA macros for automation</li>
                      <li>• Named ranges and structured references</li>
                      <li>• Error handling and data validation</li>
                      <li>• PDF export automation</li>
                      <li>• Version control and change logs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Model Architecture */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Excel Model Architecture</h3>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Input & Assumptions Sheet</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Centralized input sheet with data validation dropdowns for equipment type, lease term, 
                          customer segment, and payment frequency. Assumption tables for discount rates, residual 
                          value percentages, tax rates, and depreciation schedules. Color-coded cells (blue for 
                          user inputs, green for assumptions, gray for calculated values). Named ranges for all 
                          key inputs to enable easy reference across worksheets.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Renewal Analysis Sheet</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Historical data table with 800+ lease records. Pivot table summarizing renewal rates by 
                          equipment type, term, and customer segment. VLOOKUP formulas to retrieve relevant renewal 
                          probabilities based on user inputs. Weighted scoring model combining multiple factors 
                          (equipment age, payment history, market conditions). Conditional formatting heatmap showing 
                          renewal risk levels (green: 70%+, yellow: 50-70%, red: below 50%).
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Pricing & Cash Flow Sheet</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Monthly cash flow schedule showing payment amounts, principal allocation, and interest 
                          components. XIRR calculation for internal rate of return. Data Table for sensitivity 
                          analysis (rows: residual values 10-40%, columns: discount rates 6-12%). Goal Seek macro 
                          button to solve for payment amount given target IRR. Payment waterfall chart visualizing 
                          cash flows over lease term. NPV and XNPV calculations for present value analysis.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Tax Impact Sheet</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          MACRS depreciation tables for 5-year and 7-year property (IRS Publication 946). Section 
                          179 deduction calculator with phase-out logic. Bonus depreciation modeling (100% first-year 
                          for qualified property). Side-by-side comparison: lease vs. purchase tax benefits. After-tax 
                          cash flow calculations using XNPV. State tax adjustments with dropdown for jurisdiction 
                          selection. Total cost of ownership summary with tax benefit quantification.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Executive Dashboard Sheet</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Portfolio summary KPIs: total lease value, count of leases, weighted average IRR, aggregate 
                          renewal probability, total tax benefits. Pivot table with slicers for dynamic filtering by 
                          equipment type, region, and lease term. Interactive charts: waterfall (cash flows), scatter 
                          plot (IRR vs. renewal probability), bar chart (equipment concentration), line chart (payment 
                          schedule). VBA macro buttons for report generation and PDF export. Embedded instructions and 
                          user guide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formula Examples */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Sample Excel Formulas</h3>
                <div className="space-y-4">
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="text-green-400 text-xs font-semibold mb-2">Renewal Probability Lookup</div>
                    <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`=INDEX(RenewalTable[Probability],
  MATCH(1,
    (RenewalTable[Equipment]=Input_Equipment)*
    (RenewalTable[Term]=Input_Term)*
    (RenewalTable[Segment]=Input_Segment),
  0)
)`}
                    </pre>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="text-green-400 text-xs font-semibold mb-2">IRR Calculation with Monthly Cash Flows</div>
                    <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`=XIRR(CashFlow_Range, Date_Range)*12
// Where CashFlow_Range includes initial outflow (negative) 
// and monthly payments (positive)
// Multiply by 12 to annualize monthly IRR`}
                    </pre>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="text-green-400 text-xs font-semibold mb-2">MACRS Depreciation (5-Year Property)</div>
                    <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`=Equipment_Cost * VLOOKUP(Year, MACRS_Table, 2, FALSE)
// MACRS_Table contains IRS depreciation percentages:
// Year 1: 20.00%, Year 2: 32.00%, Year 3: 19.20%
// Year 4: 11.52%, Year 5: 11.52%, Year 6: 5.76%`}
                    </pre>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="text-green-400 text-xs font-semibold mb-2">Payment Calculation (Goal Seek Target)</div>
                    <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`=PMT(Discount_Rate/12, Lease_Term, -Equipment_Cost, 
     Residual_Value, 0)
// Used as starting point, then Goal Seek adjusts to hit target IRR`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Dashboard Components */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Dashboard Components</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Portfolio Summary KPIs</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Total portfolio value: $103.5M</li>
                      <li>• Number of active leases: 127</li>
                      <li>• Weighted average IRR: 8.2%</li>
                      <li>• Aggregate renewal probability: 67.6%</li>
                      <li>• Total tax benefits: $5.2M</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Interactive Visualizations</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Waterfall chart: Cash flow breakdown</li>
                      <li>• Scatter plot: IRR vs. renewal probability</li>
                      <li>• Bar chart: Equipment type concentration</li>
                      <li>• Heatmap: Renewal risk by segment</li>
                      <li>• Line chart: Payment schedule timeline</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-slate-800 mb-2">Pivot Table Slicers</h4>
                  <div className="text-sm text-slate-600 mt-2">
                    Dynamic filtering by: Equipment Type (Servers, Networking, Storage, Telecom) | 
                    Region (North America, EMEA, APAC) | Lease Term (36mo, 48mo, 60mo) | 
                    Customer Segment (Enterprise, Mid-Market, SMB)
                  </div>
                </div>
              </div>

              {/* VBA Automation */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">VBA Automation Features</h3>
                <div className="bg-slate-900 rounded-lg p-4">
                  <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`' One-click report generation macro
Sub GenerateLeaseReport()
    ' Update all pivot tables
    ThisWorkbook.RefreshAll
    
    ' Run Goal Seek to optimize pricing
    Range("Payment_Amount").GoalSeek _
        Goal:=Range("Target_IRR").Value, _
        ChangingCell:=Range("Payment_Amount")
    
    ' Export dashboard to PDF
    Sheets("Dashboard").ExportAsFixedFormat _
        Type:=xlTypePDF, _
        Filename:="Lease_Analysis_" & Format(Date, "yyyymmdd") & ".pdf"
    
    MsgBox "Report generated successfully!", vbInformation
End Sub`}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}