import type { Project } from '@/types'

export const realEstateProject: Project = {
  id: 'realEstate',
  slug: 'real-estate',
  displayName: 'Real Estate Rental Platform',
  tagline: 'Rental listings with PostGIS geo-queries, Mapbox maps, and full AWS deployment stack.',
  description: 'A Next.js rental listings platform with interactive Mapbox maps, PostGIS for geospatial storage, AWS Cognito for authentication, and a full AWS production deployment: frontend on Amplify, backend on EC2 inside a VPC, database on RDS PostgreSQL, and images on S3.',
  techStack: [
    'Next.js', 'TypeScript', 'Redux Toolkit', 'Express',
    'PostgreSQL + PostGIS', 'Prisma', 'Mapbox', 'AWS Cognito',
    'AWS Amplify', 'AWS EC2', 'AWS RDS', 'AWS S3', 'VPC',
  ],
  features: [
    'Mapbox interactive map — listings rendered as pins with click-to-expand detail cards',
    'PostGIS geospatial extension — coordinates stored natively, enabling distance-based spatial queries',
    'AWS Cognito + Amplify authentication with user pool and JWT token management',
    'VPC deployment — EC2 backend in private subnets with custom route tables and security groups',
    'S3 for property image uploads, RDS PostgreSQL for production data',
    'Redux Toolkit for complex client-side state across listings and filters',
  ],
  screenshots: [],
  repository: 'https://github.com/pankajj42/RealEstate',
  liveUrl: '',
}
