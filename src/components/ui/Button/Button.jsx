import './Button.css'

// One button component used everywhere on the site.
// Props:
//   variant: 'primary' | 'outline'
//   size:    'normal' | 'small'
//   href:    if given, renders a link (<a>) instead of a <button>
//   ...rest: any other props (onClick, type, etc.) are passed through
function Button({ children, variant = 'primary', size = 'normal', href, className = '', ...rest }) {
  const classes = `btn btn-${variant} btn-${size} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}

export default Button
