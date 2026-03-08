import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | SWP Calculator',
  description: 'Important disclaimer for SWP Calculator users. Understand the limitations of this financial tool.',
  robots: { index: true, follow: true },
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" title="SWP Calculator - Home" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Disclaimer</span>
        </nav>

        <article className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-amber-100 rounded-full">
              <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Disclaimer</h1>
          </div>
          <p className="text-gray-500 text-sm mb-8">Last updated: January 2024</p>

          <div className="prose prose-gray max-w-none">
            {/* Warning Box */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg">
              <p className="text-amber-800 font-medium">
                Please read this disclaimer carefully before using the SWP Calculator.
                By using this website, you acknowledge that you have read and understood this disclaimer.
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Not Financial Advice</h2>
              <p className="text-gray-600 leading-relaxed">
                The information and calculations provided by SWP Calculator are for <strong>general informational
                and educational purposes only</strong>. They do not constitute professional financial advice,
                investment recommendations, or an offer to buy or sell any securities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Investment Risks</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mutual fund investments are subject to market risks. Please read all scheme-related documents
                carefully before investing. Past performance of mutual funds is not a guarantee of future results.
                Key risks include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Market Risk:</strong> The value of investments can fluctuate based on market conditions</li>
                <li><strong>Inflation Risk:</strong> Returns may not keep pace with inflation</li>
                <li><strong>Liquidity Risk:</strong> Some investments may be difficult to sell quickly</li>
                <li><strong>Interest Rate Risk:</strong> Changes in interest rates can affect bond fund values</li>
                <li><strong>Credit Risk:</strong> The possibility of default by bond issuers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Calculation Assumptions</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our SWP calculator uses simplified assumptions for calculations:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Returns are calculated using compound interest on a monthly basis</li>
                <li>The expected return rate is assumed to be constant throughout the period</li>
                <li>Actual mutual fund returns vary and depend on market performance</li>
                <li>Tax implications are not factored into the calculations</li>
                <li>Exit load and other fees are not considered</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">No Guarantee of Accuracy</h2>
              <p className="text-gray-600 leading-relaxed">
                While we strive to provide accurate calculations, we cannot guarantee the accuracy,
                reliability, or completeness of any information on this website. The actual results
                from your investments may differ significantly from the projections shown.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Consult a Professional</h2>
              <p className="text-gray-600 leading-relaxed">
                Before making any investment decisions, we strongly recommend consulting with a
                qualified financial advisor who can assess your individual circumstances, risk tolerance,
                and financial goals. A professional can provide personalized advice tailored to your
                specific situation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Regulatory Information</h2>
              <p className="text-gray-600 leading-relaxed">
                In India, mutual funds are regulated by the Securities and Exchange Board of India (SEBI).
                Always verify that any mutual fund you invest in is registered with SEBI. Check the
                mutual fund documents for detailed information about the scheme, its objectives, risk factors,
                and fees.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                SWP Calculator, its owners, developers, and affiliates shall not be held liable for any
                direct, indirect, incidental, or consequential damages arising from the use of this website
                or reliance on the information provided. Use of this website is entirely at your own risk.
              </p>
            </section>
          </div>
        </article>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            title="SWP Calculator - Free Online Tool"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
