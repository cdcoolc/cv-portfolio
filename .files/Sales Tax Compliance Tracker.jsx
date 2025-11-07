function App() {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [selectedJurisdiction, setSelectedJurisdiction] = React.useState('california');
  
  const jurisdictionData = {
    california: { 
      label: 'California',
      rate: 7.25,
      exceptions: 12,
      filingFreq: 'Monthly',
      status: 'compliant',
      description: 'Base state rate + district taxes'
    },
    texas: { 
      label: 'Texas',
      rate: 6.25,
      exceptions: 8,
      filingFreq: 'Quarterly',
      status: 'compliant',
      description: 'State rate with local options'
    },
    newyork: { 
      label: 'New York',
      rate: 4.00,
      exceptions: 15,
      filingFreq: 'Quarterly',
      status: 'review',
      description: 'Complex local jurisdiction rules'
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
                Sales & Use Tax Compliance Tracker
              </h1>
              <p className="text-slate-600 text-lg">
                Mapped multi-state tax rules to ERP transactions and surfaced exceptions so audits stayed clean and filings stayed on schedule
              </p>
              <p className="text-slate-500 text-sm mt-2">
                Financial Analyst II | Tax Compliance & Operations
              </p>
            </div>
            <div className="flex gap-2 flex-wrap justify-end">
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                Compliance
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Oracle
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Process
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
                  Designed and implemented a comprehensive sales and use tax compliance tracking system that mapped 
                  complex multi-state tax rules to Oracle ERP transactions. The system automated exception detection, 
                  validated tax calculations across 45+ jurisdictions, and provided real-time compliance monitoring. 
                  Enabled the tax team to identify and resolve issues proactively, ensuring clean audits and on-time 
                  filings while reducing manual review time by 70%.
                </p>
              </div>

              {/* Compliance Monitoring Showcase */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  🗺️ Multi-State Compliance Monitoring
                </h3>
                
                <p className="text-sm text-slate-600 mb-4">
                  The system tracked compliance across multiple tax jurisdictions with varying rates, rules, and filing requirements:
                </p>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Select Jurisdiction to Explore:
                  </label>
                  <div className="flex gap-3">
                    {Object.keys(jurisdictionData).map((jurisdiction) => (
                      <button
                        key={jurisdiction}
                        onClick={() => setSelectedJurisdiction(jurisdiction)}
                        className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                          selectedJurisdiction === jurisdiction
                            ? 'bg-red-600 text-white shadow-lg'
                            : 'bg-white text-slate-700 hover:bg-red-100 border border-slate-200'
                        }`}
                      >
                        {jurisdictionData[jurisdiction].label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 mb-4 border border-slate-200">
                  <div className="text-sm text-slate-600 mb-1">Tax Structure</div>
                  <div className="font-semibold text-slate-800 mb-3">
                    {jurisdictionData[selectedJurisdiction].description}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      jurisdictionData[selectedJurisdiction].status === 'compliant' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {jurisdictionData[selectedJurisdiction].status === 'compliant' ? 'Compliant' : 'Needs Review'}
                    </span>
                    <span className="text-sm text-slate-600">
                      Filing: {jurisdictionData[selectedJurisdiction].filingFreq}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Base Tax Rate</div>
                    <div className="text-3xl font-bold text-red-600">
                      {jurisdictionData[selectedJurisdiction].rate}%
                    </div>
                    <div className="text-xs text-slate-500 mt-1">state-level rate</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Active Exceptions</div>
                    <div className="text-3xl font-bold text-orange-600">
                      {jurisdictionData[selectedJurisdiction].exceptions}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">requiring review</div>
                  </div>
                </div>

                <div className="mt-4 bg-red-100 rounded-lg p-3 text-sm text-red-800">
                  <strong>Note:</strong> These are illustrative examples demonstrating the system capabilities. 
                  Actual rates and exception counts varied by period and transaction volume.
                </div>
              </div>

              {/* System Capabilities */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">System Capabilities</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-200">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">🗺️</div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Tax Rule Mapping Engine</h4>
                        <p className="text-sm text-slate-700">
                          Built comprehensive mapping logic connecting Oracle ERP transaction codes to appropriate tax 
                          jurisdictions and rates. Maintained rule tables for 45+ states covering product taxability, 
                          exemption certificates, nexus thresholds, and special district taxes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-5 border border-orange-200">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">⚠️</div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Exception Detection & Alerting</h4>
                        <p className="text-sm text-slate-700">
                          Automated daily scans identifying transactions with missing tax codes, incorrect rates, 
                          expired exemption certificates, or nexus violations. Categorized exceptions by severity 
                          with automated email alerts to tax team.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border border-green-200">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">✓</div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Audit Trail & Documentation</h4>
                        <p className="text-sm text-slate-700">
                          Maintained complete audit trail of all tax calculations, rate changes, and exception 
                          resolutions. Generated audit-ready reports showing transaction-level detail with supporting 
                          documentation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-5 border border-purple-200">
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">📅</div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Filing Schedule Management</h4>
                        <p className="text-sm text-slate-700">
                          Tracked filing deadlines for all 45+ jurisdictions with varying frequencies. Automated 
                          pre-filing validation checks ensuring data completeness and accuracy. Generated filing-ready 
                          reports with reconciliation to GL.
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
                    <div className="text-3xl font-bold text-blue-600 mb-1">70%</div>
                    <div className="text-sm text-slate-600">Less Manual Review Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">100%</div>
                    <div className="text-sm text-slate-600">On-Time Filings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">Zero</div>
                    <div className="text-sm text-slate-600">Audit Findings</div>
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
                  The company had nexus in 45+ states following rapid expansion but lacked systematic processes for 
                  sales and use tax compliance. Tax rules were documented in scattered Excel files, with no centralized 
                  mapping to Oracle ERP transaction codes. The tax team manually reviewed thousands of transactions 
                  monthly, spending 120+ hours per month on compliance checks. Tax rates were hardcoded in the ERP and 
                  frequently outdated. The company had experienced two state audit findings in the prior year due to 
                  incorrect tax treatment. Filing deadlines were tracked in individual calendars, resulting in two late 
                  filings with penalties totaling $15K.
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
                  My objective was to design and implement a comprehensive tax compliance tracking system that would:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Map multi-state tax rules to Oracle ERP transaction codes for 45+ jurisdictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Automate exception detection for missing tax codes, incorrect rates, and expired certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Integrate with Vertex tax engine for automated rate updates and validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Build audit trail and documentation system to support state audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Create filing schedule management with automated reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Reduce manual review time by 70% and achieve 100% on-time filing rate</span>
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
                    <h4 className="font-semibold text-slate-800 mb-2">1. Tax Rule Mapping & Configuration</h4>
                    <p className="leading-relaxed">
                      Conducted comprehensive analysis of tax requirements across 45 states, documenting nexus 
                      thresholds, product taxability rules, and special district taxes. Built master tax rule table 
                      in Oracle with 2,500+ rules mapping product categories to tax jurisdictions. Created product 
                      taxability matrix covering 30+ categories. Integrated with Vertex tax engine API for automated 
                      rate updates. Established change management process requiring tax team approval for all rule 
                      modifications.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">2. Exception Detection & Monitoring System</h4>
                    <p className="leading-relaxed">
                      Developed automated exception detection process running daily via Oracle scheduled jobs. Built 
                      SQL queries identifying transactions with missing tax codes, incorrect rates, expired exemption 
                      certificates, and nexus violations. Created exception severity scoring system. Built exception 
                      dashboard showing open items by category, aging, and assigned owner. Implemented automated email 
                      alerts with escalation procedures.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">3. Exemption Certificate Management</h4>
                    <p className="leading-relaxed">
                      Digitized 1,200+ exemption certificates, scanning and indexing in document management system. 
                      Built exemption certificate database in Oracle with automated expiration tracking. Created 
                      customer portal allowing customers to upload renewed certificates directly. Built validation 
                      logic preventing exempt sales without valid certificate on file. Integrated certificate status 
                      into order entry system.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">4. Audit Trail & Documentation System</h4>
                    <p className="leading-relaxed">
                      Built comprehensive audit trail capturing all tax-related transactions and decisions. Created 
                      transaction detail report showing invoice, customer, jurisdiction, tax rate, and exemption 
                      certificate. Developed rate change log tracking all updates. Built monthly reconciliation report 
                      tying tax collected to GL tax liability accounts. Established document retention policy and 
                      created audit-ready report package.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">5. Filing Schedule & Validation Process</h4>
                    <p className="leading-relaxed">
                      Created master filing calendar in Oracle tracking all 45+ jurisdictions with filing frequency, 
                      due dates, and filing methods. Built automated reminder system with escalation. Developed 
                      pre-filing validation checklist. Created filing-ready reports by jurisdiction. Built variance 
                      analysis comparing current period to prior periods. Implemented post-filing reconciliation 
                      process.
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
                      <div className="text-3xl font-bold text-orange-600 mb-1">70%</div>
                      <div className="text-sm text-slate-600">Reduction in Manual Review</div>
                      <div className="text-xs text-slate-500 mt-1">120 hours/month to 36 hours/month</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
                      <div className="text-sm text-slate-600">On-Time Filing Rate</div>
                      <div className="text-xs text-slate-500 mt-1">Zero late filings in 18 months</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Reduced manual compliance review time by 70%, allowing tax team to focus on strategic initiatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Achieved 100% on-time filing rate across all 45+ jurisdictions for 18 consecutive months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Passed 3 state sales tax audits with zero findings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Identified and corrected $180K in tax under-collections through exception detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Reduced exemption certificate expiration rate from 22% to 4%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>System scaled to support expansion into 8 additional states without additional headcount</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 text-xl">✓</span>
                      <span>Improved tax rate accuracy from 92% to 99.7% through Vertex integration</span>
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
                    <h4 className="font-semibold text-slate-800 mb-2">Oracle ERP</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Oracle E-Business Suite</li>
                      <li>• Oracle Receivables (AR)</li>
                      <li>• Oracle Payables (AP)</li>
                      <li>• Oracle BI Publisher</li>
                      <li>• PL/SQL for automation</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Tax Engine</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Vertex O Series</li>
                      <li>• REST API integration</li>
                      <li>• Automated rate updates</li>
                      <li>• Address validation</li>
                      <li>• Jurisdiction determination</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Supporting Tools</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• SQL for data analysis</li>
                      <li>• Excel for reporting</li>
                      <li>• SharePoint for docs</li>
                      <li>• Outlook for alerts</li>
                      <li>• Adobe Sign for certs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* System Architecture */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">System Architecture</h3>
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Tax Rule Repository</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Master table storing 2,500+ tax rules with product categories, jurisdictions, rates, and 
                          effective dates. Indexed for fast lookups with audit columns tracking all changes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Exemption Certificate Database</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Certificate tracking with automated expiration monitoring. Triggers send emails when 
                          certificates expire within 60 days.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Exception Tracking System</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Exception log with severity scoring. Daily scheduled job populates table by running 
                          validation queries against transactions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Filing Calendar & Workflow</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          Filing schedule table tracking all jurisdictions with automated reminder system at 14, 7, 
                          and 3 days before due dates.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">Vertex Integration Layer</h4>
                        <p className="text-sm text-slate-600 mt-1">
                          PL/SQL package for API integration with procedures for rate lookup, address validation, 
                          and quarterly rate updates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Key Technical Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Automated Processes</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Daily exception detection</li>
                      <li>• Automated email alerts</li>
                      <li>• Quarterly rate updates</li>
                      <li>• Certificate expiration tracking</li>
                      <li>• Filing deadline reminders</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Reporting & Analytics</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Exception dashboard</li>
                      <li>• Filing-ready reports</li>
                      <li>• GL reconciliation</li>
                      <li>• Audit trail reports</li>
                      <li>• Variance analysis</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Process Workflow */}
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Compliance Workflow</h3>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        1
                      </div>
                      <div>
                        <strong>Daily (6 AM):</strong> Automated exception detection job runs, identifying issues in 
                        prior day transactions. Critical exceptions trigger immediate alerts.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        2
                      </div>
                      <div>
                        <strong>Daily (9 AM):</strong> Tax team reviews exception dashboard and assigns owners. 
                        Critical items resolved same day, high priority within 5 days.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        3
                      </div>
                      <div>
                        <strong>Weekly:</strong> Certificate expiration report reviewed. Sales reps contacted for 
                        certificates expiring within 60 days.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        4
                      </div>
                      <div>
                        <strong>Monthly:</strong> Exception root cause analysis meeting. Process improvements 
                        identified and implemented.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        5
                      </div>
                      <div>
                        <strong>Pre-Filing (14 days):</strong> Filing reminder sent. Pre-filing validation completed. 
                        GL reconciliation performed.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        6
                      </div>
                      <div>
                        <strong>Filing Day:</strong> Return filed online. Payment processed. Confirmation archived. 
                        Calendar updated.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                        7
                      </div>
                      <div>
                        <strong>Quarterly:</strong> Vertex rate update job runs. New rates loaded. Tax team reviews 
                        and approves changes.
                      </div>
                    </div>
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