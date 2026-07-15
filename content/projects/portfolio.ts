import type { Project } from '@/types'

export const portfolioProject: Project = {
  id: 'portfolio',
  slug: 'portfolio',
  displayName: 'My Portfolio',
  tagline: 'Statically-exported Next.js portfolio with a TypeScript content layer and auto screenshot detection.',
  description: 'The site you are viewing right now. A statically-exported Next.js 16 portfolio where all content lives in TypeScript files co-located with the code — no CMS, no database, no admin UI. Adding a new project is one .ts file and two index entries. Screenshots are auto-detected at build time from each repo\'s /screenshots/ directory via HEAD requests, with GitHub OG card as fallback. Deployed to Vercel\'s global CDN with zero server costs.',
  techStack: [
    'Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4',
    'motion', 'Embla Carousel', 'yet-another-react-lightbox', 'Lucide React', 'Vercel',
  ],
  features: [
    'TypeScript content layer — all portfolio data (projects, skills, experience) in .ts files with full type safety; co-located in content/ alongside source code',
    'Static export (output: "export") — no Node.js server at runtime; pure HTML/CSS/JS served from Vercel CDN; zero ongoing server costs',
    'Auto screenshot detection — build-time HEAD requests probe each repo\'s /screenshots/01.png, 02.png, ... with GitHub Open Graph card as automatic fallback',
    'Tailwind v4 CSS-first config — @theme block in globals.css replaces tailwind.config.ts entirely; @utility API for design tokens like .label, .pill, .rule-fade',
    'motion/react animations — staggered hero entrance with custom easing, scroll-triggered sections via useInView, slide-up project modal',
    'Featured slider via Embla Carousel — horizontal scroll with overlay prev/next buttons, dot indicators, and per-slide inactive dimming',
    'Full-screen screenshot lightbox — click any screenshot to open yet-another-react-lightbox with pinch/scroll-wheel zoom and keyboard navigation',
    'Adding a new project: create content/projects/my-project.ts, add two lines to index files — no config changes, no CMS login',
  ],
  screenshots: [],
  repository: 'https://github.com/pankajj42/portfolio',
  liveUrl: '',
}