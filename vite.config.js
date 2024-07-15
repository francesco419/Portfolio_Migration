import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';
import compression from 'vite-plugin-compression2';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    warmup: {
      //클라이언튼에서 자주 사용하는 파일을 미리 로드 , 우선순위 up
      //npm run ddeclientFiles: ['./src/style.css', './src/main.jsx']
    }
  },
  plugins: [
    react(),
    svgr(),
    compression({
      // gzip 압축, 확장자 .gz
      algorithm: 'gzip',
      ext: '.gz'
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
      plugins: [
        visualizer({
          filename: './dist/report.html',
          open: true,
          brotliSize: true
        })
      ],
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
      external: [
        '/src/pages/front/3dModel/reap.jsx',
        '/src/pages/front/3dModel/Scene.jsx',
        '/src/pages/front/controlButton.jsx',
        '/public/reap-transformed.glb',
        '/public/scene-transformed.glb'
      ]
    }
  }
});
