import type { Project } from './project'

export interface SiteConfig {
  name: string
  title: string
  tagline: string
  bio: string
  email: string
  github: string
  linkedin: string
  resumeUrl: string
  location: string
  availableForWork: boolean
  /** Shown in the featured horizontal slider, in order */
  featuredProjects: Project[]
  /** Full display order for all-projects grid */
  projectOrder: Project[]
}
