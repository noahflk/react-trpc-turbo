import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import tailwindcss from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite(), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
