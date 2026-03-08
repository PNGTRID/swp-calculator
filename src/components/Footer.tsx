import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Brand */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-white">
            SWP Calculator
          </Link>
          <p className="text-gray-400 mt-2 text-sm">
            Free online tool for systematic withdrawal plan calculations
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="font-semibold text-gray-300 mb-3 text-sm uppercase tracking-wide">Calculator</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">SWP Calculator</Link></li>
              <li><Link href="/swp-vs-sip" className="text-gray-400 hover:text-white text-sm transition-colors">SWP vs SIP</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-300 mb-3 text-sm uppercase tracking-wide">Learn</h3>
            <ul className="space-y-2">
              <li><Link href="/what-is-swp" className="text-gray-400 hover:text-white text-sm transition-colors">What is SWP?</Link></li>
              <li><Link href="/mutual-funds-basics" className="text-gray-400 hover:text-white text-sm transition-colors">Mutual Funds Basics</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-300 mb-3 text-sm uppercase tracking-wide">Planning</h3>
            <ul className="space-y-2">
              <li><Link href="/retirement-planning" className="text-gray-400 hover:text-white text-sm transition-colors">Retirement Planning</Link></li>
              <li><Link href="/tax-planning" className="text-gray-400 hover:text-white text-sm transition-colors">Tax Planning</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-300 mb-3 text-sm uppercase tracking-wide">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/risk-assessment" className="text-gray-400 hover:text-white text-sm transition-colors">Risk Assessment</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} SWP Calculator. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            For educational purposes only. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
