import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Base path for production - assets need /landing-page/ prefix for browser
  base: process.env.NODE_ENV === 'production' ? '/landing-page/' : '/',
  
  // Server config for Docker
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true, // Needed for Docker on some systems
    },
  },
  
  // Build config
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
