import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'lib',
  sourcemap: true,
  clean: true,
  format: ['cjs'],
  dts: true,
});
