import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import { GALLERY } from '../../data/gallery'
import './Gallery.css'

function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <SectionTitle>Inside the café</SectionTitle>

        <div className="gallery-grid">
          {GALLERY.map((photo) => (
            <img
              key={photo.id}
              src={photo.src}
              alt={photo.alt}
              className="gallery-img"
              loading="lazy"
              width="600"
              height="600"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
