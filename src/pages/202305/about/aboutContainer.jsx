import { MiddleTitle } from '@components/midTitle.jsx';
import { AboutMe } from '@/context/mainProjectText';
import About from './about';

export default function AboutContainer({ forwardRef }) {
  return (
    <div ref={forwardRef} style={{ position: 'relative', margin: '80px 0' }}>
      <MiddleTitle title={'ABOUT ME'} />
      {AboutMe.map((data, index) => {
        return <About about={data} count={index} key={`about_${index}`} />;
      })}
    </div>
  );
}
