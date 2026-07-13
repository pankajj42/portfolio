import type { Project } from '@/types'

export const ticketDashboardProject: Project = {
  id: 'ticketDashboard',
  slug: 'ticket-dashboard',
  displayName: 'TicketDashboard',
  tagline: 'Kanban project management: passwordless auth, multi-device sessions, Socket.IO Redis scaling.',
  description: 'End-to-end ticketing platform in a Turborepo monorepo. Passwordless OTP login with short-lived access JWTs (memory-only) and long-lived refresh cookies (HttpOnly, DB-persisted). Multi-device session management with server-side revocation. Real-time Kanban via Socket.IO with a Redis adapter for horizontal scalability. BullMQ handles email delivery with retry logic.',
  techStack: [
    'TypeScript', 'Node.js', 'Express 5', 'React 19', 'Vite',
    'Prisma', 'PostgreSQL', 'Redis', 'BullMQ', 'Socket.IO',
    'dnd-kit', 'Zustand', 'Tailwind CSS', 'Turborepo', 'Docker',
  ],
  features: [
    'Passwordless OTP login — access JWT (short-lived, memory-only in Zustand) + refresh token (30-day HttpOnly cookie, DB-persisted)',
    'Multi-device session management — list active logins, identify current device, revoke individual sessions or all at once',
    'Real-time Kanban with drag-and-drop via dnd-kit — Socket.IO rooms scoped per project and per user',
    'Socket.IO Redis adapter — shared event bus across multiple Node.js instances enables horizontal scaling',
    'BullMQ email queue — OTP and offline notification emails with priorities and automatic retry',
    'Admin elevation — short-lived admin JWT allowlisted in Redis with per-user single-session lock',
    'Repository + Factory + Strategy + Singleton + Adapter + Mapper + Facade + Command design patterns',
    'Shared @repo/shared package — Zod schemas, TypeScript types, and constants used by both apps',
  ],
  screenshots: [],
  repository: 'https://github.com/pankajj42/TicketDashboard',
  liveUrl: '',
}
