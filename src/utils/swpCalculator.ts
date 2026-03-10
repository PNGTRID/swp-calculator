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

// ============================================
// Reverse SWP Calculator Functions
// Calculate required corpus for desired monthly income
// ============================================

export interface ReverseSWPInput {
  monthlyIncome: number; // Desired monthly withdrawal amount in rupees
  timePeriod: number; // Investment period in years
  expectedReturnRate: number; // Expected annual return rate in percentage
}

export interface ReverseSWPResult {
  requiredCorpus: number; // Required initial investment
  totalWithdrawal: number; // Total amount to be withdrawn
  totalInterestEarned: number; // Total interest earned during period
  finalValue: number; // Remaining corpus (should be ~0 for exact calculation)
}

/**
 * Calculate required corpus for a desired monthly income using binary search
 * This finds the exact corpus needed to sustain monthly withdrawals for the given period
 * @param input - Reverse SWP input parameters
 * @returns Reverse SWP calculation results
 */
export function calculateReverseSWP(input: ReverseSWPInput): ReverseSWPResult {
  const { monthlyIncome, timePeriod, expectedReturnRate } = input;

  const monthlyReturnRate = expectedReturnRate / 100 / 12;
  const totalMonths = timePeriod * 12;

  // Binary search to find the required corpus
  let low = monthlyIncome; // Minimum: at least one month's withdrawal
  let high = monthlyIncome * totalMonths * 3; // Upper bound: 3x total withdrawals (generous estimate)
  let corpus = 0;

  // Binary search with 100 iterations for precision
  for (let i = 0; i < 100; i++) {
    corpus = (low + high) / 2;
    let balance = corpus;
    let totalWithdrawal = 0;

    // Simulate month by month
    for (let month = 1; month <= totalMonths; month++) {
      // Add monthly interest
      const monthlyInterest = balance * monthlyReturnRate;
      balance += monthlyInterest;

      // Withdraw monthly amount
      balance -= monthlyIncome;
      totalWithdrawal += monthlyIncome;

      // If balance goes negative, corpus is too small
      if (balance < 0) {
        low = corpus;
        break;
      }
    }

    // If balance remained positive at end, corpus might be too large
    if (balance >= 0) {
      high = corpus;
    }

    // Stop when we're close enough (within 1 rupee)
    if (high - low < 1) {
      break;
    }
  }

  // Calculate final values with the found corpus
  let finalBalance = corpus;
  let totalInterestEarned = 0;
  let totalWithdrawal = 0;

  for (let month = 1; month <= totalMonths; month++) {
    const monthlyInterest = finalBalance * monthlyReturnRate;
    totalInterestEarned += monthlyInterest;
    finalBalance += monthlyInterest;
    finalBalance -= monthlyIncome;
    totalWithdrawal += monthlyIncome;

    if (finalBalance < 0) {
      finalBalance = 0;
      break;
    }
  }

  return {
    requiredCorpus: Math.ceil(corpus),
    totalWithdrawal,
    totalInterestEarned,
    finalValue: Math.max(0, finalBalance),
  };
}

/**
 * Get month-by-month data for reverse SWP calculation
 * @param input - Reverse SWP input parameters
 * @returns Array of monthly data
 */
export function getReverseMonthlyData(input: ReverseSWPInput): MonthlyData[] {
  const result = calculateReverseSWP(input);
  const { expectedReturnRate, timePeriod } = input;
  const monthlyIncome = input.monthlyIncome;

  const monthlyReturnRate = expectedReturnRate / 100 / 12;
  const totalMonths = timePeriod * 12;

  const monthlyData: MonthlyData[] = [];
  let currentBalance = result.requiredCorpus;

  for (let month = 1; month <= totalMonths; month++) {
    const openingBalance = currentBalance;
    const interestEarned = currentBalance * monthlyReturnRate;

    currentBalance += interestEarned;
    currentBalance -= monthlyIncome;

    if (currentBalance < 0) {
      monthlyData.push({
        month,
        openingBalance,
        interestEarned,
        withdrawal: monthlyIncome,
        closingBalance: 0,
      });
      break;
    }

    monthlyData.push({
      month,
      openingBalance,
      interestEarned,
      withdrawal: monthlyIncome,
      closingBalance: currentBalance,
    });
  }

  return monthlyData;
}
