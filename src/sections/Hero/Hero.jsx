import Button from '../../components/ui/Button/Button'
import { SITE } from '../../data/site'
import { useOpenStatus } from '../../hooks/useOpenStatus'
import heroImg from '../../assets/images/hero.jpg'
import './Hero.css'

function Hero() {
  const { isOpen, label } = useOpenStatus(SITE.openHour, SITE.closeHour)

  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div>
          <p className={isOpen ? 'hero-status open' : 'hero-status closed'}>
            <span className="hero-status-dot" aria-hidden="true" />
            {label}
          </p>
          <h1 className="hero-title">Good coffee, slow mornings.</h1>
          <p className="hero-lead">
            A neighborhood café serving fresh-roasted coffee, loose-leaf tea and
            pastries baked every morning.
          </p>
          <div className="hero-actions">
            <Button href="#menu">See the menu</Button>
            <Button href="#contact" variant="outline">Visit us</Button>
          </div>
        </div>

        <div className="hero-art">
          <img
            src={heroImg}
            alt="Three lattes with heart latte art on a wooden table"
            className="hero-img"
            width="800"
            height="1000"
          />
          <div className="hero-badge">
            <strong>4.9 ★</strong>
            <span>Loved by locals</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
