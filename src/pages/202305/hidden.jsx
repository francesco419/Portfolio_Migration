import styles from './hidden.module.css';
import { Suspense, lazy, useRef } from 'react';
import Markdown from 'react-markdown';

const ProjectContainer = lazy(() => import('./project/projectContainer.jsx'));
const AboutContainer = lazy(() => import('./about/aboutContainer.jsx'));
const MyHeader = lazy(() => import('./myHeader.jsx'));
const FooterContact = lazy(() => import('./contact/footer.jsx'));
const TopIndicator = lazy(() => import('./top/toTop.jsx'));
const Front = lazy(() => import('./front/front.jsx'));
const SKillContainer = lazy(() => import('../skill/skillContainer.jsx'));

const INTRO = `끊임없이 변화되는 코드와 함께 성장해나가려고 노력하는 신입 개발자 이상현입니다.
복잡한 문제를 쉽게 해결하는 클린코드 작성을 통해 프로덕트의 퍼포먼스를 향상시키고,
높은 사용자 경험을 제공하기 위해 차별화된 아이디어를 모색하며 다양한 UI/UX를 구현하고자 합니다.
이와 같은 노력과 목표를 바탕으로 누구나 머무르고 싶은 서비스을 만드는 개발을 하고자 합니다.`;

const FIRSTCOMMENT = `상상에 멈추지 않고 코드를 통해
현실로 만들어내는 개발자,
이상현입니다.`;

export default function Hidden() {
  const about = useRef(),
    skill = useRef(),
    project = useRef(),
    contact = useRef();

  return (
    <div className={styles['back']}>
      <Suspense>
        <TopIndicator />
        <main className={styles['hidden']}>
          <MyHeader
            refer={{
              about: about,
              skill: skill,
              project: project,
              contact: contact
            }}
          />
          <section>
            <div className={styles['hidden-title']}>
              <h1>{FIRSTCOMMENT}</h1>
            </div>
            <Front />
            <div className={styles['hidden-intro']}>
              <p>{INTRO}</p>
            </div>
            <AboutContainer forwardRef={about} />
            <SKillContainer forwardRef={skill} />
            <ProjectContainer forwardRef={project} />
          </section>
          <FooterContact refer={contact} />
        </main>
      </Suspense>
    </div>
  );
}
