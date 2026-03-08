# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SWP Calculator - A free online Systematic Withdrawal Plan calculator for Indian mutual fund investors.

- **Domain**: swpcalculator.online
- **Target Users**: Indian investors
- **Tech Stack**: Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + Vercel

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page (calculator)
│   ├── layout.tsx         # Root layout with Navigation
│   ├── what-is-swp/       # SEO internal page
│   └── swp-vs-sip/        # SEO internal page
├── components/
│   ├── SWPCalculator.tsx  # Main calculator component
│   ├── FAQSection.tsx     # Accordion FAQ component
│   └── Navigation.tsx     # Sticky navigation bar
└── utils/
    └── swpCalculator.ts   # Core SWP calculation logic
```

## Key Patterns

- **Calculator Logic**: Pure functions in `src/utils/swpCalculator.ts` - handles monthly compound interest with withdrawals
- **Components**: Client components ('use client') with React hooks for state management
- **Styling**: Tailwind CSS with blue-indigo gradient theme for financial feel
- **SEO**: Each page has its own metadata export; internal pages have breadcrumbs and CTA back to calculator
- **Currency**: Indian Rupee (₹) formatting using `Intl.NumberFormat('en-IN')`

## SEO Internal Pages

Each internal page follows this structure:
1. Breadcrumb navigation
2. H1 title + intro paragraph
3. H2 sections with relevant content
4. CTA button linking back to calculator

## Deployment

- Platform: Vercel (auto-deploys from main branch)
- Connected GitHub repo: PNGTRID/swp-calculator
