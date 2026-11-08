import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/formatPrice'

// A child component: it displays what it receives through props,
// and talks to the cart through the useCart hook.
// It lives inside the Menu folder because only Menu uses it.
function MenuItem({ id, name, text, price, image }) {
  const { addItem, getQty } = useCart()
  const qty = getQty(id)

  return (
    <div className="menu-item">
      <img src={image} alt={name} className="menu-item-img" loading="lazy" width="72" height="72" />
      <div className="menu-item-info">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
      <div className="menu-item-side">
        <span className="menu-item-price">{formatPrice(price)}</span>
        <button
          className={qty > 0 ? 'menu-item-add added' : 'menu-item-add'}
          onClick={() => addItem(id)}
          aria-label={`Add ${name} to cart`}
        >
          {qty > 0 ? `✓ ${qty} added` : '+ Add'}
        </button>
      </div>
    </div>
  )
}

export default MenuItem
