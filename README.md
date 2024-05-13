# React + Vite + SWC

---

vite.config.js

- `assetsInclude: ['**/*.PNG']` PNG 파일 포멧 사용.

- vite-plugin-svgr 설치, plugins: [react(), svgr()],
  - `import JavaScript from '../pages/skill/asset/svg/js.svg?react';` 형태로 SVG를 컴포넌트 형태로 import 가능
  - 기존의 `{ReactComponent as ..}` 대신 사용
