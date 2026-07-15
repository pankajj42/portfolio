import type { Project, SiteConfig } from '@/types'
import fs from 'fs'
import path from 'path'

// Stable local disk path to share calculated data across parallel build workers
const CACHE_FILE_PATH = path.join(process.cwd(), '.next', 'cache', 'resolved-projects-dump.json')

function parseRepo(repository: string): { owner: string; repo: string } | null {
  const m = repository.match(/github\.com\/([^/]+)\/([^/?#]+)/)
  if (!m) return null
  return { owner: m[1], repo: m[2].replace(/\.git$/, '') }
}

/**
 * Fetches the directory listing from GitHub exactly ONCE per repo.
 * Avoids brute-forcing dozens of HEAD requests.
 */
async function fetchRepoScreenshots(owner: string, repo: string): Promise<string[]> {
  try {
    // GitHub public API endpoint to list folder contents
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/screenshots`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'NextJS-Build-Agent'
      },
      next: { revalidate: 3600 } // Cache the GitHub structural response for 1 hour
    })

    if (!response.ok) return []

    const files = await response.json()
    if (!Array.isArray(files)) return []

    // Filter for valid image formats and map them to their raw delivery URLs
    return files
      .filter(file => {
        const ext = file.name.split('.').pop()?.toLowerCase()
        return file.type === 'file' && ['png', 'jpg', 'jpeg', 'webp'].includes(ext || '')
      })
      .map(file => file.download_url)
  } catch (error) {
    console.error(`✕ Failed to read screenshot directory for ${owner}/${repo}:`, error)
    return []
  }
}

export async function resolveScreenshots(project: Project): Promise<string[]> {
  // 1. Priority 1: If explicitly defined in the config, use it directly (0 network hits)
  if (project.screenshots && project.screenshots.length > 0) {
    return project.screenshots
  }

  const parsed = parseRepo(project.repository)
  if (!parsed) return []

  const { owner, repo } = parsed

  // 2. Priority 2: Fetch the directory structure via a single API hit
  const foundUrls = await fetchRepoScreenshots(owner, repo)
  if (foundUrls.length > 0) return foundUrls

  // 3. Priority 3: OG fallback if no screenshots folder exists
  return [`https://opengraph.githubassets.com/1/${owner}/${repo}`]
}

/**
 * Handles cross-worker coordination for static exports using an atomic lock flag ('wx')
 */
export async function getCachedProjects(config: SiteConfig): Promise<Project[]> {
  const dir = path.dirname(CACHE_FILE_PATH)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  const lockFilePath = `${CACHE_FILE_PATH}.lock`

  // 1. If a worker already completed the build compilation, read it instantly
  if (fs.existsSync(CACHE_FILE_PATH)) {
    try {
      return JSON.parse(fs.readFileSync(CACHE_FILE_PATH, 'utf-8'))
    } catch {
      // Fall through if file is corrupt
    }
  }

  // 2. Atomic lock acquisition: 'wx' will throw an error if the file already exists,
  // preventing race conditions between parallel workers checking at the exact same millisecond.
  try {
    fs.writeFileSync(lockFilePath, 'locked', { flag: 'wx' })
    
    // We are the winning worker thread -> compute exactly once
    const resolvedProjects = await Promise.all(
      config.projectOrder.map(async (p) => {
        const screenshots = await resolveScreenshots(p)
        console.log(`✓ [Worker] Documented ${p.displayName} (${screenshots.length} assets)`)
        return { ...p, screenshots }
      })
    )

    fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(resolvedProjects), 'utf-8')
    return resolvedProjects

  } catch (err: unknown) {
    // If code is 'EEXIST', another worker beat us to creating the lock file.
    // Wait for that worker to finish writing the final payload.
    if (err instanceof Error && (err as NodeJS.ErrnoException).code === 'EEXIST') {
      let retries = 0
      while (!fs.existsSync(CACHE_FILE_PATH) && retries < 60) {
        await new Promise(res => setTimeout(res, 500))
        retries++
      }
      return JSON.parse(fs.readFileSync(CACHE_FILE_PATH, 'utf-8'))
    }
    throw err
  } finally {
    // Clean up the lock file safely if this thread created it
    try {
      if (fs.existsSync(lockFilePath)) {
        fs.unlinkSync(lockFilePath)
      }
    } catch {}
  }
}