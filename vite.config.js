import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    warmup: {
      //클라이언튼에서 자주 사용하는 파일을 미리 로드 , 우선순위 up
      clientFiles: [
        './src/style.css',
        './src/pages/202305/myHeader.jsx',
        './src/pages/202305/contact/footer'
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
  assetsInclude: ['**/*.PNG', '**/*.hdr', '**/*.jpg'],
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
      /* resolve: {
        extensions: ['.js'],
        modules: [path, 'node_modules'],
        alias: {
          three: path.join(
            __dirname,
            'node_modules/three/build/three.module.js'
          )
        }
      }, */
      output: {
        manualChunks: {
          lodash: ['lodash'],
          react: ['react', 'react-dom'],
          reactRouter: ['react-router-dom'],
          redux: ['react-redux'],
          animations: ['framer-motion'],
          //fiber_drei: ['@react-three/drei', '@react-three/fiber'],
          drei: ['@react-three/drei'],
          fiber: ['@react-three/fiber'],
          three: ['three']
        }
      },
      external: []
    }
  }
});
