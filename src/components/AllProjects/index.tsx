'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import type { Project } from '@/types'
import ProjectCard from './ProjectCard'
import ProjectModal from '../ProjectModal'

interface Props {
  projects: Project[]
  showAll?: boolean
  onOpen?: (p: Project) => void
}

export default function AllProjectsSection({ projects, showAll = false, onOpen: ext }: Props) {
  const [search, setSearch] = useState('')
  const [sel, setSel] = useState<Project | null>(null)
  const open = ext ?? setSel

  const list = useMemo(() => {
    let l = showAll ? projects : projects.slice(0, 9)
    if (search) {
      const q = search.toLowerCase()
      l = l.filter(p =>
        p.displayName.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.techStack.some(t => t.toLowerCase().includes(q))
      )
    }
    return l
  }, [projects, showAll, search])

  return (
    <>
      <section className={`px-6 lg:px-10 ${showAll ? 'py-12' : 'py-20'}`}>
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12">
            <div>
              {!showAll && <p className="label-accent mb-3">02 — All Work</p>}
              <h2 className="font-display font-bold text-ink"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
                {showAll ? 'All Projects' : 'More Projects'}
              </h2>
              <p className="font-mono text-[0.65rem] text-ink-3 mt-1 tracking-wider">
                {projects.length} repositories
              </p>
            </div>

            {showAll && (
              <div className="relative">
                <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-3" />
                <input
                  type="text"
                  placeholder="Search by name or tech..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="pl-9 pr-4 py-2.5 text-sm bg-paper-card border border-edge rounded-full text-ink placeholder:text-ink-4 focus:outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/10 w-56 transition-all"
                />
              </div>
            )}
          </div>

          {/* Grid */}
          {list.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {list.map((p, i) => (
                <ProjectCard key={p.id} project={p} onOpen={open} index={i} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="label text-ink-4">No projects match your search.</p>
            </div>
          )}

          {/* View all link — only on home */}
          {!showAll && projects.length > 9 && (
            <div className="text-center mt-12">
              <Link href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 border border-edge rounded-full label text-ink-2 hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-200">
                View all {projects.length} projects →
              </Link>
            </div>
          )}
        </div>
      </section>

      {!ext && <ProjectModal project={sel} onClose={() => setSel(null)} />}
    </>
  )
}
