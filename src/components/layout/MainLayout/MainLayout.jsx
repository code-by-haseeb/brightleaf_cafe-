import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

// Wraps every page with the same Navbar and Footer.
// `children` is whatever you put between <MainLayout> and </MainLayout>.
function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
