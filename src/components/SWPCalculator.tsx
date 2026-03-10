'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  calculateSWP,
  formatCurrency,
  getMonthlyData,
  calculateReverseSWP,
  getReverseMonthlyData,
  type SWPInput,
  type SWPResult,
  type ReverseSWPInput,
  type ReverseSWPResult,
} from '@/utils/swpCalculator';
import FAQSection from './FAQSection';
import Footer from './Footer';
import MonthlyBreakdown from './MonthlyBreakdown';
import BalanceChart from './BalanceChart';
import Sidebar from './Sidebar';

type CalculatorMode = 'forward' | 'reverse';

export default function SWPCalculator() {
  // Calculator mode state
  const [mode, setMode] = useState<CalculatorMode>('forward');

  // Forward calculator state
  const [inputs, setInputs] = useState<SWPInput>({
    totalInvestment: 500000,
    withdrawalPerMonth: 10000,
    expectedReturnRate: 8,
    timePeriod: 5,
  });

  // Reverse calculator state
  const [reverseInputs, setReverseInputs] = useState<ReverseSWPInput>({
    monthlyIncome: 50000,
    timePeriod: 20,
    expectedReturnRate: 8,
  });

  const [result, setResult] = useState<SWPResult>({
    totalInvestment: 0,
    totalWithdrawal: 0,
    finalValue: 0,
  });

  const [reverseResult, setReverseResult] = useState<ReverseSWPResult>({
    requiredCorpus: 0,
    totalWithdrawal: 0,
    totalInterestEarned: 0,
    finalValue: 0,
  });

  const [monthlyData, setMonthlyData] = useState<ReturnType<typeof getMonthlyData>>([]);

  // Calculate forward SWP
  useEffect(() => {
    if (mode === 'forward') {
      const calculated = calculateSWP(inputs);
      setResult(calculated);
      setMonthlyData(getMonthlyData(inputs));
    }
  }, [inputs, mode]);

  // Calculate reverse SWP
  useEffect(() => {
    if (mode === 'reverse') {
      const calculated = calculateReverseSWP(reverseInputs);
      setReverseResult(calculated);
      setMonthlyData(getReverseMonthlyData(reverseInputs));
    }
  }, [reverseInputs, mode]);

  const handleInputChange = (field: keyof SWPInput, value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
    setInputs((prev) => ({ ...prev, [field]: numValue }));
  };

  const handleReverseInputChange = (field: keyof ReverseSWPInput, value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
    setReverseInputs((prev) => ({ ...prev, [field]: numValue }));
  };

  // Calculate key metrics for forward mode
  const withdrawalRate = inputs.totalInvestment > 0
    ? ((inputs.withdrawalPerMonth * 12 / inputs.totalInvestment) * 100).toFixed(1)
    : '0';

  const retentionRate = result.totalInvestment > 0
    ? ((result.finalValue / result.totalInvestment) * 100).toFixed(1)
    : '0';

  const totalInterestEarned = monthlyData.reduce((sum, d) => sum + d.interestEarned, 0);

  // Calculate key metrics for reverse mode
  const reverseWithdrawalRate = reverseResult.requiredCorpus > 0
    ? ((reverseInputs.monthlyIncome * 12 / reverseResult.requiredCorpus) * 100).toFixed(1)
    : '0';

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-6 sm:py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">SWP Calculator</h1>
          <p className="text-gray-600 text-sm sm:text-base">Calculate your Systematic Withdrawal Plan returns</p>
        </div>

        {/* Mode Toggle Tabs */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-xl p-1 shadow-md inline-flex">
            <button
              onClick={() => setMode('forward')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                mode === 'forward'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              💰 Corpus → Income
            </button>
            <button
              onClick={() => setMode('reverse')}
              className={`px-4 sm:px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                mode === 'reverse'
                  ? 'bg-green-600 text-white shadow'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              💵 Income → Corpus
            </button>
          </div>
        </div>

        {/* Mode Description */}
        <div className="text-center mb-4">
          {mode === 'forward' ? (
            <p className="text-sm text-gray-500">
              👉 Enter your investment amount to see monthly withdrawal potential
            </p>
          ) : (
            <p className="text-sm text-gray-500">
              👉 Enter desired monthly income to calculate required investment
            </p>
          )}
        </div>

        {/* Main Layout - Calculator + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Calculator Area - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {/* Calculator Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Input Section - Forward Mode */}
                {mode === 'forward' && (
                  <div className="p-4 sm:p-6 space-y-4">
                    {/* Total Investment */}
                    <div>
                      <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-1">
                        <span>💰 Total Investment</span>
                        <span className="text-blue-600 font-semibold">{formatCurrency(inputs.totalInvestment)}</span>
                      </label>
                      <input
                        type="range"
                        min="100000"
                        max="10000000"
                        step="50000"
                        value={inputs.totalInvestment}
                        onChange={(e) => handleInputChange('totalInvestment', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>₹1L</span>
                        <span>₹1Cr</span>
                      </div>
                    </div>

                    {/* Monthly Withdrawal */}
                    <div>
                      <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-1">
                        <span>💸 Monthly Withdrawal</span>
                        <span className="text-green-600 font-semibold">{formatCurrency(inputs.withdrawalPerMonth)}</span>
                      </label>
                      <input
                        type="range"
                        min="1000"
                        max="100000"
                        step="1000"
                        value={inputs.withdrawalPerMonth}
                        onChange={(e) => handleInputChange('withdrawalPerMonth', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>₹1K</span>
                        <span>₹1L</span>
                      </div>
                    </div>

                    {/* Expected Return Rate */}
                    <div>
                      <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-1">
                        <span>📈 Return Rate (p.a.)</span>
                        <span className="text-purple-600 font-semibold">{inputs.expectedReturnRate}%</span>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        step="0.5"
                        value={inputs.expectedReturnRate}
                        onChange={(e) => handleInputChange('expectedReturnRate', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>1%</span>
                        <span>20%</span>
                      </div>
                    </div>

                    {/* Time Period */}
                    <div>
                      <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-1">
                        <span>⏱️ Time Period</span>
                        <span className="text-orange-600 font-semibold">{inputs.timePeriod} Years</span>
                      </label>
                      <input
                        type="range"
                        min="1"
                        max="30"
                        step="1"
                        value={inputs.timePeriod}
                        onChange={(e) => handleInputChange('timePeriod', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>1Y</span>
                        <span>30Y</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Input Section - Reverse Mode */}
                {mode === 'reverse' && (
                  <div className="p-4 sm:p-6 space-y-4">
                    {/* Desired Monthly Income */}
                    <div>
                      <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-1">
                        <span>💵 Desired Monthly Income</span>
                        <span className="text-green-600 font-semibold">{formatCurrency(reverseInputs.monthlyIncome)}</span>
                      </label>
                      <input
                        type="range"
                        min="5000"
                        max="500000"
                        step="5000"
                        value={reverseInputs.monthlyIncome}
                        onChange={(e) => handleReverseInputChange('monthlyIncome', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>₹5K</span>
                        <span>₹5L</span>
                      </div>
                    </div>

                    {/* Time Period */}
                    <div>
                      <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-1">
                        <span>⏱️ Investment Period</span>
                        <span className="text-orange-600 font-semibold">{reverseInputs.timePeriod} Years</span>
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="30"
                        step="1"
                        value={reverseInputs.timePeriod}
                        onChange={(e) => handleReverseInputChange('timePeriod', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>5Y</span>
                        <span>30Y</span>
                      </div>
                    </div>

                    {/* Expected Return Rate */}
                    <div>
                      <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-1">
                        <span>📈 Expected Return (p.a.)</span>
                        <span className="text-purple-600 font-semibold">{reverseInputs.expectedReturnRate}%</span>
                      </label>
                      <input
                        type="range"
                        min="5"
                        max="15"
                        step="0.5"
                        value={reverseInputs.expectedReturnRate}
                        onChange={(e) => handleReverseInputChange('expectedReturnRate', e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-500"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>5%</span>
                        <span>15%</span>
                      </div>
                    </div>

                    {/* Quick presets */}
                    <div className="pt-2">
                      <p className="text-xs text-gray-500 mb-2">Quick presets:</p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          { label: '₹10K/mo', value: 10000 },
                          { label: '₹25K/mo', value: 25000 },
                          { label: '₹50K/mo', value: 50000 },
                          { label: '₹1L/mo', value: 100000 },
                        ].map((preset) => (
                          <button
                            key={preset.value}
                            onClick={() => handleReverseInputChange('monthlyIncome', preset.value)}
                            className={`px-3 py-1 text-xs rounded-full border transition-all ${
                              reverseInputs.monthlyIncome === preset.value
                                ? 'bg-green-100 border-green-400 text-green-700'
                                : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Results Section - Forward Mode */}
                {mode === 'forward' && (
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-4 sm:p-6 text-white">
                    <h2 className="text-lg font-semibold mb-4 text-center md:text-left">📊 Results</h2>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-white/10 rounded-lg p-2 text-center">
                        <p className="text-blue-100 text-xs">Withdrawal Rate</p>
                        <p className={`text-lg font-bold ${parseFloat(withdrawalRate) > 10 ? 'text-red-300' : 'text-white'}`}>
                          {withdrawalRate}%
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-center">
                        <p className="text-blue-100 text-xs">Retention Rate</p>
                        <p className="text-lg font-bold">{retentionRate}%</p>
                      </div>
                    </div>

                    {/* Main Results */}
                    <div className="space-y-2">
                      <div className="bg-white/10 rounded-xl p-3">
                        <p className="text-blue-100 text-xs mb-1">Total Investment</p>
                        <p className="text-lg font-bold">{formatCurrency(result.totalInvestment)}</p>
                      </div>

                      <div className="bg-white/10 rounded-xl p-3">
                        <p className="text-blue-100 text-xs mb-1">Total Withdrawal</p>
                        <p className="text-lg font-bold">{formatCurrency(result.totalWithdrawal)}</p>
                      </div>

                      <div className="bg-white/20 rounded-xl p-4 border border-white/30">
                        <p className="text-blue-100 text-xs mb-1">Final Value</p>
                        <p className="text-2xl font-bold">{formatCurrency(result.finalValue)}</p>
                        {result.totalInvestment > 0 && (
                          <div className="mt-2">
                            <div className="w-full bg-white/20 rounded-full h-2">
                              <div
                                className="bg-white rounded-full h-2 transition-all duration-300"
                                style={{ width: `${Math.min(100, Math.max(0, (result.finalValue / result.totalInvestment) * 100))}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Interest Earned */}
                    <div className="mt-4 p-3 bg-green-500/20 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-green-100 text-xs">Total Interest Earned</span>
                        <span className="text-white font-bold">+{formatCurrency(totalInterestEarned)}</span>
                      </div>
                    </div>

                    {result.finalValue <= 0 ? (
                      <p className="text-xs text-red-200 mt-3 text-center md:text-left">
                        ⚠️ Investment depleted before {inputs.timePeriod} years
                      </p>
                    ) : (
                      <p className="text-xs text-blue-100 mt-3 text-center md:text-left">
                        ✨ After {inputs.timePeriod} years: withdraw {formatCurrency(result.totalWithdrawal)}, keep {formatCurrency(result.finalValue)}
                      </p>
                    )}
                  </div>
                )}

                {/* Results Section - Reverse Mode */}
                {mode === 'reverse' && (
                  <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-4 sm:p-6 text-white">
                    <h2 className="text-lg font-semibold mb-4 text-center md:text-left">🎯 Required Corpus</h2>

                    {/* Main Result - Required Corpus */}
                    <div className="bg-white/20 rounded-xl p-4 border border-white/30 mb-4">
                      <p className="text-green-100 text-xs mb-1">You Need to Invest</p>
                      <p className="text-3xl font-bold">{formatCurrency(reverseResult.requiredCorpus)}</p>
                      <p className="text-green-100 text-xs mt-2">
                        To get {formatCurrency(reverseInputs.monthlyIncome)}/month for {reverseInputs.timePeriod} years
                      </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-white/10 rounded-lg p-2 text-center">
                        <p className="text-green-100 text-xs">Annual Withdrawal</p>
                        <p className="text-lg font-bold">{reverseWithdrawalRate}%</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-center">
                        <p className="text-green-100 text-xs">Duration</p>
                        <p className="text-lg font-bold">{reverseInputs.timePeriod * 12} Months</p>
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div className="space-y-2">
                      <div className="bg-white/10 rounded-xl p-3">
                        <p className="text-green-100 text-xs mb-1">Total Withdrawal</p>
                        <p className="text-lg font-bold">{formatCurrency(reverseResult.totalWithdrawal)}</p>
                      </div>

                      <div className="bg-white/10 rounded-xl p-3">
                        <p className="text-green-100 text-xs mb-1">Interest Earned</p>
                        <p className="text-lg font-bold text-yellow-300">+{formatCurrency(reverseResult.totalInterestEarned)}</p>
                      </div>
                    </div>

                    {/* Sustainability indicator */}
                    <div className="mt-4 p-3 bg-white/10 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-green-100 text-xs">Sustainability Score</span>
                        <span className={`font-bold text-sm ${
                          parseFloat(reverseWithdrawalRate) <= 6 ? 'text-green-300' :
                          parseFloat(reverseWithdrawalRate) <= 8 ? 'text-yellow-300' : 'text-red-300'
                        }`}>
                          {parseFloat(reverseWithdrawalRate) <= 6 ? '✅ Excellent' :
                           parseFloat(reverseWithdrawalRate) <= 8 ? '⚠️ Moderate' : '❌ Aggressive'}
                        </span>
                      </div>
                      <p className="text-green-100 text-xs mt-1">
                        {parseFloat(reverseWithdrawalRate) <= 6
                          ? 'Safe withdrawal rate, corpus will likely last longer'
                          : parseFloat(reverseWithdrawalRate) <= 8
                          ? 'Balanced approach, monitor annually'
                          : 'High withdrawal rate, corpus may deplete faster'}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-4 p-3 bg-blue-500/30 rounded-lg text-center">
                      <p className="text-xs text-white">
                        💡 Tip: Keep withdrawal rate under 6% for sustainable income
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Balance Chart */}
            {monthlyData.length > 0 && (
              <BalanceChart
                data={monthlyData}
                initialInvestment={mode === 'forward' ? inputs.totalInvestment : reverseResult.requiredCorpus}
              />
            )}

            {/* Monthly Breakdown */}
            {monthlyData.length > 0 && (
              <MonthlyBreakdown data={monthlyData} />
            )}

            {/* What is SWP */}
            <section className="bg-white rounded-2xl shadow p-4 sm:p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">What is SWP?</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                A Systematic Withdrawal Plan (SWP) allows mutual fund investors to withdraw a fixed amount at regular intervals. It&apos;s ideal for retirees or anyone seeking regular income from investments. Your remaining balance continues to earn returns while you receive steady cash flow.
              </p>
            </section>

            {/* How SWP Works */}
            <section className="bg-white rounded-2xl shadow p-4 sm:p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">How SWP Works</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-3 text-center">Frequently Asked Questions</h2>
              <FAQSection />
            </section>

            {/* Other Calculators */}
            <section>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Other Calculators</h3>
              <div className="grid grid-cols-3 gap-3">
                <Link href="/sip-calculator" title="SIP Calculator - Systematic Investment Plan" className="bg-green-50 hover:bg-green-100 rounded-xl p-4 text-center transition-colors border border-green-100">
                  <p className="text-2xl mb-2">📈</p>
                  <p className="text-sm font-medium text-gray-800">SIP Calculator</p>
                </Link>
                <Link href="/fd-calculator" title="FD Calculator - Fixed Deposit" className="bg-amber-50 hover:bg-amber-100 rounded-xl p-4 text-center transition-colors border border-amber-100">
                  <p className="text-2xl mb-2">🏦</p>
                  <p className="text-sm font-medium text-gray-800">FD Calculator</p>
                </Link>
                <Link href="/emi-calculator" title="EMI Calculator - Loan EMI" className="bg-purple-50 hover:bg-purple-100 rounded-xl p-4 text-center transition-colors border border-purple-100">
                  <p className="text-2xl mb-2">🏠</p>
                  <p className="text-sm font-medium text-gray-800">EMI Calculator</p>
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              <Sidebar />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
