'use client';

import { MonthlyData, formatCurrency } from '@/utils/swpCalculator';

interface BalanceChartProps {
  data: MonthlyData[];
  initialInvestment: number;
}

export default function BalanceChart({ data, initialInvestment }: BalanceChartProps) {
  if (data.length === 0) return null;

  // Sample data points for chart (max 24 points for performance)
  const sampledData = data.length > 24
    ? data.filter((_, i) => i % Math.ceil(data.length / 24) === 0 || i === data.length - 1)
    : data;

  const maxBalance = Math.max(initialInvestment, ...data.map(d => d.openingBalance));
  const minBalance = 0;

  // Chart dimensions
  const width = 100;
  const height = 50;
  const padding = 2;

  // Generate SVG path
  const points = sampledData.map((d, i) => {
    const x = padding + (i / (sampledData.length - 1)) * (width - 2 * padding);
    const y = height - padding - ((d.closingBalance - minBalance) / (maxBalance - minBalance)) * (height - 2 * padding);
    return `${x},${y}`;
  });

  const pathD = `M ${points.join(' L ')}`;

  // Generate area fill
  const areaD = `${pathD} L ${width - padding},${height - padding} L ${padding},${height - padding} Z`;

  // Calculate key stats for legend
  const lowestBalance = Math.min(...data.map(d => d.closingBalance));
  const highestBalance = Math.max(...data.map(d => d.openingBalance));
  const totalInterest = data.reduce((sum, d) => sum + d.interestEarned, 0);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <span>📈</span> Balance Over Time
        </h3>
        <div className="text-xs text-gray-500">{data.length} months</div>
      </div>

      {/* Chart */}
      <div className="relative">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-40 sm:h-48"
          preserveAspectRatio="none"
        >
          {/* Grid lines */}
          <line x1="0" y1={height / 2} x2={width} y2={height / 2} stroke="#e5e7eb" strokeWidth="0.3" strokeDasharray="1,1" />

          {/* Area fill */}
          <path
            d={areaD}
            fill="url(#gradient)"
            opacity="0.3"
          />

          {/* Line */}
          <path
            d={pathD}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>

          {/* Start and end points */}
          <circle cx={padding} cy={height - padding - ((initialInvestment - minBalance) / (maxBalance - minBalance)) * (height - 2 * padding)} r="1.5" fill="#3B82F6" />
          <circle cx={width - padding} cy={points[points.length - 1]?.split(',')[1] || height - padding} r="1.5" fill="#6366F1" />
        </svg>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pointer-events-none">
          <span>{formatCurrency(maxBalance)}</span>
          <span>{formatCurrency(minBalance)}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-gray-100">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-1">Peak Balance</p>
          <p className="text-sm font-semibold text-green-600">{formatCurrency(highestBalance)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-1">Total Interest</p>
          <p className="text-sm font-semibold text-blue-600">+{formatCurrency(totalInterest)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-1">Final Balance</p>
          <p className="text-sm font-semibold text-indigo-600">{formatCurrency(data[data.length - 1]?.closingBalance || 0)}</p>
        </div>
      </div>
    </div>
  );
}
