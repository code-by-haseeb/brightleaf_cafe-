import { useState } from 'react'
import Button from '../../ui/Button/Button'
import { NAV_LINKS } from '../../../data/navigation'
import { SITE } from '../../../data/site'
import './Navbar.css'

function Navbar() {
  // `isOpen` controls the mobile menu. useState gives us a value + a function to change it.
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-logo">
          {SITE.name}
          <span>{SITE.tagline}</span>
        </a>

        <button
          className="navbar-toggle"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className={isOpen ? 'navbar-links open' : 'navbar-links'}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <Button href="#contact" size="small" onClick={closeMenu}>
            Book a table
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
