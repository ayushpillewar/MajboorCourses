import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    host: true // Listen on all addresses
  },
   build: {
    // Specify the output directory for the production build
    // This is where your compiled assets will be placed for serving
    outDir: 'dist', 
    
    // Set to true if you want to generate sourcemaps for debugging production builds
    sourcemap: false, 
  },
})
