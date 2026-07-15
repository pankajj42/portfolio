'use client'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'

interface Props {
  screenshots: string[]
  initialIndex: number
  open: boolean
  onClose: () => void
}

export default function ScreenshotLightbox({ screenshots, initialIndex, open, onClose }: Props) {
  if (!open) return null

  return (
    <Lightbox
      open={open}
      close={onClose}
      index={initialIndex}
      slides={screenshots.map(src => ({ src }))}
      plugins={[Zoom]}
      zoom={{ maxZoomPixelRatio: 4, doubleTapDelay: 300, scrollToZoom: true }}
      styles={{ container: { backgroundColor: 'rgba(10, 10, 10, 0.96)' } }}
      controller={{ closeOnBackdropClick: true }}
    />
  )
}