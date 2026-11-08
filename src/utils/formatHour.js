// Turns 24-hour numbers into friendly text: 7 → "7am", 21 → "9pm", 12 → "12pm"
export function formatHour(hour24) {
  const suffix = hour24 >= 12 ? 'pm' : 'am'
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12
  return `${hour12}${suffix}`
}
