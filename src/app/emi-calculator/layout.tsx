import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EMI Calculator - Loan EMI Calculator | SWP Calculator',
  description: 'Free EMI Calculator online. Calculate your loan EMI, total interest, and total payment for home loan, car loan, or personal loan.',
  keywords: ['EMI calculator', 'loan calculator', 'home loan EMI', 'car loan EMI', 'personal loan calculator'],
};

export default function EMICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
