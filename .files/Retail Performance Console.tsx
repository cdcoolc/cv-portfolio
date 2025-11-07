import React, { useState } from 'react';
import { TrendingUp, Database, BarChart3, Settings, CheckCircle2, Target, Lightbulb, Award, ShoppingCart } from 'lucide-react';

export default function RetailPerformanceShowcase() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMonth, setSelectedMonth] = useState('month1');
  
  const monthlyData = {
    month1: { revenue: 42500, cashPosition: 18200, inventoryTurns: 4.2, promoROI: 285 },
    month2: { revenue: 48300, cashPosition: 22100, inventoryTurns: 4.8, promoROI: 312 },
    month3: { revenue: 51200, cashPosition: 26400, inventoryTurns: 5.1, promoROI: 298 }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: ShoppingCart },
    { id: 'star', label: 'STAR Method', icon: Target },
    { id: 'technical', label: 'Technical Details', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">
                Retail Performance Console
              </h1>
              <p className="text-slate-600 text-lg">
                For my own retail venture, combined POS, vendor, and budgeting data to watch cash, inventory turns, and promo ROI without outside capital
              </p>
              <p className="text-slate-500 text-sm mt-2">
                Entrepreneur & Financial Analyst | Independent Retail Venture
              </p>
            </div>
            <div className="flex gap-2 flex-wrap justify-end">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                Entrepreneurship
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Budgeting
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Power BI
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
                      ? 'bg-indigo-600 text-white shadow-md'
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
                  Built a comprehensive financial and operational dashboard for my independent retail business, 
                  integrating point-of-sale transactions, vendor payment schedules, and budget tracking into a 
                  single Power BI console. The system enabled real-time monitoring of cash flow, inventory 
                  efficiency, and marketing ROI—critical for bootstrapping growth without external capital.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <BarChart3 className="text-indigo-600" />
                  Monthly Performance Metrics
                </h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Select Period:
                  </label>
                  <div className="flex gap-3">
                    {Object.keys(monthlyData).map((month, idx) => (
                      <button
                        key={month}
                        onClick={() => setSelectedMonth(month)}
                        className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all ${
                          selectedMonth === month
                            ? 'bg-indigo-600 text-white shadow-lg'
                            : 'bg-white text-slate-700 hover:bg-indigo-100 border border-slate-200'
                        }`}
                      >
                        Month {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Revenue</div>
                    <div className="text-2xl font-bold text-green-600">
                      ${monthlyData[selectedMonth].revenue.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Cash Position</div>
                    <div className="text-2xl font-bold text-blue-600">
                      ${monthlyData[selectedMonth].cashPosition.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Inventory Turns</div>
                    <div className="text-2xl font-bold text-purple-600">
                      {monthlyData[selectedMonth].inventoryTurns}x
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="text-sm text-slate-600 mb-1">Promo ROI</div>
                    <div className="text-2xl font-bold text-orange-600">
                      {monthlyData[selectedMonth].promoROI}%
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Real-time cash flow tracking with vendor payment scheduling',
                    'Inventory turn analysis by product category and SKU',
                    'Promotional campaign ROI measurement and attribution',
                    'Budget vs. actual variance reporting across all categories',
                    'Vendor performance scoring (pricing, delivery, quality)',
                    'Daily sales trends with same-store comparison'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-indigo-600 mt-1 flex-shrink-0" size={20} />
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

              <div className="border-l-4 border-indigo-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
                    <Lightbulb className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Situation</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  While working in financial reporting at FIS and CIT Bank, I launched an independent retail 
                  business as a side venture to apply my financial and analytical skills in an entrepreneurial 
                  context. Operating with zero outside capital meant every dollar had to work efficiently. I 
                  couldn't afford inventory sitting on shelves, late vendor payments damaging relationships, or 
                  ineffective marketing spend. The challenge was managing cash flow, optimizing inventory, and 
                  measuring marketing effectiveness. Existing retail POS systems provided transaction data, but 
                  I needed integrated visibility across operations, finances, and marketing to make data-driven 
                  decisions daily.
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
                  My objective was to build an integrated performance console that would:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Provide daily visibility into cash position with 30-day forward projection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Track inventory turns by category to identify slow-moving stock</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Measure promotional campaign ROI by tracking sales lift</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Monitor budget vs. actual across all expense categories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Enable mobile access for on-the-go decision making</span>
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
                    <h4 className="font-semibold text-slate-800 mb-2">1. Data Integration & Architecture</h4>
                    <p className="leading-relaxed">
                      Connected multiple data sources into Power BI: Square POS for daily transactions, 
                      QuickBooks for vendor invoices and GL accounts, Excel-based inventory tracking, budget 
                      spreadsheet with monthly targets, and Google Sheets for promotional campaign tracking. 
                      Used Power Query to automate daily data refreshes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">2. Cash Flow Modeling & Forecasting</h4>
                    <p className="leading-relaxed">
                      Built 30-day rolling cash forecast: forecasted daily sales based on 13-week moving average 
                      with day-of-week seasonality, scheduled vendor payments from AP aging factoring in payment 
                      terms, and recurring expenses. Implemented alert system flagging when projected cash would 
                      drop below $10K safety threshold.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">3. Inventory Turn Analysis</h4>
                    <p className="leading-relaxed">
                      Calculated inventory turnover at overall, category, and SKU levels. Created reorder triggers 
                      based on lead time and target service level. Tracked dead stock (items with zero sales in 90 
                      days) as candidates for markdowns or returns to vendor.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-8 mb-2">4. Promotional ROI Measurement</h4>
                    <p className="leading-relaxed">
                      Tagged transactions with promo codes, calculated baseline sales, measured incremental sales, 
                      and divided gross margin on incremental sales by total promo cost. Built comparison view 
                      showing all campaigns ranked by ROI.
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
                      <div className="text-3xl font-bold text-green-600 mb-1">$0</div>
                      <div className="text-sm text-slate-600">Outside Capital Required</div>
                      <div className="text-xs text-slate-500 mt-1">Fully bootstrapped</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-1">5.2x</div>
                      <div className="text-sm text-slate-600">Avg Inventory Turns</div>
                      <div className="text-xs text-slate-500 mt-1">Industry avg: 3.5x</div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span>Operated profitably for 18 months without any outside capital, maintaining minimum $15K cash buffer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span>Achieved 5.2x average inventory turns, freeing up $12K in working capital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span>Identified and eliminated 3 underperforming campaigns, reallocating $2,800 to high-ROI initiatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span>Reduced dead stock from 22% to 8% through data-driven markdown decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                      <span>Never missed a vendor payment, earning early payment discounts worth $1,400 annually</span>
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
                  <Database className="text-indigo-600" />
                  Tools & Data Sources
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Power BI</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Power Query for ETL</li>
                      <li>• DAX for calculated measures</li>
                      <li>• Data modeling with star schema</li>
                      <li>• Mobile-optimized layouts</li>
                      <li>• Power BI Service publishing</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h4 className="font-semibold text-slate-800 mb-2">Data Sources</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Square POS (transactions)</li>
                      <li>• QuickBooks (AP, expenses)</li>
                      <li>• Excel (inventory tracking)</li>
                      <li>• Budget spreadsheet</li>
                      <li>• Google Sheets (promos)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Key DAX Measures</h3>
                <div className="space-y-4">
                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="text-sm text-emerald-400 font-semibold mb-2">Inventory Turnover</div>
                    <pre className="text-xs text-green-400 font-mono overflow-x-auto">
{`Inventory Turns = 
VAR COGS = CALCULATE(SUM(Sales[COGS]), DATESINPERIOD(Calendar[Date], MAX(Calendar[Date]), -365, DAY))
VAR AvgInv = AVERAGE(Inventory[Value])
RETURN DIVIDE(COGS, AvgInv, 0)`}
                    </pre>
                  </div>

                  <div className="bg-slate-900 rounded-lg p-4">
                    <div className="text-sm text-emerald-400 font-semibold mb-2">Promotional ROI</div>
                    <pre className="text-xs text-green-400 font-mono overflow-x-auto">
{`Promo ROI = 
VAR PromoSales = CALCULATE([Total Sales], Sales[Promo_Code] <> BLANK())
VAR Baseline = [Avg Daily Sales] * [Promo Days]
VAR Incremental = PromoSales - Baseline
VAR Margin = Incremental * [Margin %]
VAR Cost = [Discount] + [Marketing Spend]
RETURN DIVIDE((Margin - Cost), Cost, 0) * 100`}
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