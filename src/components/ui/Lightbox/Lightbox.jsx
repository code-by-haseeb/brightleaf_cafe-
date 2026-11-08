import { useEffect } from 'react'
import './Lightbox.css'

// Shows one photo large, on a dark background.
// Props:
//   photos:   the full list of photos ({ src, alt })
//   index:    which photo to show
//   onClose:  called to close the lightbox
//   onChange: called with the new index when moving to another photo
function Lightbox({ photos, index, onClose, onChange }) {
  const photo = photos[index]
  const total = photos.length

  // % (remainder) makes the index wrap around: after the last photo comes the first.
  const showPrev = () => onChange((index - 1 + total) % total)
  const showNext = () => onChange((index + 1) % total)

  // Keyboard controls: Escape closes, arrow keys move.
  useEffect(() => {
    function handleKey(event) {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onChange((index - 1 + total) % total)
      if (event.key === 'ArrowRight') onChange((index + 1) % total)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [index, total, onClose, onChange])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      {/* stopPropagation: clicks on the photo or buttons should not close the lightbox */}
      <figure className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.alt} className="lightbox-img" />
        <figcaption>
          {photo.alt} · {index + 1} / {total}
        </figcaption>
      </figure>

      <button className="lightbox-btn lightbox-close" onClick={onClose} aria-label="Close" autoFocus>
        ✕
      </button>
      <button
        className="lightbox-btn lightbox-prev"
        onClick={(e) => { e.stopPropagation(); showPrev() }}
        aria-label="Previous photo"
      >
        ‹
      </button>
      <button
        className="lightbox-btn lightbox-next"
        onClick={(e) => { e.stopPropagation(); showNext() }}
        aria-label="Next photo"
      >
        ›
      </button>
    </div>
  )
}

export default Lightbox
