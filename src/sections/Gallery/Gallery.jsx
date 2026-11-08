import { useState } from 'react'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import Lightbox from '../../components/ui/Lightbox/Lightbox'
import { GALLERY } from '../../data/gallery'
import './Gallery.css'

function Gallery() {
  // null = lightbox closed. A number = the index of the open photo.
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section" id="gallery">
      <div className="container">
        <SectionTitle>Inside the café</SectionTitle>

        <div className="gallery-grid">
          {GALLERY.map((photo, index) => (
            <button
              key={photo.id}
              className="gallery-item"
              onClick={() => setOpenIndex(index)}
              aria-label={`View larger: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="gallery-img"
                loading="lazy"
                width="600"
                height="600"
              />
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          photos={GALLERY}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onChange={setOpenIndex}
        />
      )}
    </section>
  )
}

export default Gallery
