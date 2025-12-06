import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "primereact/resources/themes/lara-light-blue/theme.css",
      "primereact/resources/primereact.min.css",
      "primeicons/primeicons.css",
      "primeflex/primeflex.css"
    ]
  }
})
