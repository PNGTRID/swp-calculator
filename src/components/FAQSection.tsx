'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is SWP in mutual funds?',
    answer: 'SWP (Systematic Withdrawal Plan) is a facility that allows investors to withdraw a fixed amount from their mutual fund investment at regular intervals. It provides a steady income stream while keeping the remaining investment growing. SWP is ideal for retirees or those who need regular cash flow from their investments.',
  },
  {
    question: 'How is SWP calculated?',
    answer: 'SWP calculation considers your total investment, monthly withdrawal amount, expected return rate, and time period. Each month, your investment earns returns (based on the annual rate divided by 12), and then the fixed withdrawal amount is deducted. This process repeats monthly until your investment period ends or the balance is depleted.',
  },
  {
    question: 'What is the difference between SWP and SIP?',
    answer: 'SIP (Systematic Investment Plan) is for investing money regularly, while SWP is for withdrawing money regularly. SIP helps you build wealth over time by investing small amounts periodically. SWP helps you generate regular income from your existing investment. SIP is ideal for wealth creation, while SWP is perfect for wealth distribution and retirement planning.',
  },
  {
    question: 'Is SWP tax-free?',
    answer: 'No, SWP is not tax-free. The returns from SWP are subject to capital gains tax. If you withdraw before 12 months, you pay Short-Term Capital Gains (STCG) tax. After 12 months, you pay Long-Term Capital Gains (LTCG) tax, which is currently 10% on gains above ₹1 lakh per financial year in India.',
  },
  {
    question: 'Who should invest in SWP?',
    answer: 'SWP is ideal for retirees who need regular income, investors who want to create a second income stream, parents funding children\'s education, or anyone with a lump sum investment who prefers periodic withdrawals over a one-time withdrawal. It helps maintain financial discipline while providing steady cash flow.',
  },
];

// Generate FAQPage JSON-LD for SEO
const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-medium text-gray-900 pr-4">
                {faq.question}
              </h3>
              <span className="text-blue-600 text-2xl flex-shrink-0">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
