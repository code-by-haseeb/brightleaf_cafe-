import { useContext } from 'react'
import { CartContext } from '../context/cart/CartContext'

// Use this in any component: const { count, addItem } = useCart()
export function useCart() {
  const cart = useContext(CartContext)
  if (!cart) {
    throw new Error('useCart must be used inside <CartProvider>')
  }
  return cart
}
