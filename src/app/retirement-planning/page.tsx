import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Retirement Planning with SWP - Generate Regular Income | SWP Calculator',
  description: 'Complete retirement planning guide: corpus building, SWP for pension, withdrawal strategies, inflation protection, and retirement fund selection.',
  keywords: 'retirement planning, SWP for retirement, pension fund, retirement corpus, retirement income, SWP pension',
  alternates: {
    canonical: 'https://swpcalculator.online/retirement-planning',
  },
  openGraph: {
    title: 'Retirement Planning with SWP - Generate Regular Income',
    description: 'Learn how to use SWP for retirement income and build a sustainable retirement corpus.',
    type: 'article',
    url: 'https://swpcalculator.online/retirement-planning',
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Retirement Planning with SWP",
  "description": "Complete retirement planning guide: corpus building, SWP for pension, and withdrawal strategies.",
  "author": { "@type": "Organization", "name": "SWP Calculator" },
  "publisher": { "@type": "Organization", "name": "SWP Calculator", "url": "https://swpcalculator.online" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://swpcalculator.online/retirement-planning" }
};

export default function RetirementPlanning() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Retirement Planning</span>
          </nav>

          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Retirement Planning with SWP</h1>
            <p className="text-xl text-gray-600">Generate regular income from your retirement corpus</p>
          </header>

          <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why SWP is Perfect for Retirement?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SWP (Systematic Withdrawal Plan) is one of the most effective ways to generate regular income during retirement. Unlike traditional pension plans, SWP offers flexibility, tax efficiency, and potential for capital appreciation.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <span className="text-3xl">💰</span>
                  <h3 className="font-semibold text-gray-800 mt-2">Regular Income</h3>
                  <p className="text-sm text-gray-600 mt-1">Monthly withdrawals like a pension</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <span className="text-3xl">📈</span>
                  <h3 className="font-semibold text-gray-800 mt-2">Growth Potential</h3>
                  <p className="text-sm text-gray-600 mt-1">Remaining corpus continues to grow</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <span className="text-3xl">🎯</span>
                  <h3 className="font-semibold text-gray-800 mt-2">Flexibility</h3>
                  <p className="text-sm text-gray-600 mt-1">Adjust amount anytime</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Much Corpus Do You Need?</h2>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="font-semibold text-gray-800 mb-3">Simple Formula:</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Corpus = Monthly Expense × 12 × 25</strong>
                </p>
                <p className="text-sm text-gray-600">
                  This assumes a 4% annual withdrawal rate, considered safe for 25+ years of retirement.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">📊 Example 1</h3>
                  <p className="text-sm text-gray-600">
                    Monthly need: ₹50,000<br/>
                    Required corpus: ₹50,000 × 12 × 25 = <strong>₹1.5 Crore</strong>
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">📊 Example 2</h3>
                  <p className="text-sm text-gray-600">
                    Monthly need: ₹1,00,000<br/>
                    Required corpus: ₹1,00,000 × 12 × 25 = <strong>₹3 Crore</strong>
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sustainable Withdrawal Rate</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-purple-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Rate</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Sustainability</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-green-50/50">
                      <td className="px-4 py-3 text-sm font-medium text-green-700">4-5%</td>
                      <td className="px-4 py-3 text-sm text-gray-600">30+ years</td>
                      <td className="px-4 py-3 text-sm text-green-600">Very Safe ✅</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-blue-700">6-7%</td>
                      <td className="px-4 py-3 text-sm text-gray-600">20-25 years</td>
                      <td className="px-4 py-3 text-sm text-blue-600">Moderate ⚖️</td>
                    </tr>
                    <tr className="bg-red-50/50">
                      <td className="px-4 py-3 text-sm font-medium text-red-700">8-10%</td>
                      <td className="px-4 py-3 text-sm text-gray-600">15-20 years</td>
                      <td className="px-4 py-3 text-sm text-red-600">High Risk ⚠️</td>
                    </tr>
                    <tr className="bg-red-100/50">
                      <td className="px-4 py-3 text-sm font-medium text-red-900">&gt;10%</td>
                      <td className="px-4 py-3 text-sm text-gray-600">&lt;15 years</td>
                      <td className="px-4 py-3 text-sm text-red-700">Not Sustainable ❌</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Best Funds for Retirement SWP</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800">Conservative: Debt/Hybrid Funds</h3>
                  <p className="text-gray-600 text-sm">Lower risk, stable returns (6-8%). Best for risk-averse retirees.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-800">Balanced: Balanced Advantage Funds</h3>
                  <p className="text-gray-600 text-sm">Dynamic asset allocation. Returns (8-10%). Good balance of risk and return.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-gray-800">Aggressive: Equity Hybrid Funds</h3>
                  <p className="text-gray-600 text-sm">Higher equity component. Returns (10-12%). For those with longer horizon.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">SWP vs Other Retirement Options</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">SWP ✅</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Flexible withdrawal amount</li>
                    <li>• Potential for growth</li>
                    <li>• Tax-efficient</li>
                    <li>• Can stop/start anytime</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Annuity ❌</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Fixed income forever</li>
                    <li>• No growth potential</li>
                    <li>• Returns not inflation-adjusted</li>
                    <li>• Lock-in for life</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Retirement SWP Checklist</h2>
              <div className="bg-purple-50 rounded-lg p-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-purple-500" readOnly />
                    <span>Build corpus of 25x annual expenses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-purple-500" readOnly />
                    <span>Keep 2-3 years expenses in liquid fund</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-purple-500" readOnly />
                    <span>Start SWP at 4-6% annual withdrawal rate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-purple-500" readOnly />
                    <span>Review and adjust annually for inflation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <input type="checkbox" className="rounded text-purple-500" readOnly />
                    <span>Choose conservative funds for stability</span>
                  </li>
                </ul>
              </div>
            </section>
          </article>

          <div className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl shadow-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Calculate Your Retirement SWP</h2>
            <p className="mb-6 text-purple-100">Plan your retirement income with our free SWP calculator.</p>
            <Link href="/" className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Try SWP Calculator →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
