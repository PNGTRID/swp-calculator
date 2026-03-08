import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is SWP? - Systematic Withdrawal Plan Explained | SWP Calculator',
  description: 'Learn what SWP (Systematic Withdrawal Plan) is, how it works, its benefits, and who should use it. Complete guide to systematic withdrawal plans in mutual funds.',
  keywords: 'what is swp, systematic withdrawal plan, swp meaning, swp in mutual funds, swp explained',
  alternates: {
    canonical: 'https://swpcalculator.online/what-is-swp',
  },
  openGraph: {
    title: 'What is SWP? - Systematic Withdrawal Plan Explained',
    description: 'Learn what SWP is, how it works, its benefits, and who should use it. Complete guide to systematic withdrawal plans.',
    type: 'article',
    url: 'https://swpcalculator.online/what-is-swp',
  },
};

// Article JSON-LD
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is SWP (Systematic Withdrawal Plan)?",
  "description": "Learn what SWP (Systematic Withdrawal Plan) is, how it works, its benefits, and who should use it. Complete guide to systematic withdrawal plans in mutual funds.",
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
    "@id": "https://swpcalculator.online/what-is-swp"
  }
};

export default function WhatIsSWP() {
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
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">What is SWP</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              What is SWP (Systematic Withdrawal Plan)?
            </h1>
            <p className="text-xl text-gray-600">
              A complete guide to understanding Systematic Withdrawal Plans in mutual funds
            </p>
          </header>

          {/* Content */}
          <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Definition of SWP
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A <strong>Systematic Withdrawal Plan (SWP)</strong> is a mutual fund facility that allows investors to withdraw a fixed amount from their investment at regular intervals. It&apos;s the opposite of SIP (Systematic Investment Plan) - instead of investing money periodically, you withdraw money periodically.
              </p>
              <p className="text-gray-600 leading-relaxed">
                SWP provides a steady income stream while keeping your remaining investment growing. This makes it an ideal choice for retirees, individuals seeking regular income, or those who want to create a disciplined withdrawal strategy from their investments.
              </p>
            </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How Does SWP Work?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When you start an SWP, you begin with a lump sum investment in a mutual fund. Each month (or at your chosen interval), a fixed amount is automatically redeemed from your investment and transferred to your bank account.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-gray-800 mb-3">Example:</h3>
              <p className="text-gray-600">
                If you invest ₹10,00,000 and set up an SWP of ₹10,000 per month, the mutual fund will redeem units worth ₹10,000 every month and transfer the amount to your bank account. Meanwhile, your remaining investment continues to earn returns based on the fund&apos;s performance.
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              If your fund earns 8% annually, your remaining balance grows by that return rate each month (approximately 0.67% monthly), while you continue to withdraw your fixed amount. This dual benefit of income plus potential growth is what makes SWP attractive.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Benefits of SWP
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-gray-800">Regular Income:</strong>
                  <p className="text-gray-600">Receive a fixed amount every month, perfect for managing expenses.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-gray-800">Capital Appreciation:</strong>
                  <p className="text-gray-600">Your remaining investment continues to grow with market returns.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-gray-800">Discipline:</strong>
                  <p className="text-gray-600">Automated withdrawals help maintain financial discipline.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-gray-800">Flexibility:</strong>
                  <p className="text-gray-600">Choose your withdrawal amount, frequency, and duration as per your needs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-xl">✓</span>
                <div>
                  <strong className="text-gray-800">Tax Efficiency:</strong>
                  <p className="text-gray-600">Long-term capital gains tax applies, which can be more efficient than regular income tax.</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who Should Use SWP?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Retirees</h3>
                <p className="text-gray-600 text-sm">
                  Need regular pension-like income from their retirement corpus.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Parents</h3>
                <p className="text-gray-600 text-sm">
                  Funding children&apos;s education with monthly expense requirements.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Second Income Seekers</h3>
                <p className="text-gray-600 text-sm">
                  Want to create an additional income stream from existing investments.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Conservative Investors</h3>
                <p className="text-gray-600 text-sm">
                  Prefer steady withdrawals over lump sum redemption.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Things to Consider
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
              <ul className="space-y-2 text-gray-700">
                <li>• SWP returns are subject to capital gains tax</li>
                <li>• Market risk: your investment value can fluctuate</li>
                <li>• Choose funds with consistent performance history</li>
                <li>• Monitor your withdrawal rate vs. returns to avoid depleting capital</li>
              </ul>
            </div>
          </section>
        </article>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Calculate Your SWP Returns
          </h2>
          <p className="mb-6 text-blue-100">
            Use our free SWP calculator to see how much you can withdraw and what your final value will be.
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Try SWP Calculator →
          </Link>
        </div>
      </div>
    </div>
  );
}
