# React + Vite + SWC

---

vite.config.js

-   `assetsInclude: ['**/*.PNG']` PNG 파일 포멧 사용.

-   vite-plugin-svgr 설치, plugins: [react(), svgr()],
    -   `import JavaScript from '../pages/skill/asset/svg/js.svg?react';` 형태로 SVG를 컴포넌트 형태로 import 가능
    -   기존의 `{ReactComponent as ..}` 대신 사용

---

240704

빌드, 번들러, 네트워크 등을 공부하며 번들링과 빌드시간을 측정하며 테스트를 하던도중
항상 하나의 파일이 500kb를 넘는 801.75kb가 측정이 되었다.
파일 이름으로 보아 index파일과 관련이 있어보이는데, 알고 있는 지식으로 dynamic import / lazy / suspence 를 살짝 만져보았다
일드 시간은 8.72 -> 6.85로 줄긴 했으나, 파일(청크)크기는 변함이 없다.

rollup-plugin-visualizer를 사용하여 번들 청크를 확인하여 줄일수 있는 청크에 대해 시각적으로 알아보고 결과를 확인할수 있는 라이브러리를 사용.

-   lodash 청크가 크게 나타나 있는것을 확인 -`dist/assets/lodash-D9wIYH0h.js  72.02 kB │ gzip:  26.55 kB`

    -   vite는 pre-bundling 외에는 rollup을 메인 번들링 기능으로 사용한다.
    -   rollup에는 manualChunk option을 사용하여 lodash에 대한 chunk를 줄일수 있는 방법을 직접 설명해 주고 있다.
    -   현재 lodash 사용방법으로 `import _ from 'lodash;`의 함수 호출 방식을 사용하였지만 해당 사용 방법이 lodash파일 전체를 불러오고 있다.
        -   따라서, `import map from lodash/map;`을 사용하여 map 파일만을 불러올수 있는 방법이 있었다. 다만 해당 방법은 기존의 `_`를 사용하지 않기에 lodash 사용 확인에 대한 가독성이 좀 떨어질수 있다고 생각한다. (함수사용에도 chunk 크기를 줄일수 있지만 이번에는 위 언급한 방식을 사용하도록 하겠다.)
    -   `vite.config.js` -> `build` -> `rollupOption` -> `output` -> `manualChunk` -> `lodash: ['lodash']`

    -   결과적으로 꽤 큰 용량의 청크 크기를 줄일 수 있었다.

        -   72.02kB 에서 0.24kB로 기존 대비 300배 정도의 청크 사이즈가 줄었다.
        -   물론 많이 사용하지 않았기에 모든 lodash파일을 불러오던 것에서 일부만 발췌해서 사용하니 크게 줄게된 것이라고 생각된다.
        -   `dist/assets/lodash-Cpj98o6Y.js  0.24 kB │ gzip:   0.18 kB`

    -   역시 300배 정도는 아니였다.
        -   lodash의 기능을 나누어서 import 했기때문에 청크도 나뉘었다.
            -   `dist/assets/lodash-Cpj98o6Y.js     0.24 kB │ gzip:   0.18 kB`
            -   `dist/assets/filter-CdSLGcDp.js     0.29 kB │ gzip:   0.23 kB`
            -   `dist/assets/map-Bh9NcjlJ.js        17.32 kB │ gzip:   7.11 kB`
                총 18kB로 유의미한 크기 축소는 있지만, map chunk가 굉장히 크다.
        -   lodash의 여러 바닐라에는 없는 메소드가 있어 유용하게 사용했지만, 청크크기를 크게 먹는다면 사용할 필요가 있을까? 특히 map,filter사용에는?
            -   유의미한 차이가 있는지 검색을 해보았고 아래 url의 테스트를 바탕으로 현재 사용에는 객체에 대한 map 메소드를 주로 사용하기에 바닐라 메소드로 대체 하였다.
                -   `https://dev.to/jrdev_/the-battle-of-the-array-titans-lodash-vs-vanilla-an-experiment-b6g`
        -   모든 map메소드를 대체한 결과, map chunk는 보이지 않았다. 또한 몇번 사용되지 않은 몇몇 메소드는 빌드 청크기록에 너무 작은지 없다.
            -   `dist/assets/lodash-Cpj98o6Y.js       0.24 kB │ gzip:   0.18 kB`
            -   `dist/assets/filter-Crg9fd2B.js       0.30 kB │ gzip:   0.23 kB`
            -   총 0.54 kB

-   현재 threeJS를 사용하고 있는데 이것도 청크크기가 많많치 않다.

#### vite bundler, rollupOption, lodash, chunk size, rollup-plugin visualizer

-   한줄 평 : 청크 줄이기 재밌다.

---

