import Link from 'next/link';

const internalPages = [
  { name: 'What is SWP?', href: '/what-is-swp', icon: '📖', desc: 'Learn about Systematic Withdrawal Plans' },
  { name: 'SWP vs SIP', href: '/swp-vs-sip', icon: '⚖️', desc: 'Compare investment strategies' },
];

const swpTips = [
  {
    icon: '💡',
    title: 'Ideal Withdrawal Rate',
    desc: 'Keep withdrawal below 8% annually to preserve your capital',
  },
  {
    icon: '🏦',
    title: 'Best Funds for SWP',
    desc: 'Debt and hybrid funds offer more stable returns for SWP',
  },
  {
    icon: '📊',
    title: 'Review Annually',
    desc: 'Adjust withdrawal amount based on fund performance',
  },
  {
    icon: '🎯',
    title: 'Start Early',
    desc: 'Begin SWP after building sufficient corpus (2+ years)',
  },
];

const investmentBasics = [
  { name: 'Mutual Funds Basics', href: '/mutual-funds-basics', icon: '📚' },
  { name: 'Risk Assessment', href: '/risk-assessment', icon: '⚠️' },
  { name: 'Tax Planning', href: '/tax-planning', icon: '💰' },
  { name: 'Retirement Planning', href: '/retirement-planning', icon: '🏖️' },
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

      {/* SWP Pro Tips */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-4">
        <h3 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span>🎯</span> SWP Pro Tips
        </h3>
        <div className="space-y-3">
          {swpTips.map((tip, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-base mt-0.5">{tip.icon}</span>
              <div>
                <p className="text-sm font-medium text-gray-800">{tip.title}</p>
                <p className="text-xs text-gray-600">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Basics */}
      <div className="bg-white rounded-2xl shadow-lg p-4">
        <h3 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <span>📖</span> Investment Basics
        </h3>
        <div className="space-y-2">
          {investmentBasics.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <span className="text-base">{page.icon}</span>
              <span className="text-sm text-gray-700 group-hover:text-blue-600 flex-1">{page.name}</span>
              <span className="text-xs text-gray-400 group-hover:text-blue-500">→</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 rounded-xl p-3">
        <p className="text-xs text-gray-500 leading-relaxed">
          <strong>Disclaimer:</strong> This calculator is for educational purposes only. Actual returns may vary based on market conditions. Please consult a financial advisor before making investment decisions.
        </p>
      </div>
    </aside>
  );
}
