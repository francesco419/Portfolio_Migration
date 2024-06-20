/**portfolio*/
import port1 from '../assets/image/projectImgNew/portfolio/1.PNG';
import port2 from '../assets/image/projectImgNew/portfolio/2.PNG';
import port3 from '../assets/image/projectImgNew/portfolio/3.PNG';
/**youtube */
import youtube1 from '../assets/image/projectImgNew/youtube/youtube1.PNG';
import youtube2 from '../assets/image/projectImgNew/youtube/youtube2.PNG';
import youtube3 from '../assets/image/projectImgNew/youtube/youtube3.PNG';
/**travel */
import travel1 from '../assets/image/projectImgNew/travel/1.PNG';
import travel2 from '../assets/image/projectImgNew/travel/2.PNG';
import travel3 from '../assets/image/projectImgNew/travel/3.PNG';
/**social */
import social1 from '../assets/image/projectImgNew/sns/1.PNG';
import social2 from '../assets/image/projectImgNew/sns/2.PNG';
import social3 from '../assets/image/projectImgNew/sns/3.PNG';
import social4 from '../assets/image/projectImgNew/sns/4.PNG';
/**mindmap */
import mindmap1 from '../assets/image/projectImgNew/mindmap/mindmap1.png';
import mindmap2 from '../assets/image/projectImgNew/mindmap/mindmap2.png';
import mindmap3 from '../assets/image/projectImgNew/mindmap/mindmap3.png';
/**finedition */
import finedition_home from '../assets/image/projectImgNew/finedition/finedition-home.png';
import finedition_food from '../assets/image/projectImgNew/finedition/finedition-food.png';
import finedition_place from '../assets/image/projectImgNew/finedition/finedition-place.png';
import finedition_seoul from '../assets/image/projectImgNew/finedition/finedition-seoul.png';

/**image */
import css from '../assets/svg/icon/css.png';
import javascript from '../assets/svg/icon/javascript.png';
import html from '../assets/svg/icon/html.png';
import react from '../assets/svg/icon/react.png';
import redux from '../assets/svg/icon/redux.png';
import typescript from '../assets/svg/icon/typescript.png';
import scss from '../assets/svg/icon/scss.png';

import ReactMarkdown from 'react-markdown';

export const PNGIMAGES = [
  [javascript, html, css],
  [react, redux],
  [typescript, scss]
];

const COMMUNICATIONTEXT = [
  '커뮤니케이션을 통해 문제에 대하여 보다 효율적이고 신속하게 적절한 해답을 찾고자 합니다.',
  '지속적인 대화를 통해 공통된 의견으로 서로간의 시너지를 발휘할 수 있는 팀원이 되고자 합니다.',
  '기초적인 백엔드 경험을 통해 협엽 간의 필요로 하는 것에 대한 정확하고 빠른 커뮤니케이션이 가능합니다.'
];
const CREATIVITYTEXT = [
  '개발 원동력은 상상하는 것을 코드를 통해 구현하고자 하는 목표입니다.',
  '아이디어를 통해 항상 새로운 것을 시도하고, 이러한 시도속에서 차별화된 프로덕트를 제작하고자 합니다.',
  '사용자 입장에서 높은 효율과 개선된 경험을 제공 받을 수 있는 UI/UX를 제작하기위해 끊임없이 고민합니다.'
];
const GROWTHSTEXT = [
  '다양한 문제 해결 경험으로 성장하고 이를 다시 발판으로 삼는 지속적인 성장을 하고자 합니다.',
  '프로젝트의 아쉬운 점을 파악하고 이를 보완할 수 있는 기술을 도입하여 차기 프로젝트의 발전을 지향합니다.',
  '새로운 기술에 접근시, 필요성 및 사용방식 등의 구체적인 의미를 가져 기술사용에 정확한 이유를 가지고자 합니다.'
];

export const TEXTARRAY = [COMMUNICATIONTEXT, CREATIVITYTEXT, GROWTHSTEXT];

