import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import CartDrawer from '../../cart/CartDrawer/CartDrawer'
import BackToTop from '../../ui/BackToTop/BackToTop'

// Wraps every page with the same Navbar and Footer.
// `children` is whatever you put between <MainLayout> and </MainLayout>.
function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />

      {/* These float above the page */}
      <CartDrawer />
      <BackToTop />
    </>
  )
}

export default MainLayout
