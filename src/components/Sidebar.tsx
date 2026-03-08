import Link from 'next/link';

const relatedCalculators = [
  { name: 'SIP Calculator', href: 'https://groww.in/calculators/sip-calculator', external: true, icon: '📈' },
  { name: 'Lumpsum Calculator', href: 'https://groww.in/calculators/lumpsum-calculator', external: true, icon: '💰' },
  { name: 'FD Calculator', href: 'https://groww.in/calculators/fd-calculator', external: true, icon: '🏦' },
  { name: 'RD Calculator', href: 'https://groww.in/calculators/rd-calculator', external: true, icon: '📊' },
  { name: 'PPF Calculator', href: 'https://groww.in/calculators/ppf-calculator', external: true, icon: '🏛️' },
];

const internalPages = [
  { name: 'What is SWP?', href: '/what-is-swp', icon: '📖', desc: 'Learn about Systematic Withdrawal Plans' },
  { name: 'SWP vs SIP', href: '/swp-vs-sip', icon: '⚖️', desc: 'Compare investment strategies' },
];

const quickTips = [
  'Keep withdrawal rate below 8% of corpus to preserve capital',
  'Choose funds with consistent returns for SWP',
  'Review your SWP annually and adjust if needed',
  'SWP works best in debt or hybrid funds',
];

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      {/* Internal Pages */}
      <div className="bg-white rounded-2xl shadow-lg p-4">
        <h3 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span>📚</span> Learn More
        </h3>
        <div className="space-y-2">
          {internalPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="block p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors group"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{page.icon}</span>
                <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700">
                  {page.name}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1 ml-7">{page.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-4">
        <h3 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span>💡</span> Quick Tips
        </h3>
        <ul className="space-y-2">
          {quickTips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-amber-500 mt-0.5">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Related Calculators */}
      <div className="bg-white rounded-2xl shadow-lg p-4">
        <h3 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span>🧮</span> Other Calculators
        </h3>
        <div className="space-y-1">
          {relatedCalculators.map((calc) => (
            <a
              key={calc.href}
              href={calc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <span className="text-base">{calc.icon}</span>
              <span className="text-sm text-gray-600 group-hover:text-blue-600 flex-1">
                {calc.name}
              </span>
              <svg
                className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
