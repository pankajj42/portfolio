import type { Project, SiteConfig } from '@/types'
import { cacheLife } from 'next/cache'

const GITHUB_RAW = 'https://raw.githubusercontent.com'
const EXTENSIONS = ['png', 'jpg', 'jpeg', 'webp']
const DEFAULT_BRANCHES = ['main', 'master']
const MAX_SCREENSHOTS = 20

function parseRepo(repository: string): { owner: string; repo: string } | null {
  const m = repository.match(/github\.com\/([^/]+)\/([^/?#]+)/)
  if (!m) return null
  return { owner: m[1], repo: m[2].replace(/\.git$/, '') }
}

async function headOk(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { method: 'HEAD' })
    return res.ok
  } catch {
    return false
  }
}

/**
 * Resolves screenshots for a project at build time.
 *
 * Priority:
 *  1. Explicit URLs in project.screenshots → use as-is
 *  2. Auto-detect from {repo}/main/screenshots/01.png, 02.png, ...
 *  3. GitHub Open Graph card (always works, no auth)
 */
export async function resolveScreenshots(project: Project): Promise<string[]> {
  // 1. Explicit screenshots — use directly
  if (project.screenshots.length > 0) return project.screenshots

  const parsed = parseRepo(project.repository)
  if (!parsed) return []

  const { owner, repo } = parsed
  const base = `${GITHUB_RAW}/${owner}/${repo}`

  // 2. Try 01.png, 01.jpg, ... 02.png, 02.jpg, ... (stop at first gap)
  const found: string[] = []
  for (let i = 1; i <= MAX_SCREENSHOTS; i++) {
    const n = String(i).padStart(2, '0')
    let fileFound = false
    for (const branch of DEFAULT_BRANCHES) {
      for (const ext of EXTENSIONS) {
        const url = `${base}/${branch}/screenshots/${n}.${ext}`
        if (await headOk(url)) {
          found.push(url)
          fileFound = true
          break
        }
      }
      if (fileFound) break
    }
    if (!fileFound) break
  }

  if (found.length > 0) return found

  // 3. OG card fallback
  return [`https://opengraph.githubassets.com/1/${owner}/${repo}`]
}

// This function's returned promise will be cached for 5 minutes (300 seconds)
export async function getCachedProjects( config : SiteConfig ): Promise<Project[]> {
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