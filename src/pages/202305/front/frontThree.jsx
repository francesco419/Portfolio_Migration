import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useRef, useState } from 'react';
import debounce from 'lodash/debounce.js';
import { Vector3 } from 'three';
import EightBall from './3dModel/eightBall.jsx';
/* import ModelCar from './3dModel/Scene.jsx';
import Reaper from './3dModel/reap.jsx';
 */
/* const MODELS = [
  <EightBall position={[0, -1.5, 0]} />,
  <Reaper position={[0, -3, 0]} />,
  <ModelCar position={[0, -0.5, 0]} />
]; */

export default function Three({
  autoR = true,
  model,
  speed,
  lightType,
  camera = [5, 5, 5],
  swipe
}) {
  const [xy, setXY] = useState({ x: 0, y: 0 });
  //const [rotate, setRotate] = useState(autoR);
  const ref = useRef();

  const handleMousePosition = (e) => {
    setXY({
      x: e.clientX - Math.floor(ref.current.getBoundingClientRect().left),
      y: e.clientY
    });
    //console.warn = console.error = () => {};
  };

  const debounceMouse = debounce(handleMousePosition);

  /* 
  //이전 마우스 in/out 에 대한 자동회전 기능 off

  const handleRotateStateTrue = () => {
    setRotate((rotate) => true);
  };

  const handleRotateStateFalse = () => {
    setRotate((rotate) => false);
  }; 
  */

  return (
    <>
      <Canvas
        ref={ref}
        onMouseMove={lightType ? null : debounceMouse}
        style={{
          cursor: 'pointer',
          width: '1200px'
        }}
        camera={{ fov: 60, near: 0.1, far: 100, position: camera }}
        // onMouseEnter={autoR ? handleRotateStateFalse : null}
        //onMouseLeave={autoR ? handleRotateStateTrue : null}
      >
        <Environment preset='dawn' backgroundBlurriness={1} />
        {/* 
        <OrbitControls
          enableDamping
          dampingFactor={0.02}
          autoRotate={rotate}
          autoRotateSpeed={speed}
          enableZoom={false}
        /> 
        */}
        {lightType ? (
          <ambientLight intensity={2} color={0xffffff} />
        ) : (
          <ambientLight
            intensity={lightType ? 2 : 100}
            color={xy.x ? `#${(xy.x * 13981).toString(16)}` : '#ffffff'}
          />
        )}
        <EightBall position={[0, -1.5, 0]} />
        <Rig />
      </Canvas>
    </>
  );
}

function Rig() {
  // 항상 같이 랜더링
  const { camera, mouse } = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    camera.position.lerp(vec.set(-mouse.x, -mouse.y, camera.position.z), 0.05);
    camera.lookAt(0, 0, 0);
  });
}
