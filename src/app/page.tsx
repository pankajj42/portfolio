import { config } from '@/content'
import { resolveScreenshots } from '@/lib/screenshots'
import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import FeaturedSlider from '@/components/FeaturedSlider'
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
    config.projectOrder.map(async (p) => {
      const screenshots = await resolveScreenshots(p)
      console.log('Resolved project:',{
        name: p.displayName,
        screenshots: screenshots.length,
      })
      return {
        ...p,
        screenshots
      }
    })
  )
}

export default async function HomePage() {
  const allProjects: Project[] = await getCachedProjects()
  const featuredIds = new Set(config.featuredProjects.map((p) => p.id))
  const featuredProjects = allProjects.filter((p) => featuredIds.has(p.id))

  return (
    <>
      <NavBar config={config} />
      <main>
        <HeroSection config={config} />
        {featuredProjects.length > 0 && (
          <FeaturedSlider projects={featuredProjects} onOpen={() => {}} />
        )}
      </main>
    </>
  )
}