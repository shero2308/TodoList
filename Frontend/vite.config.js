import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"



// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src', // Ensure this alias points to your `src` directory
    },
  },
  plugins: [react(),tsconfigPaths()],
})
