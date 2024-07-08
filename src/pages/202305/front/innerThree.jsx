/* import ModelCar from './3dModel/Scene.jsx';
import EightBall from './3dModel/eightBall.jsx';
import Reaper from './3dModel/reap.jsx'; */
import { lazy } from 'react';
import styles from './front.module.css';

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

const LazyThree = lazy(() => import('./frontThree.jsx'));

export default function InnerThree(swipe) {
  return (
    <div
      id='po'
      className={styles['front_cover']}
      style={{ width: '3600px', transform: `translateX(${-swipe * 1200}px)` }}
    >
      {/* {MODELS.map((o) => {
        return (
          <LazyThree
            model={o.model}
            camera={o.camera}
            autoR={o.autoR}
            speed={o.speed}
            lightType={o.lightType}
          />
        );
      })} */}
      <LazyThree lightType={false} swipe={swipe} />
    </div>
  );
}
