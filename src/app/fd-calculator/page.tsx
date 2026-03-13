'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { formatCurrency, formatNumber } from '@/utils/swpCalculator';

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [interestRate, setInterestRate] = useState(7);
  const [tenure, setTenure] = useState(5);
  const [compounding, setCompounding] = useState<'monthly' | 'quarterly' | 'halfyearly' | 'yearly'>('quarterly');

  const [maturityAmount, setMaturityAmount] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);
  const [effectiveYield, setEffectiveYield] = useState(0);

  useEffect(() => {
    // Compound Interest Formula: A = P(1 + r/n)^(nt)
    // P = Principal, r = annual interest rate (decimal), n = compounding frequency, t = time in years
    const n = compounding === 'monthly' ? 12 : compounding === 'quarterly' ? 4 : compounding === 'halfyearly' ? 2 : 1;
    const r = interestRate / 100;
    const t = tenure;

    const maturity = principal * Math.pow(1 + r / n, n * t);
    const interest = maturity - principal;
    const yieldPercent = ((Math.pow(1 + r / n, n) - 1) * 100);

    setMaturityAmount(Math.round(maturity));
    setInterestEarned(Math.round(interest));
    setEffectiveYield(Number(yieldPercent.toFixed(2)));
  }, [principal, interestRate, tenure, compounding]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            FD Calculator
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calculate your Fixed Deposit maturity amount and interest earned. See how your FD investment grows with compound interest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Investment Details</h2>

            {/* Principal Amount */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Principal Amount</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-1">₹</span>
                  <input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-28 text-right text-sm font-medium text-gray-800 border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    min={1000}
                    max={10000000}
                  />
                </div>
              </div>
              <input
                type="range"
                min={10000}
                max={10000000}
                step={10000}
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹10,000</span>
                <span>₹1 Crore</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Interest Rate (p.a.)</label>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-16 text-right text-sm font-medium text-gray-800 border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    min={1}
                    max={15}
                    step={0.1}
                  />
                  <span className="text-gray-500 ml-1">%</span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={15}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1%</span>
                <span>15%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Tenure</label>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-16 text-right text-sm font-medium text-gray-800 border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    min={1}
                    max={10}
                  />
                  <span className="text-gray-500 ml-1">Years</span>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={10}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 Year</span>
                <span>10 Years</span>
              </div>
            </div>

            {/* Compounding Frequency */}
            <div className="mb-2">
              <label className="text-sm font-medium text-gray-700 mb-3 block">Compounding Frequency</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: 'monthly', label: 'Monthly' },
                  { value: 'quarterly', label: 'Quarterly' },
                  { value: 'halfyearly', label: 'Half-Yearly' },
                  { value: 'yearly', label: 'Yearly' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setCompounding(option.value as typeof compounding)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      compounding === option.value
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">FD Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Principal Amount</span>
                  <span className="text-lg font-semibold text-gray-800">{formatCurrency(principal)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="text-lg font-semibold text-amber-600">+{formatCurrency(interestEarned)}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700 font-medium">Maturity Amount</span>
                  <span className="text-xl font-bold text-gray-900">{formatCurrency(maturityAmount)}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Principal: {Math.round((principal / maturityAmount) * 100)}%</span>
                  <span className="text-amber-600">Interest: {Math.round((interestEarned / maturityAmount) * 100)}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                    style={{ width: `${(interestEarned / maturityAmount) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <p className="text-2xl font-bold text-gray-800">{effectiveYield}%</p>
                <p className="text-xs text-gray-500 mt-1">Effective Yield</p>
              </div>
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <p className="text-2xl font-bold text-gray-800">{tenure * 12}</p>
                <p className="text-xs text-gray-500 mt-1">Total Months</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Fixed Deposit?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Fixed Deposit (FD) is a financial instrument provided by banks and NBFCs that offers a higher rate of interest
            than a regular savings account. The money is deposited for a fixed tenure and earns compound interest.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Benefits of FD:</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Guaranteed returns with capital protection</li>
            <li>Higher interest rates than savings accounts</li>
            <li>Flexible tenure options (7 days to 10 years)</li>
            <li>Loan facility available against FD</li>
            <li>Tax-saving FDs available (5-year lock-in)</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/sip-calculator" className="text-green-600 hover:text-green-800 font-medium">
              ← SIP Calculator
            </Link>
            <Link href="/emi-calculator" className="text-amber-600 hover:text-amber-800 font-medium">
              EMI Calculator →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
