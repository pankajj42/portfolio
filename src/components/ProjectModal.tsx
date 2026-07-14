'use client'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import { X, ExternalLink, Code2 } from 'lucide-react'
import { GitHubIcon } from './icons/BrandIcons'
import type { Project } from '@/types'
import ScreenshotSlider from './FeaturedSlider/ScreenshotSlider'

const ease = [0.22, 1, 0.36, 1] as const

export default function ProjectModal({ project, onClose }: {
  project: Project | null
  onClose: () => void
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = project ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [project])

  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [onClose])

  useEffect(() => {
    if (project && scrollRef.current) scrollRef.current.scrollTop = 0
  }, [project])

  if (typeof window === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div key="bd"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel — slides up from bottom */}
          <motion.div key="panel"
            initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
            transition={{ duration: 0.5, ease }}
            className="fixed inset-x-0 bottom-0 top-[4vh] z-50 flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div ref={scrollRef}
              className="flex-1 bg-paper-card rounded-t-3xl shadow-modal overflow-y-auto">

              {/* Sticky toolbar */}
              <div className="sticky top-0 z-10 bg-paper-card/95 backdrop-blur-xl border-b border-edge px-6 lg:px-12 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button onClick={onClose}
                    className="w-9 h-9 rounded-full border border-edge flex items-center justify-center text-ink-2 hover:bg-paper-warm hover:text-ink transition-all">
                    <X size={15} />
                  </button>
                  <span className="label text-ink-4">Project Details</span>
                </div>
                <div className="flex gap-2">
                  <a href={project.repository} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-edge rounded-full label text-ink-2 hover:border-ink hover:text-ink transition-all">
                    <GitHubIcon size={12} /> GitHub
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent text-paper rounded-full label hover:bg-accent-dark transition-colors">
                      <ExternalLink size={12} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">

                {/* Title block */}
                <h2 className="font-display font-bold text-ink leading-tight mb-3"
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                  {project.displayName}
                </h2>
                <p className="text-lg font-display italic font-light text-ink-2 mb-4">
                  {project.tagline}
                </p>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 label-accent mb-8 hover:underline">
                    <ExternalLink size={11} /> {project.liveUrl}
                  </a>
                )}
                {!project.liveUrl && (
                  <a href={project.repository} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 label mb-8 hover:text-ink-2">
                    <Code2 size={11} /> {project.repository}
                  </a>
                )}

                <hr className="rule mb-10" />

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">

                  {/* Left: text */}
                  <div className="space-y-10">
                    <div>
                      <p className="label-accent mb-5">About</p>
                      <p className="text-base text-ink-2 leading-relaxed">{project.description}</p>
                    </div>

                    <div>
                      <p className="label-accent mb-5">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map(t => <span key={t} className="pill">{t}</span>)}
                      </div>
                    </div>

                    {project.features.length > 0 && (
                      <div>
                        <p className="label-accent mb-5">Key Design Decisions</p>
                        <div className="space-y-5">
                          {project.features.map((f, i) => (
                            <div key={i} className="flex gap-5">
                              <span className="label-accent mt-0.5 shrink-0">
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <p className="text-sm text-ink-2 leading-relaxed">{f}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: screenshots */}
                  <div>
                    <p className="label-accent mb-5">Screenshots</p>
                    <div className="h-80 lg:h-125">
                      <ScreenshotSlider
                        screenshots={project.screenshots}
                        projectName={project.displayName}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}
