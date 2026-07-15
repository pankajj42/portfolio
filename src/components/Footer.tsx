import { Mail, ArrowUpRight } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/BrandIcons'
import type { SiteConfig } from '@/types'

export default function Footer({ config }: { config: SiteConfig }) {
  return (
    <footer className="bg-ink text-paper px-6 lg:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="font-display font-bold text-5xl text-paper mb-4">PJ</p>
            <p className="text-sm text-ink-3 leading-relaxed max-w-xs">{config.tagline}</p>
          </div>

          <div>
            <p className="label text-ink-3 mb-5">Navigate</p>
            <div className="space-y-3">
              {[
                { label: 'Featured Projects', href: '/#projects' },
                { label: 'All Projects',      href: '/projects' },
                { label: 'Skills',            href: '/#skills' },
                { label: 'Experience',        href: '/#experience' },
              ].map(l => (
                <a key={l.href} href={l.href}
                  className="flex items-center justify-between text-sm text-ink-3 hover:text-paper transition-colors group">
                  {l.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="label text-ink-3 mb-5">Get in Touch</p>
            <div className="space-y-3">
              {[
                { href: `mailto:${config.email}`, icon: <Mail size={13} />, label: config.email },
                { href: config.github,   icon: <GitHubIcon size={13} />,   label: 'github.com/pankajj42' },
                { href: config.linkedin, icon: <LinkedInIcon size={13} />, label: 'LinkedIn' },
              ].map(l => (
                <a key={l.href} href={l.href}
                  target={l.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-ink-3 hover:text-paper transition-colors">
                  {l.icon} {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-white/10 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-ink-3 tracking-wider">
            © 2026 {config.name} · Next.js + Tailwind CSS v4
          </p>
          <p className="font-mono text-[11px] text-ink-3 tracking-wider">
            MNIT Jaipur &apos;17 · Ex-Arista Networks
          </p>
        </div>
      </div>
    </footer>
  )
}
