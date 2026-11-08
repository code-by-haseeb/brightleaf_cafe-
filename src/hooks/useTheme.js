import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Light / dark mode. Starts with the computer's setting, then remembers the user's choice.
export function useTheme() {
  const [theme, setTheme] = useLocalStorage('theme', getSystemTheme)

  // Put the theme on <html data-theme="dark">. The CSS in global.css reads it.
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
