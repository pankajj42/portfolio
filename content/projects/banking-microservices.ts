import type { Project } from '@/types'

export const bankingMicroservicesProject: Project = {
  id: 'bankingMicroservices',
  slug: 'banking-microservices',
  displayName: 'Banking Platform — Microservices',
  tagline: '8-service banking system: Kafka, Outbox Pattern, Saga choreography, HMAC webhooks, pessimistic locking.',
  description: 'A production-grade microservices banking platform in Java 21 + Spring Boot 3.3. Features OTP login, internal transfers, async external transfers via a mock payment gateway with Saga compensation on failure, an immutable ledger, and HMAC-signed webhooks. Five isolated PostgreSQL databases, Apache Kafka for async messaging, Redis for rate limiting, Flyway for migrations, and Testcontainers for integration tests.',
  techStack: [
    'Java 21', 'Spring Boot 3.3', 'Spring Cloud Gateway', 'Apache Kafka',
    'PostgreSQL ×5', 'Redis', 'Flyway', 'MapStruct', 'React 18',
    'Tailwind CSS', 'Docker Compose', 'Testcontainers', 'Mailhog',
  ],
  features: [
    '8 services — api-gateway (WebFlux/Netty reactive), auth-service, account-service, ledger-service, webhook-service, mail-service, mock-payment-service, React frontend',
    'RSA JWT — auth-service signs with private key and exposes JWKS endpoint; gateway auto-fetches and caches public key — private key never leaves auth',
    'HMAC-SHA256 webhook verification at the gateway using constant-time MessageDigest.isEqual() — prevents timing attacks',
    'Outbox Pattern — webhook record + outbox row written in single transaction; scheduled publisher polls every 5s — guarantees delivery even if Kafka is temporarily down',
    'Saga Choreography — reserve funds (available→held) → external call → on success finalise, on failure release compensation',
    'Pessimistic write locking with SELECT FOR UPDATE and deterministic UUID-order lock acquisition — eliminates deadlocks on concurrent A→B / B→A transfers',
    'Idempotency keys on ledger-service — Idempotency-Key header + UNIQUE DB constraint — duplicate requests safely return existing transaction',
    'Immutable ledger — transaction_events table is INSERT-only with all columns marked updatable=false in JPA — untamperable audit trail',
  ],
  screenshots: [],
  repository: 'https://github.com/pankajj42/BankingMicroservices',
  liveUrl: '',
}
