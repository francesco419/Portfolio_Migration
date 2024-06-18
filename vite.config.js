import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  assetsInclude: ['**/*.PNG'],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: './components' }
    ]
  },
  build: {
    rollupOptions: {
      output: {}
    }
  }
});
