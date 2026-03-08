'use client';

import { MonthlyData, formatCurrency } from '@/utils/swpCalculator';

interface BalanceChartProps {
  data: MonthlyData[];
  initialInvestment: number;
}

export default function BalanceChart({ data, initialInvestment }: BalanceChartProps) {
  if (data.length === 0) return null;

  // Sample data points (max 12 for cleaner look)
  const maxPoints = 12;
  const sampledData = data.length > maxPoints
    ? data.filter((_, i) => i % Math.ceil(data.length / maxPoints) === 0 || i === data.length - 1)
    : data;

  const maxBalance = Math.max(initialInvestment, ...data.map(d => d.openingBalance));
  const minBalance = 0;
  const range = maxBalance - minBalance;

  // Chart dimensions with proper aspect ratio
  const chartWidth = 280;
  const chartHeight = 120;
  const paddingX = 50;
  const paddingY = 20;
  const innerWidth = chartWidth - paddingX;
  const innerHeight = chartHeight - paddingY * 2;

  // Generate smooth curve points
  const points = sampledData.map((d, i) => {
    const x = paddingX + (i / (sampledData.length - 1)) * innerWidth;
    const normalizedValue = (d.closingBalance - minBalance) / range;
    const y = paddingY + (1 - normalizedValue) * innerHeight;
    return { x, y, value: d.closingBalance };
  });

  // Create smooth path using bezier curves
  const createSmoothPath = () => {
    if (points.length < 2) return '';

    let d = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midX = (prev.x + curr.x) / 2;
      d += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
    }

    return d;
  };

  const pathD = createSmoothPath();
  const areaD = `${pathD} L ${points[points.length - 1].x} ${chartHeight - paddingY} L ${paddingX} ${chartHeight - paddingY} Z`;

  // Y-axis ticks
  const yTicks = [0, 0.5, 1].map(ratio => ({
    y: paddingY + (1 - ratio) * innerHeight,
    value: minBalance + ratio * range
  }));

  // X-axis labels
  const xLabels = [0, Math.floor(sampledData.length / 2), sampledData.length - 1].map(i => ({
    x: points[i]?.x || paddingX,
    label: i === 0 ? 'Start' : i === sampledData.length - 1 ? 'End' : `${Math.floor((i / sampledData.length) * data.length)}m`
  }));

  // Stats
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

      {/* Chart Container */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full h-auto"
          style={{ maxHeight: '200px' }}
        >
          {/* Definitions */}
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {yTicks.slice(1, -1).map((tick, i) => (
            <line
              key={i}
              x1={paddingX}
              y1={tick.y}
              x2={chartWidth - 10}
              y2={tick.y}
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          ))}

          {/* Y-axis labels */}
          {yTicks.map((tick, i) => (
            <text
              key={i}
              x={paddingX - 8}
              y={tick.y + 3}
              textAnchor="end"
              className="text-[8px] fill-gray-400"
            >
              {formatCurrency(tick.value).replace('₹', '₹')}
            </text>
          ))}

          {/* X-axis baseline */}
          <line
            x1={paddingX}
            y1={chartHeight - paddingY}
            x2={chartWidth - 10}
            y2={chartHeight - paddingY}
            stroke="#e5e7eb"
            strokeWidth="1"
          />

          {/* Area fill */}
          <path d={areaD} fill="url(#areaGradient)" />

          {/* Line */}
          <path
            d={pathD}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Start point */}
          <circle
            cx={points[0]?.x}
            cy={points[0]?.y}
            r="4"
            fill="#3B82F6"
            stroke="white"
            strokeWidth="2"
          />

          {/* End point */}
          <circle
            cx={points[points.length - 1]?.x}
            cy={points[points.length - 1]?.y}
            r="4"
            fill="#6366F1"
            stroke="white"
            strokeWidth="2"
          />

          {/* X-axis labels */}
          {xLabels.map((label, i) => (
            <text
              key={i}
              x={label.x}
              y={chartHeight - 4}
              textAnchor="middle"
              className="text-[8px] fill-gray-400"
            >
              {label.label}
            </text>
          ))}
        </svg>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-gray-100">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-1">Peak</p>
          <p className="text-sm font-semibold text-green-600">{formatCurrency(highestBalance)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-1">Interest</p>
          <p className="text-sm font-semibold text-blue-600">+{formatCurrency(totalInterest)}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-1">Final</p>
          <p className="text-sm font-semibold text-indigo-600">{formatCurrency(data[data.length - 1]?.closingBalance || 0)}</p>
        </div>
      </div>
    </div>
  );
}
