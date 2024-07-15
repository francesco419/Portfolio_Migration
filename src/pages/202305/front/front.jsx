import { lazy } from 'react';
import styles from './front.module.css';
/* import useInterval from 'use-interval';
import ControlButton from './controlButton.jsx'; */
const LazyThree = lazy(() => import('./frontThree.jsx'));

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
      <LazyThree />
    </div>
  );
}

/* const MODELS = [
    {
      model: <EightBall position={[0, -1.5, 0]} />
      //camera: [5, 5, 5],
      //autoR: true,
      //speed: 2,
      //lightType: false
    },
    {
      model: <Reaper position={[0, -3, 0]} />
      //camera: [7, 0, 10],
      //autoR: false,
      //speed: 2,
      //lightType: true
    },
    {
      model: <ModelCar position={[0, -0.5, 0]} />
      //camera: [0, 0, 5],
      //autoR: true,
      //speed: 2,
      //lightType: true
    }
  ]; */

   /* {MODELS.map((o) => {
      return (
          <LazyThree
            model={o.model}
            camera={o.camera}
            autoR={o.autoR}
            speed={o.speed}
            lightType={o.lightType}
          />
        );
      })} */
