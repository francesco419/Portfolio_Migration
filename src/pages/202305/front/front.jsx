import { Suspense, useRef, useState, lazy } from 'react';
import styles from './front.module.css';
import useInterval from 'use-interval';

const Three = lazy(() => import('./frontThree'));
const ControlButton = lazy(() => import('./controlButton'));
const ModelCar = lazy(() => import('./3dModel/Scene'));
const EightBall = lazy(() => import('./3dModel/eightBall'));
const Reaper = lazy(() => import('./3dModel/reap'));

const damn = [
  <Suspense>
    <Three
      model={
        <Suspense>
          <ModelCar position={[0, -0.5, 0]} />
        </Suspense>
      }
      speed={2}
      lightType={true}
    />
    ,
  </Suspense>,
  <Suspense>
    <Three
      model={
        <Suspense>
          <EightBall position={[0, -2, 0]} />
        </Suspense>
      }
      speed={2}
      lightType={false}
    />
  </Suspense>,
  <Suspense>
    <Three
      model={
        <Suspense>
          <Reaper position={[0, -3, 0]} />
        </Suspense>
      }
      camera={[7, 0, 7]}
      speed={2}
      autoR={false}
      lightType={true}
    />
  </Suspense>
];

export default function Front() {
  const [swipe, setSwipe] = useState(0);
  const [mouseOver, setMouseOver] = useState(false);
  const ref = useRef();

  useInterval(() => {
    if (mouseOver) {
      return;
    }
    if (swipe < 2) setSwipe((swipe) => swipe + 1);
    else if (swipe === damn.length - 1) setSwipe((swipe) => 0);
  }, 4000);

  const changeMouseEnter = () => {
    setMouseOver((mouseOver) => true);
  };

  const changeMouseLeave = () => {
    setMouseOver((mouseOver) => false);
  };

  const swipeHandler = (number) => {
    setSwipe((swipe) => number);
  };

  return (
    <div
      className={styles['front']}
      onMouseEnter={changeMouseEnter}
      onMouseLeave={changeMouseLeave}
    >
      <ControlButton swipe={swipe} swipeHandler={swipeHandler} />
      <div
        id='po'
        ref={ref}
        className={styles['front_cover']}
        style={{ width: '3600px', transform: `translateX(${-swipe * 1200}px)` }}
      >
        <Suspense>
          <Three
            model={
              <Suspense>
                <ModelCar position={[0, -0.5, 0]} />
              </Suspense>
            }
            speed={2}
            lightType={true}
          />
          ,
        </Suspense>
        <Suspense>
          <Three
            model={
              <Suspense>
                <EightBall position={[0, -2, 0]} />
              </Suspense>
            }
            speed={2}
            lightType={false}
          />
        </Suspense>
        <Suspense>
          <Three
            model={
              <Suspense>
                <Reaper position={[0, -3, 0]} />
              </Suspense>
            }
            camera={[7, 0, 7]}
            speed={2}
            autoR={false}
            lightType={true}
          />
        </Suspense>
      </div>
    </div>
  );
}
