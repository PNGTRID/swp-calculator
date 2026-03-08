import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | SWP Calculator',
  description: 'The page you are looking for could not be found. Return to our SWP Calculator homepage.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-9xl font-bold text-blue-200">404</span>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go to Calculator
          </Link>
          <Link
            href="/what-is-swp"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors border border-blue-200"
          >
            Learn About SWP
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Popular Pages
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/" className="p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow">
              <span className="text-2xl mb-1 block">📊</span>
              <span className="text-sm text-gray-700">SWP Calculator</span>
            </Link>
            <Link href="/what-is-swp" className="p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow">
              <span className="text-2xl mb-1 block">📖</span>
              <span className="text-sm text-gray-700">What is SWP?</span>
            </Link>
            <Link href="/retirement-planning" className="p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow">
              <span className="text-2xl mb-1 block">🏖️</span>
              <span className="text-sm text-gray-700">Retirement Planning</span>
            </Link>
            <Link href="/tax-planning" className="p-3 bg-white rounded-lg shadow-sm hover:shadow transition-shadow">
              <span className="text-2xl mb-1 block">💰</span>
              <span className="text-sm text-gray-700">Tax Planning</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
