'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
  title: string;
}

interface NavGroup {
  label: string;
  icon: string;
  links: NavLink[];
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navGroups: NavGroup[] = [
    {
      label: 'Calculators',
      icon: '🧮',
      links: [
        { href: '/', label: 'SWP Calculator', title: 'SWP Calculator - Free Online Tool' },
        { href: '/sip-calculator', label: 'SIP Calculator', title: 'SIP Calculator - Systematic Investment Plan' },
        { href: '/fd-calculator', label: 'FD Calculator', title: 'FD Calculator - Fixed Deposit Calculator' },
        { href: '/emi-calculator', label: 'EMI Calculator', title: 'EMI Calculator - Loan EMI Calculator' },
      ],
    },
    {
      label: 'Learn',
      icon: '📚',
      links: [
        { href: '/what-is-swp', label: 'What is SWP', title: 'What is SWP - Systematic Withdrawal Plan Explained' },
        { href: '/swp-vs-sip', label: 'SWP vs SIP', title: 'SWP vs SIP - Key Differences' },
        { href: '/swp-vs-fd', label: 'SWP vs FD', title: 'SWP vs Fixed Deposit Comparison' },
        { href: '/best-swp-funds', label: 'Best SWP Funds', title: 'Best SWP Funds in India' },
        { href: '/swp-case-studies', label: 'Case Studies', title: 'SWP Case Studies - Real Examples' },
        { href: '/mutual-funds-basics', label: 'Mutual Funds Basics', title: 'Mutual Funds Basics for Beginners' },
      ],
    },
    {
      label: 'Planning',
      icon: '📊',
      links: [
        { href: '/retirement-planning', label: 'Retirement Planning', title: 'Retirement Planning with SWP' },
        { href: '/tax-planning', label: 'Tax Planning', title: 'Tax Planning for Mutual Funds' },
        { href: '/risk-assessment', label: 'Risk Assessment', title: 'Risk Assessment Guide' },
      ],
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Check if any link in group is active
  const isGroupActive = (group: NavGroup) => {
    return group.links.some(link => link.href === pathname);
  };

  // Desktop dropdown handler
  const handleMouseEnter = (label: string) => {
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // Mobile dropdown handler
  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

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

          {/* Desktop Menu with Dropdowns */}
          <div className="hidden sm:flex items-center space-x-1" ref={dropdownRef}>
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(group.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-all ${
                    isGroupActive(group)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <span className="text-base">{group.icon}</span>
                  {group.label}
                  <svg
                    className={`w-3 h-3 transition-transform ${openDropdown === group.label ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Panel */}
                {openDropdown === group.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        title={link.title}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          pathname === link.href
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
          <div className="sm:hidden py-3 border-t border-gray-100/50">
            {navGroups.map((group) => (
              <div key={group.label} className="mb-2">
                <button
                  onClick={() => toggleDropdown(group.label)}
                  className={`flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg transition-all ${
                    isGroupActive(group)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{group.icon}</span>
                    {group.label}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${openDropdown === group.label ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mobile Submenu */}
                {openDropdown === group.label && (
                  <div className="ml-4 mt-1 space-y-1">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        title={link.title}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                          pathname === link.href
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
