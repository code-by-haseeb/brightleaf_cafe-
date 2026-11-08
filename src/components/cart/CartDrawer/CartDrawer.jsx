import { useEffect, useRef, useState } from 'react'
import Button from '../../ui/Button/Button'
import { useCart } from '../../../hooks/useCart'
import { formatPrice } from '../../../utils/formatPrice'
import './CartDrawer.css'

// The panel that slides in from the right with the order.
function CartDrawer() {
  const { items, total, isOpen, closeCart, addItem, decreaseItem, removeItem, clearCart } = useCart()
  const [ordered, setOrdered] = useState(false)
  // useRef gives direct access to a DOM element, here the close button.
  const closeButtonRef = useRef(null)

  function handleClose() {
    closeCart()
    setOrdered(false)
  }

  // When the drawer opens, move keyboard focus into it.
  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus()
  }, [isOpen])

  // While the drawer is open, close it when Escape is pressed.
  useEffect(() => {
    if (!isOpen) return

    function handleKey(event) {
      if (event.key === 'Escape') {
        closeCart()
        setOrdered(false)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, closeCart])

  function handleCheckout() {
    clearCart()
    setOrdered(true)
  }

  return (
    <>
      <div className={isOpen ? 'cart-overlay open' : 'cart-overlay'} onClick={handleClose} />

      <aside
        className={isOpen ? 'cart-drawer open' : 'cart-drawer'}
        role="dialog"
        aria-modal="true"
        aria-label="Your order"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="cart-header">
          <h2>Your order</h2>
          <button ref={closeButtonRef} className="cart-close" onClick={handleClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {ordered ? (
          <div className="cart-empty">
            <p className="cart-empty-icon">🎉</p>
            <h3>Order placed!</h3>
            <p>Your order will be ready for pickup in about 10 minutes.</p>
            <Button onClick={handleClose}>Done</Button>
          </div>
        ) : items.length === 0 ? (
          <div className="cart-empty">
            <p className="cart-empty-icon">☕</p>
            <h3>Your cart is empty</h3>
            <p>Add something tasty from the menu.</p>
            <Button href="#menu" onClick={handleClose}>Browse menu</Button>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-line">
                  <img src={item.image} alt="" className="cart-line-img" />
                  <div className="cart-line-info">
                    <strong>{item.name}</strong>
                    <span>{formatPrice(item.price)}</span>
                    <button className="cart-remove" onClick={() => removeItem(item.id)}>
                      Remove
                    </button>
                  </div>
                  <div className="cart-qty">
                    <button onClick={() => decreaseItem(item.id)} aria-label={`One less ${item.name}`}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => addItem(item.id)} aria-label={`One more ${item.name}`}>+</button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>
              <Button onClick={handleCheckout} className="cart-checkout">
                Place order
              </Button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}

export default CartDrawer
