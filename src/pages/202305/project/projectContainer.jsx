import styles from './projectContainer.module.css';
import { myProjects } from '@context/mainProjectText.jsx';
import { lazy, Suspense } from 'react';
import { MiddleTitle } from '@components/midTitle.jsx';

const Project = lazy(() => import('./project'));

export default function ProjectContainer({ forwardRef }) {
  return (
    <div ref={forwardRef} className={styles['projectContainer']} title='click_to_see_project_detail'>
      <MiddleTitle title={'PROJECT'} />
      <div className={styles['projectContainer-innerbox']}>
        {myProjects.map((data, index) => {
          return (
            <Suspense key={`project_${index}_sus`}>
              <Project projects={data} num={index} key={`project_${index}`} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
}
