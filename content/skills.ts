import type { SkillCategory } from '@/types'

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    icon: 'code',
    skills: ['C++', 'Python', 'Java', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Backend & APIs',
    icon: 'server',
    skills: ['Node.js', 'Express.js', 'Hono', 'Spring Boot', 'gRPC', 'WebSockets', 'OpenAPI Spec'],
  },
  {
    category: 'Frontend',
    icon: 'monitor',
    skills: ['React', 'Next.js', 'TailwindCSS', 'Shadcn UI', 'Recoil', 'TanStack Query'],
  },
  {
    category: 'Databases',
    icon: 'database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'JDBC', 'PostGIS'],
  },
  {
    category: 'Infrastructure',
    icon: 'cloud',
    skills: ['Docker', 'Kubernetes', 'Kafka', 'CI/CD', 'AWS', 'Cloudflare Workers', 'Turborepo'],
  },
  {
    category: 'Systems & Low-level',
    icon: 'cpu',
    skills: ['OS Internals', 'IPC', 'Concurrent Processing', 'CUDA Threads', 'CAPI', 'EOS (Arista)'],
  },
  {
    category: 'Patterns & Testing',
    icon: 'activity',
    skills: ['Microservices', 'Saga', 'Outbox Pattern', 'Repository Pattern', 'Vitest', 'Testcontainers', 'k6'],
  },
  {
    category: 'AI & Emerging',
    icon: 'zap',
    skills: ['Gemini AI', 'vapi.ai', 'LLM Integration', 'Inngest', 'Convex'],
  },
]
