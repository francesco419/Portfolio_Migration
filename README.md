# React + Vite + SWC

---

vite.config.js

- `assetsInclude: ['**/*.PNG']` PNG 파일 포멧 사용.

- vite-plugin-svgr 설치, plugins: [react(), svgr()],
  - `import JavaScript from '../pages/skill/asset/svg/js.svg?react';` 형태로 SVG를 컴포넌트 형태로 import 가능
  - 기존의 `{ReactComponent as ..}` 대신 사용

---

240704

빌드, 번들러, 네트워크 등을 공부하며 번들링과 빌드시간을 측정하며 테스트를 하던도중
항상 하나의 파일이 500kb를 넘는 801.75kb가 측정이 되었다.
파일 이름으로 보아 index파일과 관련이 있어보이는데, 알고 있는 지식으로 dynamic import / lazy / suspence 를 살짝 만져보았다
일드 시간은 8.72 -> 6.85로 줄긴 했으나, 파일(청크)크기는 변함이 없다.

rollup-plugin-visualizer를 사용하여 번들 청크를 확인하여 줄일수 있는 청크에 대해 시각적으로 알아보고 결과를 확인할수 있는 라이브러리를 사용.

- lodash 청크가 크게 나타나 있는것을 확인 -`dist/assets/lodash-D9wIYH0h.js  72.02 kB │ gzip:  26.55 kB`

  - vite는 pre-bundling 외에는 rollup을 메인 번들링 기능으로 사용한다.
  - rollup에는 manualChunk option을 사용하여 lodash에 대한 chunk를 줄일수 있는 방법을 직접 설명해 주고 있다.
  - 현재 lodash 사용방법으로 `import _ from 'lodash;`의 함수 호출 방식을 사용하였지만 해당 사용 방법이 lodash파일 전체를 불러오고 있다.
    - 따라서, `import map from lodash/map;`을 사용하여 map 파일만을 불러올수 있는 방법이 있었다. 다만 해당 방법은 기존의 `_`를 사용하지 않기에 lodash 사용 확인에 대한 가독성이 좀 떨어질수 있다고 생각한다. (함수사용에도 chunk 크기를 줄일수 있지만 이번에는 위 언급한 방식을 사용하도록 하겠다.)
  - `vite.config.js` -> `build` -> `rollupOption` -> `output` -> `manualChunk` -> `lodash: ['lodash']`

  - 결과적으로 꽤 큰 용량의 청크 크기를 줄일 수 있었다.

    - 72.02kB 에서 0.24kB로 기존 대비 300배 정도의 청크 사이즈가 줄었다.
    - 물론 많이 사용하지 않았기에 모든 lodash파일을 불러오던 것에서 일부만 발췌해서 사용하니 크게 줄게된 것이라고 생각된다.
    - `dist/assets/lodash-Cpj98o6Y.js  0.24 kB │ gzip:   0.18 kB`

  - 역시 300배 정도는 아니였다.
    - lodash의 기능을 나누어서 import 했기때문에 청크도 나뉘었다.
      - `dist/assets/lodash-Cpj98o6Y.js     0.24 kB │ gzip:   0.18 kB`
      - `dist/assets/filter-CdSLGcDp.js     0.29 kB │ gzip:   0.23 kB`
      - `dist/assets/map-Bh9NcjlJ.js        17.32 kB │ gzip:   7.11 kB`
        총 18kB로 유의미한 크기 축소는 있지만, map chunk가 굉장히 크다.
    - lodash의 여러 바닐라에는 없는 메소드가 있어 유용하게 사용했지만, 청크크기를 크게 먹는다면 사용할 필요가 있을까? 특히 map,filter사용에는?
      - 유의미한 차이가 있는지 검색을 해보았고 아래 url의 테스트를 바탕으로 현재 사용에는 객체에 대한 map 메소드를 주로 사용하기에 바닐라 메소드로 대체 하였다.
        - `https://dev.to/jrdev_/the-battle-of-the-array-titans-lodash-vs-vanilla-an-experiment-b6g`
    - 모든 map메소드를 대체한 결과, map chunk는 보이지 않았다. 또한 몇번 사용되지 않은 몇몇 메소드는 빌드 청크기록에 너무 작은지 없다.
      - `dist/assets/lodash-Cpj98o6Y.js       0.24 kB │ gzip:   0.18 kB`
      - `dist/assets/filter-Crg9fd2B.js       0.30 kB │ gzip:   0.23 kB`
      - 총 0.54 kB

- 현재 threeJS를 사용하고 있는데 이것도 청크크기가 많많치 않다.

