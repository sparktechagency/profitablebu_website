import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vidte.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "192.168.0.111",
    port: "3008",
  },
})
