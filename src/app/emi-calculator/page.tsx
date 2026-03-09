'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-IN').format(value);
}

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [tenureType, setTenureType] = useState<'years' | 'months'>('years');

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    // EMI Formula: EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
    // P = Principal, R = Monthly interest rate, N = Number of months
    const months = tenureType === 'years' ? tenure * 12 : tenure;
    const monthlyRate = interestRate / 12 / 100;

    if (monthlyRate === 0) {
      setEmi(Math.round(loanAmount / months));
      setTotalInterest(0);
      setTotalPayment(loanAmount);
      return;
    }

    const emiValue = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPaymentValue = emiValue * months;
    const totalInterestValue = totalPaymentValue - loanAmount;

    setEmi(Math.round(emiValue));
    setTotalInterest(Math.round(totalInterestValue));
    setTotalPayment(Math.round(totalPaymentValue));
  }, [loanAmount, interestRate, tenure, tenureType]);

  const totalMonths = tenureType === 'years' ? tenure * 12 : tenure;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            EMI Calculator
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Calculate your Equated Monthly Installment (EMI) for home loans, car loans, or personal loans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Loan Details</h2>

            {/* Loan Amount */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Loan Amount</label>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-1">₹</span>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-32 text-right text-sm font-medium text-gray-800 border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min={10000}
                    max={100000000}
                  />
                </div>
              </div>
              <input
                type="range"
                min={100000}
                max={50000000}
                step={100000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹1L</span>
                <span>₹5 Cr</span>
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
                    className="w-16 text-right text-sm font-medium text-gray-800 border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Tenure */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-gray-700">Tenure</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-16 text-right text-sm font-medium text-gray-800 border border-gray-200 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    min={1}
                    max={tenureType === 'years' ? 30 : 360}
                  />
                  <div className="flex rounded-lg overflow-hidden border border-gray-200">
                    <button
                      onClick={() => setTenureType('years')}
                      className={`px-3 py-1 text-xs font-medium ${tenureType === 'years' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
                    >
                      Years
                    </button>
                    <button
                      onClick={() => setTenureType('months')}
                      className={`px-3 py-1 text-xs font-medium ${tenureType === 'months' ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'}`}
                    >
                      Months
                    </button>
                  </div>
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={tenureType === 'years' ? 30 : 360}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 {tenureType === 'years' ? 'Year' : 'Month'}</span>
                <span>30 {tenureType === 'years' ? 'Years' : 'Months'}</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* EMI Card */}
            <div className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-2xl shadow-lg p-6 text-white">
              <p className="text-purple-200 text-sm mb-2">Monthly EMI</p>
              <p className="text-4xl font-bold">{formatCurrency(emi)}</p>
            </div>

            {/* Summary Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment Breakdown</h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Principal Amount</span>
                  <span className="text-lg font-semibold text-gray-800">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="text-lg font-semibold text-purple-600">+{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700 font-medium">Total Payment</span>
                  <span className="text-xl font-bold text-gray-900">{formatCurrency(totalPayment)}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Principal: {Math.round((loanAmount / totalPayment) * 100)}%</span>
                  <span className="text-purple-600">Interest: {Math.round((totalInterest / totalPayment) * 100)}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-violet-500 rounded-full"
                    style={{ width: `${(totalInterest / totalPayment) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <p className="text-2xl font-bold text-gray-800">{formatNumber(totalMonths)}</p>
                <p className="text-xs text-gray-500 mt-1">Total EMIs</p>
              </div>
              <div className="bg-white rounded-xl shadow p-4 text-center">
                <p className="text-2xl font-bold text-gray-800">{((totalInterest / loanAmount) * 100).toFixed(1)}%</p>
                <p className="text-xs text-gray-500 mt-1">Interest Ratio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is EMI?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            EMI (Equated Monthly Installment) is a fixed payment amount made by a borrower to a lender at a specified date each month.
            EMIs are used to pay off both interest and principal each month so that over a specified period, the loan is fully paid off.
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">EMI Formula:</h3>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <code className="text-purple-700">EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]</code>
            <p className="text-sm text-gray-600 mt-2">
              Where P = Principal, R = Monthly interest rate, N = Number of months
            </p>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Types of Loans:</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li><strong>Home Loan:</strong> Usually 15-30 years tenure, interest rates 7-9%</li>
            <li><strong>Car Loan:</strong> Usually 3-7 years tenure, interest rates 7-12%</li>
            <li><strong>Personal Loan:</strong> Usually 1-5 years tenure, interest rates 10-20%</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/fd-calculator" className="text-amber-600 hover:text-amber-800 font-medium">
              ← FD Calculator
            </Link>
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
              SWP Calculator →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
