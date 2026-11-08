// Turns 4.5 into "$4.50"
export function formatPrice(value) {
  return `$${value.toFixed(2)}`
}
