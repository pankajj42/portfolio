'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import ScreenshotLightbox from '../ScreenshotLightbox';

interface Props { screenshots: string[]; projectName: string; priority?: boolean }

/**
 * Screenshot shown with object-contain so the full image is always visible.
 * A blurred copy of the same image fills the background edges.
 */
function ScreenshotFrame({ src, alt, onClick, priority = false }: { src: string; alt: string; onClick: () => void; priority?: boolean }) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl bg-neutral-950 cursor-zoom-in"
     onClick={onClick}
     title="Click to view full size">
      {/* Blurred background — fills edges without cropping the screenshot */}
      <div
        aria-hidden
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(24px)',
          opacity: 0.55,
        }}
      />
      {/* Actual screenshot — fully visible, never cropped */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        style={{ zIndex: 1 }}
        unoptimized
        priority={priority}
      />
      {/* Expand hint — appears on hover */}
      <div
        className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/50 rounded-lg p-1.5"
        style={{ zIndex: 2 }}
        aria-hidden
      >
        <Maximize2 size={14} className="text-white" />
      </div>
    </div>
  )
}

export default function ScreenshotSlider({ screenshots, projectName, priority = false }: Props) {
  const [idx, setIdx] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!screenshots.length) return (
    <div className="w-full h-full flex items-center justify-center bg-paper-warm border border-edge rounded-xl">
      <p className="label text-ink-4">No preview available</p>
    </div>
  )

  const prev = () => setIdx(i => (i === 0 ? screenshots.length - 1 : i - 1))
  const next = () => setIdx(i => (i === screenshots.length - 1 ? 0 : i + 1))

  return (
    <>
      <div className="flex flex-col h-full gap-3">
        {/* Main frame */}
        <div className="relative flex-1 min-h-0">
          <ScreenshotFrame
            src={screenshots[idx]}
            alt={`${projectName} screenshot ${idx + 1}`}
            onClick={() => setLightboxOpen(true)}
            priority={priority}
          />
        </div>

        {/* Navigation — only when multiple screenshots */}
        {screenshots.length > 1 && (
          <div className="flex items-center gap-2">
            <button onClick={prev} aria-label="Previous screenshot"
              className="w-7 h-7 rounded-full border border-edge flex items-center justify-center text-ink-3 hover:border-accent/50 hover:text-accent hover:bg-accent-light transition-all duration-150 shrink-0">
              <ChevronLeft size={13} />
            </button>

            {/* Thumbnails */}
            <div className="flex-1 flex gap-1.5 overflow-x-auto no-sb">
              {screenshots.map((src, i) => (
                <button key={i} onClick={() => setIdx(i)} aria-label={`Screenshot ${i + 1}`}
                  className={`relative shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    i === idx
                      ? 'border-accent shadow-sm scale-105'
                      : 'border-edge opacity-50 hover:opacity-90 hover:border-edge-strong'
                  }`}>
                  <Image src={src} alt="" fill className="object-cover" unoptimized sizes="56px" />
                </button>
              ))}
            </div>

            <button onClick={next} aria-label="Next screenshot"
              className="w-7 h-7 rounded-full border border-edge flex items-center justify-center text-ink-3 hover:border-accent/50 hover:text-accent hover:bg-accent-light transition-all duration-150 shrink-0">
              <ChevronRight size={13} />
            </button>
          </div>
        )}

        {screenshots.length > 1 && (
          <p className="text-center font-mono text-[0.6rem] tracking-widest text-ink-4">
            {idx + 1} / {screenshots.length}
          </p>
        )}
      </div>
      {/* Lightbox — opens at current index */}
      <ScreenshotLightbox
        screenshots={screenshots}
        initialIndex={idx}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  )
}
