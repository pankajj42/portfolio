'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { GitHubIcon } from '@/components/icons/BrandIcons';
import type { SiteConfig } from '@/types'

const NAV = [
  { label: 'Projects',   href: '/#projects' },
  { label: 'Skills',     href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
]

export default function NavBar({ config }: { config: SiteConfig }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-paper/95 backdrop-blur-xl border-b border-edge' : ''
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link href="/"
          className="font-display font-bold text-2xl text-ink hover:text-accent transition-colors duration-200">
          PJ
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV.map(l => (
            <Link key={l.href} href={l.href}
              className="px-4 py-2 label hover:text-ink-2 rounded-lg hover:bg-paper-warm transition-all duration-200">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href={config.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 label hover:text-ink-2 rounded-lg hover:bg-paper-warm transition-all">
            <GitHubIcon size={13} /> GitHub
          </a>
          <a href={`mailto:${config.email}`}
            className="px-4 py-2 bg-ink text-paper text-xs font-medium font-mono tracking-wider rounded-full hover:bg-ink-2 transition-colors duration-200">
            Let&apos;s Talk
          </a>
        </div>

        <button onClick={() => setOpen(o => !o)}
          className="md:hidden p-2 text-ink-2 hover:text-ink transition-colors" aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper/98 backdrop-blur-xl border-b border-edge px-6 py-5 flex flex-col gap-1 animate-fade-in">
          {NAV.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="px-3 py-3 label hover:text-ink-2 rounded-lg hover:bg-paper-warm transition-all">
              {l.label}
            </Link>
          ))}
          <hr className="rule my-3" />
          <a href={config.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-3 label">
            <GitHubIcon size={13} /> GitHub
          </a>
          <a href={`mailto:${config.email}`}
            className="mt-1 px-4 py-2.5 bg-ink text-paper text-xs font-mono tracking-wider rounded-full text-center">
            Let&apos;s Talk
          </a>
        </div>
      )}
    </header>
  )
}
