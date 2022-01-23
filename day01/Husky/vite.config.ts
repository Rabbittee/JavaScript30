import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/JavaScript30/day01/Husky/dist/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../sample'),
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
