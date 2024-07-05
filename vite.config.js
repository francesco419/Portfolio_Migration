import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    visualizer({
      filename: './dist/report.html',
      open: true,
      brotliSize: true
    })
  ],
  assetsInclude: ['**/*.PNG'],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: './components' },
      { find: '@context', replacement: './context' },
      { find: '@redux', replacement: './redux' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@projectImage', replacement: '/src/assets/image/projectImgNew' }
    ]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          lodash: ['lodash']
        }
      }
    }
  }
});
