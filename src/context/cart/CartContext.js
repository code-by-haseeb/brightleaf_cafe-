import { createContext } from 'react'

// The "box" that holds the cart so any component can reach it
// without passing props through every level.
export const CartContext = createContext(null)
