import {fileURLToPath, URL} from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: 'deploying-vite-project-example',
  plugins: [vue()],
  resolve: {
    alias: {
      '@':fileURLToPath(new URL("./src",import.meta.url))
    }
  }
})
