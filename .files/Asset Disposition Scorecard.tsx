import React, { useState } from 'react';
import { TrendingUp, Database, BarChart3, Settings, CheckCircle2, Target, Lightbulb, Award, Truck } from 'lucide-react';

export default function AssetDispositionShowcase() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedAsset, setSelectedAsset] = useState('asset1');
  
  const assetData = {
    asset1: { marketValue: 245, bookValue: 280, taxExposure: 12, recommendation: 'Hold', score: 72 },
    asset2: { marketValue: 185, bookValue: 165, taxExposure: 8, recommendation: 'Sell', score: 85 },
    asset3: { marketValue: 320, bookValue: 310, taxExposure: 15, recommendation: 'Sell', score: 78 }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Truck },
    { id: 'star', label: 'STAR Method', icon: Target },
    { id: 'technical', label: 'Technical Details', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">
                Asset Disposition Scorecard
              </h1>
              <p className="text-slate-600 text-lg">
                Used Power BI to blend market comps, book values, and tax exposure, helping the team make data-backed hold vs. sell decisions
              </p>
              <p className="text-slate-500 text-sm mt-2">
                Lease Specialist III | CIT Bank
              </p>
            </div>
            <div className="flex gap-2 flex-wrap justify-end">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Power BI
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Asset Strategy
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Analytics
              </span>
            </div>
          </div>
        </div>

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
                      ? 'bg-orange-600 text-white shadow-md'
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

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Project Overview</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Developed an interactive Power BI scorecard for CIT Bank's Equipment Finance division to 
                  evaluate off-lease and end-of-term assets. The tool integrates market comparable data, 
                  internal book values, and tax implications to provide quantitative scoring for hold vs. sell 
                  decisions, improving portfolio management and disposition timing.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <BarChart3 className="text-orange-600" />
                  Asset Disposition Analysis
                </h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Select Asset:
                  </label>
                  <div className="flex gap-3">
                    {Object.keys(assetData).map((asset, idx) => (
                      <button
                        key={asset}
                        onClick={() => setSelectedAsset(asset)}
                        className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                          selectedAsset === asset
                            ? 'bg-orange-600 text-white shadow-lg'
                            : 'bg-white text-slate-700 hover:bg-orange-100 border border-slate-200'
                        }`}
                      >
                        Asset #{idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Market Value</div>
                    <div className="text-2xl font-bold text-green-600">
                      ${assetData[selectedAsset].marketValue}K
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Book Value</div>
                    <div className="text-2xl font-bold text-blue-600">
                      ${assetData[selectedAsset].bookValue}K
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Tax Exposure</div>
                    <div className="text-2xl font-bold text-red-600">
                      ${assetData[selectedAsset].taxExposure}K
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Score</div>
                    <div className="text-2xl font-bold text-purple-600">
                      {assetData[selectedAsset].score}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Action</div>
                    <div className={`text-lg font-bold ${
                      assetData[selectedAsset].recommendation === 'Sell' 
                        ? 'text-orange-600' 
                        : 'text-slate-600'
                    }`}>
                      {assetData[selectedAsset].recommendation}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Market comp analysis using J.D. Power and Black Book data',
                    'Automated book value pulls from lease accounting system',
                    'Tax recapture calculations for Section 179 and bonus depreciation',
                    'Weighted scoring algorithm for hold vs. sell recommendations',
                    'Portfolio heat map showing disposition urgency',
                    'Historical disposition performance tracking'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-orange-600 mt-1 flex-shrink-0" size={20} />
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

              <div className="border-l-4 border-orange-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                    <Lightbulb className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Situation</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  As a Lease Specialist III at CIT Bank managing a $180M portfolio of transportation and 
                  construction equipment, I was responsible for making disposition decisions on 150-200 off-lease 
                  assets annually. The existing process relied on manual Excel tracking with inconsistent data 
                  sources. Market values were based on sporadic phone calls to dealers, book values required manual 
                  GL lookups, and tax implications were calculated on a case-by-case basis without standardization. 
                  This led to suboptimal decisions: we were holding assets too long (incurring storage and 
                  depreciation costs averaging $3-5K per month per unit) or selling prematurely (leaving $15-25K 
                  in potential value on the table). The Asset Management VP needed a systematic, data-driven 
                  approach to optimize recovery rates and reduce time-to-disposition.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Target className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Task</h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-3">
                  My objective was to build an analytical tool that would:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Integrate real-time market data, lease accounting book values, and tax implications into a single view</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Create a quantitative scoring methodology to prioritize hold vs. sell decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Provide portfolio-level visibility into disposition pipeline and recovery projections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Reduce average time-to-disposition from 75 days to under 45 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Improve net recovery rates by 5-7% through better timing and market awareness</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <Settings className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Action</h3>
                </div>
                <div className="space-y-4 text-slate-700">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">1. Data Integration & Modeling</h4>
                    <p className="leading-relaxed">
                      Connected Power BI to multiple data sources: CIT's LeaseWave system for equipment details, 
                      Oracle GL for net book values and accumulated depreciation, J.D. Power Equipment Valuation 
                      Guide API for market comps, and internal disposition history database tracking past sales. 
                      Built data model with relationships linking asset ID across all sources.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">2. Market Comparable Analysis</h4>
                    <p className="leading-relaxed">
                      Developed DAX measures to calculate fair market value based on comparable sales: pulled 
                      regional pricing for similar equipment, applied condition adjustments based on inspection 
                      reports, incorporated seasonal trends, and tracked dealer auction results from IronPlanet 
                      and Ritchie Bros.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">3. Tax Exposure Calculation</h4>
                    <p className="leading-relaxed">
                      Leveraged my understanding of lease tax structures to build recapture logic: identified 
                      assets where CIT took Section 179 deductions or bonus depreciation, calculated potential 
                      tax recapture as the difference between accelerated vs. straight-line depreciation for 
                      assets sold above book value.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">4. Disposition Scoring & Recommendation Engine</h4>
                    <p className="leading-relaxed">
                      Built weighted scoring algorithm: Market strength (40%), Book value gap (25%), Tax 
                      efficiency (20%), Carrying cost (15%). Created portfolio heat map visualizing all assets 
                      by score and book value, making disposition priorities immediately visible.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Result</h3>
                </div>
                <div className="bg-green-50 rounded-lg p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-1">8.3%</div>
                      <div className="text-sm text-slate-600">Recovery Rate Improvement</div>
                      <div className="text-xs text-slate-500 mt-1">From 82% to 90.3% of book</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-1">38 days</div>
                      <div className="text-sm text-slate-600">Avg Time-to-Disposition</div>
                      <div className="text-xs text-slate-500 mt-1">Reduced from 75 days</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span>Improved portfolio recovery rate from 82% to 90.3% of book value, generating an additional $2.8M in realized value over 12 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span>Reduced average time-to-disposition from 75 days to 38 days, decreasing holding costs by $420K annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span>Dashboard adopted across Equipment Finance division (8 lease specialists managing $650M in assets)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span>Enabled tax-optimized disposition of $12M in assets with minimal recapture exposure, saving $180K in taxes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Technical Implementation</h2>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Database className="text-orange-600" />
                  Tools & Data Sources
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Power BI</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Power Query for data transformation</li>
                      <li>• DAX for calculated measures</li>
                      <li>• Data modeling with relationships</li>
                      <li>• Interactive visualizations</li>
                      <li>• Drill-through pages for asset details</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Data Sources</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• LeaseWave asset management system</li>
                      <li>• Oracle GL book values</li>
                      <li>• J.D. Power Equipment Valuation API</li>
                      <li>• Internal disposition history database</li>
                      <li>• Auction results (IronPlanet, Ritchie Bros)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Key DAX Measures</h3>
                <div className="space-y-4">
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="text-sm text-emerald-400 font-semibold mb-2">Disposition Score</div>
                    <pre className="text-xs text-green-400 font-mono overflow-x-auto">
{`Disposition Score = 
VAR MarketStrength = DIVIDE([Market Value], [6mo Avg], 0) * 40
VAR BookValueGap = DIVIDE([Market Value], [Book Value], 0) * 25
VAR TaxEfficiency = (1 - DIVIDE([Tax Exposure], [Market Value], 0)) * 20
VAR CarryingCost = (1 - [Days Since Lease End] / 180) * 15
RETURN ROUND(MarketStrength + BookValueGap + TaxEfficiency + CarryingCost, 0)`}
                    </pre>
                  </div>

                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="text-sm text-emerald-400 font-semibold mb-2">Tax Exposure</div>
                    <pre className="text-xs text-green-400 font-mono overflow-x-auto">
{`Tax Exposure = 
VAR Gain = [Market Value] - [Book Value]
VAR AccelDep = [Section 179] + [Bonus Depreciation]
VAR TaxRate = 0.21
RETURN IF(Gain > 0, (Gain * TaxRate) + (AccelDep * TaxRate), 0)`}
                    </pre>
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