import { lazy, Suspense } from 'react';
import { MiddleTitle } from '../../../components/midTitle';
import { TEXTARRAY } from '@/context/ProjectText';

const About = lazy(() => import('./about'));

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

export default function AboutContainer({ forwardRef }) {
  return (
    <div ref={forwardRef} style={{ position: 'relative', margin: '80px 0' }}>
      <MiddleTitle title={'ABOUT ME'} />
      {aboutMe.map((data, index) => {
        return (
          <Suspense key={`about_${index}_sus`}>
            <About about={data} count={index} key={`about_${index}`} />
          </Suspense>
        );
      })}
    </div>
  );
}
