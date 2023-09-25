/* eslint-env node */

// eslint-disable-next-line @typescript-eslint/no-var-requires
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/**/*.{cy,spec}.{js,jsx}',
    baseUrl: 'http://localhost:4173',
    testIsolation: false
  },
});
