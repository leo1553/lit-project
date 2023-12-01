import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',
  server: {
    open: '/index.html'
  },
  build: {
    outDir: '../dist'
  }
});
