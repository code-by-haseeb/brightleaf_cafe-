import { useScrolledPast } from '../../../hooks/useScrolledPast'
import './BackToTop.css'

// A round button that appears after scrolling down 600px.
function BackToTop() {
  const visible = useScrolledPast(600)

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={visible ? 'back-to-top visible' : 'back-to-top'}
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      ↑
    </button>
  )
}

export default BackToTop
