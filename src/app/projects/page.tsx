import { config } from '@/content'
import { getCachedProjects } from '@/lib/screenshots'
import NavBar from '@/components/NavBar'
import AllProjectsSection from '@/components/AllProjects'
import type { Project } from '@/types'
import Footer from '@/components/Footer'

export const metadata = { title: 'All Projects — Pankaj Jangid' }

export default async function ProjectsPage() {
  const allProjects: Project[] = await getCachedProjects(config)

  return (
    <>
      <NavBar config={config} />
      <main className="pt-20 min-h-screen">
        <AllProjectsSection projects={allProjects} showAll />
      </main>
      <Footer config={config} />
    </>
  )
}
