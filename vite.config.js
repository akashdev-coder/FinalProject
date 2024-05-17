import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,  // Use the PORT environment variable or default to 3000
    host: '0.0.0.0',  // Bind to all network interfaces
  },
  preview: {
    port: process.env.PORT || 3000,  // Use the PORT environment variable or default to 3000
    host: '0.0.0.0',  // Bind to all network interfaces
  },
});
