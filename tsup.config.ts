import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  entry: ['src/index.ts'],
});
