import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    warmup: {
      clientFiles: [
        './src/style.css',
        './src/components/notice/notice.module.css'
      ]
    }
  },
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
      { find: '@components', replacement: '/src/components' },
      { find: '@context', replacement: '/src/context' },
      { find: '@redux', replacement: '/src/redux' },
      { find: '@function', replacement: '/src/function' },
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
