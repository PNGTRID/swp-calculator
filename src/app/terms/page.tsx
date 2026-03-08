import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | SWP Calculator',
  description: 'Terms of use and conditions for using SWP Calculator. Read our terms before using the calculator.',
  robots: { index: true, follow: true },
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" title="SWP Calculator - Home" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Terms of Use</span>
        </nav>

        <article className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Use</h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: January 2024</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using SWP Calculator (swpcalculator.online), you accept and agree to be
                bound by the terms and provisions of this agreement. If you do not agree to abide by
                these terms, please do not use this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Educational Purpose Only</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The SWP Calculator is provided for <strong>educational and informational purposes only</strong>.
                The calculations and results provided by this tool:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Are based on mathematical formulas and assumptions</li>
                <li>Do not account for all real-world factors</li>
                <li>Should not be considered as financial advice</li>
                <li>May not reflect actual investment returns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">No Financial Advice</h2>
              <p className="text-gray-600 leading-relaxed">
                The information provided on this website does not constitute financial, investment, tax,
                or any other form of professional advice. We strongly recommend consulting with a qualified
                financial advisor before making any investment decisions. Past performance is not indicative
                of future results.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Accuracy of Information</h2>
              <p className="text-gray-600 leading-relaxed">
                While we strive to provide accurate and up-to-date information, we make no warranties
                or representations about the accuracy, completeness, or suitability of the information
                on this website. All calculations are approximations and should be verified independently.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                SWP Calculator and its owners shall not be liable for any direct, indirect, incidental,
                consequential, or punitive damages arising from your use of this website or reliance
                on any information provided herein. Use of this website is entirely at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed">
                All content on this website, including text, graphics, logos, and software, is the
                property of SWP Calculator and is protected by copyright and other intellectual property
                laws. You may not reproduce, distribute, or create derivative works without permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed">
                This website may contain links to third-party websites. These links are provided for
                convenience only, and we do not endorse or assume responsibility for the content,
                privacy policies, or practices of third-party websites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Modifications</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms of Use at any time. Changes will be effective
                immediately upon posting on this page. Your continued use of the website after changes
                constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Use shall be governed by and construed in accordance with the laws of
                India, without regard to its conflict of law provisions.
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
