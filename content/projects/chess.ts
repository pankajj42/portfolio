import type { Project } from '@/types'

export const chessProject: Project = {
  id: 'chess',
  slug: 'chess',
  displayName: 'Chess Platform',
  tagline: 'Multiplayer chess: dedicated WebSocket server, Redis move queue, Elo rating, GitHub/Google OAuth.',
  description: 'A TypeScript Turborepo monorepo chess platform with clean service separation: React frontend, REST backend (auth + data), and a dedicated WebSocket server for real-time move handling. Redis queues all moves per game for fast retrieval and replay. Supports matchmaking and a standard Elo rating system.',
  techStack: [
    'TypeScript', 'React', 'Node.js', 'WebSockets', 'Redis',
    'PostgreSQL', 'GitHub OAuth', 'Google OAuth', 'Turborepo', 'Husky', 'commitlint',
  ],
  features: [
    'Dedicated WebSocket server fully separate from REST backend — clean separation of real-time and CRUD concerns',
    'Redis move queue — all moves per game stored in Redis for fast retrieval and replay',
    'Matchmaking — connect to an existing waiting game or create a new one',
    'Elo rating system — rating adjusts based on outcome and opponent strength',
    'GitHub and Google OAuth authentication',
    'Turborepo monorepo with Husky + commitlint enforcing conventional commits',
  ],
  screenshots: [],
  repository: 'https://github.com/pankajj42/Chess',
  liveUrl: '',
}
