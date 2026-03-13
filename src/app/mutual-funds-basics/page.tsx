import { Metadata } from 'next';
import Link from 'next/link';
import RelatedArticles from '@/components/RelatedArticles';

export const metadata: Metadata = {
  title: 'Mutual Funds Basics - Complete Guide for Beginners | SWP Calculator',
  description: 'Learn mutual fund basics: what are mutual funds, types of funds, how to invest, NAV, expense ratio, and expert tips. Perfect guide for beginners in India.',
  keywords: 'mutual funds basics, what is mutual fund, types of mutual funds, how to invest in mutual funds, NAV, expense ratio',
  alternates: {
    canonical: 'https://swpcalculator.online/mutual-funds-basics',
  },
  openGraph: {
    title: 'Mutual Funds Basics - Complete Guide for Beginners',
    description: 'Learn mutual fund basics: types, how to invest, NAV, expense ratio and more.',
    type: 'article',
    url: 'https://swpcalculator.online/mutual-funds-basics',
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mutual Funds Basics - Complete Guide for Beginners",
  "description": "Learn mutual fund basics: what are mutual funds, types of funds, how to invest, NAV, expense ratio, and more.",
  "author": {
    "@type": "Organization",
    "name": "SWP Calculator"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SWP Calculator",
    "url": "https://swpcalculator.online"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://swpcalculator.online/mutual-funds-basics"
  }
};

export default function MutualFundsBasics() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <Link href="/" title="SWP Calculator - Home" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Mutual Funds Basics</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Mutual Funds Basics
            </h1>
            <p className="text-xl text-gray-600">
              A complete beginner&apos;s guide to understanding mutual funds
            </p>
          </header>

          {/* Content */}
          <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                What is a Mutual Fund?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A <strong>mutual fund</strong> is an investment vehicle that pools money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. Professional fund managers manage these investments according to the fund&apos;s objectives.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When you invest in a mutual fund, you own shares representing a portion of the fund&apos;s holdings. The value of your investment changes based on the performance of the underlying securities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Types of Mutual Funds
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">📊 Equity Funds</h3>
                  <p className="text-gray-600 text-sm">Invest primarily in stocks. Higher risk, higher potential returns. Suitable for long-term goals.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">🏦 Debt Funds</h3>
                  <p className="text-gray-600 text-sm">Invest in bonds and fixed-income securities. Lower risk, stable returns. Good for conservative investors.</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">⚖️ Hybrid Funds</h3>
                  <p className="text-gray-600 text-sm">Mix of equity and debt. Balanced risk-return profile. Ideal for moderate risk tolerance.</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">📈 Index Funds</h3>
                  <p className="text-gray-600 text-sm">Track a market index like Nifty 50. Lower fees, passive management. Good for beginners.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Key Concepts
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-800">NAV (Net Asset Value)</h3>
                  <p className="text-gray-600 text-sm">The price per unit of a mutual fund. Calculated daily by dividing total assets minus liabilities by total units.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-800">Expense Ratio</h3>
                  <p className="text-gray-600 text-sm">Annual fee charged by the fund to cover management costs. Lower is better. Index funds typically have expense ratios below 0.5%.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-800">SIP (Systematic Investment Plan)</h3>
                  <p className="text-gray-600 text-sm">Invest a fixed amount regularly. Helps average out market volatility and builds discipline.</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-gray-800">SWP (Systematic Withdrawal Plan)</h3>
                  <p className="text-gray-600 text-sm">Withdraw a fixed amount regularly. Ideal for generating regular income from investments.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                How to Start Investing
              </h2>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <div>
                    <strong className="text-gray-800">Set Your Goals</strong>
                    <p className="text-gray-600 text-sm">Define investment horizon and risk tolerance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <div>
                    <strong className="text-gray-800">Complete KYC</strong>
                    <p className="text-gray-600 text-sm">Submit identity and address proof (PAN, Aadhaar)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <div>
                    <strong className="text-gray-800">Choose Funds</strong>
                    <p className="text-gray-600 text-sm">Research and select funds matching your goals</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <div>
                    <strong className="text-gray-800">Start Investing</strong>
                    <p className="text-gray-600 text-sm">Begin with SIP or lumpsum investment</p>
                  </div>
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Important Tips
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <ul className="space-y-2 text-gray-700">
                  <li>• Start early to benefit from compound growth</li>
                  <li>• Diversify across different fund types</li>
                  <li>• Review portfolio annually but avoid frequent changes</li>
                  <li>• Don&apos;t time the market - stay invested for long term</li>
                  <li>• Choose direct plans for lower expense ratios</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Common Investment Mistakes to Avoid
              </h2>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <h3 className="font-semibold text-gray-800 mb-1">❌ Timing the Market</h3>
                  <p className="text-gray-600 text-sm">Trying to predict market highs and lows often leads to losses. Stay invested and let compounding work for you.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <h3 className="font-semibold text-gray-800 mb-1">❌ Chasing Past Returns</h3>
                  <p className="text-gray-600 text-sm">Just because a fund returned 30% last year doesn&apos;t mean it will repeat. Focus on consistent performers with 5+ year track records.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <h3 className="font-semibold text-gray-800 mb-1">❌ Ignoring Expense Ratio</h3>
                  <p className="text-gray-600 text-sm">A 2% expense ratio vs 0.5% can mean lakhs lost over 20 years. Always compare expense ratios before investing.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <h3 className="font-semibold text-gray-800 mb-1">❌ Investing Without Emergency Fund</h3>
                  <p className="text-gray-600 text-sm">Never invest money you might need urgently. Keep 6 months expenses in a liquid fund before starting mutual fund investments.</p>
                </div>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                  <h3 className="font-semibold text-gray-800 mb-1">❌ Redeeming During Market Crashes</h3>
                  <p className="text-gray-600 text-sm">Panic selling during downturns locks in losses. Historical data shows markets recover - stay calm and stay invested.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Real Example: Power of SIP
              </h2>
              <div className="bg-green-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">See how a monthly SIP of ₹5,000 grows over time at 12% average annual return:</p>
                <div className="grid sm:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-500">5 Years</p>
                    <p className="text-xl font-bold text-green-600">₹4.1 Lakh</p>
                    <p className="text-xs text-gray-500">Invested: ₹3 Lakh</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-500">10 Years</p>
                    <p className="text-xl font-bold text-green-600">₹11.6 Lakh</p>
                    <p className="text-xs text-gray-500">Invested: ₹6 Lakh</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-500">20 Years</p>
                    <p className="text-xl font-bold text-green-600">₹49.9 Lakh</p>
                    <p className="text-xs text-gray-500">Invested: ₹12 Lakh</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Key Insight:</strong> In 20 years, you invest only ₹12 lakh but accumulate nearly ₹50 lakh. The power of compounding means your money nearly 4x!
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">What is the minimum amount to invest in mutual funds?</h3>
                  <p className="text-gray-600 text-sm">Most mutual funds allow SIP investments starting from ₹500-1000 per month. Lumpsum investments typically start from ₹5,000. Some funds even allow ₹100 SIP for beginners.</p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Are mutual funds safe?</h3>
                  <p className="text-gray-600 text-sm">Mutual funds are regulated by SEBI and relatively safe, but returns are market-linked and not guaranteed. Debt funds are safer than equity funds. Always invest according to your risk tolerance.</p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Can I withdraw my money anytime?</h3>
                  <p className="text-gray-600 text-sm">Open-ended mutual funds can be redeemed any business day. However, some funds have exit loads (typically 1%) if redeemed within 1 year. ELSS funds have a mandatory 3-year lock-in.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">What is the difference between direct and regular plans?</h3>
                  <p className="text-gray-600 text-sm">Direct plans have lower expense ratios (0.5-1% less) as no commission is paid to distributors. Same fund manager, same portfolio - but direct plans give you higher returns over time.</p>
                </div>
              </div>
            </section>
          </article>

          <RelatedArticles
            links={[
              { href: '/what-is-swp', label: 'What is SWP', description: 'Learn how Systematic Withdrawal Plans work for regular income.' },
              { href: '/risk-assessment', label: 'Risk Assessment', description: 'Understand your risk tolerance and build the right portfolio.' },
              { href: '/sip-calculator', label: 'SIP Calculator', description: 'Calculate your SIP returns and start investing systematically.' },
            ]}
          />

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Calculate Your SWP Returns
            </h2>
            <p className="mb-6 text-blue-100">
              Planning regular income from your mutual fund investments? Use our free SWP calculator.
            </p>
            <Link
              href="/"
              title="Try SWP Calculator - Free Online Tool"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Try SWP Calculator →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
