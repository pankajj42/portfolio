'use client'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Project } from '@/types'
import ProjectSlide from './ProjectSlide'

interface Props { projects: Project[]; onOpen: (p: Project) => void }

export default function FeaturedSlider({ projects, onOpen }: Props) {
  const [ref, api] = useEmblaCarousel({ loop: false, align: 'start' })
  const [sel, setSel] = useState(0)
  const [canP, setCanP] = useState(false)
  const [canN, setCanN] = useState(true)

  const onSel = useCallback(() => {
    if (!api) return
    setSel(api.selectedScrollSnap())
    setCanP(api.canScrollPrev())
    setCanN(api.canScrollNext())
  }, [api])

  useEffect(() => {
    if (!api) return
    api.on('select', onSel)
    const raf = requestAnimationFrame(onSel)
    return () => {
      api.off('select', onSel)
      cancelAnimationFrame(raf)
    }
  }, [api, onSel])

  if (!projects.length) return null

  return (
    <section id="projects" className="py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="label-accent mb-3">01 — Selected Work</p>
            <h2 className="font-display font-bold text-ink"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
              Featured Projects
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[0.6rem] text-ink-4 tracking-widest">
              {String(sel + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              {[
                { fn: () => api?.scrollPrev(), can: canP, icon: <ChevronLeft size={16} />, label: 'Prev' },
                { fn: () => api?.scrollNext(), can: canN, icon: <ChevronRight size={16} />, label: 'Next' },
              ].map(b => (
                <button key={b.label} onClick={b.fn} disabled={!b.can} aria-label={b.label}
                  className="w-10 h-10 rounded-full border border-edge flex items-center justify-center text-ink-2 hover:border-accent hover:text-accent hover:bg-accent-light disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200">
                  {b.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="embla" ref={ref}>
          <div className="embla__container" style={{ gap: '1.5rem', display: 'flex' }}>
            {projects.map((p, i) => (
              <div key={p.id} className="embla__slide" style={{ minHeight: 560 }}>
                <ProjectSlide project={p} onOpen={onOpen} active={i === sel} index={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button key={i} onClick={() => api?.scrollTo(i)} aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === sel ? 'w-8 h-1.5 bg-accent' : 'w-1.5 h-1.5 bg-edge-strong hover:bg-accent/50'
              }`} />
          ))}
        </div>
      </div>
    </section>
  )
}
