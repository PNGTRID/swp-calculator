import { Metadata } from 'next';
import Link from 'next/link';
import RelatedArticles from '@/components/RelatedArticles';

export const metadata: Metadata = {
  title: 'SWP vs FD: Which is Better for Monthly Income? Detailed Comparison',
  description: 'Compare SWP vs Fixed Deposit returns, taxation, liquidity, and risks. Real examples with ₹1 Crore investment over 20 years. Make informed decision for your monthly income needs.',
  keywords: 'swp vs fd, systematic withdrawal plan vs fixed deposit, swp or fd which is better, monthly income swp vs fd, fd vs mutual fund swp',
  alternates: {
    canonical: 'https://swpcalculator.online/swp-vs-fd',
  },
  openGraph: {
    title: 'SWP vs FD: Which is Better for Monthly Income?',
    description: 'Detailed comparison of SWP vs Fixed Deposit for generating monthly income in India.',
    type: 'article',
    url: 'https://swpcalculator.online/swp-vs-fd',
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SWP vs FD: Which is Better for Monthly Income?",
  "description": "Compare SWP vs Fixed Deposit returns, taxation, liquidity, and risks for generating monthly income in India.",
  "author": { "@type": "Organization", "name": "SWP Calculator" },
  "publisher": { "@type": "Organization", "name": "SWP Calculator", "url": "https://swpcalculator.online" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://swpcalculator.online/swp-vs-fd" }
};

// Comparison table data
const comparisonTable = [
  { feature: 'Expected Returns', swp: '7-12% p.a. (market-linked)', fd: '5-7% p.a. (fixed)', winner: 'swp' },
  { feature: 'Monthly Income', swp: 'Flexible, you decide amount', fd: 'Fixed as per interest rate', winner: 'swp' },
  { feature: 'Capital Protection', swp: 'Not guaranteed', fd: 'Guaranteed (₹5L under DICGC)', winner: 'fd' },
  { feature: 'Tax Efficiency', swp: 'LTCG: 12.5% after ₹1.25L exemption', fd: 'Interest taxed at slab rate (up to 30%)', winner: 'swp' },
  { feature: 'Inflation Hedge', swp: 'Yes, equity component grows', fd: 'No, fixed returns lose value', winner: 'swp' },
  { feature: 'Flexibility', swp: 'High - change amount anytime', fd: 'Low - premature penalty applies', winner: 'swp' },
  { feature: 'Liquidity', swp: 'High - withdraw anytime', fd: 'Medium - premature exit has penalty', winner: 'swp' },
  { feature: 'Risk Level', swp: 'Moderate to High', fd: 'Very Low', winner: 'fd' },
  { feature: 'Lock-in Period', swp: 'None (except ELSS: 3 years)', fd: 'As per tenure chosen', winner: 'swp' },
  { feature: 'Minimum Investment', swp: '₹5,000 - ₹10,000', fd: '₹1,000 - ₹10,000', winner: 'tie' },
];

// Real example with ₹1 Crore
const exampleData = {
  corpus: 10000000, // ₹1 Crore
  fdRate: 6.5,
  swpRate: 8,
  taxBracket: 30, // 30% tax bracket
  years: 20,
  fd: {
    annualInterest: 650000,
    monthlyIncome: 54167,
    taxOnInterest: 195000,
    netMonthlyIncome: 37917,
    totalInterest: 13000000,
    totalTax: 3900000,
    netReceived: 9100000,
  },
  swp: {
    monthlyWithdrawal: 50000,
    withdrawalRate: 6,
    totalWithdrawn: 12000000,
    ltcgTax: 1200000,
    netReceived: 10800000,
    finalCorpus: 1500000,
  },
};

// Who should choose what
const whoShouldChoose = {
  swp: [
    'Investors with 3+ year investment horizon',
    'Those in higher tax brackets (20%+)',
    'People comfortable with market volatility',
    'Investors seeking inflation-adjusted returns',
    'Those wanting withdrawal flexibility',
    'Retirees with other guaranteed income sources',
  ],
  fd: [
    'Very conservative investors',
    'Those needing guaranteed capital protection',
    'Investors in lower tax brackets (5-10%)',
    'People with short-term goals (< 3 years)',
    'Senior citizens wanting predictable income',
    'Those with no other safety net',
  ],
};

export default function SWPvsFD() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      }).format(value);
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <Link href="/" title="SWP Calculator - Home" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">SWP vs FD</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              SWP vs Fixed Deposit (FD): Which is Better?
            </h1>
            <p className="text-lg text-gray-600">
              A comprehensive comparison for generating monthly income in India.
              See real examples, tax implications, and find the right option for your needs.
            </p>
          </header>

          {/* Quick Summary */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-2">📈 SWP (Systematic Withdrawal Plan)</h3>
              <p className="text-sm text-gray-700">Higher returns, tax efficient, flexible - but market risk involved</p>
              <p className="text-2xl font-bold text-blue-600 mt-3">7-12% returns</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-bold text-amber-800 mb-2">🏦 FD (Fixed Deposit)</h3>
              <p className="text-sm text-gray-700">Guaranteed returns, capital protected - but low returns & high tax</p>
              <p className="text-2xl font-bold text-amber-600 mt-3">5-7% returns</p>
            </div>
          </div>

          {/* Comparison Table */}
          <section className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="px-6 py-4 bg-gray-50 border-b">
              <h2 className="text-xl font-semibold text-gray-800">📊 Detailed Comparison</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-semibold text-gray-700">Feature</th>
                    <th className="text-center p-4 font-semibold text-blue-700">SWP</th>
                    <th className="text-center p-4 font-semibold text-amber-700">FD</th>
                    <th className="text-center p-4 font-semibold text-gray-700">Better Option</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonTable.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="p-4 text-gray-700 font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-gray-600">{row.swp}</td>
                      <td className="p-4 text-center text-gray-600">{row.fd}</td>
                      <td className="p-4 text-center">
                        {row.winner === 'swp' && <span className="text-blue-600 font-semibold">✓ SWP</span>}
                        {row.winner === 'fd' && <span className="text-amber-600 font-semibold">✓ FD</span>}
                        {row.winner === 'tie' && <span className="text-gray-500">Tie</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t">
              <p className="text-sm text-gray-600">
                <strong>Score:</strong> SWP wins 6 features, FD wins 2 features, 2 ties
              </p>
            </div>
          </section>

          {/* Real Example */}
          <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">💰 Real Example: ₹1 Crore Investment</h2>
            <p className="text-gray-600 mb-6">
              Let&apos;s compare actual numbers with a ₹1 Crore investment over 20 years, assuming 30% tax bracket.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* FD Card */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                  🏦 Fixed Deposit @ {exampleData.fdRate}%
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gross Monthly Interest:</span>
                    <span className="font-medium">{formatCurrency(exampleData.fd.monthlyIncome)}</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Tax on Interest (30%):</span>
                    <span className="font-medium">-{formatCurrency(exampleData.fd.taxOnInterest / 12)}/mo</span>
                  </div>
                  <div className="flex justify-between border-t border-amber-200 pt-3 font-semibold">
                    <span className="text-gray-800">Net Monthly Income:</span>
                    <span className="text-amber-700">{formatCurrency(exampleData.fd.netMonthlyIncome)}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-amber-200">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Total Interest (20Y):</span>
                      <span>{formatCurrency(exampleData.fd.totalInterest)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-red-600">
                      <span>Total Tax Paid:</span>
                      <span>-{formatCurrency(exampleData.fd.totalTax)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold mt-2">
                      <span className="text-gray-700">Net Amount Received:</span>
                      <span className="text-amber-700">{formatCurrency(exampleData.fd.netReceived)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SWP Card */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                  📈 SWP @ {exampleData.swpRate}% Returns
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Withdrawal:</span>
                    <span className="font-medium">{formatCurrency(exampleData.swp.monthlyWithdrawal)}</span>
                  </div>
                  <div className="flex justify-between text-orange-600">
                    <span>Est. LTCG Tax (12.5%):</span>
                    <span className="font-medium">~{formatCurrency(exampleData.swp.ltcgTax / 12 / 20)}/mo</span>
                  </div>
                  <div className="flex justify-between border-t border-blue-200 pt-3 font-semibold">
                    <span className="text-gray-800">Net Monthly Income:</span>
                    <span className="text-blue-700">~{formatCurrency(exampleData.swp.monthlyWithdrawal - (exampleData.swp.ltcgTax / 12 / 20))}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Total Withdrawn (20Y):</span>
                      <span>{formatCurrency(exampleData.swp.totalWithdrawn)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-orange-600">
                      <span>Est. LTCG Tax:</span>
                      <span>-{formatCurrency(exampleData.swp.ltcgTax)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-green-600">
                      <span>Remaining Corpus:</span>
                      <span>+{formatCurrency(exampleData.swp.finalCorpus)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold mt-2">
                      <span className="text-gray-700">Net Amount Received:</span>
                      <span className="text-blue-700">{formatCurrency(exampleData.swp.netReceived + exampleData.swp.finalCorpus)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Winner */}
            <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <p className="text-lg font-semibold text-green-800">
                🏆 Winner: SWP provides <span className="text-green-600">₹37 Lakh more</span> over 20 years
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Plus inflation protection and flexibility to adjust withdrawals
              </p>
            </div>
          </section>

          {/* Who Should Choose */}
          <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">🎯 Who Should Choose What?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* SWP */}
              <div className="border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                  📈 Choose SWP if you:
                </h3>
                <ul className="space-y-2">
                  {whoShouldChoose.swp.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-500 mt-0.5">✓</span>
                    {item}
                  </li>
                  ))}
                </ul>
              </div>

              {/* FD */}
              <div className="border border-amber-200 rounded-xl p-5">
                <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                  🏦 Choose FD if you:
                </h3>
                <ul className="space-y-2">
                  {whoShouldChoose.fd.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-amber-500 mt-0.5">✓</span>
                    {item}
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Hybrid Strategy */}
          <section className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl shadow-lg p-6 mb-8 text-white">
            <h2 className="text-xl font-bold mb-4">💡 Pro Tip: Hybrid Strategy</h2>
            <p className="text-purple-100 mb-4">
              Why choose one? Combine both for optimal results:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">🏦 FD (20-30%)</h3>
                <p className="text-sm text-purple-100">Emergency fund + 1-2 years expenses for safety</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">📈 SWP (70-80%)</h3>
                <p className="text-sm text-purple-100">Main corpus in hybrid funds for income + growth</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-2">🎯 Result</h3>
                <p className="text-sm text-purple-100">Safety of FD + Returns of SWP</p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">❓ Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Is SWP risk-free like FD?</h3>
                <p className="text-gray-600 text-sm">
                  No, SWP is not risk-free. Your investment value can fluctuate with market conditions.
                  However, choosing hybrid/balanced funds reduces volatility significantly.
                </p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Can I lose my principal in SWP?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, in extreme market conditions or if withdrawal rate exceeds returns.
                  This is why keeping withdrawal rate under 6% annually is recommended.
                </p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">What if I need money urgently from FD?</h3>
                <p className="text-gray-600 text-sm">
                  You can break FD prematurely but will lose 0.5-1% interest as penalty.
                  SWP offers better liquidity - withdraw or stop anytime without penalty.
                </p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-semibold text-gray-800 mb-2">Is senior citizen FD interest higher?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, senior citizens get 0.25-0.5% higher FD rates. For very conservative retirees,
                  Senior Citizen Savings Scheme (SCSS) at 8.2% might be better than regular FD.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Can I switch from FD to SWP?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, you can break your FD and invest in mutual funds for SWP. Consider doing this gradually
                  over 2-3 years to avoid timing risk.
                </p>
              </div>
            </div>
          </section>

          <RelatedArticles
            links={[
              { href: '/what-is-swp', label: 'What is SWP', description: 'Understand how Systematic Withdrawal Plans work for mutual funds.' },
              { href: '/best-swp-funds', label: 'Best SWP Funds', description: 'Top 10 mutual funds for systematic withdrawal in India 2026.' },
              { href: '/fd-calculator', label: 'FD Calculator', description: 'Calculate your fixed deposit returns and compare with SWP.' },
            ]}
          />

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Calculate Your SWP Returns</h2>
            <p className="mb-6 text-blue-100">
              Use our free calculator to see how much you can withdraw monthly through SWP.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                title="SWP Calculator"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Try SWP Calculator →
              </Link>
              <Link
                href="/best-swp-funds"
                title="Best SWP Funds"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Best SWP Funds →
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Disclaimer:</strong> This comparison is for educational purposes only.
              FD interest rates, tax rules, and mutual fund returns are subject to change.
              Past performance does not guarantee future returns. Please consult a SEBI-registered investment advisor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