export const ProjectDetailText = [
  {
    id: '1',
    param: 'MainPage',
    name: 'Portfolio',
    show: false,
    intro:
      '프론트엔드 공부를 하면서 프로젝트마다 어떤 기술을 공부했는지에 대한 사용 기술과 학습 내용을 담은 웹페이지를 제작했습니다.',
    text2:
      'React를 사용한 첫 번째 프로젝트로 저를 소개하는 포트폴리오 웹페이지입니다.\n현재 진행하고 있거나 완료된 프로젝트를 기재하고 관련 이미지와 코드, 페이지 링크를 포함했습니다.\nReact Hooks 및 State, Router 등의 작동 방식을 익히고 이를 직접 사용해 보며 React에 대해 \n가장 많이 학습하게 된 프로젝트이며, 기록하는 웹페이지로서 주기적으로 업데이트를 진행하여 코드의 유지보수를 하고 있습니다.',
    mission: null,
    img: [port1, port2, port3],
    url: 'https://francesco419.github.io/MainPage',
    github: 'https://github.com/francesco419/MainPage',
    contribution: '개인 프로젝트',
    created: '04.2022',
    LastUpdate: '04.19.2023',
    program: ['React', 'Redux Toolkit'],
    result: [
      '동적 코드 작성으로 유지 보수 및 수정 작업 중 오류를 사전에 감지하지 못하여 문제에 대한 해결 방안을 찾기까지 불필요한 시간 낭비의 경험으로 정적 타입 언어의 필요성을 자각하여 이후 Typescript 적극 사용하게 되는 계기',
      'Virtual DOM의 작동 이해 및 이를 효과적으로 사용하기 위한 최적의 렌더링 방식에 대해 학습 및 응용',
      '요구되는 적절한 애니메이션을 CSS의 keyframe / transition 및 자바스크립트 애니메이션을 통해 구현',
      '다양한 사용자 행동에 따라 반응하는 JSX 이벤트 처리'
    ],
    prev: false,
    next: 'Youtube'
  },
  {
    id: '2',
    param: 'Youtube',
    name: 'Youtube Clone',
    show: true,
    intro:
      '유튜브를 클로닝 한 프로젝트입니다. 가장 활발히 사용되는 웹사이트를 클로닝 함으로서 유튜브 UI를 직접 구현했습니다',
    text2:
      '현재 가장 많이 사용되고 있는 페이지 중 하나인 유튜브를 Youtube API를 사용하여 유튜브에 있는 각각의 페이지 및 여러 기능들을 구현한 프로젝트입니다. 이 프로젝트를 통해 API를 다루는 능력을 향상시키게 되었으며, 프로젝트를 진행하면서 이전에 작업했던 프로젝트보다 훨씬 더 많은 오류 및 요구사항에 부딪히고\n이를 능숙하게 해결하여 여러 요구사항에 대해 다양한 방식으로 접근하여 조건을 만족시킬 수 있는 코드를 구현하는 능력을 키운 프로젝트입니다.',
    mission: null,

    img: [youtube1, youtube2, youtube3],
    url: 'https://francesco419.github.io/Youtube/',
    github: 'https://github.com/francesco419/Youtube',
    contribution: '개인 프로젝트',
    created: '05.2022',
    LastUpdate: '06.25.2022',
    program: ['React', 'CSS Module'],
    result: [
      '수많은 Open API 호출 및 사용을 통해, 데이터 통신 및 비동기적 처리 방식에 대해 학습',
      '클로닝 대상 웹사이트를 분석함으로써 HTML, CSS의 구성 및 작성 이해도를 높이고, 이를 바탕으로 직접 구현',
      'API의 데이터를 일차원적으로 표현하기보다 편집 및 가공을 통해 의도한 데이터로 새로 구성하여 표현'
    ],
    prev: 'MainPage',
    next: 'Travel'
  },
  {
    id: '3',
    param: 'Travel',
    name: 'Travel Away',
    show: true,
    intro:
      '코로나 이후 여행 수요의 증가로 각 국가의 기본 정보를 소개할 수 있는 웹페이지를 제작했습니다.',
    text2:
      '코로나 이후 여행 수요의 증가로 여행을 계획하는 사용자들을 위해 제작을 계획하게 된 프로젝트로서, \n각 국가의 여러 정보를 소개하는 웹페이지로 기본 정보, 여행 경보, 환율 등의 정보를 제공하며, 지속적으로 아이템 및 풍부한 정보를 담을 수 있는 웹 페이지가 될 수 있도록 지속적인 업데이트를 실행하고 있습니다.',
    mission: null,
    img: [travel1, travel2, travel3],
    url: 'https://francesco419.github.io/Travel/',
    github: 'https://github.com/francesco419/Travel',
    contribution: '개인 프로젝트',
    created: '12.2022',
    LastUpdate: '02.08.2023',
    program: ['React', 'CSS Module'],
    result: [
      '사용자에게 유용한 정보를 제공할 수 있는 UI에 대해 깊게 고민하고 구상한 기능을 직접 구현',
      '컴포넌트 간의 상태 값 및 상태 관리 함수의 prop drilling으로 인한 코드 구성 복잡 및 가독성 저하에 대한 대체 기술 필요성으로서 이후 프로젝트에서 Redux 적극 사용 '
    ],
    prev: 'Youtube',
    next: 'post_typescript_redux'
  },
  {
    id: '4',
    param: 'post_typescript_redux',
    name: 'Social Network',
    show: true,
    intro:
      '프론트엔드와 백엔드의 기술을 사용하여 회원가입, 로그인, 게시물 등록 등의 기능을 포함한 SNS 형태의 웹페이지입니다.',
    text2:
      '실제 직무에서는 프론트엔드와 백엔드의 협업이 필수적이기에 기초적인 백엔드의 기술들을 학습하여 프론트엔드에서 서버로 요청, 백엔드에서 받은 요청을 수행, 데이터를 DB에 저장 및 읽어와서 프론트엔드에 표현하는 전체적인 통신 및 데이터 교환에 대한 학습을 목표로 한 프로젝트입니다.\n이를 바탕으로 로그인, 회원가입, 게시물 관리 등 백엔드와의 통신이 비교적 활발한 SNS 형태의 프로젝트를 진행하게 되었습니다.',
    mission: null,
    img: [social1, social2, social3, social4],
    url: '',
    github: 'https://github.com/francesco419/post_typescript_redux',
    contribution: '개인 프로젝트',
    created: '01.2023',
    LastUpdate: '02.28.2023',
    program: ['React', 'TypeScript', 'SCSS', 'Redux', 'NodeJS', 'MySQL'],
    result: [
      '**Axios Interceptor**를 통해 반복적인 코드 사용을 줄여 **재사용화 및 공통적인 에러 처리**를 담당하여 **가독성 높은 코드**를 작성',
      '**Redux Toolkit**을 **사용한 상태 관리 및 유지 보수성**을 높이고 **props 복잡도**를 개선 및 redux persist로 사용빈도가 **높은 데이터의 반복적인 데이터통신 회피**',
      '**NodeJS, MySQL, Express를 사용한 백엔드를 구성** 및 CORS 처리, 쿼리를 통한 DB 관리, 이미지 파일 저장 및 데이터 통신 경험',
      '**Lazy, Suspense를 적용한 코드 분할**을 통해 페이지 성능 최적화 및 lighthouse를 통한 웹 페이지 평가를 통해 지속적으로 최적화 방법을 모색'
    ],
    prev: 'Travel',
    next: 'BrainBomb'
  },
  {
    id: '5',
    param: 'BrainBomb',
    name: 'MindMap',
    show: true,
    intro:
      '사용자와 보다 더 상호작용을 할 수 있는 기능을 가진 마인드맵을 구성할 수 있는 웹사이트 제작, 서로 상관관계에 있는 여러 코드들의 복잡한 구성과 이에대한 연쇄적인 오류 해결능력',
    text2:
      '기존 마인드맵 웹사이트의 회원가입,로그인과 복잡한 가이드 등의 불편함을 해소하고자 남녀노소 누구나 보기에 직관적이고 쉽게 마인드맵을 구성할 수 있도록 해당 프로젝트를 시작하였습니다. 서버통신없이 오직 기능적인 부분만을 고려하여 제작하게 되었고, 이 프로젝트를 진행하면서 일반적인 웹사이트와 다른 기능적인 면을 제공하는 분야에 관심을 가지게 되었고 특히 발생하는 연쇄적인 오류에 문제를 파악하고 능숙하게 해결하는 실력을 크게 향상하는 계기가 되었습니다.',
    mission: null,
    img: [mindmap1, mindmap2, mindmap3],
    url: 'https://keen-nasturtium-541fc9.netlify.app',
    github: 'https://github.com/francesco419/BrainBomb',
    contribution: '개인 프로젝트',
    created: '03.2022',
    LastUpdate: '04.19.2023',
    program: ['React', 'TypeScript', 'SCSS', 'Lodash', 'Redux Toolkit'],
    result: [
      '일부 컴포넌트에 대해 **Style-in-component**를 통해 **재사용성이 높은** 컴포넌트의 일관성있고 **통일된 스타일**을 제공할 수 있도록 하였습니다.',
      '**Redux를 통해** 단순 상태관리보다 해당 **상태에 관한 복잡한 연계기능을 효율적**으로 풀어내어 프로젝트 전반의 사용자경험의 향상을 야기시켰습니다',
      '**Lodash 라이브러리**의 적극적인 사용을 통해 기존 바닐라JS에서 따로 제공하지 않는 다양한 함수를 효과적으로 사용하여 **복잡한 연계성이 있는 데이터들을 보다 효율적으로 가공**할수 있었습니다.',
      '마인드맵의 여러 요소들로 인해 발생하는 **연쇄적인 오류에 대해 해당 원인의 문제점을 파악하고 이를 순차적으로 해결**하는 문제해결 능력을 키우게 되었습니다.'
    ],
    prev: 'post_typescript_redux',
    next: 'FINEDITION_WORK'
  },
  {
    id: '6',
    param: 'FINEDITION_WORK',
    name: 'Finedition',
    show: true,
    intro:
      '현직 디자이너와 협업하여 창업을 준비하는 사람의 요구에 맞춰 사업의 기반이 될 수 있는 웹페이지의 프로토타입을 제작, 한국 관광공사에서 진행하는 공모전에서 수상',
    text2:
      '현재까지 익힌 기술들을 토대로 현직 디자이너와 협업하여 의뢰자의 요구에 맞게 디자인, 기능 등 웹페이지의 모든 요소를 제작하였습니다. 프로젝트 진행과정에 있어 협업에 대한 경험과 이해를 쌓고, 요구사항에 대해서는 이를 어떻게 구현할지에 대한 문제를 토의를 통해 만족할 수 있는 해결책을 찾고, 다양한 오류들을 해결해가는 시간들을 통해 풀어야할 다양한 형태의 문제에 보다 능숙한 처리 능력을 가지고자 임했습니다.',
    mission: null,
    img: [finedition_home, finedition_food, finedition_place, finedition_seoul],
    url: 'https://finedition.kr/',
    github: 'https://github.com/francesco419/FINEDITION_WORK',
    contribution: '팀 프로젝트',
    created: '03.2022',
    LastUpdate: '04.19.2023',
    program: [
      'React',
      'TypeScript',
      'SCSS',
      'Lodash',
      'Redux Toolkit',
      'NodeJs',
      'MySQL',
      'Express',
      'AWS',
      'Figma'
    ],
    result: [
      '**디자이너와 Figma를 통한 협업**을 통해 시각적 웹 개발을 원활하게 진행했습니다. Figma를 활용하여 디자인 파일을 **공유하고 실시간으로 협업**하며, **개발과 디자인 간의 원활한 의사소통**을 도모하여 프로젝트의 일관성과 효율성을 높였습니다.',
      '**Google Login API**를 활용하여 강력한 **사용자 인증 시스템을 구축**했습니다. 사용자 편의성과 보안을 고려하여 **손쉬운 로그인 경험**을 제공하며, 개인정보 관리에 대한 효과적인 솔루션을 확보했습니다.',
      '**Kakao Map API**를 활용하여 지리적 **데이터 시각화**를 강화했습니다. 다양한 지도 기능을 통해 사용자에게 직관적이고 효과적인 지리 정보를 제공하며, **애플리케이션의 사용자 경험을 향상**시켰습니다.',
      '프론트와 백엔드의 **서버를 분리배포**하여 시스템 유연성을 향상시켰습니다. 클라이언트와 **서버 간의 독립성을 유지**하면서, 효율적인 확장과 업데이트를 가능케 하여 개발 생산성과 안정성을 동시에 향상시켰습니다.',
      '**AWS 서비스**를 사용하여 안정적이고 확장 가능한 개발 환경을 조성했습니다. 다양한 **클라우드 기술을 활용**하여 **서버 관리 및 인프라 구축**을 효율적으로 수행하고, 안전한 데이터 저장 및 전송을 보장하였습니다.',
      '**Scss와 SVG를 결합**하여 Interactive한 개발을 경험했습니다. Scss를 활용하여 스타일링을 효율적으로 구성하고, SVG를 활용하여 **다양한 그래픽 요소를 삽입하며 상호작용성**을 부여했습니다. 이를 통해 독특하고 다이내믹한 웹 페이지를 만들어 사용자 경험을 높였습니다.',
      '정규표현식을 **사용한 검증을 통해 입력 데이터의 유효성을 강화**했습니다. 사용자의 입력이 지정한 양식과 일치하는지 확인하여 **데이터의 정확성을 보장**하고, 보안 측면에서도 적절한 검증을 수행하여 **안전한 데이터 처리**를 실현했습니다.'
    ],
    prev: 'BrainBomb',
    next: false
  }
];

