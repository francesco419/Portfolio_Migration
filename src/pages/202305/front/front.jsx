import { Suspense, useRef, useState, lazy } from 'react';
import styles from './front.module.css';
import useInterval from 'use-interval';
import _ from 'lodash';

const Three = lazy(() => import('./frontThree'));
const ControlButton = lazy(() => import('./controlButton'));
const ModelCar = lazy(() => import('./3dModel/Scene'));
const EightBall = lazy(() => import('./3dModel/eightBall'));
const Reaper = lazy(() => import('./3dModel/reap'));

const models = [
  {
    model: <ModelCar position={[0, -0.5, 0]} />,
    camera: [5, 5, 5],
    autoR: true,
    speed: 2,
    lightType: true
  },
  {
    model: <EightBall position={[0, -2, 0]} />,
    camera: [5, 5, 5],
    autoR: true,
    speed: 2,
    lightType: false
  },
  {
    model: <Reaper position={[0, -3, 0]} />,
    camera: [7, 0, 7],
    autoR: false,
    speed: 2,
    lightType: true
  }
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
    else if (swipe === models.length - 1) setSwipe((swipe) => 0);
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
        {_.map(models, (o) => {
          return (
            <Suspense>
              <Three
                model={o.model}
                camera={o.camera}
                autoR={o.autoR}
                speed={o.speed}
                lightType={o.lightType}
              />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
}
