import './SectionTitle.css'

// The big heading at the top of each section.
// align: 'center' (default) or 'left'
function SectionTitle({ children, align = 'center' }) {
  return <h2 className={`section-title section-title-${align}`}>{children}</h2>
}

export default SectionTitle
