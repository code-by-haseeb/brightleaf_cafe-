import { useEffect, useState } from 'react'
import { formatHour } from '../utils/formatHour'

// Tells you if the café is open right now, and updates every minute.
// openHour / closeHour use 24-hour time, e.g. 7 and 21.
export function useOpenStatus(openHour, closeHour) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timerId = setInterval(() => setNow(new Date()), 60 * 1000)
    // The cleanup function runs when the component is removed.
    // Always stop timers here, or they keep running in the background.
    return () => clearInterval(timerId)
  }, [])

  const hour = now.getHours() + now.getMinutes() / 60
  const isOpen = hour >= openHour && hour < closeHour

  let label
  if (isOpen) {
    const minutesLeft = Math.round((closeHour - hour) * 60)
    label =
      minutesLeft <= 60
        ? `Open now · closes in ${minutesLeft} min`
        : `Open now · until ${formatHour(closeHour)}`
  } else {
    label = `Closed · opens at ${formatHour(openHour)}`
  }

  return { isOpen, label }
}
