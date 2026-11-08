import { useCallback, useEffect, useReducer, useState } from 'react'
import { CartContext } from './CartContext'
import { cartReducer, loadCart, saveCart } from './cartReducer'
import { MENU_ITEMS } from '../../data/menu'

// Wrap the app in <CartProvider> and every component inside can use the cart.
export function CartProvider({ children }) {
  // useReducer is like useState, but all changes go through cartReducer.
  const [lines, dispatch] = useReducer(cartReducer, undefined, loadCart)
  const [isOpen, setIsOpen] = useState(false)

  // useCallback keeps the same function between renders, so components
  // that list it in a useEffect don't re-run that effect for no reason.
  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  // Save the cart every time it changes.
  useEffect(() => {
    saveCart(lines)
  }, [lines])

  // Join each cart line with its menu item to get name, price and photo.
  const items = lines
    .map((line) => {
      const menuItem = MENU_ITEMS.find((item) => item.id === line.id)
      return menuItem ? { ...menuItem, qty: line.qty } : null
    })
    .filter(Boolean)

  const count = items.reduce((sum, item) => sum + item.qty, 0)
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0)

  const value = {
    items,
    count,
    total,
    isOpen,
    openCart,
    closeCart,
    addItem: (id) => dispatch({ type: 'add', id }),
    decreaseItem: (id) => dispatch({ type: 'decrease', id }),
    removeItem: (id) => dispatch({ type: 'remove', id }),
    clearCart: () => dispatch({ type: 'clear' }),
    getQty: (id) => lines.find((line) => line.id === id)?.qty ?? 0,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
