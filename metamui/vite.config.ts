
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    
    target: 'esnext',
    minify: false, 
    sourcemap: false, 
  },
  define: {
    global: 'globalThis',
  },
  server: {
    port: 3000,
    hmr: {
      port: 3001,
    },
  },
})