#### vite bundler, rollupOption, lodash, chunk size, rollup-plugin visualizer

- 한줄 평 : 청크 줄이기 재밌다.

---

index.js파일의 크기에 대해.

- 현재 3d 모델 랜더링을 공부하고 있는 중이라 threejs + three/fiber + three/drei를 사용하고 있다.
  - threejs에 대한 code-splitting / lazy import / dynamic import 의 검색어로 검색하던중 한국분의 깃헙블로그 발견! 한번 슥 본것만으로도 유용한 정보가 많다
  - https://joong-sunny.github.io/graphics/graphics3-2/
  - OffScreenCanvas - https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas
- 역시 rollup visualizer로 청크 확인중 three가 엄청난 크기의 청크를 index파일에서 차지하고 있다.

---

Vite Speed Up

- vite의 속도를 올리기 위한 작업
  - vite퍼포먼스[https://vitejs.dev/guide/performance]
  - Use CSS instead of Sass/Less/Stylus when possible (nesting can be handled by PostCSS)
  - Don't transform SVGs into UI framework components (React, Vue, etc). Import them as strings or URLs instead.
    - 나는 모든 프로젝트에서 SVG를 리액트 컴포넌트 형태로 사용하고 있다. 이유는 SVG의 장점은 컴스텀이고 이를 활용하기에 컴포넌트 형태가 좋기 때문이다.
    - 다만 vite에서는 속도향상을 위해서는 SVG의 컴포넌트 형의 사용을 줄이라고 한다.
    - 따라서, 컴포넌트 형태가 필요할 때만 사용하고 이외에는 다른 방법으로의 SVG를 사용하도록 한다.
  - When using @vitejs/plugin-react, avoid configuring the Babel options, so it skips the transformation during build (only esbuild will be used).
  - Reduce Resolve Operations.
    - `import './MyBook'`을 하게 되면 vite는 `MyBook`, `MyBook.js`, `MyBook.ts`, ... 을 검색하게 된다.
    - 즉, 파일 확장명을 기입함으로서 vite가 반복적으로 검색해야 할 일을 줄인다.
  - Avoid Barrel Files ( ex. export \* from './color.js')
  - Large dependencies that are only used in certain cases should be dynamically imported
    - 많이 사용 않하지만, 크기가 큰 라이브러리를 dynamic import를 사용하자.

---

LightHouse 점검

- 0705

  - 성능
    - 81
    - 개선 진행
      - 이미지 크기 명시
        - 이미지 크기를 명시하지 않는 `inherit`에 대해 수정.
      - 차세대 형식 이미지 사용
        - PNG,JPG 등의 파일 형식을 WebP 또는 AVIF 형식으로 제공
      - font-display
        - 해당 요소를 사용하는 폰트 CSS(@font-face)에 추가 및 swap 속성을 적용함으로서, 지정한 font가 로드되기전에 브라우저 font를 사용하도록 함으로서 font로드 이전에 사용자가 텍스트를 확인 가능하게 함으로서 성능향상.
        - 다만, 지정폰트를 사용하는 이유는 디자인에 맞춤이기 때문이므로 기본 폰트를 사용하는것은 어떻게 보면 시각적 요소의 퀄리티를 저하 시킬수도 있다고 생각된다.
        - swap이 아닌 다은 optional 로도 다른 사용 방법을 할 수 있다.
      - passive 리스너
        - ?
      - 오프스크린 이미지 로딩
        - 스크롤이 이미지에 도착하기 이전에는 로드시간을 늦춤으로서 성능향상
        - loading="lazy" 속성 (without 라이브러리)
        - AMP, Drupal, Joomla, Magento, WordPress 등의 라이브러리 참고
  - 접근성
    - 76
    - 이미지 태그의 aria-label, alt 추가
  - 권장사항
    - 100
  - 검색엔진 최적화
    - 80
    - meta description 추가
  - PWA
    - N/A

  ### 81 - 76 - 100 - 80 => 84 - 100 - 100 - 100 성능측정마다 약간의 변화 있음

- 크롬 개발자 툴의 Coverage(적용범위) 기능을 이용해 사용되지 않고있는 코드를 줄이고 호출된 파일 구성을 분석하여, 해당 페이지에서 사용되는 코드와 그렇지 않은 코드를 분리함으로서 호출되는 파일의 크기를 줄임으로서 성능향상에 도움.

그외 수정

- three 컴포넌트에 mousemove 이벤트 사용에 호출 수를 줄이기 위해 디바운스 적용
