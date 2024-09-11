import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['specs/setup.js'],
    reporters: 'verbose',
  },
});
