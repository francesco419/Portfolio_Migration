import right from '../assets/right.svg';
import left from '../assets/left.svg';
import close from '../assets/close.svg';
import styles from './imageZoom.module.css';
import { useState } from 'react';
import ImageButton from './button/imageButton';

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
    <div className={`${styles['imageZoom']}`}>
      <ImageButton
        $left={'0'}
        $zIndex={'99'}
        onClick={() => changeCount(false)}
      >
        <img src={left} alt='image to left' />
      </ImageButton>
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
        alt={`project${count}`}
      />
      <ImageButton
        $right={'0'}
        $zIndex={'99'}
        onClick={() => changeCount(true)}
      >
        <img src={right} alt='image to right' />
      </ImageButton>
    </div>
  );
}
