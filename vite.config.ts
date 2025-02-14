import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/yanisa-yawichai.github.io/', // 🔹 ตั้งให้ตรงกับชื่อ repo
  build: {
    outDir: 'dist',
  },
});