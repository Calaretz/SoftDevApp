import { defineConfig } from 'vite';
import angular from '@vitejs/plugin-angular';
import { resolve } from 'path';

export default defineConfig({
  plugins: [angular()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
