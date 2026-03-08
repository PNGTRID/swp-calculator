import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Investment Risk Assessment - Understand Your Risk Profile | SWP Calculator',
  description: 'Learn about investment risk assessment, types of risks, determine your risk tolerance, and build a risk-appropriate portfolio for successful investing.',
  keywords: 'investment risk assessment, risk tolerance, risk profile, market risk, inflation risk, portfolio risk',
  alternates: {
    canonical: 'https://swpcalculator.online/risk-assessment',
  },
  openGraph: {
    title: 'Investment Risk Assessment - Understand Your Risk Profile',
    description: 'Learn about investment risks and how to assess your risk tolerance.',
    type: 'article',
    url: 'https://swpcalculator.online/risk-assessment',
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Investment Risk Assessment - Understand Your Risk Profile",
  "description": "Learn about investment risk assessment, types of risks, and how to determine your risk tolerance.",
  "author": { "@type": "Organization", "name": "SWP Calculator" },
  "publisher": { "@type": "Organization", "name": "SWP Calculator", "url": "https://swpcalculator.online" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://swpcalculator.online/risk-assessment" }
};

export default function RiskAssessment() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6 text-sm">
            <Link href="/" title="SWP Calculator - Home" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Risk Assessment</span>
          </nav>

          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Investment Risk Assessment</h1>
            <p className="text-xl text-gray-600">Understand your risk tolerance and build the right portfolio</p>
          </header>

          <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is Investment Risk?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Investment risk</strong> is the possibility of losing money or not achieving your expected returns. Every investment carries some degree of risk - generally, higher potential returns come with higher risk.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Understanding and managing risk is crucial for successful investing. The key is to take only as much risk as necessary to achieve your financial goals.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Types of Investment Risks</h2>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">📊 Market Risk</h3>
                  <p className="text-gray-600 text-sm">The risk of investments losing value due to market factors like economic conditions, political events, or investor sentiment.</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">💰 Inflation Risk</h3>
                  <p className="text-gray-600 text-sm">The risk that inflation will reduce the purchasing power of your returns over time. Fixed-income investments are particularly vulnerable.</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">🏦 Interest Rate Risk</h3>
                  <p className="text-gray-600 text-sm">When interest rates rise, bond prices fall. This affects debt funds and fixed-income investments.</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">⚠️ Credit Risk</h3>
                  <p className="text-gray-600 text-sm">The risk that a bond issuer may default on interest or principal payments. Higher-yielding bonds typically have higher credit risk.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Risk Profiles</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <span className="text-3xl">🛡️</span>
                  <h3 className="font-semibold text-gray-800 mt-2">Conservative</h3>
                  <p className="text-sm text-gray-600 mt-1">Low risk tolerance. Prefers capital preservation over growth. Ideal for retirees.</p>
                  <p className="text-xs text-green-700 mt-2 font-medium">Suggested: 80% Debt, 20% Equity</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <span className="text-3xl">⚖️</span>
                  <h3 className="font-semibold text-gray-800 mt-2">Moderate</h3>
                  <p className="text-sm text-gray-600 mt-1">Balanced approach. Willing to accept some risk for better returns.</p>
                  <p className="text-xs text-yellow-700 mt-2 font-medium">Suggested: 50% Debt, 50% Equity</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 text-center">
                  <span className="text-3xl">🚀</span>
                  <h3 className="font-semibold text-gray-800 mt-2">Aggressive</h3>
                  <p className="text-sm text-gray-600 mt-1">High risk tolerance. Seeks maximum growth. Long investment horizon.</p>
                  <p className="text-xs text-red-700 mt-2 font-medium">Suggested: 20% Debt, 80% Equity</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Risk Assessment Questions</h2>
              <p className="text-gray-600 mb-4">Ask yourself these questions to determine your risk profile:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">▸</span>
                  <span className="text-gray-600">What is your investment time horizon? (Longer = can take more risk)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">▸</span>
                  <span className="text-gray-600">How would you react if your portfolio dropped 20% in a month?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">▸</span>
                  <span className="text-gray-600">Do you have an emergency fund covering 6+ months of expenses?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">▸</span>
                  <span className="text-gray-600">What is your primary goal: capital preservation or growth?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500">▸</span>
                  <span className="text-gray-600">Do you need regular income from investments?</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Risk Management Tips</h2>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Diversify:</strong> Don&apos;t put all eggs in one basket</li>
                  <li>• <strong>Asset Allocation:</strong> Spread across equity, debt, and cash</li>
                  <li>• <strong>Regular Review:</strong> Rebalance portfolio periodically</li>
                  <li>• <strong>Stay Invested:</strong> Don&apos;t panic during market volatility</li>
                  <li>• <strong>Use SWP wisely:</strong> Keep withdrawal rate sustainable</li>
                </ul>
              </div>
            </section>
          </article>

          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl shadow-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Plan Your SWP Withdrawals</h2>
            <p className="mb-6 text-amber-100">Calculate sustainable withdrawal rates based on your risk profile.</p>
            <Link href="/" title="Try SWP Calculator - Free Online Tool" className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors">
              Try SWP Calculator →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
