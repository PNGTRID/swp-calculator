/**
 * SWP (Systematic Withdrawal Plan) Calculator
 * This module calculates the final value and total withdrawal for a systematic withdrawal plan
 */

export interface SWPInput {
  totalInvestment: number; // Total investment amount in rupees
  withdrawalPerMonth: number; // Monthly withdrawal amount in rupees
  expectedReturnRate: number; // Expected annual return rate in percentage
  timePeriod: number; // Investment period in years
}

export interface SWPResult {
  totalInvestment: number; // Total investment amount
  totalWithdrawal: number; // Total amount withdrawn
  finalValue: number; // Final remaining value
}

export interface MonthlyData {
  month: number;
  openingBalance: number;
  interestEarned: number;
  withdrawal: number;
  closingBalance: number;
}

/**
 * Calculate SWP results based on input parameters
 * @param input - SWP input parameters
 * @returns SWP calculation results
 */
export function calculateSWP(input: SWPInput): SWPResult {
  const { totalInvestment, withdrawalPerMonth, expectedReturnRate, timePeriod } = input;

  // Convert annual return rate to monthly rate
  const monthlyReturnRate = expectedReturnRate / 100 / 12;

  // Total number of months
  const totalMonths = timePeriod * 12;

  let currentBalance = totalInvestment;
  let totalWithdrawal = 0;

  // Calculate month by month
  for (let month = 1; month <= totalMonths; month++) {
    // Add monthly interest
    const monthlyInterest = currentBalance * monthlyReturnRate;
    currentBalance += monthlyInterest;

    // Withdraw monthly amount
    currentBalance -= withdrawalPerMonth;
    totalWithdrawal += withdrawalPerMonth;

    // If balance goes negative, cap it at 0 (investment depleted)
    if (currentBalance < 0) {
      currentBalance = 0;
      break;
    }
  }

  return {
    totalInvestment,
    totalWithdrawal,
    finalValue: Math.max(0, currentBalance),
  };
}

/**
 * Get detailed month-by-month data for charts or tables
 * @param input - SWP input parameters
 * @returns Array of monthly data
 */
export function getMonthlyData(input: SWPInput): MonthlyData[] {
  const { totalInvestment, withdrawalPerMonth, expectedReturnRate, timePeriod } = input;

  const monthlyReturnRate = expectedReturnRate / 100 / 12;
  const totalMonths = timePeriod * 12;

  const monthlyData: MonthlyData[] = [];
  let currentBalance = totalInvestment;

  for (let month = 1; month <= totalMonths; month++) {
    const openingBalance = currentBalance;
    const interestEarned = currentBalance * monthlyReturnRate;

    currentBalance += interestEarned;
    currentBalance -= withdrawalPerMonth;

    // If balance goes negative, stop
    if (currentBalance < 0) {
      monthlyData.push({
        month,
        openingBalance,
        interestEarned,
        withdrawal: withdrawalPerMonth,
        closingBalance: 0,
      });
      break;
    }

    monthlyData.push({
      month,
      openingBalance,
      interestEarned,
      withdrawal: withdrawalPerMonth,
      closingBalance: currentBalance,
    });
  }

  return monthlyData;
}

/**
 * Format number as Indian currency (Rupees)
 * @param value - Number to format
 * @returns Formatted currency string
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Format number with commas (Indian format)
 * @param value - Number to format
 * @returns Formatted number string
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
