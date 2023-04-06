import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        sample1: resolve(__dirname, 'src/sample1/index.html'),
        sample2: resolve(__dirname, 'src/sample2/index.html'),
        pokeapi: resolve(__dirname, 'src/pokeapi/index.html'),
      },
    },
  },
});
