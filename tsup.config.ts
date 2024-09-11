import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'lib',
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['cjs'],
  dts: true,
});
