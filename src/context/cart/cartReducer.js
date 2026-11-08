// A reducer is a function that takes the current state and an "action",
// and returns the NEW state. It never changes the old state directly.
//
// Cart state is a list of lines: [{ id: 2, qty: 1 }, { id: 6, qty: 3 }]
// We only store ids and quantities. Names, prices and photos come from data/menu.js.

export function cartReducer(lines, action) {
  switch (action.type) {
    case 'add': {
      const exists = lines.some((line) => line.id === action.id)
      if (exists) {
        return lines.map((line) => (line.id === action.id ? { ...line, qty: line.qty + 1 } : line))
      }
      return [...lines, { id: action.id, qty: 1 }]
    }

    case 'decrease':
      return lines
        .map((line) => (line.id === action.id ? { ...line, qty: line.qty - 1 } : line))
        .filter((line) => line.qty > 0) // remove a line when it reaches 0

    case 'remove':
      return lines.filter((line) => line.id !== action.id)

    case 'clear':
      return []

    default:
      return lines
  }
}

const STORAGE_KEY = 'cart'

export function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  } catch {
    return []
  }
}

export function saveCart(lines) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  } catch {
    // ignore: storage can be blocked
  }
}
