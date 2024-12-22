import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    historyApiFallback: true,
  },
  define: {
    'process.env.VITE_API_BASE_URL': JSON.stringify('https://e-commerce-project1-backend.onrender.com'),
  },
  optimizeDeps: {
    exclude: ['morgan', 'basic-auth', 'safe-buffer'],
  },
  build: {
    rollupOptions: {
      external: ['morgan', 'basic-auth', 'safe-buffer'],
    },
  },
});



