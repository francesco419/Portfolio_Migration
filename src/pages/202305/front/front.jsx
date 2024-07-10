import { lazy } from 'react';
import styles from './front.module.css';
/* import useInterval from 'use-interval';
import ControlButton from './controlButton.jsx'; */

const LazyInnerThree = lazy(() => import('./innerThree.jsx'));
const DARYA = { background: 'linear-gradient(to right, #5f2c82, #49a09d)' };
/* const TITANIUM = { background: 'linear-gradient(to right, #283048, #859398)' };
const ARGON = {
  background: 'linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9)'
}; */

//const MODELLENGTH = 3;

export default function Front() {
  /* const [swipe, setSwipe] = useState(0);
  const [mouseOver, setMouseOver] = useState(false); */

  /* useInterval(() => {
    if (mouseOver) {
      return;
    }
    if (swipe < 2) setSwipe((swipe) => swipe + 1);
    else if (swipe === MODELLENGTH - 1) setSwipe((swipe) => 0);
  }, 4000);

  const changeMouseEnter = () => {
    setMouseOver((mouseOver) => true);
  };

  const changeMouseLeave = () => {
    setMouseOver((mouseOver) => false);
  };

  const swipeHandler = (number) => {
    setSwipe((swipe) => number);
  }; */

  return (
    <div
      className={styles['front']}
      /* onMouseEnter={changeMouseEnter}
      onMouseLeave={changeMouseLeave} */
      style={DARYA}
    >
      {/* <ControlButton swipe={swipe} swipeHandler={swipeHandler} /> */}
      <LazyInnerThree />
    </div>
  );
}
