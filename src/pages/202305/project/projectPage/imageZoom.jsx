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

  /*   const ButtonWrapper = (side) => {
    return (
      <ImageButton
        $left={side ? '0' : null}
        $right={!side ? '0' : null}
        $zIndex={'99'}
        onClick={() => changeCount(side ? false : true)}
      >
        <img src={side ? left : right} alt={`image to ${sideleft}`} />
      </ImageButton>
    );
  };
 */
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
        className={`${styles['imageZoom_absButton']}`}
        onClick={changeZoom}
      >
        <img src={close} alt='close window' />
      </button>
      <img
        className={`${styles['imageZoom_mainImg']}`}
        src={image[count]}
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
