import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react-pdf'],
  },
  build: {
    commonjsOptions: {
      include: [/react-pdf/, /pdfjs-dist/],
    },
  },
  resolve: {
    alias: {
      'pdfjs-dist': 'pdfjs-dist/legacy/build/pdf',
    },
  },
});