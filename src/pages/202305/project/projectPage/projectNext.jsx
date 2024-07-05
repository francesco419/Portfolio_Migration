import styles from './projectPage.module.css';
import { useNavigate } from 'react-router-dom';
import right from '../../../../assets/svg/right.svg';
import left from '../../../../assets/svg/left.svg';
import { useRef } from 'react';

export default function ProjectNext({ project }) {
  const nav = useNavigate();
  const refLeft = useRef();
  const refRight = useRef();
  const container = useRef();

  /*  useEffect(() => {
    moveIndicator();
    return () => {
      moveIndicator();
    };
  }, []);

  const moveIndicator = () => {
    window.addEventListener('scroll', (e) => {
      container.current.style.top = `${
        window.scrollY + document.documentElement.clientHeight / 2
      }px`;
    });
  };
 */
  const prevHandler = () => {
    if (project.prev) {
      nav(`/project/${project.prev}`);
    }
  };

  const nextHandler = () => {
    if (project.next) {
      nav(`/project/${project.next}`);
    }
  };

  return (
    <div className={styles['my-project-next']} ref={container}>
      <div>
        <img src={left} alt='to left' />
        <button
          style={{
            opacity: project.prev ? '0.8' : '0.1',
            cursor: project.prev ? 'pointer' : 'not-allowed'
          }}
          onClick={prevHandler}
          ref={refLeft}
        >
          Prev
        </button>
      </div>
      <div>
        <button
          style={{
            opacity: project.next ? '0.8' : '0.1',
            cursor: project.next ? 'pointer' : 'not-allowed'
          }}
          onClick={nextHandler}
          ref={refRight}
        >
          Next
        </button>
        <img src={right} alt='to right' />
      </div>
    </div>
  );
}
