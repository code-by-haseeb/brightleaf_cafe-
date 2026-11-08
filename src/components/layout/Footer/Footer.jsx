import { SITE } from '../../../data/site'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">
          {SITE.name}
          <span>{SITE.tagline}</span>
        </span>
        <p>
          © {year} {SITE.name} {SITE.tagline}. Sample website. Photos from{' '}
          <a href="https://unsplash.com" target="_blank" rel="noreferrer">
            Unsplash
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
