import finedition_home from '@projectImage/finedition/finedition-home.webp';
import mindmap1 from '@projectImage/mindmap/mindmap1.webp';
import social1 from '@projectImage/sns/1.webp';
import youtube1 from '@projectImage/youtube/youtube1.webp';

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

export const AboutMe = [
  {
    num: '01',
    text: 'COMMUNICATION',
    detail: COMMUNICATIONTEXT
  },
  {
    num: '02',
    text: 'CREATIVITY',
    detail: CREATIVITYTEXT
  },
  {
    num: '03',
    text: 'GROWTHS',
    detail: GROWTHSTEXT
  }
];
