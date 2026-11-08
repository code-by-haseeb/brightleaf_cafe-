import { useState } from 'react'
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle'
import MenuItem from './MenuItem'
import { MENU_CATEGORIES, MENU_ITEMS } from '../../data/menu'
import './Menu.css'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')

  // Work out which items to show based on the selected tab.
  const visibleItems =
    activeCategory === 'All'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <section className="section section-alt" id="menu">
      <div className="container">
        <SectionTitle>Our menu</SectionTitle>

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

        <div className="grid grid-2">
          {/* Passing data down to a child component with props */}
          {visibleItems.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              text={item.text}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
