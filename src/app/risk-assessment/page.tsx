import { Metadata } from 'next';
import Link from 'next/link';
import RelatedArticles from '@/components/RelatedArticles';

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

            <section className="mb-8">
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

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Self-Assessment Quiz</h2>
              <p className="text-gray-600 mb-4">Answer these 5 questions to determine your risk profile:</p>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">1. What is your investment timeline?</h3>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• <strong>Less than 3 years</strong> → Conservative (add 1 point)</li>
                    <li>• <strong>3-7 years</strong> → Moderate (add 2 points)</li>
                    <li>• <strong>More than 7 years</strong> → Aggressive (add 3 points)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">2. If your investment drops 20% in 2 months, you:</h3>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• <strong>Sell everything in panic</strong> → Conservative (add 1 point)</li>
                    <li>• <strong>Hold and wait for recovery</strong> → Moderate (add 2 points)</li>
                    <li>• <strong>Invest more at lower prices</strong> → Aggressive (add 3 points)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">3. Your primary investment goal is:</h3>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• <strong>Never lose money</strong> → Conservative (add 1 point)</li>
                    <li>• <strong>Balanced growth with safety</strong> → Moderate (add 2 points)</li>
                    <li>• <strong>Maximum wealth creation</strong> → Aggressive (add 3 points)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">4. Do you have 6+ months emergency fund?</h3>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• <strong>No</strong> → Conservative (add 1 point)</li>
                    <li>• <strong>Yes, 6-12 months</strong> → Moderate (add 2 points)</li>
                    <li>• <strong>Yes, more than 12 months</strong> → Aggressive (add 3 points)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">5. Your age group:</h3>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• <strong>55+ years</strong> → Conservative (add 1 point)</li>
                    <li>• <strong>35-55 years</strong> → Moderate (add 2 points)</li>
                    <li>• <strong>Under 35 years</strong> → Aggressive (add 3 points)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-amber-100 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">📊 Your Score:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>5-8 points:</strong> Conservative Investor - Focus on capital protection</li>
                  <li>• <strong>9-12 points:</strong> Moderate Investor - Balance of growth and safety</li>
                  <li>• <strong>13-15 points:</strong> Aggressive Investor - Focus on wealth creation</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Asset Allocation by Age</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-amber-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-700">Age Group</th>
                      <th className="px-4 py-3 text-center font-semibold text-blue-700">Equity</th>
                      <th className="px-4 py-3 text-center font-semibold text-green-700">Debt</th>
                      <th className="px-4 py-3 text-center font-semibold text-gray-700">Cash/Liquid</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 text-gray-600">20-30 years</td>
                      <td className="px-4 py-3 text-center font-medium text-blue-600">70-80%</td>
                      <td className="px-4 py-3 text-center font-medium text-green-600">15-25%</td>
                      <td className="px-4 py-3 text-center font-medium text-gray-600">5-10%</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="px-4 py-3 text-gray-600">30-45 years</td>
                      <td className="px-4 py-3 text-center font-medium text-blue-600">60-70%</td>
                      <td className="px-4 py-3 text-center font-medium text-green-600">25-35%</td>
                      <td className="px-4 py-3 text-center font-medium text-gray-600">5-10%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-600">45-55 years</td>
                      <td className="px-4 py-3 text-center font-medium text-blue-600">50-60%</td>
                      <td className="px-4 py-3 text-center font-medium text-green-600">35-45%</td>
                      <td className="px-4 py-3 text-center font-medium text-gray-600">5-10%</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="px-4 py-3 text-gray-600">55-65 years</td>
                      <td className="px-4 py-3 text-center font-medium text-blue-600">30-40%</td>
                      <td className="px-4 py-3 text-center font-medium text-green-600">50-60%</td>
                      <td className="px-4 py-3 text-center font-medium text-gray-600">10-15%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-600">65+ years</td>
                      <td className="px-4 py-3 text-center font-medium text-blue-600">20-30%</td>
                      <td className="px-4 py-3 text-center font-medium text-green-600">60-70%</td>
                      <td className="px-4 py-3 text-center font-medium text-gray-600">10-15%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">* These are general guidelines. Adjust based on your personal circumstances.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Real Investor Profiles</h2>
              <div className="space-y-4">
                <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">👴</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">Conservative: Retired Teacher, 62 years</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Portfolio:</strong> 80% Debt Funds, 15% Balanced Funds, 5% Liquid
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Strategy:</strong> Focus on capital preservation with SWP of 5% annually. Needs stable income.
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Rationale:</strong> Low risk tolerance, needs predictable income, can&apos;t recover from major losses.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-5 border-l-4 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">👩</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">Moderate: IT Professional, 38 years</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Portfolio:</strong> 50% Equity Funds, 40% Debt Funds, 10% Liquid
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Strategy:</strong> SIP of ₹25,000/month with goal of retirement in 20 years.
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Rationale:</strong> Moderate risk for growth, but stable income allows for some safety net.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">👨</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">Aggressive: Entrepreneur, 28 years</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Portfolio:</strong> 80% Equity (Mid/Small cap), 15% Debt, 5% Liquid
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Strategy:</strong> Aggressive SIP of ₹50,000/month targeting financial freedom by 45.
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Rationale:</strong> Long horizon allows recovery from volatility. High risk capacity for maximum growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Can my risk profile change over time?</h3>
                  <p className="text-gray-600 text-sm">Yes! Your risk profile should evolve with age, income, and life circumstances. Review your risk tolerance annually and rebalance your portfolio accordingly. Most investors become more conservative as they age.</p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">Should I have different risk profiles for different goals?</h3>
                  <p className="text-gray-600 text-sm">Absolutely! Your retirement corpus can be aggressive (long timeline), while your child&apos;s education fund might be moderate, and your emergency fund should be conservative. Treat each goal with its own risk profile.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">What if my risk tolerance is lower than my age suggests?</h3>
                  <p className="text-gray-600 text-sm">Always prioritize your comfort level over theoretical allocations. If you can&apos;t sleep during market crashes, you&apos;re taking too much risk. It&apos;s better to have lower returns with peace of mind than panic-sell during downturns.</p>
                </div>
              </div>
            </section>
          </article>

          <RelatedArticles
            links={[
              { href: '/mutual-funds-basics', label: 'Mutual Funds Basics', description: 'Complete beginner\'s guide to understanding mutual funds.' },
              { href: '/retirement-planning', label: 'Retirement Planning', description: 'Plan your retirement income with SWP strategies.' },
              { href: '/best-swp-funds', label: 'Best SWP Funds', description: 'Top 10 funds suitable for different risk profiles.' },
            ]}
          />

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