export const myProjects = [
  {
    name: 'Finedition',
    text: '예비 창업자의 요구에 맞춰 현직 디자이너와 협업하여 프로토타입을 제작, 관광공사 공모전에 참여하여 최우수상을 수상 하게 되었습니다.',
    img: finedition_home,
    to: 'FINEDITION_WORK'
  },
  {
    name: 'MindMap',
    text: '사용자와 보다 더 상호작용을 할 수 있는 기능을 가진 마인드맵을 구성할 수 있는 웹사이트 제작했습니다.',
    img: mindmap1,
    to: 'BrainBomb'
  },
  {
    name: 'Social Network',
    text: '프론트엔드와 백엔드의 기술을 사용하여 회원가입, 로그인, 게시물 등록 등의 기능을 포함한 SNS형태의 웹페이지입니다.',
    img: social1,
    to: 'post_typescript_redux'
  },
  {
    name: 'YouTube',
    text: '유튜브를 클로닝 한 프로젝트입니다. 가장 활발히 사용되는 웹사이트를 클로닝 함으로서 API를 활용한 기능 및 UI를 직접 구현했습니다.',
    img: youtube1,
    to: 'Youtube'
  }
];

export const ProjectResultNew = [
  {
    name: 'Finedition',
    work: [],
    data: [
      {
        title: '주요기능',
        info: [
          '외국 관광객에게 효과적으로 전국의 관광정보를 전달',
          '인포그래픽으로외국관광객 눈높이에서 정보 전달',
          '매거진기능으로정보를자체 큐레이션하여전달'
        ]
      },
      {
        title: '담당역할 및 목표',
        info: [
          '기획 및 디자인 1명, 개발자 1명',
          'Front-End : 기획 요구에 따라 전반적인 웹페이지 제작 (100%)',
          'Back-End : 서비스에서 제공하는 데이터 서버 구축 및 관리 (100%)'
        ]
      },
      {
        title: '과정 & 문제해결',
        info: [
          {
            subtitle:
              '**디자이너와 Figma를 통한 협업**을 통해 시각적 웹 개발을 원활하게 진행했습니다. Figma를 활용하여 디자인 파일을 **공유하고 실시간으로 협업**하며, **개발과 디자인 간의 원활한 의사소통**을 도모하여 프로젝트의 일관성과 효율성을 높였습니다.',
            detail: `**Figma**를 사용하여 페이지 레이아웃, 기능설명, API를 통해 불러온 데이터들의 가공형태 및 배치도 등의 시각적 요소에 대해 토의하고, **Notion**으로 사용할 API에 대한 정보 공유 및 기획단계에서 작성된 세부적인 사항을 공유, 미팅을 통해 의논된 주제에 대한 해결책 등의 정보공유를 하였습니다. 
            
또한 **Google Meet** 기능을 이용해 어느 부분에 대한 정확한 피드백을 가능케 함으로서 매끄러운 프로젝트 진행을 가능하게 했습니다.
            `
          },
          {
            subtitle:
              '**Google Login API**를 활용하여 강력한 **사용자 인증 시스템을 구축**했습니다. 사용자 편의성과 보안을 고려하여 **손쉬운 로그인 경험**을 제공하였습니다.',
            detail: `Google Login API를 사용하여 서비스 대상인 **외국 고객의 쉽고 안전한** 회원가입 및 로그인을 가능하게 했습니다.

이메일 주소, 이름 , 지역, 사진 의 **데이터를 API로 부터 제공**받아 회원가입시 추가 정보 입력은 최소화 했습니다.
          `
          },
          {
            subtitle:
              '**Kakao Map API**를 활용하여 지리적 **데이터 시각화**를 강화했습니다. 다양한 지도 기능을 통해 사용자에게 직관적이고 효과적인 지리 정보를 제공하며, **애플리케이션의 사용자 경험을 향상**시켰습니다.',
            detail: `Kakao Map API을 활용하여 외국 관광객에게 소개하고자 하는 지역 및 장소에 관한 시각적 정보를 제공하였습니다.
\`\`\`
  let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
  let options = { //지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(mapy, mapx), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
  };

  let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  let count = 0;
  let bounds = new window.kakao.maps.LatLngBounds(); // 장소 검색 객체를 생성합니다
  let ps = new window.kakao.maps.services.Places(map); // 키워드로 장소를 검색합니다
  ps.keywordSearch(inputData[0], placesSearchCB);
  let marker;

  function placesSearchCB(data: any, status: any, pagination: any) {
    if (status === window.kakao.maps.services.Status.OK) { // map API load OK
      displayMarker(data[0]); // marker 생성
      marker = new window.kakao.maps.LatLng(data[0].y, data[0].x);
      bounds.extend(marker);
      if (count < inputData.length) {
        kewwordSearch(inputData[count]);
      } else if (count == inputData.length) {
        setBounds();
      }
    }
  }

  function kewwordSearch(keword: any) {
    ps.keywordSearch(keword, placesSearchCB);
    count = count + 1;
  }
  function displayMarker(place: any) { // 제공받은 정보를 바탕으로 지도에 표시할 marker를 생성합니다.
    var marker = new window.kakao.maps.Marker({
      map: map,
      position: new window.kakao.maps.LatLng(place.y, place.x)
    });
    window.kakao.maps.event.addListener(marker, 'click', function (o: any) {
      var position = marker.getPosition();
      var url = 'https://map.kakao.com/link/map/' + place.id;
      window.open(url, '_blank');
    }); // marker 클릭시 해당 정보가 담긴 kakao map 페이지로 이동하도록 하여 관광객에게 많은 정보를 제공하였습니다.
  }
  function setBounds() {
    map.setBounds(bounds, 90, 30, 10, 30);
  }

  var zoomControl = new window.kakao.maps.ZoomControl(); // zoom 기능
  map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT); // zoom 기능 표시
\`\`\`
            `
          },
          {
            subtitle:
              '프론트와 백엔드의 **서버를 분리배포**하여 시스템 유연성을 향상시켰습니다. 클라이언트와 **서버 간의 독립성을 유지**하면서, 효율적인 확장과 업데이트를 가능케 하여 **개발 생산성과 안정성**을 동시에 향상시켰습니다.',
            detail: `프론트 부분을 **Client Side Rendering**, 백 부분을 **API Server**로 사용하였습니다.
Netlify를 사용하여 자동 빌드 및 배포, 환경변수(env)설정, 구입한 도메인 연결을 했습니다.

- 이전에 백엔드를 구현한 프로젝트도 있었으나, 개발단계에서만 사용되고 배포 지식이 부족해 정상적인 배포를 하지 못한 경험을 통해 보다 완성된 서버를 제작하고자 노력하였습니다.
- 다양한 AWS 및 Netlify 서비스를 이용해 페이지-서버-데이터베이스-저장소의 정상적인 연동경험을 갖고 어떠한 점을 보완하고 어떻게 구성 해야하는지에 대해 고민하고 학습해보는 경험이었습니다.
`
          },
          {
            subtitle:
              '**AWS 서비스**를 사용하여 안정적이고 확장 가능한 개발 환경을 조성했습니다. 다양한 **클라우드 기술을 활용**하여 **서버 관리 및 인프라 구축**을 효율적으로 수행하고, 안전한 데이터 저장 및 전송을 보장하였습니다.',
            detail: `**AWS RDS를 사용하여 MySQL 데이터베이스를 서버와 연결**하고, **S3를 이용해 이미지 등의 저장소**를 추가했습니다.
**multerS3**를 사용해 multer기능을 이용하여 S3에 파일을 전송을 가능케 했습니다. 또한 AWS와의 연결보안을 위해 **AWS IAM**을 사용, IAM에 따른 역할 엑세스 지정과 해당 엑세스 키를 사용해 메인 ID의 사용을 줄여 **보안을 강화**했습니다.
            `
          },
          {
            subtitle:
              '**SCSS와 SVG를 결합**하여 Interactive한 개발을 경험했습니다. SCSS를 활용하여 스타일링을 효율적으로 구성하고, SVG를 활용하여 **다양한 그래픽 요소를 삽입하며 상호작용성**을 부여했습니다. 이를 통해 독특하고 다이내믹한 웹 페이지를 만들어 사용자 경험을 높였습니다.',
            detail: ` #### 우리나라 지도에서 각 도/시 분류로 마우스를 올리면 effect와 함께 소개글 및 이미지에도 주요 도시명이 표시 요구.

처음에는 **id에 mouse이벤트를 추가하여 해당 이팩트를 구현**하려고 했었습니다. mouseOver이벤트는 경험상 의도치 않은 동작을 유발했기에 mouseEnter,mouseLeave 등의 이벤트를 사용했었는데, 보다 **간단하고 쉽게 해결할 수 있지 않을까 고민**했습니다.
DOM 조작을 최소화 하면서 원하는 효과를 구현하기 위해서 각 **각 path를 컴포넌트화 하거나, img로 변경해서 대체 이미지를 보여주는 형태를 구상**하기도 했습니다.
이때, CSS에서도 특정 **id에 대해 스타일을 설정**할 수 있는것을 생각하게 되어 당시 **SCSS를 사용하고 있었기에 보다 직관적이고 간략한 해결방법을 모색**, 수집된 유용한 정보들을 토대로 아래 **SCSS 구문으로 원하는 효과를 구현**해냈습니다.

\`\`\`js
      $KRCODE: KR02, KR031, KR032...
      @each $code in $KRCODE {        //SVG내부의 path의 id는 KR*** @each를 사용하여 $KRCODE의 모든 id에 적용
        ##{$code} {       // ex) KR02
          &_rect,
          &_card {        // ex) KR02_rect, KR02_card
            opacity: 0;
          }

          &:hover ~ &_name,       // ex) KR02 &:hover ~ KR02_name
          &_rect:hover ~ &_name {
            display: none;
          }

          &:hover ~ &_rect,       // ex) KR02 &:hover ~ KR02_rect
          &_rect:hover {
            opacity: 1;
          }
        }

        .region_container:has(> svg > ##{$code}:hover) > ##{$code}_card {
          opacity: 1;
        }
        .region_container:has(> svg > ##{$code}_rect:hover) > ##{$code}_card {
          opacity: 1;
        }
      }
\`\`\`

#### 결과적으로 SCSS와 SVG를 결합하여 보다 효과적으로 요구사항을 수행했습니다.`
          }
        ]
      }
    ]
  },
  {
    name: 'MindMap',
    work: [
      'https://velog.io/@francesco419/%EB%A7%88%EC%9D%B8%EB%93%9C%EB%A7%B5-230530',
      'https://github.com/francesco419/BrainBomb'
    ],
    data: [
      {
        title: '주요기능',
        info: [
          '별도의 회원가입 없이 마인드맵 서비스 제공',
          '파일형대로의 저장 및 불러오기를 통한 기능 제공'
        ]
      },
      {
        title: '담당역할 및 목표',
        info: ['개인 프로젝트 (100%)']
      },
      {
        title: '과정 & 문제해결',
        info: [
          {
            subtitle:
              '일부 컴포넌트에 대해 **Style-in-component**를 통해 **재사용성이 높은** 컴포넌트의 일관성있고 **통일된 스타일**을 제공할 수 있도록 하였습니다.',
            detail: ''
          },
          {
            subtitle:
              '**Redux를 통해** 단순 상태관리보다 해당 **상태에 관한 복잡한 연계기능을 효율적**으로 풀어내어 프로젝트 전반의 사용자경험의 향상을 야기시켰습니다',
            detail: ''
          },
          {
            subtitle:
              '**Lodash 라이브러리**의 적극적인 사용을 통해 기존 바닐라JS에서 따로 제공하지 않는 다양한 함수를 효과적으로 사용하여 **복잡한 연계성이 있는 데이터들을 보다 효율적으로 가공**할수 있었습니다.',
            detail: ''
          },
          {
            subtitle:
              '마인드맵의 여러 요소들로 인해 발생하는 **연쇄적인 오류에 대해 해당 원인의 문제점을 파악하고 이를 순차적으로 해결**하는 문제해결 능력을 키우게 되었습니다.',
            detail: ''
          },
          {
            subtitle: '프레임드랍 개선',
            detail: `맵의 요소 이동시 연관된 요소의 연결선의 좌표 이동과 같은 연쇄작용을 발생 시켜야 했습니다.
             따라서 각 노드 컴포넌트에 정보를 저장해서 연쇄작용이 발생할 컴포넌트를 찾아 변화를 주는 방식보다는
             모든 노드 정보를 한곳에 모아 이를 Redux를 사용해 제어하고자 했습니다.
             다만 요소 이동시 좌표업데이트와 함께 Redux 저장소가 업데이트되면서 모든 요소에 리랜더링이 발생 하였고,
             이는 10개 정도의 요소가 추가 된 시점부터 명백한 프레임드랍이 체감되었고, 요소가 많아질수록 더욱 심해졌씁니다.
             
해결과정
  1. 계산 코드의 개선과 함께 간략화를 반복적으로 진행하여 연산코드를 40%가량 축소 했습니다.
  2. 불필요한 Redux업데이트로 리랜더링을 방지하기 위해 요소 및 연관된 요소들의 연쇄적인 계산을 분리하여 프레임드랍을 완전해결하고 성능을 향상시켰습니다.
    - 요소이동시 요소 및 연관된 연결선의 정보만 다른 임시 Redux Store에 저장하여 최소한의 계산만을 하고, 이동 이벤트인 drag가 끝날시에 Redux에 업데이트 함으로서 최적화를 적용했습니다.

이로써 반복적인 리랜더링으로 인해 눈에 보일정도의 심각한 프레임드랍 현상을 완벽히 해결하고, 연산 코드를 개선하며 가독성 높였습니다..`
          },
          {
            subtitle: '연결선 오류작업',
            detail: `요소의 특정 변화에서 요소와 요소 사이를 연결시켜주는 연결선의 위치에 의도하지 않은 동작이 발생하였습니다.
             항상 요소 -연결선- 요소의 순서를 가져가야 하는 상황에서 요소의 크기에 변화를 주게되는 순간,
             요소 - 요소 - 연결선의 순서로 변경되어 요소간의 연결 구성에 문제를 발생시킨다.
             물론 , 데이터상에서는 연결관계에 변화가 생긴것은 아니나,
             시각적으로 데이터를 정리하기 위해 사용하는 마인드맵이라는 점에서 시각적인 오류가 생겨서는 안된다.
             
해결과정
  1. 크기변화에 의해 연결선의 위치에 오류가 발생, 원인을 파악하기 위해 계산식을 하나하나 검증해본결과 연산도중 tan(탄젠트)값이 +가 아닌 -(음수)가 될시에 연결선의 원래 위치와 정반대로 표현되는 것을 활인하게 되었습니다.
  2. 결국에 크기변화가 tan값에 영향을 주는것이 원인이므로, 이를 해결하가 위해 크기변화에 대해 코드를 수정하였습니다.
    - 이전에는 요소에는 단 하나의 크기가 있었는데, 이를 두가지로 분리, 시각적인 부분과 절대적 크기인데, 시각적인 부분은 크기의 변화가 자유롭지만, 절대적인 부분은 항상 고정적인 크기를 가져가게 된다.
  3. 즉, 연결선의 위치는 고정적인 크기를 가져가는 부분과 상호작용하기때문에 시각적인 크기 부분에 변화를 주어도 tan값이 음수가 될 가능성을 배제 하였다.

요소를 outter-inner-contents 형태로 분리하여, 각 layer에 해당아는 부분에 적절한 이벤트를 할당하여 의도치 않은 동작 및 오류에 대해 해결하였습니다.`
          },
          {
            subtitle: '마인드맵 이동',
            detail: `Zoom 기능 추가 이후 변화된 크기에 따라 맵 자체를 이동시키는 기능에서 문제가 발생.
             목표된 기능은 지도와 같은 자유로운 이동이었으나, 이동 기능이 맵자체를 벗어나는 현상이 발생되고 이어서 다시 맵을 찾지 못하는 경우가 발생되었다.
             따라서 크기와 상관없이 맵의 크기번위를 벗어나느 이동이 불가하도록 제어할 수있는 코드를 작성해야 했다.
             
해결과정
  1. 마인드맵 자제에 onmousedown,onmousemove이벤트를 추가하여 이동범위 제한을 설정하였으나, 요소 drag시에도 해당 이벤트가 발생.
    - onmousemove이벤트에 _dragElement !== null (요소 drag가 되고있는지)의 조건문을 추가하여 이벤트 동시 발생을 방히하였다.
  2. 마인드맵 이동 후 브라우저의 뷰포트와 마인드맵 사이의 좌표가 틀어지고, 연쇄적으로 요소 이동에도 영향을 미치는 문제가 발생.
    - 마인드맵의 좌측최상단을 기점으로, 이동 시 뷰포트와의 좌표계산을 통해 맵,요소 이동에 오류를 발지 하였다.

해당 기능을 수정하고 오류를 제거하는 과정에서도 연쇄적으로 간단한 오류 및 복접한 오류가 발생하였는데, 연쇄적인 부분으로서 상호작용되는 계산식을 분석하여 문제 해결에 쉽게 접근이 가능하였다.`
          },
          {
            subtitle: '마인드맵 이동 2',
            detail: `이전에 문제를 해결함에도 불구하고 요소 드래그시에 맵 전체가 몇pexel정도 이동되는 것을 발견하였다.
             _dragElement !== null과 같은 조건식을 통해 의도치 않은 동작을 방지 하고자 했으나,
             요소와 맵의 이동간의 작동 순서를 분석한 결과 조건식에 해당하지 않는 틈이 몇ms 발생하였고 이로 인해서 맵 전체가 이동되는 것을 발견.
             다행히 뷰포트와의 좌표 계산을 하기에 연쇄적인 오류는 발생 하지 않으나 해결하고자 한다.
             
문제해결
  1. 맵의 위치를 저장하여 타 이동 계산에 오류가 없도록 함.
  2. 해당 위치가 이동 제한 범위 이상으로 이동하게되면 초기위치(0,0)으로 이동해야 하나 마지막으로 이동된 위치로 이동되는 문제 발견.
  3. 원래는 이벤트 발생 횟수를 줄여 Redux업데이트를 최소화하기 위해 디바운스를 사용하였으나 이로 인해 위치저장이 이루어져야 할 시점에 되지 않음으로 오류를 발생하였다.
  4. 디바운스를 사용하지 않음으로 이동시마다 이벤트가 실행되겠지만 의도치 않은 오류 및 동작을 제어하였다.

오류를 제어하기 위해 최적의 성능을 포기했던 경험. 두 가지다 해낼수 있는 해결방안을 제시하기위해서는 많은 경험이 필요해 보인다.`
          }
          //요소간의 이동 계산
          //프레임드랍 개선 - redux를 통해
          /**맵의 요소 이동시 연관된 요소의 연결선의 좌표 이동과 같은 연쇄작용을 발생 시켜야 했습니다.
           * 따라서 각 노드 컴포넌트에 정보를 저장해서 연쇄작용이 발생할 컴포넌트를 찾아 변화를 주는 방식보다는
           * 모든 노드 정보를 한곳에 모아 이를 Redux를 사용해 제어하고자 했습니다.
           * 다만 요소 이동시 좌표업데이트와 함께 Redux 저장소가 업데이트되면서 모든 요소에 리랜더링이 발생 하였고,
           * 이는 10개 정도의 요소가 추가 된 시점부터 명백한 프레임드랍이 체감되었고, 요소가 많아질수록 더욱 심해졌씁니다.
           *
           * 해결과정
           * 1. 계산 코드의 개선과 함께 간략화를 반복적으로 진행하여 연산코드를 40%가량 축소 했습니다.
           * 2. 불필요한 Redux업데이트로 리랜더링을 방지하기 위해 요소 및 연관된 요소들의 연쇄적인 계산을 분리하여 프레임드랍을 완전해결하고 성능을 향상시켰습니다.
           *  - 요소이동시 요소 및 연관된 연결선의 정보만 다른 임시 Redux Store에 저장하여 최소한의 계산만을 하고, 이동 이벤트인 drag가 끝날시에 Redux에 업데이트 함으로서 최적화를 적용했습니다.
           *
           * 이로써 반복적인 리랜더링으로 인해 눈에 보일정도의 심각한 프레임드랍 현상을 완벽히 해결하고, 연산 코드를 개선하며 가독성 높였습니다..
           */
          /** 연결선 오류작업 - 해결과정
           * 요소의 특정 변화에서 요소와 요소 사이를 연결시켜주는 연결선의 위치에 의도하지 않은 동작이 발생하였습니다.
           * 항상 요소 -연결선- 요소의 순서를 가져가야 하는 상황에서 요소의 크기에 변화를 주게되는 순간,
           * 요소 - 요소 - 연결선의 순서로 변경되어 요소간의 연결 구성에 문제를 발생시킨다.
           * 물론 , 데이터상에서는 연결관계에 변화가 생긴것은 아니나,
           * 시각적으로 데이터를 정리하기 위해 사용하는 마인드맵이라는 점에서 시각적인 오류가 생겨서는 안된다.
           *
           * 해결과정
           * 1. 크기변화에 의해 연결선의 위치에 오류가 발생, 원인을 파악하기 위해 계산식을 하나하나 검증해본결과 연산도중 tan(탄젠트)값이 +가 아닌 -(음수)가 될시에 연결선의 원래 위치와 정반대로 표현되는 것을 활인하게 되었습니다.
           * 2. 결국에 크기변화가 tan값에 영향을 주는것이 원인이므로, 이를 해결하가 위해 크기변화에 대해 코드를 수정하였습니다.
           *  - 이전에는 요소에는 단 하나의 크기가 있었는데, 이를 두가지로 분리, 시각적인 부분과 절대적 크기인데, 시각적인 부분은 크기의 변화가 자유롭지만, 절대적인 부분은 항상 고정적인 크기를 가져가게 된다.
           * 3. 즉, 연결선의 위치는 고정적인 크기를 가져가는 부분과 상호작용하기때문에 시각적인 크기 부분에 변화를 주어도 tan값이 음수가 될 가능성을 배제 하였다.
           *
           * 요소를 outter-inner-contents 형태로 분리하여, 각 layer에 해당아는 부분에 적절한 이벤트를 할당하여 의도치 않은 동작 및 오류에 대해 해결하였습니다.
           */
          // 이미지 다운로드 html to image
          /** 마인드맵 이동 - 해결과정
           * Zoom 기능 추가 이후 변화된 크기에 따라 맵 자체를 이동시키는 기능에서 문제가 발생.
           * 목표된 기능은 지도와 같은 자유로운 이동이었으나, 이동 기능이 맵자체를 벗어나는 현상이 발생되고 이어서 다시 맵을 찾지 못하는 경우가 발생되었다.
           * 따라서 크기와 상관없이 맵의 크기번위를 벗어나느 이동이 불가하도록 제어할 수있는 코드를 작성해야 했다.
           *
           * 해결과정
           * 1. 마인드맵 자제에 onmousedown,onmousemove이벤트를 추가하여 이동범위 제한을 설정하였으나, 요소 drag시에도 해당 이벤트가 발생.
           *  - onmousemove이벤트에 _dragElement !== null (요소 drag가 되고있는지)의 조건문을 추가하여 이벤트 동시 발생을 방히하였다.
           * 2. 마인드맵 이동 후 브라우저의 뷰포트와 마인드맵 사이의 좌표가 틀어지고, 연쇄적으로 요소 이동에도 영향을 미치는 문제가 발생.
           *  - 마인드맵의 좌측최상단을 기점으로, 이동 시 뷰포트와의 좌표계산을 통해 맵,요소 이동에 오류를 발지 하였다.
           *
           * 해당 기능을 수정하고 오류를 제거하는 과정에서도 연쇄적으로 간단한 오류 및 복접한 오류가 발생하였는데, 연쇄적인 부분으로서 상호작용되는 계산식을 분석하여 문제 해결에 쉽게 접근이 가능하였다.
           */
          /**마인드맵 이동 2
           * 이전에 문제를 해결함에도 불구하고 요소 드래그시에 맵 전체가 몇pexel정도 이동되는 것을 발견하였다.
           * _dragElement !== null과 같은 조건식을 통해 의도치 않은 동작을 방지 하고자 했으나,
           * 요소drag와 맵의 이동간의 작동 순서를 분석해본 결과 조건식에 해당하지 않는 틈이 몇ms 발생하였고 이로 인해서 맵 전체가 이동되는 것을 발견하였다.
           * 다행히 뷰포트와의 좌표 계산을 하기에 연쇄적인 오류는 발생 하지 않으나 해결하고자 한다.
           *
           * 문제해결
           * 1. 맵의 위치를 저장하여 타 이동 계산에 오류가 없도록 함.
           * 2. 해당 위치가 이동 제한 범위 이상으로 이동하게되면 초기위치(0,0)으로 이동해야 하나 마지막으로 이동된 위치로 이동되는 문제 발견.
           * 3. 원래는 이벤트 발생 횟수를 줄여 Redux업데이트를 최소화하기 위해 디바운스를 사용하였으나 이로 인해 위치저장이 이루어져야 할 시점에 되지 않음으로 오류를 발생하였다.
           * 4. 디바운스를 사용하지 않음으로 이동시마다 이벤트가 실행되겠지만 의도치 않은 오류 및 동작을 제어하였다.
           *
           * 오류를 제어하기 위해 최적의 성능을 포기했던 경험. 두 가지다 해낼수 있는 해결방안을 제시하기위해서는 많은 경험이 필요해 보인다.
           */
        ]
      }
    ]
  },
  {
    name: 'Social Network',
    work: ['https://github.com/francesco419/post_typescript_redux'],
    data: [
      {
        title: '주요기능',
        info: ['소통, 기록할 수 있는 Social Network Service를 제공']
      },
      {
        title: '담당역할 및 목표',
        info: ['개인 프로젝트 (100%)']
      },
      {
        title: '과정 & 문제해결',
        info: [
          {
            subtitle:
              '**Axios Interceptor**를 통해 반복적인 코드 사용을 줄여 **재사용화 및 공통적인 에러 처리**를 담당하여 **가독성 높은 코드**를 작성',
            detail: ''
          },
          {
            subtitle:
              '**Redux Toolkit**을 **사용한 상태 관리 및 유지 보수성**을 높이고 **props 복잡도**를 개선 및 redux persist로 사용빈도가 **높은 데이터의 반복적인 데이터통신 회피**',
            detail: ''
          },
          {
            subtitle:
              '**NodeJS, MySQL, Express를 사용한 백엔드를 구성** 및 CORS 처리, 쿼리를 통한 DB 관리, 이미지 파일 저장 및 데이터 통신 경험',
            detail: ''
          },
          {
            subtitle: '**Lazy, Suspense를 적용한 코드 분할**을 통해 JS 번들링 ',
            detail: ''
          },
          {
            subtitle: 'redux를 통한 상태관리 및 props 복잡도 개선',
            detail: ` Redux를 사용하여 props의 복잡도를 줄였습니다.
특히 게시물 데이터, 개인 정보 데이터 등의 정보를 항상 가지고 있기 위해 상위 컴포넌트에서 데이터를 보유, 필요시 하위 컴포넌트로 데이터를 전달하였습니다.
해당 과정에서 상당한 props 전달이 발생하였고, 코드의 가독성이 떨어지며 특히 개인정보 state 업데이트에는 더욱 복잡한 props가 형성되었습니다.
따라서 Redux와 persist를 사용하여 로컬저장소에 저장 및 손쉬운 업데이트를 통해 간편화 하였습니다.
더불어 props복잡도에 의해 작성되 불필요한 코드를 Redux의 Store로서 관리 코드량을 줄여 가독성 및 관서효율을 높였습니다.
`
          },
          {
            subtitle: 'SCSS를 효과적으로 사용하여 중복코드를 줄임',
            detail: `이전 Css를 사용할 당시 CSS Module을 사용하여 독립적인 클래스명을 사용하였으나, 중복된 코드로 인한 코드량 등의 불편성을 해결할 수 없을까 생각하게 되었습니다.
새로운 기술을 통해 이를 완화하고자 SCSS를 학습하여 해당 프로젝트에 적용하게 되었습니다.
nesting으로 컴포넌트 내부의 태그 순서도와 같은 구조로 작성하여 하나의 클래스네임을 통해 컴포넌트의 스타일을 쉽게 정의 할 수 있어습니다.
mixin, function 등의 함수적 스타일을 적용하여 중복코드를 최소화하고 단일 함수로도 다양한 스타일을 정의 할 수 있도록 하였습니다.

SCSS의 사용을 통해 코드량의 축소 및 가독성 향상을 통해 유지보수가 용이한 코드를 작성을 하였습니다.`
          },
          {
            subtitle: '백엔드 구현',
            detail: `이번 프로텍트의 목표중 하나로서 백엔드 구축에 대한 기초적인 지식 및 경험을 가지고하 하였습니다.
NodeJS, MySQL,Express를 사용해 API서버를 구축, 프런트에서의 API호풀에 따라 필요한 정보를 저장 및 전송을 하여 데이터의 이동을 가진 페이지를 만들고자 하였습니다.
서버 단의 배포에는 어려움을 겪었었고, 완벽한 서버배포를 하지는 못하였지만 프론트와의 데이터 통신을 이뤄냄과 함께 어떠한 형식으로 전송이 이루어 지는지, 통신 간의 필요한 부분은 무엇인지를 학습하게 되었습니다.

이를 통해 백엔드 개발자와의 협업시 경험으로 얻은 정보를 통해 보다 원활한 커뮤니케이션을 하여 정확한 프로세스를 가져가는데에 도움이 될 수 있다고 생각합니다.
`
          },
          {
            subtitle:
              '페이지 성능 최적화 --- 이를통해 서버통신 오류가 나지 않게 함 무한로딩 개선',
            detail: `데이터가 완벽히 로드되지 않은 시간동안 페이지가 로드되어 결과적으로 필요 데이터에 오류가 발생하였습니다.

따라서 lazy,suspence를 사용하여 데이터가 완전 로드되기까지 페이지 로딩을 미뤄서 오류를 방지 하였습니다.
            - 백엔드 서버에서 데이터를 로드하기전에 컴포넌트가 로드되어 데이터를 정상적으로 출력할 수 없었고, suspence의 fallback 파라미터로 로딩에 지연을 보장함으로서 문제를 해결하였습니다.
데이터가 로딩되기까지의 시간을 단순 로딩 스피너를 보여구기에는 반복적인 animation이라고 생각되어 사용자가 어떠한 형태의 데이터를 제공 받을지 기대할 수 있도록 스켈레톤UI를 사용해 사용자 경험을 개선하였습니다.
`
          }
          //컴포넌트 세부 분리 제작하여 랜더링을 줄인다 - 코드 간략화 메인페이지 게시물표현기능(-30%),  profile은 (-50%)간축
          /** redux를 통한 상태관리 및 props 복잡도 개선
           * Redux를 사용하여 props의 복잡도를 줄였습니다.
           * 특히 게시물 데이터, 개인 정보 데이터 등의 정보를 항상 가지고 있기 위해 상위 컴포넌트에서 데이터를 보유, 필요시 하위 컴포넌트로 데이터를 전달하였습니다.
           * 해당 과정에서 상당한 props 전달이 발생하였고, 코드의 가독성이 떨어지며 특히 개인정보 state 업데이트에는 더욱 복잡한 props가 형성되었습니다.
           * 따라서 Redux와 persist를 사용하여 로컬저장소에 저장 및 손쉬운 업데이트를 통해 간편화 하였습니다.
           * 더불어 props복잡도에 의해 작성되 불필요한 코드를 Redux의 Store로서 관리 코드량을 줄여 가독성 및 관서효율을 높였습니다.
           */
          //SCSS를 효과적으로 사용하여 중복코드를 줄임
          /**
           * 이전 Css를 사용할 당시 CSS Module을 사용하여 독립적인 클래스명을 사용하였으나, 중복된 코드로 인한 코드량 등의 불편성을 해결할 수 없을까 생각하게 되었습니다.
           * 새로운 기술을 통해 이를 완화하고자 SCSS를 학습하여 해당 프로젝트에 적용하게 되었습니다.
           * nesting으로 컴포넌트 내부의 태그 순서도와 같은 구조로 작성하여 하나의 클래스네임을 통해 컴포넌트의 스타일을 쉽게 정의 할 수 있어습니다.
           * mixin, function 등의 함수적 스타일을 적용하여 중복코드를 최소화하고 단일 함수로도 다양한 스타일을 정의 할 수 있도록 하였습니다.
           *
           * SCSS의 사용을 통해 코드량의 축소 및 가독성 향상을 통해 유지보수가 용이한 코드를 작성을 하였습니다.
           */
          //로그인 구현 - redux-persist를 이용하여 간단하게 로그인 정보를 저장
          // 백엔드 쿼리
          /**
           * 이번 프로텍트의 목표중 하나로서 백엔드 구축에 대한 기초적인 지식 및 경험을 가지고하 하였습니다.
           * NodeJS, MySQL,Express를 사용해 API서버를 구축, 프런트에서의 API호풀에 따라 필요한 정보를 저장 및 전송을 하여 데이터의 이동을 가진 페이지를 만들고자 하였습니다.
           * 서버 단의 배포에는 어려움을 겪었었고, 완벽한 서버배포를 하지는 못하였지만 프론트와의 데이터 통신을 이뤄냄과 함께 어떠한 형식으로 전송이 이루어 지는지, 통신 간의 필요한 부분은 무엇인지를 학습하게 되었습니다.
           *
           * 이를 통해 백엔드 개발자와의 협업시 경험으로 얻은 정보를 통해 보다 원활한 커뮤니케이션을 하여 정확한 프로세스를 가져가는데에 도움이 될 수 있다고 생각합니다.
           */
          //Lazy, Suspense를 적용한 코드 분할**을 통해 페이지 성능 최적화, ------ 이를통해 서버통신 오류가 나지 않게 함 --- 무한로딩 개선
          /**
           * 데이터가 완벽히 로드되지 않은 시간동안 페이지가 로드되어 결과적으로 필요 데이터에 오류가 발생하였습니다.
           *
           * 따라서 lazy,suspence를 사용하여 데이터가 완전 호드되기까지 페이지 로딩을 미뤄서 오류를 방지 하였습니다.
           * 데이터가 로딩되기까지의 시간을 단순 로딩 스피너를 보여구기에는 반복적인 animation이라고 생각되어 사용자가 어떠한 형태의 데이터를 제공 받을지 기대할 수 있도록 스켈레톤UI를 사용해 사용자 경험을 개선하고자 하였습니다.
           *
           */
        ]
      }
    ]
  },
  {
    name: 'Travel Away',
    work: ['https://github.com/francesco419/Travel'],
    data: [
      {
        title: '주요기능',
        info: ['공공데이터 포털의 API사용한 해외여행정보 제공']
      },
      {
        title: '담당역할 및 목표',
        info: ['개인 프로젝트 (100%)']
      },
      {
        title: '과정 & 문제해결',
        info: [
          {
            subtitle:
              '사용자에게 유용한 정보를 제공할 수 있는 UI에 대해 깊게 고민하고 구상한 기능을 직접 구현',
            detail: ''
          },
          {
            subtitle:
              '컴포넌트 간의 상태 값 및 상태 관리 함수의 prop drilling으로 인한 코드 구성 복잡 및 가독성 저하에 대한 대체 기술 필요성으로서 이후 프로젝트에서 Redux 적극 사용 ',
            detail: ''
          },
          {
            subtitle: '상태 관리',
            detail: `모든 컴포넌트마다 API통신을 가져갈 수 없기에 하나의 컴포넌트에서 데이터를 받고 이를 props로 하위 컴포넌트에 전달하는 방식을 사용하였으나,
컴포넌트의 구조가 복잡하고 다양해질수록 props로 인한 코드량 증가와 state정의에 대한 가독성이 심히 떨어지게 되었습니다.

따라서 이러한 상태관리 툴의 필요성을 느껴 이후 프로젝트부터는 Redux를 사용하여 props drilling을 해결하고,
현재 프로젝트에서 history를 제공하기위해 추가적ㅇ니 코드를 사용하였으나, redux-persist기능을 이용해 유사한 기능을 처리하고자 합니다.`
          },
          {
            subtitle: '프로젝트 진행에 문제',
            detail: `1. react 기능을 충분히 사용하지 못함
- 랜더링/리랜더링 등을 통해 출분히 표현 할 수 있는 기능임에도 바닐라 자바스크립트와 같이 DOM 조작을 통해 컴포넌트를 추가, 삭제 하였다.
- history기능에서 localStorage로 저장 및 삭제 할 때, 컴포넌트를 직접 DOM 조작을 총해 remove, add 하였다.
- state 업데이트 및 리랜더링을 통해 손쉽게 구현가능하다. 해당 기능을 복잡하게 구현하여 이후 타 기능 작업중에도 많은 오류를 발생시켰다.`
          }
          //localStrage를 사용하여 history제공 - 기능 구현
          //State의 상태 관리 악화
          /**
           * 모든 컴포넌트마다 API통신을 가져갈 수 없기에 하나의 컴포넌트에서 데이터를 받고 이를 props로 하위 컴포넌트에 전달하는 방식을 사용하였으나,
           * 컴포넌트의 구조가 복잡하고 다양해질수록 props로 인한 코드량 증가와 state정의에 대한 가독성이 심히 떨어지게 되었습니다.
           *
           * 따라서 이러한 상태관리 툴의 필요성을 느껴 이후 프로젝트부터는 Redux를 사용하여 props drilling을 해결하고,
           * 현재 프로젝트에서 history를 제공하기위해 추가적ㅇ니 코드를 사용하였으나, redux-persist기능을 이용해 유사한 기능을 처리하고자 합니다.
           */
          //반응형 웹작업 - responsively
          /** 프로젝트 진행에 문제점
           *
           * 1. react 기능을 충분히 사용하지 못함
           *  - 랜더링/리랜더링 등을 통해 출분히 표현 할 수 있는 기능임에도 바닐라 자바스크립트와 같이 DOM 조작을 통해 컴포넌트를 추가, 삭제 하였다.
           *  - history기능에서 localStorage로 저장 및 삭제 할 때, 컴포넌트를 직접 DOM 조작을 총해 remove, add 하였다.
           *  - state 업데이트 및 리랜더링을 통해 손쉽게 구현가능하다. 해당 기능을 복잡하게 구현하여 이후 타 기능 작업중에도 많은 오류를 발생시켰다.
           *
           */
          //퍼블리싱한 페이지에서는 정상적으로 작동하지 않는 문제 발생 - error
          //리덕스 필요성
        ]
      }
    ]
  },
  {
    name: 'Youtube Clone',
    work: ['https://github.com/francesco419/Youtube'],
    data: [
      {
        title: '주요기능',
        info: ['YouTube API를 사용한 클론 프로젝트']
      },
      {
        title: '담당역할 및 목표',
        info: ['개인 프로젝트 (100%)']
      },
      {
        title: '과정 & 문제해결',
        info: [
          {
            subtitle:
              '수많은 Open API 호출 및 사용을 통해, 데이터 통신 및 비동기적 처리 방식에 대해 학습',
            detail: ''
          },
          {
            subtitle:
              '클로닝 대상 웹사이트를 분석함으로써 HTML, CSS의 구성 및 작성 이해도를 높이고, 이를 바탕으로 직접 구현',
            detail: ''
          },
          {
            subtitle:
              'API의 데이터를 일차원적으로 표현하기보다 편집 및 가공을 통해 의도한 데이터로 새로 구성하여 표현',
            detail: ''
          }
          //env설정으로 key숨기기 - dotenv
          //momentjs 사용
          //props복잡도 hell - uselocation을 통해 state전달
          //컴포넌트화 조금..
          //fetch => axios
          //url변경시 param이 바뀌어도 페이지가 전환되지 않는 현상 발생 - 문제 usenavigation hook
        ]
      }
    ]
  }
];
