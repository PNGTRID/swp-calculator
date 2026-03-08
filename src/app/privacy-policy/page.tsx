import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | SWP Calculator',
  description: 'Privacy policy for SWP Calculator. Learn how we collect, use, and protect your information.',
  robots: { index: true, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" title="SWP Calculator - Home" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">Privacy Policy</span>
        </nav>

        <article className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-500 text-sm mb-8">Last updated: January 2024</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SWP Calculator is designed with your privacy in mind. We operate as a client-side application,
                meaning all calculations are performed directly in your browser. We do not collect, store,
                or transmit any personal financial data to our servers.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The information you enter (investment amounts, withdrawal amounts, interest rates, etc.)
                remains entirely on your device and is never sent to external servers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Analytics & Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may use third-party analytics services (such as Google Analytics) to understand how
                visitors interact with our website. These services may collect anonymous data including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Pages visited and time spent on each page</li>
                <li>General geographic location (country/city level)</li>
                <li>Browser type and device information</li>
                <li>Referral source (how you found our website)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible
                for the privacy practices of these external sites. We encourage you to review the privacy
                policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                Since all calculations are performed locally in your browser and we do not store any
                personal data, there is minimal security risk related to your financial information.
                However, we still implement industry-standard security measures to protect our website
                from unauthorized access.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website is not intended for children under the age of 13. We do not knowingly collect
                any personal information from children under 13 years of age.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this
                page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through our website.
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
