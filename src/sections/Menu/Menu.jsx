import { useState } from 'react'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import MenuItem from './MenuItem'
import { MENU_CATEGORIES, MENU_ITEMS } from '../../data/menu'
import './Menu.css'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  // "Derived state": we don't store the filtered list in state.
  // We calculate it from the category and the search text on every render.
  const query = search.trim().toLowerCase()
  const visibleItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory
    const matchesSearch =
      item.name.toLowerCase().includes(query) || item.text.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })

  return (
    <section className="section section-alt" id="menu">
      <div className="container">
        <SectionTitle>Our menu</SectionTitle>

        <div className="menu-controls">
          <input
            type="search"
            className="menu-search"
            placeholder="Search the menu…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search the menu"
          />

          <div className="menu-tabs" role="tablist">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category}
                role="tab"
                aria-selected={activeCategory === category}
                className={activeCategory === category ? 'menu-tab active' : 'menu-tab'}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {visibleItems.length === 0 ? (
          <p className="menu-empty">
            No items match “{search}”. Try another word.
          </p>
        ) : (
          <div className="grid grid-2">
            {/* Passing data down to a child component with props */}
            {visibleItems.map((item) => (
              <MenuItem
                key={item.id}
                id={item.id}
                name={item.name}
                text={item.text}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Menu
