import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tax Planning for Mutual Funds - Capital Gains Tax Guide | SWP Calculator',
  description: 'Complete guide to mutual fund taxation: LTCG, STCG, tax-saving funds (ELSS), indexation benefits, and tax-efficient investing strategies.',
  keywords: 'mutual fund tax, capital gains tax, LTCG, STCG, ELSS, tax planning, 80C, indexation',
  alternates: {
    canonical: 'https://swpcalculator.online/tax-planning',
  },
  openGraph: {
    title: 'Tax Planning for Mutual Funds - Capital Gains Tax Guide',
    description: 'Learn about mutual fund taxation and tax-efficient investing strategies.',
    type: 'article',
    url: 'https://swpcalculator.online/tax-planning',
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Tax Planning for Mutual Funds",
  "description": "Complete guide to mutual fund taxation: LTCG, STCG, tax-saving funds, and tax-efficient strategies.",
  "author": { "@type": "Organization", "name": "SWP Calculator" },
  "publisher": { "@type": "Organization", "name": "SWP Calculator", "url": "https://swpcalculator.online" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://swpcalculator.online/tax-planning" }
};

export default function TaxPlanning() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Tax Planning</span>
          </nav>

          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tax Planning for Mutual Funds</h1>
            <p className="text-xl text-gray-600">Understand taxation and maximize your after-tax returns</p>
          </header>

          <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Capital Gains Tax on Mutual Funds</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you redeem mutual fund units at a profit, you earn capital gains which are taxable. The tax rate depends on the fund type and holding period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Equity Funds Taxation</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Holding Period</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">STCG (Short Term)</td>
                      <td className="px-4 py-3 text-sm text-gray-600">&lt; 12 months</td>
                      <td className="px-4 py-3 text-sm font-medium text-red-600">20%</td>
                    </tr>
                    <tr className="bg-green-50/50">
                      <td className="px-4 py-3 text-sm text-gray-600">LTCG (Long Term)</td>
                      <td className="px-4 py-3 text-sm text-gray-600">&gt; 12 months</td>
                      <td className="px-4 py-3 text-sm font-medium text-green-600">12.5% (above ₹1.25L)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Debt Funds Taxation</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Holding Period</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Tax Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">STCG</td>
                      <td className="px-4 py-3 text-sm text-gray-600">&lt; 36 months</td>
                      <td className="px-4 py-3 text-sm font-medium text-red-600">As per income slab</td>
                    </tr>
                    <tr className="bg-blue-50/50">
                      <td className="px-4 py-3 text-sm text-gray-600">LTCG</td>
                      <td className="px-4 py-3 text-sm text-gray-600">&gt; 36 months</td>
                      <td className="px-4 py-3 text-sm font-medium text-blue-600">20% with indexation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">ELSS - Tax Saving Funds</h2>
              <div className="bg-green-50 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">💰</span>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Section 80C Deduction</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      ELSS (Equity Linked Savings Scheme) offers tax deduction up to ₹1.5 lakh under Section 80C.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 3-year lock-in period (shortest among 80C options)</li>
                      <li>• Pure equity funds with growth potential</li>
                      <li>• LTCG tax exemption up to ₹1.25 lakh/year</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">SWP & Taxation</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mb-4">
                <p className="text-gray-700">
                  <strong>Good News:</strong> SWP withdrawals are treated as redemptions, not income. You only pay tax on the capital gains portion, not the entire withdrawal amount.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">📈 Example</h3>
                  <p className="text-sm text-gray-600">
                    If you withdraw ₹10,000 and your gain is ₹2,000, you only pay tax on ₹2,000, not the full ₹10,000.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">💡 Tip</h3>
                  <p className="text-sm text-gray-600">
                    Start SWP after 1 year for equity funds to benefit from lower LTCG rates.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tax-Efficient Investing Tips</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">1</span>
                  <span className="text-gray-600">Hold equity funds for 12+ months for LTCG benefits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">2</span>
                  <span className="text-gray-600">Use indexation benefit for debt funds held 36+ months</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">3</span>
                  <span className="text-gray-600">Invest in ELSS for Section 80C tax savings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">4</span>
                  <span className="text-gray-600">Harvest losses to offset gains (tax-loss harvesting)</span>
                </li>
              </ul>
            </section>
          </article>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Plan Tax-Efficient SWP</h2>
            <p className="mb-6 text-green-100">Calculate your SWP returns and plan tax-efficient withdrawals.</p>
            <Link href="/" className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Try SWP Calculator →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
