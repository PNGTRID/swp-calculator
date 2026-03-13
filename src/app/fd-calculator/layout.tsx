import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FD Calculator - Fixed Deposit Interest Calculator | SWP Calculator',
  description: 'Free FD Calculator online. Calculate fixed deposit maturity amount, interest earned, and effective yield. Plan your FD investments wisely.',
  keywords: ['FD calculator', 'fixed deposit calculator', 'FD interest calculator', 'term deposit calculator', 'FD maturity calculator'],
  alternates: {
    canonical: 'https://swpcalculator.online/fd-calculator',
  },
};

export default function FDCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
