import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000,
    hmr: {
      port: 3001, // Ajusta esto si estás usando un puerto diferente para HMR
    },
  },
})
