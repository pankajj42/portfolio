'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/icons/BrandIcons'
import type { Project } from '@/types'

export default function ProjectCard({ project, onOpen, index }: {
  project: Project
  onOpen: (p: Project) => void
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        role="button" tabIndex={0}
        onClick={() => onOpen(project)}
        onKeyDown={e => e.key === 'Enter' && onOpen(project)}
        aria-label={`Open ${project.displayName}`}
        className="group relative flex flex-col bg-paper-card border border-edge rounded-2xl overflow-hidden cursor-pointer
                   hover:-translate-y-1 hover:shadow-lift-hover hover:border-accent/30
                   transition-all duration-300 h-full focus-visible:outline-2 focus-visible:outline-accent"
      >
        {/* Accent bar slides in on hover */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />

        {/* Screenshot preview — object-contain with blur bg */}
        <div className="relative aspect-video overflow-hidden border-b border-edge bg-neutral-950">
          {/* Blurred background fill */}
          <div
            aria-hidden
            className="absolute inset-0 scale-110"
            style={{
              backgroundImage: `url(${project.screenshots[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(20px)',
              opacity: 0.55,
            }}
          />
          {/* Full screenshot — contained */}
          <Image
            src={project.screenshots[0]}
            alt={project.displayName}
            fill
            className="object-contain group-hover:scale-[1.03] transition-transform duration-700"
            style={{ zIndex: 1 }}
            unoptimized
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          />
          {project.liveUrl && (
            <span className="absolute top-3 right-3 px-2 py-0.5 bg-emerald-500 text-white rounded-full label text-[9px] tracking-wider"
              style={{ zIndex: 2 }}>
              LIVE
            </span>
          )}
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-display font-bold text-xl text-ink leading-tight mb-1 group-hover:text-accent transition-colors duration-200">
            {project.displayName}
          </h3>
          <p className="text-xs text-ink-3 leading-relaxed mb-4 flex-1 line-clamp-2">
            {project.tagline}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.techStack.slice(0, 4).map(t => (
              <span key={t} className="px-2 py-0.5 rounded-full text-[0.65rem] font-mono font-medium bg-paper-warm text-ink-2 border border-edge">
                {t}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2 py-0.5 rounded-full text-[0.65rem] font-mono text-ink-4 border border-edge">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3.5 border-t border-edge">
            <div className="flex gap-1.5">
              <a href={project.repository} target="_blank" rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="w-7 h-7 rounded-full border border-edge flex items-center justify-center text-ink-3 hover:text-accent hover:border-accent/50 transition-all"
                aria-label="GitHub">
                <GitHubIcon size={12} />
              </a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="w-7 h-7 rounded-full border border-edge flex items-center justify-center text-ink-3 hover:text-accent hover:border-accent/50 transition-all"
                  aria-label="Live demo">
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
            <span className="label text-ink-4 group-hover:text-accent transition-colors">
              Details →
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
