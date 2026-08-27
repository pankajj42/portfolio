import type { SiteConfig } from '@/types'
import { projects } from './projects'

export const config: SiteConfig = {
  name: 'Pankaj Jangid',
  title: 'Software Engineer',
  tagline: 'Building reliable systems and thoughtful interfaces.',
  bio: `Software Engineer with production experience at Arista Networks, building high-availability network OS infrastructure in C++ and Python. After Arista, I spent several years as a UPSC Civil Services aspirant (Mathematics Optional) — a pursuit I concluded in 2025 before returning full-time to software engineering.
  
  Full-stack developer with deep interest in distributed systems, microservices architecture, real-time applications, and AI integration.
  
  AI Enthusiast and a quick learner, always exploring new technologies and frameworks.`,
  email: 'pankajjangid42@gmail.com',
  github: 'https://github.com/pankajj42',
  linkedin: 'https://linkedin.com/in/pankajj42',
  resumeUrl: '',
  location: 'India',
  availableForWork: true,

  // ── Featured: shown in horizontal slider on homepage ──────────────────────
  featuredProjects: [
    projects.vaulty,
    projects.notesGrpc,
    projects.bankingMicroservices,
    projects.ticketDashboard,
    projects.codeflexAi,
  ],

  // ── Full order: drives the all-projects grid ───────────────────────────────
  projectOrder: [
    projects.vaulty,
    projects.notesGrpc,
    projects.bankingMicroservices,
    projects.ticketDashboard,
    projects.welthFinanceTracker,
    projects.codeflexAi,
    projects.portfolio,
    projects.weatherApp,
    projects.slrParser,
    projects.socketIoChatApp,
    projects.springBootChatApp,
    projects.pedestrianDetection,
    projects.liveVideoSurveillance,
    projects.realEstate,
    projects.chess,
  ],
}
