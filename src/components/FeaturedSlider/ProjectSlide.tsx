'use client'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { GitHubIcon, AndroidIcon, AppleIcon } from '../icons/BrandIcons'
import type { Project } from '@/types'
import ScreenshotSlider from './ScreenshotSlider'

interface Props {
  project: Project
  onOpen: (p: Project) => void
  active: boolean
  index: number
}

export default function ProjectSlide({ project, onOpen, active, index }: Props) {
  return (
    <div className={`w-full h-full transition-all duration-700 ${
      active ? 'opacity-100 scale-100' : 'opacity-30 scale-[0.99]'
    }`}>
      <div className="bg-paper-card border border-edge rounded-3xl overflow-hidden h-full shadow-lift hover:shadow-lift-hover transition-shadow duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] h-full">

          {/* ── Left: Info ─────────────────────────────────────────────── */}
          <div className="flex flex-col p-5 lg:p-7 overflow-y-auto">
            <p className="label-accent mb-5">
              {String(index + 1).padStart(2, '0')} — Featured Project
            </p>

            <h3 className="font-display font-bold text-ink leading-tight mb-3"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}>
              {project.displayName}
            </h3>
            <p className="text-sm text-ink-3 mb-6">{project.tagline}</p>

            <hr className="rule mb-6" />

            <p className="text-sm text-ink-2 leading-relaxed mb-7 whitespace-pre-line">{project.description}</p>

            {/* Stack */}
            <div className="mb-7">
              <p className="label mb-3">Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map(t => <span key={t} className="pill">{t}</span>)}
              </div>
            </div>

            {/* Features */}
            {project.features.length > 0 && (
              <div className="mb-7">
                <p className="label mb-4">Key Design Decisions</p>
                <ul className="space-y-3">
                  {project.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="flex gap-3 text-sm text-ink-2 leading-snug">
                      <span className="label-accent mt-0.5 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {f}
                    </li>
                  ))}
                  {project.features.length > 4 && (
                    <li className="label text-ink-4 pl-8">
                      +{project.features.length - 4} more
                    </li>
                  )}
                </ul>
              </div>
            )}

            <div className="flex-1" />

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-edge">
              <a href={project.repository} target="_blank" rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-edge label text-ink-2 rounded-full hover:border-ink hover:text-ink transition-all duration-200">
                <GitHubIcon size={12} /> Code
              </a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-edge label text-ink-2 rounded-full hover:border-ink hover:text-ink transition-all duration-200">
                  <ExternalLink size={12} /> Live
                </a>
              )}
              {project.androidUrl && (
                <a href={project.androidUrl} target="_blank" rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="w-8 h-8 rounded-full border border-edge flex items-center justify-center text-ink-3 hover:text-accent hover:border-accent/50 transition-all"
                  aria-label="Android app">
                  <AndroidIcon size={13} />
                </a>
              )}
              {project.appleUrl && (
                <a href={project.appleUrl} target="_blank" rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="w-8 h-8 rounded-full border border-edge flex items-center justify-center text-ink-3 hover:text-accent hover:border-accent/50 transition-all"
                  aria-label="iOS app">
                  <AppleIcon size={13} />
                </a>
              )}
              <button onClick={() => onOpen(project)}
                className="group ml-auto inline-flex items-center gap-2 px-5 py-2 bg-accent text-paper label rounded-full hover:bg-accent-dark active:scale-95 transition-all duration-200">
                Full Details
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* ── Right: Screenshots ──────────────────────────────────────── */}
          <div className="hidden lg:flex flex-col border-l border-edge bg-paper-warm p-6 min-h-64">
            <ScreenshotSlider
              screenshots={project.screenshots}
              projectName={project.displayName}
              priority={active && index === 0}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
