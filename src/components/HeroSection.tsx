'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowDownRight, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/BrandIcons';
import type { SiteConfig } from '@/types'

const ease = [0.22, 1, 0.36, 1] as const

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease } },
})

export default function HeroSection({ config }: { config: SiteConfig }) {
  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden">
      {/* Subtle dot-grid background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #E8E5DE 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.6,
        }} />
      {/* Accent glow top-right */}
      <div aria-hidden className="absolute -top-40 -right-20 w-160 h-160 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(82,72,232,0.07) 0%, transparent 65%)' }} />

      {/* ── Split grid ───────────────────────────────────────────────────── */}
      <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-2">

        {/* Left — massive display name */}
        <div className="flex flex-col justify-center px-8 lg:px-16 pt-20 pb-10 lg:pb-24 lg:border-r border-edge">
          <motion.p {...rise(0)} className="label-accent mb-8">
            ✦ &nbsp;Software Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.1, ease } }}
            className="font-display font-bold text-ink leading-none tracking-tight"
            style={{ fontSize: 'clamp(5rem, 13vw, 10rem)' }}
          >
            PANKAJ<br />
            <span className="text-ink-3 font-light italic">JANGID</span>
          </motion.h1>

          {config.availableForWork && (
            <motion.div {...rise(0.45)} className="mt-10 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="label text-ink-3">Open to new opportunities</span>
            </motion.div>
          )}
        </div>

        {/* Right — bio, tags, CTAs */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-10 lg:py-24">
          <div className="max-w-md">
            <motion.p {...rise(0.2)}
              className="font-display text-[clamp(1.5rem,3vw,2.25rem)] italic font-light text-ink-2 leading-tight mb-8">
              &ldquo;{config.tagline}&rdquo;
            </motion.p>

            <motion.p {...rise(0.3)} className="text-sm text-ink-2 leading-relaxed mb-8 whitespace-pre-line">
              {config.bio}
            </motion.p>

            <motion.div {...rise(0.35)} className="flex flex-wrap gap-2 mb-10">
              {["MNIT Jaipur '17", 'Ex-Arista Networks', config.location].filter(Boolean).map(t => (
                <span key={t} className="pill-subtle">{t}</span>
              ))}
            </motion.div>

            <motion.div {...rise(0.42)} className="flex flex-wrap gap-3">
              <Link href="/#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-ink text-paper text-sm font-medium rounded-full hover:bg-accent transition-colors duration-300">
                View Work
                <ArrowDownRight size={15} className="group-hover:rotate-45 transition-transform duration-200" />
              </Link>
              {[
                { href: config.github, icon: <GitHubIcon size={15} />, label: 'GitHub' },
                { href: config.linkedin, icon: <LinkedInIcon size={15} />, label: 'LinkedIn' },
                { href: `mailto:${config.email}`, icon: <Mail size={15} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 border border-edge bg-paper-card text-ink-2 text-sm font-medium rounded-full hover:border-ink hover:text-ink transition-all duration-200"
                  aria-label={label}>
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.6 }}
        className="relative border-t border-edge px-8 lg:px-16 py-4 flex items-center justify-between">
        <span className="label text-ink-4">Systems · Full-Stack · AI Integration</span>
        <span className="label animate-bounce">↓ scroll</span>
      </motion.div>
    </section>
  )
}
