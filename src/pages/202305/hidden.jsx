import styles from './hidden.module.css';
import { Suspense, lazy, useRef } from 'react';
import { TEXTARRAY } from '../../context/ProjectText';
import { myProjects } from '../../context/ProjectText';

const About = lazy(() => import('./about'));
const Project = lazy(() => import('./project'));
const MyHeader = lazy(() => import('./myHeader'));
const FooterContact = lazy(() => import('./contact/footer'));
const TopIndicator = lazy(() => import('./top/toTop'));
const Front = lazy(() => import('./front/front'));
const SKillContainer = lazy(() => import('../skill/skillContainer'));

const aboutMe = [
  {
    num: '01',
    text: 'COMMUNICATION',
    detail: TEXTARRAY[0]
  },
  {
    num: '02',
    text: 'CREATIVITY',
    detail: TEXTARRAY[1]
  },
  {
    num: '03',
    text: 'GROWTHS',
    detail: TEXTARRAY[2]
  }
];

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
          <Suspense>
            <Front />
          </Suspense>
          <div className={styles['hidden-intro']}>
            <p>{intro}</p>
          </div>
          <div ref={about} className={styles['hidden-about']}>
            <p className={styles['hidden-rem']}>ABOUT ME</p>
            {aboutMe.map((data, index) => {
              return (
                <Suspense key={`about_${index}_sus`}>
                  <About about={data} count={index} key={`about_${index}`} />
                </Suspense>
              );
            })}
          </div>
          {/* <div ref={skill} className={styles['hidden-skill']}>
          <p className={styles['hidden-rem']}>SKILL</p>
          {mySkills.map((data, index) => {
            return (
              <Skill
                title={data.title}
                detail={data.detail}
                img={data.png}
                form={data.form}
                color={data.color}
                key={`skill_${index}`}
              />
            );
          })}
        </div> */}
          <div ref={skill}>
            <Suspense>
              <SKillContainer />
            </Suspense>
          </div>
          <div ref={project} className={styles['hidden-project']}>
            <p className={styles['hidden-rem']}>PROJECT</p>
            <div className={styles['hidden-project-container']}>
              {myProjects.map((data, index) => {
                return (
                  <Suspense key={`project_${index}_sus`}>
                    <Project
                      projects={data}
                      num={index}
                      key={`project_${index}`}
                    />
                  </Suspense>
                );
              })}
            </div>
          </div>
        </main>
        <Suspense>
          <FooterContact refer={contact} />
        </Suspense>
      </div>
    </div>
  );
}
