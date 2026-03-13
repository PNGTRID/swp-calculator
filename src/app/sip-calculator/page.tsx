'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { formatCurrency, formatNumber } from '@/utils/swpCalculator';

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    // SIP Future Value Formula: P × ((1 + r)^n - 1) / r × (1 + r)
    const monthlyRate = expectedReturn / 12 / 100;
    const months = timePeriod * 12;

    const invested = monthlyInvestment * months;
    const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const returns = futureValue - invested;

    setInvestedAmount(Math.round(invested));
    setEstimatedReturns(Math.round(returns));
    setTotalValue(Math.round(futureValue));
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            SIP Calculator
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calculate your Systematic Investment Plan returns. See how your monthly investments can grow over time with the power of compounding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Investment Details</h2>

            {/* Monthly Investment */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Monthly Investment</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-1">₹</span>
                  <input
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                    className="w-24 text-right text-sm font-medium text-gray-800 border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                    min={500}
                    max={1000000}
                  />
                </div>
              </div>
              <input
                type="range"
                min={500}
                max={100000}
                step={500}
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹500</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            {/* Expected Return Rate */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Expected Return Rate (p.a.)</label>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-16 text-right text-sm font-medium text-gray-800 border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                    min={1}
                    max={30}
                    step={0.1}
                  />
                  <span className="text-gray-500 ml-1">%</span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={0.5}
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Time Period */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Time Period</label>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={timePeriod}
                    onChange={(e) => setTimePeriod(Number(e.target.value))}
                    className="w-16 text-right text-sm font-medium text-gray-800 border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                    min={1}
                    max={40}
                  />
                  <span className="text-gray-500 ml-1">Yrs</span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={40}
                value={timePeriod}
                onChange={(e) => setTimePeriod(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 Yr</span>
                <span>40 Yrs</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Investment Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Invested Amount</span>
                  <span className="text-lg font-semibold text-gray-800">{formatCurrency(investedAmount)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Estimated Returns</span>
                  <span className="text-lg font-semibold text-green-600">+{formatCurrency(estimatedReturns)}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700 font-medium">Total Value</span>
                  <span className="text-xl font-bold text-gray-900">{formatCurrency(totalValue)}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Invested: {Math.round((investedAmount / totalValue) * 100)}%</span>
                  <span className="text-green-600">Returns: {Math.round((estimatedReturns / totalValue) * 100)}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    style={{ width: `${(estimatedReturns / totalValue) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <p className="text-2xl font-bold text-gray-800">{formatNumber(monthlyInvestment)}</p>
                <p className="text-xs text-gray-500 mt-1">Monthly Investment</p>
              </div>
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <p className="text-2xl font-bold text-gray-800">{timePeriod * 12}</p>
                <p className="text-xs text-gray-500 mt-1">Total Installments</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is SIP?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Systematic Investment Plan (SIP) is an investment strategy where you invest a fixed amount regularly in mutual funds.
            It helps you build wealth over time through the power of compounding and rupee cost averaging.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Benefits of SIP:</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Start investing with small amounts (as low as ₹500/month)</li>
            <li>Benefit from rupee cost averaging over time</li>
            <li>Power of compounding helps grow your wealth</li>
            <li>Disciplined approach to investing</li>
            <li>No need to time the market</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              ← SWP Calculator
            </Link>
            <Link href="/fd-calculator" className="text-green-600 hover:text-green-800 font-medium">
              FD Calculator →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
