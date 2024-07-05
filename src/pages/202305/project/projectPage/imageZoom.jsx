import right from '../assets/right.svg';
import left from '../assets/left.svg';
import close from '../assets/close.svg';
import styles from './projectPage.module.css';
import { useState } from 'react';

export default function ImageZoom({ slideCount, image, changeZoom }) {
  const [count, setCount] = useState(Math.abs(slideCount));
  console.log(Math.abs(slideCount));

  const changeCount = (bool) => {
    if (bool && count < image.length - 1) {
      setCount((count) => count + 1);
      return;
    }

    if (!bool && count > 0) {
      setCount((count) => count - 1);
      return;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#00000088',
        zIndex: 99
      }}
    >
      <button
        className={styles['my-project-image-button']}
        onClick={() => changeCount(false)}
        style={{ left: 0, zIndex: 99 }}
      >
        <img src={left} alt='image to left' />
      </button>
      <button
        style={{
          position: 'absolute',
          top: '1%',
          right: '1%',
          backgroundColor: '#00000000',
          border: 0,
          cursor: 'pointer'
        }}
        onClick={changeZoom}
      >
        <img src={close} alt='close window' />
      </button>
      <img
        src={image[count]}
        style={{ maxWidth: '80%', objectFit: 'contain' }}
      ></img>
      <button
        className={styles['my-project-image-button']}
        onClick={() => changeCount(true)}
        style={{ right: 0, zIndex: 99 }}
      >
        <img src={right} alt='image to right' />
      </button>
    </div>
  );
}
