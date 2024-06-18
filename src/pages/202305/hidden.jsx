import Notice from '@/components/notice/notice';
import styles from './hidden.module.css';
import { Suspense, lazy, useRef } from 'react';

const ProjectContainer = lazy(() => import('./project/projectContainer'));
const AboutContainer = lazy(() => import('./about/aboutContainer'));
const MyHeader = lazy(() => import('./myHeader'));
const FooterContact = lazy(() => import('./contact/footer'));
const TopIndicator = lazy(() => import('./top/toTop'));
const Front = lazy(() => import('./front/front'));
const SKillContainer = lazy(() => import('../skill/skillContainer'));

const intro = `끊임없이 변화되는 코드와 함께 성장해나가려고 노력하는 신입 개발자 이상현입니다.\n무언가를 제작하는 것을 좋아했기에 코드를 사용해 생각하는 것을 만들어 낼 수 있는\n개발에 큰 흥미를 느껴 개발자가 되고자 결심하게 되었으며, 사용자 경험을 중시하는 마인드를 가지고\n보다 정확하고 편리한 서비스를 제공하는 개발자가 되고자 합니다.`;

export default function Hidden() {
  const about = useRef(),
    skill = useRef(),
    project = useRef(),
    contact = useRef();

  return (
    <div className={styles['back']}>
      <Suspense>
        <TopIndicator />
      </Suspense>
      <div className={styles['hidden']}>
        <Suspense>
          <MyHeader
            refer={{
              about: about,
              skill: skill,
              project: project,
              contact: contact
            }}
          />
        </Suspense>
        <main>
          <div className={styles['hidden-title']}>
            <p>
              {
                '상상에 멈추지 않고 코드를 통해\n현실로 만들어내는 개발자,\n이상현입니다.'
              }
            </p>
          </div>
          <Front />
          <div className={styles['hidden-intro']}>
            <p>{intro}</p>
          </div>
          <AboutContainer forwardRef={about} />
          <Suspense>
            <SKillContainer forwardRef={skill} />
          </Suspense>
          <Suspense>
            <ProjectContainer forwardRef={project} />
          </Suspense>
        </main>
        <Suspense>
          <FooterContact refer={contact} />
        </Suspense>
      </div>
    </div>
  );
}
