import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site: https://enestekce.github.io/kitapokuyucu/
export default defineConfig({
  base: '/kitapokuyucu/',
  plugins: [react()],
  worker: { format: 'es' },
});
