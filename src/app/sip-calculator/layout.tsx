import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SIP Calculator - Calculate Systematic Investment Plan Returns | SWP Calculator',
  description: 'Free SIP Calculator online. Calculate your mutual fund SIP returns, future value, and wealth gained. Plan your investments with our easy-to-use calculator.',
  keywords: ['SIP calculator', 'systematic investment plan', 'mutual fund calculator', 'investment calculator', 'SIP returns'],
  alternates: {
    canonical: 'https://swpcalculator.online/sip-calculator',
  },
};

export default function SIPCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
