import { defineConfig } from 'vite';

export default defineConfig({
  base: '/MONSIEUR-FLORES/',
  server: {
    port: 3000,
    open: false
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
