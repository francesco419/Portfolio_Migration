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

- lodash 청크가 크게 나타나 있는것을 확인 `dist/assets/lodash-D9wIYH0h.js  72.02 kB │ gzip:  26.55 kB`

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
      `dist/assets/lodash-Cpj98o6Y.js     0.24 kB │ gzip:   0.18 kB`
      `dist/assets/filter-CdSLGcDp.js     0.29 kB │ gzip:   0.23 kB`
      `dist/assets/map-Bh9NcjlJ.js        17.32 kB │ gzip:   7.11 kB`
      총 18kB로 유의미한 크기 축소는 있지만, map chunk가 굉장히 크다.
    - lodash의 여러 바닐라에는 없는 메소드가 있어 유용하게 사용했지만, 청크크기를 크게 먹는다면 사용할 필요가 있을까? 특히 map,filter사용에는?
      - 유의미한 차이가 있는지 검색을 해보았고 `https://dev.to/jrdev_/the-battle-of-the-array-titans-lodash-vs-vanilla-an-experiment-b6g`의 테스트를 바탕으로 현재 사용에는 객체에 대한 map 메소드를 주로 사용하기에 바닐라 메소드로 대체 하였다.
    - 모든 map메소드를 대체한 결과, map chunk는 보이지 않았다. 또한 몇번 사용되지 않은 몇몇 메소드는 빌드 청크기록에 너무 작은지 없다.
      `dist/assets/lodash-Cpj98o6Y.js       0.24 kB │ gzip:   0.18 kB`
      `dist/assets/filter-Crg9fd2B.js       0.30 kB │ gzip:   0.23 kB`
      - 총 0.54 kB

- 현재 threeJS를 사용하고 있는데 이것도 청크크기가 많많치 않다.

#### vite bundler, rollupOption, lodash, chunk size, rollup-plugin visualizer

- 한줄 평 : 청크 줄이기 재밌다.
