import type { Project } from '@/types'

export const notesGrpcProject: Project = {
  id: 'notesGrpc',
  slug: 'notes-grpc',
  displayName: 'Notes — gRPC Microservices',
  tagline: 'Production-grade notes app: microservices, gRPC, RS256 JWT, Kubernetes, k6 load testing.',
  description: 'A fully production-architected notes application built as a microservice system. Internal services communicate over gRPC (binary Protobuf, HTTP/2 multiplexing). The API Gateway handles all public-facing REST, while Auth and Notes services are isolated with their own PostgreSQL databases. Authentication uses RS256 asymmetric JWTs — private key never leaves the auth service — with refresh token rotation and reuse detection that auto-revokes compromised sessions. Deployed on Kubernetes and load tested with k6.',
  techStack: [
    'TypeScript', 'Node.js 24', 'gRPC', 'React 19', 'MUI v7',
    'TanStack Query', 'TanStack Router', 'Prisma', 'PostgreSQL',
    'Zustand', 'pnpm Workspaces', 'Vitest', 'Docker', 'Kubernetes', 'k6',
  ],
  features: [
    'gRPC internal transport — binary Protobuf over HTTP/2 multiplexing, far faster than REST+JSON for service-to-service calls',
    'RS256 asymmetric JWT — auth-service signs with private key; gateway verifies via /auth/public-key endpoint — private key never shared between services',
    'Refresh token rotation + reuse detection — presenting a rotated token immediately revokes the entire session, flagging potential token theft',
    'Per-device session management — list active logins, identify current device via sid JWT claim, revoke individual or all sessions',
    'Two note types — TEXT (markdown body) and LIST (checklist with moveCheckedToEnd ordering logic)',
    'pnpm workspaces monorepo — apps/gateway, apps/auth, apps/notes, apps/web, packages/proto, packages/grpc-clients, packages/shared-types',
    'Three-tier Vitest test suites — unit, integration (Docker DB), and e2e',
    'Kubernetes manifests with HPA (CPU + custom RPS metrics) and k6 load testing scripts',
  ],
  screenshots: [],
  repository: 'https://github.com/pankajj42/notes_grpc',
  liveUrl: '',
}
