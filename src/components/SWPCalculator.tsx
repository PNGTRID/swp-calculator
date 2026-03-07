'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { calculateSWP, formatCurrency, type SWPInput, type SWPResult } from '@/utils/swpCalculator';
import FAQSection from './FAQSection';

// Icons as SVG components
const InvestmentIcon = () => (
  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const WithdrawalIcon = () => (
  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const ReturnIcon = () => (
  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const TimeIcon = () => (
  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function SWPCalculator() {
  // Input state with default values
  const [inputs, setInputs] = useState<SWPInput>({
    totalInvestment: 1000000,
    withdrawalPerMonth: 10000,
    expectedReturnRate: 8,
    timePeriod: 5,
  });

  // Result state
  const [result, setResult] = useState<SWPResult>({
    totalInvestment: 0,
    totalWithdrawal: 0,
    finalValue: 0,
  });

  // Calculate whenever inputs change
  useEffect(() => {
    const calculated = calculateSWP(inputs);
    setResult(calculated);
  }, [inputs]);

  // Handle input changes
  const handleInputChange = (field: keyof SWPInput, value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
    setInputs((prev) => ({
      ...prev,
      [field]: numValue,
    }));
  };

  // Preset amounts for quick selection
  const investmentPresets = [500000, 1000000, 2000000, 5000000];
  const withdrawalPresets = [5000, 10000, 20000, 50000];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SWP Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate your Systematic Withdrawal Plan returns. Plan your retirement income with our free online calculator.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Input Section */}
            <div className="p-8 lg:border-r border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800 mb-8 flex items-center">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </span>
                Investment Details
              </h2>

              <div className="space-y-8">
                {/* Total Investment */}
                <div className="group">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <InvestmentIcon />
                    <span className="ml-2">Total Investment</span>
                  </label>
                  <div className="relative mb-2">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">₹</span>
                    <input
                      type="number"
                      value={inputs.totalInvestment}
                      onChange={(e) => handleInputChange('totalInvestment', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-all text-gray-900 text-lg font-medium"
                      min="10000"
                      max="100000000"
                    />
                  </div>
                  {/* Slider */}
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="50000"
                    value={inputs.totalInvestment}
                    onChange={(e) => handleInputChange('totalInvestment', e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>₹1L</span>
                    <span>₹1Cr</span>
                  </div>
                  {/* Preset buttons */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {investmentPresets.map((preset) => (
                      <button
                        key={preset}
                        onClick={() => handleInputChange('totalInvestment', preset)}
                        className={`px-3 py-1 text-xs rounded-full border transition-all ${
                          inputs.totalInvestment === preset
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-600 border-gray-300 hover:border-blue-500 hover:text-blue-500'
                        }`}
                      >
                        ₹{(preset / 100000).toFixed(0)}L
                      </button>
                    ))}
                  </div>
                </div>

                {/* Withdrawal Per Month */}
                <div className="group">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <WithdrawalIcon />
                    <span className="ml-2">Monthly Withdrawal</span>
                  </label>
                  <div className="relative mb-2">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">₹</span>
                    <input
                      type="number"
                      value={inputs.withdrawalPerMonth}
                      onChange={(e) => handleInputChange('withdrawalPerMonth', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition-all text-gray-900 text-lg font-medium"
                      min="1000"
                      max="1000000"
                    />
                  </div>
                  {/* Slider */}
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={inputs.withdrawalPerMonth}
                    onChange={(e) => handleInputChange('withdrawalPerMonth', e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>₹1K</span>
                    <span>₹1L</span>
                  </div>
                  {/* Preset buttons */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {withdrawalPresets.map((preset) => (
                      <button
                        key={preset}
                        onClick={() => handleInputChange('withdrawalPerMonth', preset)}
                        className={`px-3 py-1 text-xs rounded-full border transition-all ${
                          inputs.withdrawalPerMonth === preset
                            ? 'bg-green-500 text-white border-green-500'
                            : 'bg-white text-gray-600 border-gray-300 hover:border-green-500 hover:text-green-500'
                        }`}
                      >
                        ₹{(preset / 1000).toFixed(0)}K
                      </button>
                    ))}
                  </div>
                </div>

                {/* Expected Return Rate */}
                <div className="group">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <ReturnIcon />
                    <span className="ml-2">Expected Return Rate</span>
                  </label>
                  <div className="relative mb-2">
                    <input
                      type="number"
                      value={inputs.expectedReturnRate}
                      onChange={(e) => handleInputChange('expectedReturnRate', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-0 transition-all text-gray-900 text-lg font-medium"
                      min="1"
                      max="30"
                      step="0.5"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">% p.a.</span>
                  </div>
                  {/* Slider */}
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="0.5"
                    value={inputs.expectedReturnRate}
                    onChange={(e) => handleInputChange('expectedReturnRate', e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1%</span>
                    <span>20%</span>
                  </div>
                </div>

                {/* Time Period */}
                <div className="group">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                    <TimeIcon />
                    <span className="ml-2">Time Period</span>
                  </label>
                  <div className="relative mb-2">
                    <input
                      type="number"
                      value={inputs.timePeriod}
                      onChange={(e) => handleInputChange('timePeriod', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-0 transition-all text-gray-900 text-lg font-medium"
                      min="1"
                      max="30"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">Years</span>
                  </div>
                  {/* Slider */}
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={inputs.timePeriod}
                    onChange={(e) => handleInputChange('timePeriod', e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1 yr</span>
                    <span>30 yrs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-8 text-white">
              <h2 className="text-xl font-semibold mb-8 flex items-center">
                <span className="bg-white/20 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </span>
                Your Results
              </h2>

              <div className="space-y-6">
                {/* Total Investment */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-blue-100 text-sm">Total Investment</p>
                    <InvestmentIcon />
                  </div>
                  <p className="text-2xl font-bold">
                    {formatCurrency(result.totalInvestment)}
                  </p>
                </div>

                {/* Total Withdrawal */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-blue-100 text-sm">Total Withdrawal</p>
                    <WithdrawalIcon />
                  </div>
                  <p className="text-2xl font-bold">
                    {formatCurrency(result.totalWithdrawal)}
                  </p>
                </div>

                {/* Final Value - Highlighted */}
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/40 shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-blue-100 text-sm">Final Value</p>
                    <ReturnIcon />
                  </div>
                  <p className="text-4xl font-bold mb-2">
                    {formatCurrency(result.finalValue)}
                  </p>
                  {/* Progress bar */}
                  {result.totalInvestment > 0 && (
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-blue-100 mb-1">
                        <span>Remaining</span>
                        <span>{((result.finalValue / result.totalInvestment) * 100).toFixed(0)}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className="bg-white rounded-full h-2 transition-all duration-500"
                          style={{ width: `${Math.min(100, Math.max(0, (result.finalValue / result.totalInvestment) * 100))}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Summary */}
              <div className="mt-8 pt-6 border-t border-white/20">
                {result.finalValue > 0 ? (
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-sm text-blue-100 leading-relaxed">
                      ✨ After <span className="font-semibold text-white">{inputs.timePeriod} years</span>, you will have withdrawn{' '}
                      <span className="font-semibold text-white">{formatCurrency(result.totalWithdrawal)}</span> and still have{' '}
                      <span className="font-semibold text-white">{formatCurrency(result.finalValue)}</span> remaining.
                    </p>
                  </div>
                ) : (
                  <div className="bg-red-500/30 rounded-xl p-4 border border-red-300/30">
                    <p className="text-sm text-red-100 leading-relaxed">
                      ⚠️ Your investment will be depleted before the end of {inputs.timePeriod} years.
                      Consider reducing your monthly withdrawal amount.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* What is SWP Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What is SWP?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A Systematic Withdrawal Plan (SWP) is an investment strategy that allows mutual fund investors to withdraw a fixed amount at regular intervals. It&apos;s the opposite of SIP (Systematic Investment Plan) - instead of investing periodically, you withdraw periodically. SWP is ideal for retirees, parents funding education, or anyone seeking regular income from their investments. With SWP, your remaining investment continues to earn returns while you receive steady cash flow, providing both income and capital appreciation.
          </p>
        </section>

        {/* How SWP Works Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            How SWP Works
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '💰', title: 'Invest a Lump Sum', desc: 'Start with a one-time investment in a mutual fund' },
              { icon: '📊', title: 'Set Withdrawal Amount', desc: 'Choose your monthly withdrawal based on needs' },
              { icon: '📈', title: 'Earn Returns', desc: 'Remaining balance grows with market returns' },
              { icon: '💵', title: 'Receive Regular Income', desc: 'Get fixed monthly amount with growth potential' },
            ].map((step, index) => (
              <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <span className="text-2xl mr-4">{step.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <FAQSection />
        </section>

        {/* Internal Links Section */}
        <section className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Learn More About SWP
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/what-is-swp"
                className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all border border-blue-100"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  What is SWP? →
                </h3>
                <p className="text-gray-600">
                  Complete guide to understanding Systematic Withdrawal Plans, how they work, and who should use them.
                </p>
              </Link>
              <Link
                href="/swp-vs-sip"
                className="group bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all border border-green-100"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                  SWP vs SIP →
                </h3>
                <p className="text-gray-600">
                  Compare Systematic Withdrawal Plan vs Systematic Investment Plan and know when to use each.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8">
          <p>
            © {new Date().getFullYear()} SWP Calculator. Free online tool for mutual fund investors.
          </p>
        </footer>
      </div>

      {/* Custom slider styles */}
      <style jsx global>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          transition: transform 0.2s;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
