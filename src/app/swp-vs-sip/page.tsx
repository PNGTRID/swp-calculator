import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SWP vs SIP - Difference Between Systematic Withdrawal and Investment Plans | SWP Calculator',
  description: 'Compare SWP (Systematic Withdrawal Plan) vs SIP (Systematic Investment Plan). Understand the key differences, benefits, and when to use each strategy.',
  keywords: 'swp vs sip, systematic withdrawal plan vs systematic investment plan, swp sip difference, mutual fund comparison',
  alternates: {
    canonical: 'https://swpcalculator.online/swp-vs-sip',
  },
  openGraph: {
    title: 'SWP vs SIP - Key Differences Explained',
    description: 'Compare SWP vs SIP and understand when to use each strategy for your mutual fund investments.',
    type: 'article',
    url: 'https://swpcalculator.online/swp-vs-sip',
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SWP vs SIP: What's the Difference?",
  "description": "Compare SWP (Systematic Withdrawal Plan) vs SIP (Systematic Investment Plan). Understand the key differences and when to use each strategy.",
  "author": { "@type": "Organization", "name": "SWP Calculator" },
  "publisher": { "@type": "Organization", "name": "SWP Calculator", "url": "https://swpcalculator.online" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://swpcalculator.online/swp-vs-sip" }
};

export default function SWPvsSIP() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-6 text-sm">
            <Link href="/" title="SWP Calculator - Home" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">SWP vs SIP</span>
          </nav>

          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">SWP vs SIP: What&apos;s the Difference?</h1>
            <p className="text-xl text-gray-600">Understanding when to use Systematic Withdrawal Plan vs Systematic Investment Plan</p>
          </header>

          <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">The Core Difference</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">SIP</h3>
                  <p className="text-gray-700 mb-2"><strong>Systematic Investment Plan</strong></p>
                  <p className="text-gray-600">Invest small amounts regularly to <strong>build wealth</strong> over time.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-3">SWP</h3>
                  <p className="text-gray-700 mb-2"><strong>Systematic Withdrawal Plan</strong></p>
                  <p className="text-gray-600">Withdraw fixed amounts regularly to <strong>generate income</strong> from investments.</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                In simple terms, SIP is for <strong>accumulating wealth</strong>, while SWP is for <strong>distributing wealth</strong>. SIP helps you build a corpus by investing regularly, and SWP helps you create a regular income stream from that corpus.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Detailed Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">Aspect</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-700">SIP</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-green-700">SWP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">Purpose</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Wealth creation</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Income generation</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">Money Flow</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">You → Mutual Fund</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Mutual Fund → You</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">Starting Point</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Zero or small investment</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Existing lump sum</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">Ideal For</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Young earners, wealth builders</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Retirees, income seekers</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">Goal</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Build corpus over time</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-600">Generate steady cash flow</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">When to Use Each?</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">Choose SIP When:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-blue-500 mr-2">•</span><span>You&apos;re starting your investment journey</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">•</span><span>You have regular monthly income to invest</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">•</span><span>You want to build wealth over the long term</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">•</span><span>You want to benefit from rupee cost averaging</span></li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Choose SWP When:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start"><span className="text-green-500 mr-2">•</span><span>You have a lump sum investment ready</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-2">•</span><span>You need regular monthly income</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-2">•</span><span>You&apos;re retired or approaching retirement</span></li>
                    <li className="flex items-start"><span className="text-green-500 mr-2">•</span><span>You want disciplined withdrawal strategy</span></li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pro Tip: Combine Both!</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <p className="text-gray-700 leading-relaxed">
                  Many investors use <strong>SIP to build their corpus</strong> during their earning years, and then switch to <strong>SWP to generate income</strong> after retirement. This creates a complete lifecycle of wealth building and distribution.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Learn More</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/what-is-swp" title="What is SWP? - Complete Guide" className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-lg p-4 text-center transition-colors">
                  <span className="text-gray-800 font-medium">What is SWP? →</span>
                </Link>
                <Link href="/" title="Try SWP Calculator - Free Online Tool" className="flex-1 bg-blue-500 hover:bg-blue-600 rounded-lg p-4 text-center text-white transition-colors">
                  <span className="font-medium">Try SWP Calculator →</span>
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
