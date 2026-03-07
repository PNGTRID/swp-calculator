'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { calculateSWP, formatCurrency, type SWPInput, type SWPResult } from '@/utils/swpCalculator';
import FAQSection from './FAQSection';

export default function SWPCalculator() {
  const [inputs, setInputs] = useState<SWPInput>({
    totalInvestment: 1000000,
    withdrawalPerMonth: 10000,
    expectedReturnRate: 8,
    timePeriod: 5,
  });

  const [result, setResult] = useState<SWPResult>({
    totalInvestment: 0,
    totalWithdrawal: 0,
    finalValue: 0,
  });

  useEffect(() => {
    const calculated = calculateSWP(inputs);
    setResult(calculated);
  }, [inputs]);

  const handleInputChange = (field: keyof SWPInput, value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
    setInputs((prev) => ({ ...prev, [field]: numValue }));
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-6 sm:py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">SWP Calculator</h1>
          <p className="text-gray-600 text-sm sm:text-base">Calculate your Systematic Withdrawal Plan returns</p>
        </div>

        {/* Calculator Card - Compact Layout */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Input Section */}
            <div className="p-4 sm:p-6 space-y-4">
              {/* Total Investment */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  💰 Total Investment (₹)
                </label>
                <input
                  type="number"
                  value={inputs.totalInvestment}
                  onChange={(e) => handleInputChange('totalInvestment', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  min="10000"
                />
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="50000"
                  value={inputs.totalInvestment}
                  onChange={(e) => handleInputChange('totalInvestment', e.target.value)}
                  className="w-full h-1.5 mt-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Monthly Withdrawal */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  💸 Monthly Withdrawal (₹)
                </label>
                <input
                  type="number"
                  value={inputs.withdrawalPerMonth}
                  onChange={(e) => handleInputChange('withdrawalPerMonth', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900"
                  min="1000"
                />
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={inputs.withdrawalPerMonth}
                  onChange={(e) => handleInputChange('withdrawalPerMonth', e.target.value)}
                  className="w-full h-1.5 mt-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
              </div>

              {/* Expected Return Rate */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  📈 Return Rate (% p.a.)
                </label>
                <input
                  type="number"
                  value={inputs.expectedReturnRate}
                  onChange={(e) => handleInputChange('expectedReturnRate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                  min="1"
                  max="30"
                  step="0.5"
                />
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.5"
                  value={inputs.expectedReturnRate}
                  onChange={(e) => handleInputChange('expectedReturnRate', e.target.value)}
                  className="w-full h-1.5 mt-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
              </div>

              {/* Time Period */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  ⏱️ Time Period (Years)
                </label>
                <input
                  type="number"
                  value={inputs.timePeriod}
                  onChange={(e) => handleInputChange('timePeriod', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                  min="1"
                  max="30"
                />
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={inputs.timePeriod}
                  onChange={(e) => handleInputChange('timePeriod', e.target.value)}
                  className="w-full h-1.5 mt-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-4 sm:p-6 text-white">
              <h2 className="text-lg font-semibold mb-4 text-center md:text-left">📊 Results</h2>

              <div className="space-y-3">
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-blue-100 text-xs mb-1">Total Investment</p>
                  <p className="text-xl font-bold">{formatCurrency(result.totalInvestment)}</p>
                </div>

                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-blue-100 text-xs mb-1">Total Withdrawal</p>
                  <p className="text-xl font-bold">{formatCurrency(result.totalWithdrawal)}</p>
                </div>

                <div className="bg-white/20 rounded-xl p-4 border border-white/30">
                  <p className="text-blue-100 text-xs mb-1">Final Value</p>
                  <p className="text-2xl font-bold">{formatCurrency(result.finalValue)}</p>
                  {result.totalInvestment > 0 && (
                    <div className="mt-2">
                      <div className="w-full bg-white/20 rounded-full h-1.5">
                        <div
                          className="bg-white rounded-full h-1.5"
                          style={{ width: `${Math.min(100, Math.max(0, (result.finalValue / result.totalInvestment) * 100))}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {result.finalValue > 0 ? (
                <p className="text-xs text-blue-100 mt-4 text-center md:text-left">
                  ✨ After {inputs.timePeriod} years: withdraw {formatCurrency(result.totalWithdrawal)}, keep {formatCurrency(result.finalValue)}
                </p>
              ) : (
                <p className="text-xs text-red-200 mt-4 text-center md:text-left">
                  ⚠️ Investment depleted before {inputs.timePeriod} years
                </p>
              )}
            </div>
          </div>
        </div>

        {/* What is SWP */}
        <section className="bg-white rounded-2xl shadow p-4 sm:p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">What is SWP?</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            A Systematic Withdrawal Plan (SWP) allows mutual fund investors to withdraw a fixed amount at regular intervals. It&apos;s ideal for retirees or anyone seeking regular income from investments. Your remaining balance continues to earn returns while you receive steady cash flow.
          </p>
        </section>

        {/* How SWP Works */}
        <section className="bg-white rounded-2xl shadow p-4 sm:p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">How SWP Works</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-2xl">💰</span>
              <p className="text-sm font-medium text-gray-800 mt-1">Invest Lump Sum</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-2xl">📊</span>
              <p className="text-sm font-medium text-gray-800 mt-1">Set Withdrawal</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-2xl">📈</span>
              <p className="text-sm font-medium text-gray-800 mt-1">Earn Returns</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <span className="text-2xl">💵</span>
              <p className="text-sm font-medium text-gray-800 mt-1">Get Income</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3 text-center">FAQ</h2>
          <FAQSection />
        </section>

        {/* Internal Links */}
        <section className="mb-6">
          <div className="grid grid-cols-2 gap-3">
            <Link href="/what-is-swp" className="bg-blue-50 hover:bg-blue-100 rounded-xl p-4 text-center transition-colors border border-blue-100">
              <p className="text-sm font-medium text-gray-800">What is SWP? →</p>
            </Link>
            <Link href="/swp-vs-sip" className="bg-green-50 hover:bg-green-100 rounded-xl p-4 text-center transition-colors border border-green-100">
              <p className="text-sm font-medium text-gray-800">SWP vs SIP →</p>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-xs py-4">
          © {new Date().getFullYear()} SWP Calculator
        </footer>
      </div>
    </div>
  );
}
