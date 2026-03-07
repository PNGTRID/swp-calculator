'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { calculateSWP, formatCurrency, type SWPInput, type SWPResult } from '@/utils/swpCalculator';
import FAQSection from './FAQSection';

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
  const handleInputChange = (field: keyof SWPInput, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs((prev) => ({
      ...prev,
      [field]: numValue,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SWP Calculator - Free Systematic Withdrawal Plan Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate your monthly withdrawals, final value, and plan your retirement income with our free online SWP calculator.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                Investment Details
              </h2>

              {/* Total Investment */}
              <div>
                <label
                  htmlFor="totalInvestment"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Total Investment (₹)
                </label>
                <input
                  type="number"
                  id="totalInvestment"
                  value={inputs.totalInvestment}
                  onChange={(e) => handleInputChange('totalInvestment', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                  placeholder="Enter total investment"
                  min="0"
                />
              </div>

              {/* Withdrawal Per Month */}
              <div>
                <label
                  htmlFor="withdrawalPerMonth"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Withdrawal Per Month (₹)
                </label>
                <input
                  type="number"
                  id="withdrawalPerMonth"
                  value={inputs.withdrawalPerMonth}
                  onChange={(e) => handleInputChange('withdrawalPerMonth', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                  placeholder="Enter monthly withdrawal"
                  min="0"
                />
              </div>

              {/* Expected Return Rate */}
              <div>
                <label
                  htmlFor="expectedReturnRate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Expected Return Rate (% per annum)
                </label>
                <input
                  type="number"
                  id="expectedReturnRate"
                  value={inputs.expectedReturnRate}
                  onChange={(e) => handleInputChange('expectedReturnRate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                  placeholder="Enter expected return rate"
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>

              {/* Time Period */}
              <div>
                <label
                  htmlFor="timePeriod"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Time Period (Years)
                </label>
                <input
                  type="number"
                  id="timePeriod"
                  value={inputs.timePeriod}
                  onChange={(e) => handleInputChange('timePeriod', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900"
                  placeholder="Enter time period in years"
                  min="1"
                  max="50"
                />
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-8 text-white">
              <h2 className="text-xl font-semibold mb-8">
                Calculation Results
              </h2>

              <div className="space-y-6">
                {/* Total Investment */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-blue-100 mb-1">Total Investment</p>
                  <p className="text-2xl font-bold">
                    {formatCurrency(result.totalInvestment)}
                  </p>
                </div>

                {/* Total Withdrawal */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm text-blue-100 mb-1">Total Withdrawal</p>
                  <p className="text-2xl font-bold">
                    {formatCurrency(result.totalWithdrawal)}
                  </p>
                </div>

                {/* Final Value */}
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border-2 border-white/30">
                  <p className="text-sm text-blue-100 mb-1">Final Value</p>
                  <p className="text-3xl font-bold">
                    {formatCurrency(result.finalValue)}
                  </p>
                </div>
              </div>

              {/* Summary */}
              {result.finalValue > 0 && (
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-blue-100">
                    After {inputs.timePeriod} years, you will have withdrawn{' '}
                    <span className="font-semibold">{formatCurrency(result.totalWithdrawal)}</span> and still have{' '}
                    <span className="font-semibold">{formatCurrency(result.finalValue)}</span> remaining.
                  </p>
                </div>
              )}

              {result.finalValue === 0 && (
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-blue-100">
                    Your investment will be depleted before the end of {inputs.timePeriod} years.
                    Consider reducing your monthly withdrawal amount.
                  </p>
                </div>
              )}
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
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Invest a Lump Sum</h3>
                <p className="text-gray-600">
                  Start with a one-time investment in a mutual fund of your choice.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Set Withdrawal Amount</h3>
                <p className="text-gray-600">
                  Choose how much you want to withdraw each month based on your income needs.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Earn Returns on Remaining Balance</h3>
                <p className="text-gray-600">
                  Your investment grows with market returns while you withdraw money regularly.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Receive Regular Income</h3>
                <p className="text-gray-600">
                  Get your fixed monthly amount while maintaining investment growth potential.
                </p>
              </div>
            </div>
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
                className="group bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600">
                  What is SWP? →
                </h3>
                <p className="text-gray-600">
                  Complete guide to understanding Systematic Withdrawal Plans, how they work, and who should use them.
                </p>
              </Link>
              <Link
                href="/swp-vs-sip"
                className="group bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600">
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
    </div>
  );
}
