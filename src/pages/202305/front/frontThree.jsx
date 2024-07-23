import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei/core/Environment';
import { Vector3 } from 'three';
import EightBall from './3dModel/eightBall.jsx';
import hdrFile from './img/file.hdr';
import styles from './front.module.css';

function Rig() {
  // 항상 같이 랜더링
  const state = useThree();
  const vec = new Vector3();

  return useFrame(() => {
    state.camera.position.lerp(
      vec.set(-state.pointer.x, -state.pointer.y, state.camera.position.z),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
}

export default function Three() {
  return (
    <div className={styles['front']}>
      <Canvas
        style={{
          cursor: 'pointer',
          width: '1200px'
        }}
      >
        <Environment background files={hdrFile} />
        <ambientLight intensity={10} color={'#666fd9'} />
        <EightBall />
        <Rig />
      </Canvas>
    </div>
  );
}
