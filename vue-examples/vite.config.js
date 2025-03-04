import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      ...process.env.NODE_ENV === 'production' ?
        {} :
        {
          'multiple-select': fileURLToPath(new URL('../', import.meta.url))
        }
    },
    extensions: ['.js', '.vue', '.json']
  },
  build: {
    rollupOptions: {
      input: process.env.NODE_ENV === 'production' ? 'index.prod.html' : 'index.html'
    }
  }
})
