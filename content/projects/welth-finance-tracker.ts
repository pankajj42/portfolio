import type { Project } from '@/types'

export const welthFinanceTrackerProject: Project = {
  id: 'welthFinanceTracker',
  slug: 'welth-finance-tracker',
  displayName: 'Welth — AI Finance Tracker',
  tagline: 'AI-powered finance: Gemini receipt scanning, Inngest cron automation, arcjet security.',
  description: 'A full-stack AI finance platform deployed on Vercel. Inngest powers event-driven cron workflows — recurring transactions, monthly budget reports, and 90% budget-limit email alerts. Gemini AI processes receipt images to auto-extract transaction data. arcjet provides rate limiting and bot protection at the API route level.',
  techStack: [
    'Next.js', 'JavaScript', 'Shadcn UI', 'Clerk', 'Prisma',
    'PostgreSQL', 'Inngest', 'Gemini AI', 'Resend', 'arcjet', 'Vercel',
  ],
  features: [
    'Gemini AI receipt scanning — upload a photo and AI extracts merchant, amount, date, and category automatically',
    'Inngest cron workflows — process recurring transactions, fire budget alerts at 90% threshold, send monthly reports',
    'arcjet security — rate limiting and bot protection at API route level with minimal configuration',
    'Multi-account support with individual budget tracking per account',
    'Transactional emails via Resend — budget alerts, recurring summaries, monthly reports',
    'Server-side sorting and filtering for all transaction views',
  ],
  screenshots: [],
  repository: 'https://github.com/pankajj42/welth-finance-tracker',
  liveUrl: 'https://welth-finance-tracker.vercel.app',
}
