import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Stop Vite from picking up the stray D:\postcss.config.mjs
  css: { postcss: {} },
})
