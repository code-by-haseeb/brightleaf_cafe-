import { useEffect, useState } from 'react'

// Works like useState, but also saves the value in the browser's localStorage,
// so it is still there after a page refresh.
// Usage: const [theme, setTheme] = useLocalStorage('theme', 'light')
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const fallback = typeof initialValue === 'function' ? initialValue() : initialValue
    try {
      const saved = localStorage.getItem(key)
      return saved !== null ? JSON.parse(saved) : fallback
    } catch {
      return fallback // storage can be blocked (e.g. private mode)
    }
  })

  // useEffect runs after render. Here: save whenever `value` changes.
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // ignore: the app still works, it just won't remember
    }
  }, [key, value])

  return [value, setValue]
}
