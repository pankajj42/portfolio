export type ExperienceType = 'fulltime' | 'intern'

export interface Experience {
  company: string
  companyUrl: string
  role: string
  type: ExperienceType
  period: string
  location: string
  highlights: string[]
}
