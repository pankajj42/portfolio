export interface Project {
  id: string
  slug: string
  displayName: string
  tagline: string
  description: string
  techStack: string[]
  features: string[]
  /** Explicit screenshot URLs. Leave [] to auto-detect from repo /screenshots/01.png, 02.png... */
  screenshots: string[]
  repository: string
  liveUrl: string
  androidUrl?: string
  appleUrl?: string
}
