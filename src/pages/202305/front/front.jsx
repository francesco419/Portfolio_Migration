import { useRef, useState } from 'react';
import styles from './front.module.css';
import useInterval from 'use-interval';
import Three from './frontThree.jsx';
import ControlButton from './controlButton.jsx';
import ModelCar from './3dModel/Scene.jsx';
import EightBall from './3dModel/eightBall.jsx';
import Reaper from './3dModel/reap.jsx';
// lazy import 필요성이 없다고 느낌 => 페이지 시작부분에 있기에 lazy 보다는 빠른 import가 필요

const models = [
  {
    model: <EightBall position={[0, -1.5, 0]} />,
    camera: [5, 5, 5],
    autoR: true,
    speed: 2,
    lightType: false
  },
  {
    model: <Reaper position={[0, -3, 0]} />,
    camera: [7, 0, 10],
    autoR: false,
    speed: 2,
    lightType: true
  },
  {
    model: <ModelCar position={[0, -0.5, 0]} />,
    camera: [0, 0, 5],
    autoR: true,
    speed: 2,
    lightType: true
  }
];

const DARYA = { background: 'linear-gradient(to right, #5f2c82, #49a09d)' };
/* const TITANIUM = { background: 'linear-gradient(to right, #283048, #859398)' };
const ARGON = {
  background: 'linear-gradient(to right, #03001e, #7303c0, #ec38bc, #fdeff9)'
}; */

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
      style={DARYA}
    >
      <ControlButton swipe={swipe} swipeHandler={swipeHandler} />
      <div
        id='po'
        ref={ref}
        className={styles['front_cover']}
        style={{ width: '3600px', transform: `translateX(${-swipe * 1200}px)` }}
      >
        {models.map((o) => {
          return (
            <Three
              model={o.model}
              camera={o.camera}
              autoR={o.autoR}
              speed={o.speed}
              lightType={o.lightType}
            />
          );
        })}
      </div>
    </div>
  );
}
