import { config } from '@/content'
import { resolveScreenshots } from '@/lib/screenshots'
import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import type { Project } from '@/types'
import { cacheLife } from 'next/cache'

// This function's returned promise will be cached for 5 minutes (300 seconds)
async function getCachedProjects(): Promise<Project[]> {
  'use cache' // Instructs Next.js to cache this scope
  
  cacheLife({
    stale: 300,       // Keep the client-side router cache fresh for 5 minutes
    revalidate: 300,  // Background refresh on server if requested after 5 minutes
    expire: 3600      // Force hard reload of cache after 1 hour with no traffic
  })

  return Promise.all(
    config.projectOrder.map(async (p) => ({
      ...p,
      screenshots: await resolveScreenshots(p),
    }))
  )
}

export default async function HomePage() {
  const allProjects: Project[] = await getCachedProjects()

  console.log('Resolved projects:', allProjects.map(p => ({
    name: p.displayName,
    screenshots: p.screenshots.length,
  })))
  
  return (
    <>
      <NavBar config={config} />
      <main>
        <HeroSection config={config} />
      </main>
    </>
  )
}