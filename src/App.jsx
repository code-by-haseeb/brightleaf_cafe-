import { CartProvider } from './context/cart/CartProvider'
import MainLayout from './components/layout/MainLayout/MainLayout'
import HomePage from './pages/HomePage'

// App is the root component.
// CartProvider wraps everything, so any component inside can use the cart.
// Later, when you add more pages, this is where you would set up routing.
function App() {
  return (
    <CartProvider>
      <MainLayout>
        <HomePage />
      </MainLayout>
    </CartProvider>
  )
}

export default App
