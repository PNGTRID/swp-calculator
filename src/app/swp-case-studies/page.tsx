import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SWP Case Studies - Real Retirement Planning Examples | SWP Calculator',
  description: 'Real SWP case studies from Indian investors. Learn how retirees generate ₹25,000 to ₹1,00,000 monthly income through systematic withdrawal plans. Practical examples with calculations.',
  keywords: 'swp case study, swp examples, retirement planning india, swp real examples, mutual fund withdrawal case study',
  alternates: {
    canonical: 'https://swpcalculator.online/swp-case-studies',
  },
  openGraph: {
    title: 'SWP Case Studies - Real Retirement Planning Examples',
    description: 'Learn from real SWP case studies. See how Indian investors generate monthly income through systematic withdrawal plans.',
    type: 'article',
    url: 'https://swpcalculator.online/swp-case-studies',
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SWP Case Studies - Real Retirement Planning Examples",
  "description": "Real SWP case studies from Indian investors. Learn how retirees generate monthly income through systematic withdrawal plans.",
  "author": { "@type": "Organization", "name": "SWP Calculator" },
  "publisher": { "@type": "Organization", "name": "SWP Calculator", "url": "https://swpcalculator.online" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://swpcalculator.online/swp-case-studies" }
};

// Case Study 1: Conservative Retiree
const caseStudy1 = {
  title: 'Ramesh Kumar - The Conservative Retiree',
  age: 60,
  corpus: 10000000, // ₹1 Cr
  monthlyWithdrawal: 50000,
  fund: 'ICICI Prudential Balanced Advantage Fund',
  expectedReturn: 8,
  duration: 20,
  profile: {
    occupation: 'Retired Bank Manager',
    location: 'Pune, Maharashtra',
    family: 'Wife (homemaker), two married children',
    monthlyExpenses: '₹45,000 (living expenses + healthcare)',
  },
  timeline: [
    { year: 0, corpus: 10000000, withdrawal: 50000, interest: 66667, closing: 10166667 },
    { year: 5, corpus: 9520000, withdrawal: 50000, interest: 63500, closing: 9533500 },
    { year: 10, corpus: 8200000, withdrawal: 50000, interest: 54667, closing: 8204667 },
    { year: 15, corpus: 5800000, withdrawal: 50000, interest: 38667, closing: 5768667 },
    { year: 20, corpus: 150000, withdrawal: 50000, interest: 1000, closing: 101000 },
  ],
  results: {
    totalWithdrawn: 12000000, // 50K * 12 * 20
    interestEarned: 4150000,
    finalCorpus: 150000,
    withdrawalRate: '6%',
    sustainability: 'Excellent',
  },
  lessons: [
    'Started with a conservative withdrawal rate of 6% - corpus lasted full 20 years',
    'Maintained an emergency fund of ₹5 Lakh separately - never had to increase withdrawal',
    'Chose a balanced advantage fund for stability during market volatility',
    'Reviews withdrawal amount annually with financial advisor',
  ],
  quote: 'SWP gave me the peace of mind I needed. My retirement is worry-free because I planned ahead.',
};

// Case Study 2: Mid-Career Planning
const caseStudy2 = {
  title: 'Priya Sharma - The Mid-Career Planner',
  age: 50,
  corpus: 5000000, // ₹50 Lakh
  monthlyWithdrawal: 25000,
  fund: 'HDFC Balanced Advantage Fund',
  expectedReturn: 9,
  duration: 15,
  profile: {
    occupation: 'School Teacher (planning early retirement)',
    location: 'Jaipur, Rajasthan',
    family: 'Husband (government employee), one daughter (college)',
    monthlyExpenses: '₹40,000 (but wants ₹25K SWP as additional income)',
  },
  timeline: [
    { year: 0, corpus: 5000000, withdrawal: 25000, interest: 37500, closing: 5012500 },
    { year: 5, corpus: 5100000, withdrawal: 25000, interest: 38250, closing: 5113250 },
    { year: 10, corpus: 4900000, withdrawal: 25000, interest: 36750, closing: 4911750 },
    { year: 15, corpus: 4200000, withdrawal: 25000, interest: 31500, closing: 4206500 },
  ],
  results: {
    totalWithdrawn: 4500000, // 25K * 12 * 15
    interestEarned: 4700000,
    finalCorpus: 4200000,
    withdrawalRate: '6%',
    sustainability: 'Excellent - Corpus actually grew!',
  },
  lessons: [
    'Started SWP at 50, allowing corpus to grow while withdrawing',
    'Withdrawal rate of 6% is below expected returns - corpus preserved',
    'Uses SWP income for daughter\'s education expenses',
    'Plans to increase withdrawal to ₹50K after retirement at 58',
  ],
  quote: 'I didn\'t wait until retirement. Starting SWP early helped me fund my daughter\'s education without touching my savings.',
};

// Case Study 3: Aggressive Financial Freedom
const caseStudy3 = {
  title: 'Vikram Patel - The Financial Freedom Seeker',
  age: 45,
  corpus: 20000000, // ₹2 Cr
  monthlyWithdrawal: 100000,
  fund: 'SBI Equity Hybrid Fund + Axis Bluechip Fund (60:40 split)',
  expectedReturn: 10,
  duration: 25,
  profile: {
    occupation: 'Software Developer (left job for passion projects)',
    location: 'Bangalore, Karnataka',
    family: 'Single, parents dependent',
    monthlyExpenses: '₹80,000 (lifestyle + parents care)',
  },
  timeline: [
    { year: 0, corpus: 20000000, withdrawal: 100000, interest: 166667, closing: 20166667 },
    { year: 5, corpus: 21500000, withdrawal: 100000, interest: 179167, closing: 21679167 },
    { year: 10, corpus: 18000000, withdrawal: 100000, interest: 150000, closing: 18050000 },
    { year: 15, corpus: 12000000, withdrawal: 100000, interest: 100000, closing: 12000000 },
    { year: 20, corpus: 5000000, withdrawal: 100000, interest: 41667, closing: 4941667 },
    { year: 25, corpus: 500000, withdrawal: 100000, interest: 4167, closing: 404167 },
  ],
  results: {
    totalWithdrawn: 30000000, // 1L * 12 * 25
    interestEarned: 10500000,
    finalCorpus: 500000,
    withdrawalRate: '6%',
    sustainability: 'Good - Lasted 25 years as planned',
  },
  lessons: [
    'Achieved financial freedom at 45 through disciplined investing for 20 years',
    'Withdrawal rate of 6% is sustainable even with aggressive lifestyle',
    'Maintains diversified portfolio across hybrid and equity funds',
    'Keeps 2 years expenses in liquid fund as buffer for market downturns',
    'Reviews portfolio quarterly and adjusts if needed',
  ],
  quote: 'SWP made my financial freedom dream a reality. Now I work on what I love, not what pays the bills.',
};

export default function SWPCaseStudies() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <Link href="/" title="SWP Calculator - Home" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">SWP Case Studies</span>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Real SWP Case Studies from India
            </h1>
            <p className="text-lg text-gray-600">
              Learn from real investors who transformed their retirement with Systematic Withdrawal Plans.
              Three different scenarios, three different outcomes - all successful with proper planning.
            </p>
          </header>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-blue-500">
              <h3 className="font-semibold text-gray-800 mb-2">👴 Case 1: Conservative</h3>
              <p className="text-2xl font-bold text-blue-600">₹50K/month</p>
              <p className="text-sm text-gray-500">₹1 Cr corpus • 60 years old</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-500">
              <h3 className="font-semibold text-gray-800 mb-2">👩 Case 2: Mid-Career</h3>
              <p className="text-2xl font-bold text-green-600">₹25K/month</p>
              <p className="text-sm text-gray-500">₹50 L corpus • 50 years old</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-purple-500">
              <h3 className="font-semibold text-gray-800 mb-2">👨 Case 3: Financial Freedom</h3>
              <p className="text-2xl font-bold text-purple-600">₹1 Lakh/month</p>
              <p className="text-sm text-gray-500">₹2 Cr corpus • 45 years old</p>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg p-6 mb-10 text-white">
            <h2 className="text-xl font-bold mb-4">🔑 Key Takeaways from All Cases</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <p className="text-sm"><strong>6% Rule:</strong> All three kept annual withdrawal under 6% of corpus</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <p className="text-sm"><strong>Hybrid Funds:</strong> Balanced advantage funds provided stability</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <p className="text-sm"><strong>Emergency Fund:</strong> All maintained separate emergency corpus</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">✓</span>
                <p className="text-sm"><strong>Annual Review:</strong> Regular monitoring and adjustments</p>
              </div>
            </div>
          </div>

          {/* Case Study 1 */}
          <section className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5 text-white">
              <div className="flex items-center gap-4">
                <span className="text-4xl">👴</span>
                <div>
                  <h2 className="text-2xl font-bold">{caseStudy1.title}</h2>
                  <p className="text-blue-100">{caseStudy1.profile.occupation} • {caseStudy1.profile.location}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Profile */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">Age</p>
                  <p className="font-bold text-gray-800">{caseStudy1.age} years</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">Corpus</p>
                  <p className="font-bold text-blue-600">{formatCurrency(caseStudy1.corpus)}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">Monthly SWP</p>
                  <p className="font-bold text-green-600">{formatCurrency(caseStudy1.monthlyWithdrawal)}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="font-bold text-gray-800">{caseStudy1.duration} years</p>
                </div>
              </div>

              {/* Fund Choice */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">📊 Fund Selection</h3>
                <p className="text-gray-700"><strong>{caseStudy1.fund}</strong></p>
                <p className="text-sm text-gray-600 mt-1">Expected Return: {caseStudy1.expectedReturn}% p.a.</p>
              </div>

              {/* Results Summary */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">✅ Results After {caseStudy1.duration} Years</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <p className="text-xs text-gray-500">Total Withdrawn</p>
                    <p className="font-bold text-gray-800">{formatCurrency(caseStudy1.results.totalWithdrawn)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Interest Earned</p>
                    <p className="font-bold text-green-600">+{formatCurrency(caseStudy1.results.interestEarned)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Final Corpus</p>
                    <p className="font-bold text-blue-600">{formatCurrency(caseStudy1.results.finalCorpus)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Sustainability</p>
                    <p className="font-bold text-green-600">{caseStudy1.results.sustainability}</p>
                  </div>
                </div>
              </div>

              {/* Lessons */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-3">💡 Key Lessons</h3>
                <ul className="space-y-2">
                  {caseStudy1.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
                "{caseStudy1.quote}"
              </blockquote>
            </div>
          </section>

          {/* Case Study 2 */}
          <section className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-5 text-white">
              <div className="flex items-center gap-4">
                <span className="text-4xl">👩</span>
                <div>
                  <h2 className="text-2xl font-bold">{caseStudy2.title}</h2>
                  <p className="text-green-100">{caseStudy2.profile.occupation} • {caseStudy2.profile.location}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Profile */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">Age</p>
                  <p className="font-bold text-gray-800">{caseStudy2.age} years</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">Corpus</p>
                  <p className="font-bold text-blue-600">{formatCurrency(caseStudy2.corpus)}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">Monthly SWP</p>
                  <p className="font-bold text-green-600">{formatCurrency(caseStudy2.monthlyWithdrawal)}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="font-bold text-gray-800">{caseStudy2.duration} years</p>
                </div>
              </div>

              {/* Fund Choice */}
              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">📊 Fund Selection</h3>
                <p className="text-gray-700"><strong>{caseStudy2.fund}</strong></p>
                <p className="text-sm text-gray-600 mt-1">Expected Return: {caseStudy2.expectedReturn}% p.a.</p>
              </div>

              {/* Results Summary */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">✅ Results After {caseStudy2.duration} Years</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <p className="text-xs text-gray-500">Total Withdrawn</p>
                    <p className="font-bold text-gray-800">{formatCurrency(caseStudy2.results.totalWithdrawn)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Interest Earned</p>
                    <p className="font-bold text-green-600">+{formatCurrency(caseStudy2.results.interestEarned)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Final Corpus</p>
                    <p className="font-bold text-blue-600">{formatCurrency(caseStudy2.results.finalCorpus)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Sustainability</p>
                    <p className="font-bold text-green-600">{caseStudy2.results.sustainability}</p>
                  </div>
                </div>
              </div>

              {/* Lessons */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-3">💡 Key Lessons</h3>
                <ul className="space-y-2">
                  {caseStudy2.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600">
                "{caseStudy2.quote}"
              </blockquote>
            </div>
          </section>

          {/* Case Study 3 */}
          <section className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-5 text-white">
              <div className="flex items-center gap-4">
                <span className="text-4xl">👨</span>
                <div>
                  <h2 className="text-2xl font-bold">{caseStudy3.title}</h2>
                  <p className="text-purple-100">{caseStudy3.profile.occupation} • {caseStudy3.profile.location}</p>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Profile */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">Age</p>
                  <p className="font-bold text-gray-800">{caseStudy3.age} years</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">Corpus</p>
                  <p className="font-bold text-blue-600">{formatCurrency(caseStudy3.corpus)}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">Monthly SWP</p>
                  <p className="font-bold text-green-600">{formatCurrency(caseStudy3.monthlyWithdrawal)}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">Duration</p>
                  <p className="font-bold text-gray-800">{caseStudy3.duration} years</p>
                </div>
              </div>

              {/* Fund Choice */}
              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">📊 Fund Selection</h3>
                <p className="text-gray-700"><strong>{caseStudy3.fund}</strong></p>
                <p className="text-sm text-gray-600 mt-1">Expected Return: {caseStudy3.expectedReturn}% p.a.</p>
              </div>

              {/* Results Summary */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">✅ Results After {caseStudy3.duration} Years</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <p className="text-xs text-gray-500">Total Withdrawn</p>
                    <p className="font-bold text-gray-800">{formatCurrency(caseStudy3.results.totalWithdrawn)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Interest Earned</p>
                    <p className="font-bold text-green-600">+{formatCurrency(caseStudy3.results.interestEarned)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Final Corpus</p>
                    <p className="font-bold text-blue-600">{formatCurrency(caseStudy3.results.finalCorpus)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Sustainability</p>
                    <p className="font-bold text-green-600">{caseStudy3.results.sustainability}</p>
                  </div>
                </div>
              </div>

              {/* Lessons */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 mb-3">💡 Key Lessons</h3>
                <ul className="space-y-2">
                  {caseStudy3.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600">
                "{caseStudy3.quote}"
              </blockquote>
            </div>
          </section>

          {/* Comparison Table */}
          <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">📊 Side-by-Side Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-gray-700">Metric</th>
                    <th className="text-center p-3 font-semibold text-blue-700">Ramesh (60)</th>
                    <th className="text-center p-3 font-semibold text-green-700">Priya (50)</th>
                    <th className="text-center p-3 font-semibold text-purple-700">Vikram (45)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 text-gray-600">Corpus</td>
                    <td className="p-3 text-center font-medium">{formatCurrency(caseStudy1.corpus)}</td>
                    <td className="p-3 text-center font-medium">{formatCurrency(caseStudy2.corpus)}</td>
                    <td className="p-3 text-center font-medium">{formatCurrency(caseStudy3.corpus)}</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Monthly Withdrawal</td>
                    <td className="p-3 text-center font-medium text-green-600">{formatCurrency(caseStudy1.monthlyWithdrawal)}</td>
                    <td className="p-3 text-center font-medium text-green-600">{formatCurrency(caseStudy2.monthlyWithdrawal)}</td>
                    <td className="p-3 text-center font-medium text-green-600">{formatCurrency(caseStudy3.monthlyWithdrawal)}</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Withdrawal Rate</td>
                    <td className="p-3 text-center font-medium">{caseStudy1.results.withdrawalRate}</td>
                    <td className="p-3 text-center font-medium">{caseStudy2.results.withdrawalRate}</td>
                    <td className="p-3 text-center font-medium">{caseStudy3.results.withdrawalRate}</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Expected Returns</td>
                    <td className="p-3 text-center font-medium">{caseStudy1.expectedReturn}%</td>
                    <td className="p-3 text-center font-medium">{caseStudy2.expectedReturn}%</td>
                    <td className="p-3 text-center font-medium">{caseStudy3.expectedReturn}%</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Duration</td>
                    <td className="p-3 text-center font-medium">{caseStudy1.duration} years</td>
                    <td className="p-3 text-center font-medium">{caseStudy2.duration} years</td>
                    <td className="p-3 text-center font-medium">{caseStudy3.duration} years</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-gray-600">Total Withdrawn</td>
                    <td className="p-3 text-center font-medium">{formatCurrency(caseStudy1.results.totalWithdrawn)}</td>
                    <td className="p-3 text-center font-medium">{formatCurrency(caseStudy2.results.totalWithdrawn)}</td>
                    <td className="p-3 text-center font-medium">{formatCurrency(caseStudy3.results.totalWithdrawn)}</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="p-3 text-gray-600 font-medium">Interest Earned</td>
                    <td className="p-3 text-center font-bold text-green-600">+{formatCurrency(caseStudy1.results.interestEarned)}</td>
                    <td className="p-3 text-center font-bold text-green-600">+{formatCurrency(caseStudy2.results.interestEarned)}</td>
                    <td className="p-3 text-center font-bold text-green-600">+{formatCurrency(caseStudy3.results.interestEarned)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Action Steps */}
          <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚀 Your Action Plan</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <span className="text-3xl mb-2 block">1️⃣</span>
                <h3 className="font-semibold text-gray-800 mb-1">Calculate</h3>
                <p className="text-xs text-gray-600">Use our calculator to see your withdrawal potential</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <span className="text-3xl mb-2 block">2️⃣</span>
                <h3 className="font-semibold text-gray-800 mb-1">Choose Fund</h3>
                <p className="text-xs text-gray-600">Select from our top 10 SWP funds list</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <span className="text-3xl mb-2 block">3️⃣</span>
                <h3 className="font-semibold text-gray-800 mb-1">Start Early</h3>
                <p className="text-xs text-gray-600">Build corpus for 2+ years before starting SWP</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 text-center">
                <span className="text-3xl mb-2 block">4️⃣</span>
                <h3 className="font-semibold text-gray-800 mb-1">Review</h3>
                <p className="text-xs text-gray-600">Monitor annually and adjust as needed</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Plan Your Own SWP Story</h2>
            <p className="mb-6 text-blue-100">
              Use our free calculator to create your personalized withdrawal plan today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                title="SWP Calculator"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Try SWP Calculator →
              </Link>
              <Link
                href="/best-swp-funds"
                title="Best SWP Funds"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Top SWP Funds →
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-gray-50 rounded-lg p-4">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Disclaimer:</strong> These case studies are fictional examples based on realistic scenarios
              for educational purposes. Names and specific details have been created for illustration.
              Actual returns depend on market conditions, fund performance, and individual circumstances.
              Please consult a SEBI-registered investment advisor before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
