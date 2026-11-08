import './Card.css'

// A simple box with border, padding and shadow.
// `as` lets you choose the HTML tag, e.g. <Card as="form"> or <Card as="figure">.
function Card({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`card ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}

export default Card
