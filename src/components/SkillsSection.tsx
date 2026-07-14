'use client'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import type { SkillCategory } from '@/types'

export default function SkillsSection({ skills }: { skills: SkillCategory[] }) {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  if (!skills.length) return null

  return (
    <section id="skills" ref={ref} className="py-24 px-6 lg:px-10 bg-ink text-paper">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-ink-3 mb-4">
            03 — Expertise
          </p>
          <h2 className="font-display font-bold text-paper"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
            Skills &amp;{' '}
            <span className="italic font-light text-ink-3">Technologies</span>
          </h2>
        </motion.div>

        {/* Row-per-category layout */}
        <div className="space-y-0 divide-y divide-white/10">
          {skills.map((cat, i) => (
            <motion.div key={cat.category}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-5 hover:bg-white/2 px-2 rounded-lg transition-colors"
            >
              {/* Category label */}
              <div className="sm:w-48 shrink-0">
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink-3 group-hover:text-accent transition-colors duration-200">
                  {cat.category}
                </span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <motion.span key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.06 + j * 0.02 }}
                    className="px-3 py-1.5 rounded-full text-xs font-mono text-paper/70 border border-white/10 hover:border-accent/60 hover:text-paper hover:bg-accent/10 transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
