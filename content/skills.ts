
import type { SkillCategory } from '@/types'

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    icon: 'code',
    skills: ['C++', 'Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Backend & APIs',
    icon: 'server',
    skills: ['Node.js', 'Express.js', 'Hono', 'Spring Boot', 'REST APIs', 'gRPC', 'WebSockets', 'OpenAPI Spec', 'Microservices'],
  },
  {
    category: 'Frontend',
    icon: 'monitor',
    skills: ['React', 'Next.js', 'React Native', 'Expo', 'Tailwind CSS', 'Shadcn UI', 'Recoil', 'TanStack Query'],
  },
  {
    category: 'Databases & Data Access',
    icon: 'database',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'JDBC', 'PostGIS'],
  },
  {
    category: 'Messaging & Distributed Systems',
    icon: 'workflow',
    skills: ['Kafka', 'BullMQ', 'Event-Driven Architecture', 'Saga Pattern', 'Outbox Pattern', 'Concurrent Processing', 'IPC'],
  },
  {
    category: 'Infrastructure & Cloud',
    icon: 'cloud',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Cloudflare Workers', 'CI/CD', 'Turborepo', 'Inngest', 'Convex'],
  },
  {
    category: 'Observability & Performance',
    icon: 'activity',
    skills: ['Prometheus', 'Grafana', 'k6', 'Performance Testing'],
  },
  {
    category: 'Systems & Low-level',
    icon: 'cpu',
    skills: ['OS Internals', 'CAPI', 'CUDA Threads', 'EOS (Arista)'],
  },
  {
    category: 'Architecture & Design Patterns',
    icon: 'layers',
    skills: ['Microservices', 'Saga', 'Outbox Pattern', 'Repository Pattern', 'Distributed Systems'],
  },
  {
    category: 'Testing & Security',
    icon: 'shield-check',
    skills: ['Jest', 'Vitest', 'Testcontainers', 'OAuth 2.0', 'JWT (RS256/HS256)', 'AES-256-GCM', 'Argon2id'],
  },
  {
    category: 'AI & Emerging',
    icon: 'zap',
    skills: ['Gemini AI', 'vapi.ai', 'LLM Integration', 'AI Voice Agents'],
  },
  {
    category: 'Communication',
    icon: 'globe',
    skills: ['English (Professional)', 'Hindi (Native)'],
  },
]
