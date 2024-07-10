import { useDispatch, useSelector } from 'react-redux';
import styles from './about.module.css';
import { useEffect, useRef, useState } from 'react';
import { setControl } from '@redux/aboutControl.js';

export default function About({ about, count }) {
  const ref = useRef(null);
  const refDetail = useRef();
  const refContainer = useRef();
  const [click, setClick] = useState(true);
  const control = useSelector((state) => state.about.value);
  const dispatch = useDispatch();

  useEffect(() => {
    controlElement();
  }, [control]);

  const onClickHandler = () => {
    const absolute = ref.current.style;
    //absolut 속성의 div
    const text = refDetail.current.style;
    //detail 항목의 ul
    const index = refContainer.current.classList;
    //전체 컴포넌트 컨테이너

    if (control !== count) {
      //contract상태에서 해당 about클릭시
      dispatch(setControl(count));
    } else {
      //같은 about 연속 클릭시
      if (click) {
        expand(text, absolute, index);
      } else {
        contract(text, absolute, index);
      }
      setClick((click) => !click);
    }
  };

  const controlElement = () => {
    const absolute = ref.current.style;
    //absolut 속성의 div
    const text = refDetail.current.style;
    //detail 항목의 ul
    const index = refContainer.current.classList;
    //전체 컴포넌트 컨테이너

    if (control !== count) {
      contract(text, absolute, index);
    } else {
      expand(text, absolute, index);
    }
  };

  const contract = (text, absolute, index) => {
    //줄어든다
    text.height = '0px';
    absolute.height = '60px';
    index.remove(styles['add']);
  };

  const expand = (text, absolute, index) => {
    //늘어난다
    text.height = '300px';
    absolute.height = '0px';
    index.add(styles['add']);
  };

  return (
    <div
      ref={refContainer}
      className={styles['about-index']}
      onMouseEnter={onClickHandler}
      onMouseLeave={onClickHandler}
    >
      <div ref={ref} className={styles['about-abs']} />
      <div className={styles['about-titles']}>
        <p className={styles['about-num']}>{about.num}</p>
        <p className={styles['about-text']}>{about.text}</p>
      </div>
      <ul ref={refDetail} className={styles['about-detail']}>
        {about.detail.map((detail, index) => {
          return (
            <li key={`${about.text}_${index}`}>
              <p>{detail}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
