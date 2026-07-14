import { config, skills, experience } from '@/content'
import PortfolioHome from '@/components/PortfolioHome'
import type { Project } from '@/types'
import { getCachedProjects } from '@/lib/screenshots'
import Footer from '@/components/Footer'

export default async function HomePage() {
  const allProjects: Project[] = await getCachedProjects(config)
  // config.featuredProjects does not have resolved screenshots,
  // so we need to filter from allProjects to get the full data
  const featuredIds = new Set(config.featuredProjects.map((p) => p.id))
  const featuredProjects = allProjects.filter((p) => featuredIds.has(p.id))

  return (
    <>
      <PortfolioHome
        config={config}
        skills={skills}
        experience={experience}
        featuredProjects={featuredProjects}
        allProjects={allProjects}
      />
      <Footer config={config} />
    </>
  )
}