index.js파일의 크기에 대해.

-   현재 3d 모델 랜더링을 공부하고 있는 중이라 threejs + three/fiber + three/drei를 사용하고 있다.
    -   threejs에 대한 code-splitting / lazy import / dynamic import 의 검색어로 검색하던중 한국분의 깃헙블로그 발견! 한번 슥 본것만으로도 유용한 정보가 많다
    -   https://joong-sunny.github.io/graphics/graphics3-2/
    -   OffScreenCanvas - https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas
-   역시 rollup visualizer로 청크 확인중 three가 엄청난 크기의 청크를 index파일에서 차지하고 있다.

---

Vite Speed Up

-   vite의 속도를 올리기 위한 작업
    -   vite퍼포먼스[https://vitejs.dev/guide/performance]
    -   Use CSS instead of Sass/Less/Stylus when possible (nesting can be handled by PostCSS)
    -   Don't transform SVGs into UI framework components (React, Vue, etc). Import them as strings or URLs instead.
        -   나는 모든 프로젝트에서 SVG를 리액트 컴포넌트 형태로 사용하고 있다. 이유는 SVG의 장점은 컴스텀이고 이를 활용하기에 컴포넌트 형태가 좋기 때문이다.
        -   다만 vite에서는 속도향상을 위해서는 SVG의 컴포넌트 형의 사용을 줄이라고 한다.
        -   따라서, 컴포넌트 형태가 필요할 때만 사용하고 이외에는 다른 방법으로의 SVG를 사용하도록 한다.
    -   When using @vitejs/plugin-react, avoid configuring the Babel options, so it skips the transformation during build (only esbuild will be used).
    -   Reduce Resolve Operations.
        -   `import './MyBook'`을 하게 되면 vite는 `MyBook`, `MyBook.js`, `MyBook.ts`, ... 을 검색하게 된다.
        -   즉, 파일 확장명을 기입함으로서 vite가 반복적으로 검색해야 할 일을 줄인다.
    -   Avoid Barrel Files ( ex. export \* from './color.js')
    -   Large dependencies that are only used in certain cases should be dynamically imported
        -   많이 사용 않하지만, 크기가 큰 라이브러리를 dynamic import를 사용하자.

---

LightHouse 점검

-   0705

    -   성능
        -   81
        -   개선 진행
            -   이미지 크기 명시
                -   이미지 크기를 명시하지 않는 `inherit`에 대해 수정.
            -   차세대 형식 이미지 사용
                -   PNG,JPG 등의 파일 형식을 WebP 또는 AVIF 형식으로 제공
            -   font-display
                -   해당 요소를 사용하는 폰트 CSS(@font-face)에 추가 및 swap 속성을 적용함으로서, 지정한 font가 로드되기전에 브라우저 font를 사용하도록 함으로서 font로드 이전에 사용자가 텍스트를 확인 가능하게 함으로서 성능향상.
                -   다만, 지정폰트를 사용하는 이유는 디자인에 맞춤이기 때문이므로 기본 폰트를 사용하는것은 어떻게 보면 시각적 요소의 퀄리티를 저하 시킬수도 있다고 생각된다.
                -   swap이 아닌 다은 optional 로도 다른 사용 방법을 할 수 있다.
            -   passive 리스너
                -   ?
            -   오프스크린 이미지 로딩
                -   스크롤이 이미지에 도착하기 이전에는 로드시간을 늦춤으로서 성능향상
                -   loading="lazy" 속성 (without 라이브러리)
                -   AMP, Drupal, Joomla, Magento, WordPress 등의 라이브러리 참고
    -   접근성
        -   76
        -   이미지 태그의 aria-label, alt 추가
    -   권장사항
        -   100
    -   검색엔진 최적화
        -   80
        -   meta description 추가
    -   PWA
        -   N/A

    ### 81 - 76 - 100 - 80 => 84 - 100 - 100 - 100 성능측정마다 약간의 변화 있음

-   크롬 개발자 툴의 Coverage(적용범위) 기능을 이용해 사용되지 않고있는 코드를 줄이고 호출된 파일 구성을 분석하여, 해당 페이지에서 사용되는 코드와 그렇지 않은 코드를 분리함으로서 호출되는 파일의 크기를 줄임으로서 성능향상에 도움.

그외 수정

-   three 컴포넌트에 mousemove 이벤트 사용에 호출 수를 줄이기 위해 디바운스 적용
-   glb 파일 압축 (8ball 제외)

---

0706

-   성능 개선

    -   여전히 크기가 큰 파일들

        -   three, fiber, drei 등 3d 모델 랜더링 관련 라이브러리의 크기가 너무 크다. build 시 gzip 등 압축이 있어 실제 클라이언트에서 받는 크기는 줄어들지만, 근본적인 해결책으로 삼기에는 아쉬움이 남는다.
        -   glb 등의 3d 모델 파일도 큰 비중을 차지한다.

    -   three 라이브러리 관련 import를 lodash처럼 three 전체를 불러오는것이 아닌 각파일을 지정하여 호출하는 방식을 적용해봤지만, fiber, drei 등 라이브러리 내부에서 three를 사용하기 때문에, 중복되지 않는 호출 의존성으로 인해 더 많은 청크파일을 만들게 되었다.

    -   특정 요소 페인트 시간이 오래걸린다는 측정결과가 나왔다.
    -   단 2개의 태그를 사용한 요소인데, 아마 그 바로 밑에 존재하는 three 관련 요소가 영향을 미친다고 본다.

    -   자바스크립트 파일 크기 줄이기 라는 평가가 나오게 되는데, 찾아보니 크롬 extention 에 의한 것이였다. 사용하는 ad-block의 문제 ( + 사용하지 않는 자바스크립트 파일 줄이기 에도 extention 영향)

    -   github api를 사용해서 사용자 정보 데이터를 받아오는데, 이에 대한 압축 필요성이 있다는 평가가 뜬다.

    -   이전에 언급한 패스브리스너에 대해 어떤 부분에서 이러한 문제가 될만한 평가요소가 생성되었는지 알아보니, drei 라이브러리 내부에서의 요소였다.

-   다른 개선점
    -   three를 효율적으로 사용할 수 있는 방법에 대해 찾기
    -   3d 모델 로딩까지의 로딩 컴포넌트 제작.

---

0708

`three.js`가 side-effect를 우려해 더이상 tree-shaking의 영향을 받지 않는다고 한다.

#### Chunk

무리한 청크 나누기를 하기보다는 페이지 및 사용 기능에 따라 병합하고 나눌 필요성이 있다고 생각된다.

따라서, 페이지 입장시 보이는 부분에 대한 청크(들), 페이지 나머지 부분에 대한 청크, 다른 페이지(project)페이지에 대한 청크로 큰 구분을 한다.

-   ~~`fiber`, `drei`는 항상 같이 사용함으로 병합.~~ 실행시간 (commit 0708)
-   `three`는 용량이 너무 크기에 병합하지 않음.

---

0709

-   0708 추가 작업

---

0710

-   리팩토링
    -   코드 단축
    -   컴포넌트화
    -   styled-component
    -   css 분리

---

0715

-   리팩토링

    -   Header -> 상위 파일인 App.jsx의 라우터 내부에 위치. ( + footer, indicator)

        -   페이지마다 불러오는 것이 아닌 항상 위치.
        -   main페이지의 ref 데이터를 가져오는 방법을 고민
            -   redux 사용 가능하나 보다 간단한 방법 고민

    -   코드 단축

        -   불필요하게 나눈 컴포넌트 통합.
            -   컴포넌트가 하나의 기능을 한다고 할때 나누는 것을 기준으로 함. 단지 하나의 `div`를 가진채로만 컴포넌트의 분할은 의미가 없다고 생각됨. 오히려 크기가 작은 프로젝트에서는 위 기준을 가지는 것이 코드 이해나 효율측에서 좋다고 판단됨.

    -   불필요한 lazy import 제거

        -   이것또한 위의 '코드 단축'과 같은 이유로 판단.

    -   페이지 깜빡임

        -   페이지 최조 진입시 새로고침과 같은 깜빡임이 발견.
        -   아마 three와 관련 오류라는 예측.
        -   three 관련 컴포넌트 재조정

            -   마우스이벤트 계산 함수 재조정

        -   아마도 Three가 사용된 컴포넌트의 Rig 컴포넌트가 문제를 일으킨다고 생각.

    -   Lazy, Suspence

        -   fallback에 사용할 Loading 컴포넌트 제작

    -   Project 페이지 진입시 맨 밑으로 자동 스크롤 되는 의도치 않은 동작 발생

        -   이미 코드에 `window.scroll()` 사용을 하고 있지만 동작 안됨.
        -   라우터 전환시 바뀌는 `url`의 `param` 항목에 대한 `useEffect`를 따로 구성하여 정상 작동되는 `window.scroll()` 사용.

---

0716

    - 페이지 입장시 깜빡임 이슈

        - FrontThree 파일의 Rig=> 3d모델이 마우스 포인터를 보는 것과 같은 기능( 모델이 보는것이 아닌 카메라의 이동)

            - `useThree` 에서의 값 `mouse`에 대한 이슈? => three fiber 문서에서는 `mouse`는 더 이상 사용하지 않고, 대신 `pointer`의 사용을 권장 => 테스트 ing
