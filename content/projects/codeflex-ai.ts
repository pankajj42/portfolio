import type { Project } from '@/types'

export const codeflexAiProject: Project = {
  id: 'codeflexAi',
  slug: 'codeflex-ai',
  displayName: 'Codeflex — AI Fitness Trainer',
  tagline: 'Voice AI personal trainer: voice intake via vapi.ai, personalised plans via Gemini AI, Convex real-time DB.',
  description: 'An AI fitness assistant where users have a voice conversation via vapi.ai to share their goals, physical condition, injuries, and dietary preferences. Gemini AI generates a personalised workout and diet plan in real time. Convex provides a reactive real-time database so plans update without polling.',
  techStack: [
    'Next.js', 'TypeScript', 'Shadcn UI', 'vapi.ai',
    'Gemini AI', 'Convex', 'Clerk', 'Tailwind CSS', 'Vercel',
  ],
  features: [
    'Voice AI intake via vapi.ai — natural-language conversation collects fitness goals, injuries, and dietary preferences',
    'Gemini AI plan generation — personalised workout routines and diet recommendations generated in real time',
    'Convex real-time database — reactive data layer, plans update live without manual polling',
    'Clerk authentication with GitHub, Google, and email social login',
    'Multiple program support with one active program at a time',
  ],
  screenshots: [
    'https://raw.githubusercontent.com/pankajj42/codeflex.ai/main/public/screenshot-for-readme.png',
  ],
  repository: 'https://github.com/pankajj42/codeflex.ai',
  liveUrl: 'https://codeflex-ai-umber.vercel.app',
}
