import Hero from '../sections/Hero/Hero'
import About from '../sections/About/About'
import Menu from '../sections/Menu/Menu'
import Gallery from '../sections/Gallery/Gallery'
import Reviews from '../sections/Reviews/Reviews'
import Contact from '../sections/Contact/Contact'

// A page is just a list of sections, top to bottom.
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
    </>
  )
}

export default HomePage
