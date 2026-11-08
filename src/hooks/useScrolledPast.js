import { useEffect, useState } from 'react'

// Returns true once the page has been scrolled down more than `distance` pixels.
export function useScrolledPast(distance) {
  const [scrolledPast, setScrolledPast] = useState(() => window.scrollY > distance)

  useEffect(() => {
    function handleScroll() {
      setScrolledPast(window.scrollY > distance)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Remove the listener when the component goes away.
    return () => window.removeEventListener('scroll', handleScroll)
  }, [distance])

  return scrolledPast
}
