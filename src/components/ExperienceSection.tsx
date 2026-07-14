'use client'
import { motion } from 'motion/react'
import { ExternalLink } from 'lucide-react'
import type { Experience } from '@/types'

export default function ExperienceSection({ experience }: { experience: Experience[] }) {
  if (!experience.length) return null
  return (
    <section id="experience" className="py-24 px-6 lg:px-10 bg-paper-warm border-t border-edge">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="label-accent mb-3">04 — History</p>
          <h2 className="font-display font-bold text-ink"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
            Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-0">
          {/* Sticky label */}
          <div className="hidden lg:block pt-2">
            <div className="sticky top-24">
              <p className="label text-ink-4 leading-relaxed">
                Professional<br />Background
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-paper-card border border-edge rounded-2xl p-7 lg:p-9 hover:border-accent/20 hover:shadow-lift transition-all duration-400"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-display font-bold text-2xl text-ink">{exp.role}</h3>
                      {exp.type === 'intern' && (
                        <span className="px-2.5 py-0.5 label bg-amber-50 text-amber-700 border border-amber-200 rounded-full">
                          Intern
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-accent hover:text-accent-dark text-sm transition-colors">
                        {exp.company} <ExternalLink size={11} />
                      </a>
                      {exp.location && (
                        <span className="label text-ink-4">· {exp.location}</span>
                      )}
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-ink-3 bg-paper-warm border border-edge px-3 py-1.5 rounded-full shrink-0 self-start">
                    {exp.period}
                  </span>
                </div>

                <hr className="rule mb-5" />

                <ul className="space-y-3.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-4 text-sm text-ink-2 leading-relaxed">
                      <span className="label-accent mt-0.5 shrink-0">
                        {String(j + 1).padStart(2, '0')}
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="border border-dashed border-edge rounded-2xl p-7 lg:p-9"
            >
              <p className="label-accent mb-4">Education</p>
              <h4 className="font-display font-bold text-xl text-ink mb-2">
                B.Tech, Computer Science &amp; Engineering
              </h4>
              <p className="text-sm text-ink-2">
                Malaviya National Institute of Technology (MNIT), Jaipur
                <span className="text-ink-4 mx-2">·</span>
                2013–2017
                <span className="text-ink-4 mx-2">·</span>
                CGPA <strong className="text-ink">8.88</strong>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
