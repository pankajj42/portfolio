'use client'
import { useState } from 'react'
import type { SiteConfig, SkillCategory, Experience, Project } from '@/types'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import FeaturedSlider from './FeaturedSlider'
import ProjectModal from './ProjectModal'

interface Props {
  config: SiteConfig
  skills: SkillCategory[]
  experience: Experience[]
  featuredProjects: Project[]
  allProjects: Project[]
}

export default function PortfolioHome({
  config, skills, experience, featuredProjects, allProjects,
}: Props) {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
      <NavBar config={config} />
      <main>
        <HeroSection config={config} />
        {featuredProjects.length > 0 && (
          <FeaturedSlider projects={featuredProjects} onOpen={setSelected} />
        )}
      </main>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  )
}
