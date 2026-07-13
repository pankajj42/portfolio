import type { SiteConfig } from '@/types'
import { projects } from './projects'

export const config: SiteConfig = {
  name: 'Pankaj Jangid',
  title: 'Software Engineer',
  tagline: 'Building reliable systems and thoughtful interfaces.',
  bio: 'Software Engineer with production experience at Arista Networks, building high-availability network OS infrastructure in C++ and Python. Full-stack developer with deep interest in distributed systems, microservices architecture, real-time applications, and AI integration. AI Enthusiast and a quick learner, always exploring new technologies and frameworks.',
  email: 'pankajjangid42@gmail.com',
  github: 'https://github.com/pankajj42',
  linkedin: 'https://www.linkedin.com/in/pankajj42',
  resumeUrl: '',
  location: 'India',
  availableForWork: true,

  // ── Featured: shown in horizontal slider on homepage ──────────────────────
  featuredProjects: [
    projects.notesGrpc,
    projects.bankingMicroservices,
    projects.ticketDashboard,
    projects.codeflexAi,
  ],

  // ── Full order: drives the all-projects grid ───────────────────────────────
  projectOrder: [
    projects.notesGrpc,
    projects.bankingMicroservices,
    projects.ticketDashboard,
    projects.welthFinanceTracker,
    projects.codeflexAi,
    projects.weatherApp,
    projects.realEstate,
    projects.chess,
    projects.slrParser,
    projects.liveVideoSurveillance,
    projects.socketIoChatApp,
    projects.springBootChatApp,
    projects.pedestrianDetection,
  ],
}
