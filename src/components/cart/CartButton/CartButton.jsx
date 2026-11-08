import { useCart } from '../../../hooks/useCart'
import './CartButton.css'

// The cart icon in the navbar, with a little number badge.
function CartButton() {
  const { count, openCart } = useCart()

  return (
    <button className="cart-button" onClick={openCart} aria-label={`Open cart, ${count} items`}>
      🛒
      {count > 0 && <span className="cart-button-badge">{count}</span>}
    </button>
  )
}

export default CartButton
