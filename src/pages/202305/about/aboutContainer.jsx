import { lazy, Suspense } from 'react';
import { MiddleTitle } from '@components/midTitle.jsx';
import { AboutMe } from '@/context/mainProjectText';

const About = lazy(() => import('./about'));

export default function AboutContainer({ forwardRef }) {
  return (
    <div ref={forwardRef} style={{ position: 'relative', margin: '80px 0' }}>
      <MiddleTitle title={'ABOUT ME'} />
      {AboutMe.map((data, index) => {
        return (
          <Suspense key={`about_${index}_sus`}>
            <About about={data} count={index} key={`about_${index}`} />
          </Suspense>
        );
      })}
    </div>
  );
}
