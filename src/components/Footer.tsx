import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200/50 mt-16">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Top Section - Logo + Links */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
              title="SWP Calculator - Free Online Tool"
            >
              SWP Calculator
            </Link>
            <p className="mt-2 text-sm text-gray-500 max-w-xs">
              Calculate systematic withdrawal plans for mutual funds with our free online tool.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-6">
            {/* Calculators */}
            <div>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Calculators</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" title="SWP Calculator" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    SWP Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/sip-calculator" title="SIP Calculator" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    SIP Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/fd-calculator" title="FD Calculator" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    FD Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/emi-calculator" title="EMI Calculator" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    EMI Calculator
                  </Link>
                </li>
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Learn</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/what-is-swp" title="What is SWP?" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    What is SWP?
                  </Link>
                </li>
                <li>
                  <Link href="/swp-vs-sip" title="SWP vs SIP" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    SWP vs SIP
                  </Link>
                </li>
                <li>
                  <Link href="/mutual-funds-basics" title="Mutual Funds Basics" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    Mutual Funds
                  </Link>
                </li>
              </ul>
            </div>

            {/* Planning */}
            <div>
              <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Planning</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/retirement-planning" title="Retirement Planning" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    Retirement
                  </Link>
                </li>
                <li>
                  <Link href="/tax-planning" title="Tax Planning" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    Tax Planning
                  </Link>
                </li>
                <li>
                  <Link href="/risk-assessment" title="Risk Assessment" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    Risk Assessment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {currentYear} SWP Calculator. Educational use only.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" title="Privacy Policy" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" title="Terms of Use" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                Terms
              </Link>
              <Link href="/disclaimer" title="Disclaimer" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
