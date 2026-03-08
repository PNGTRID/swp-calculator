'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Calculator', title: 'SWP Calculator - Free Online Tool' },
    { href: '/what-is-swp', label: 'What is SWP?', title: 'What is SWP? - Systematic Withdrawal Plan Guide' },
    { href: '/swp-vs-sip', label: 'SWP vs SIP', title: 'SWP vs SIP - Compare Investment Strategies' },
    { href: '/retirement-planning', label: 'Retirement', title: 'Retirement Planning - Plan Your Financial Future' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors"
            title="SWP Calculator - Free Online Tool"
          >
            SWP Calculator
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                title={link.title}
                className="px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden py-3 border-t border-gray-100/50 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                title={link.title}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
