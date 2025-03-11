import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  define: {
    'process.env': {}
  },
  build: {
    lib: {
      entry: 'src/vue/index.js',
      name: 'MultipleSelect',
      fileName: 'multiple-select-vue',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    emptyOutDir: false,
    minify: false
  },
  plugins: [vue()]
})
