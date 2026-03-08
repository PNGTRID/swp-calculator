'use client';

import { useState } from 'react';
import { MonthlyData, formatCurrency } from '@/utils/swpCalculator';

interface MonthlyBreakdownProps {
  data: MonthlyData[];
}

export default function MonthlyBreakdown({ data }: MonthlyBreakdownProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  if (data.length === 0) return null;

  const displayData = showAll ? data : data.slice(0, 12);
  const hasMoreData = data.length > 12;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header - Clickable */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 sm:px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">📋</span>
          <h3 className="text-lg font-semibold text-gray-800">Monthly Breakdown</h3>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
            {data.length} months
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Table - Collapsible */}
      {isExpanded && (
        <div className="border-t border-gray-100">
          {/* Desktop Table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Month</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600">Opening Balance</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600">Interest</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600">Withdrawal</th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-gray-600">Closing Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {displayData.map((row, index) => (
                  <tr key={row.month} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-4 py-2.5 text-sm font-medium text-gray-900">
                      {row.month <= 12 ? row.month : `Y${Math.ceil(row.month / 12)}M${row.month % 12 || 12}`}
                    </td>
                    <td className="px-4 py-2.5 text-sm text-right text-gray-600">
                      {formatCurrency(row.openingBalance)}
                    </td>
                    <td className="px-4 py-2.5 text-sm text-right text-green-600">
                      +{formatCurrency(row.interestEarned)}
                    </td>
                    <td className="px-4 py-2.5 text-sm text-right text-red-500">
                      -{formatCurrency(row.withdrawal)}
                    </td>
                    <td className="px-4 py-2.5 text-sm text-right font-medium text-gray-900">
                      {formatCurrency(row.closingBalance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="sm:hidden divide-y divide-gray-100 max-h-80 overflow-y-auto">
            {displayData.map((row) => (
              <div key={row.month} className="px-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">
                    Month {row.month <= 12 ? row.month : `${Math.ceil(row.month / 12)}Y ${row.month % 12 || 12}M`}
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {formatCurrency(row.closingBalance)}
                  </span>
                </div>
                <div className="flex gap-3 text-xs">
                  <span className="text-gray-500">
                    Open: {formatCurrency(row.openingBalance)}
                  </span>
                  <span className="text-green-600">
                    +{formatCurrency(row.interestEarned)}
                  </span>
                  <span className="text-red-500">
                    -{formatCurrency(row.withdrawal)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {hasMoreData && (
            <div className="px-4 py-3 border-t border-gray-100 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                {showAll ? `Show Less (12 of ${data.length})` : `Show All ${data.length} Months`}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
