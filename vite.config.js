import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { fileURLToPath, URL } from 'url'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  plugins: [
    reactRefresh(),
    checker({
      overlay: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint "./**/*.{css,scss,sass}"',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'test-utils': fileURLToPath(
        new URL('./src/helpers/test-utils.jsx', import.meta.url)
      ),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/styles/variables";`
        // There is need to include the .scss file extensions.
        // additionalData: `@import "./src/styles/variables";`,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    setupFiles: ['./vitest.setup.js'],
  },
})
