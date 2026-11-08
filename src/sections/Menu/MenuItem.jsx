import { formatPrice } from '../../utils/formatPrice'

// A child component: it only displays what it receives through props.
// It lives inside the Menu folder because only Menu uses it.
function MenuItem({ name, text, price, image }) {
  return (
    <div className="menu-item">
      <img src={image} alt={name} className="menu-item-img" loading="lazy" width="72" height="72" />
      <div className="menu-item-info">
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
      <span className="menu-item-price">{formatPrice(price)}</span>
    </div>
  )
}

export default MenuItem
