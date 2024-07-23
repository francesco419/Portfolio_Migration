import React from 'react';
import { useGLTF } from '@react-three/drei/core/Gltf';

export default function EightBall(props) {
  const { nodes, materials } = useGLTF(`/eightBall-transformed.glb`);
  return (
    <group {...props} position={[0, -1.5, 0]} dispose={null} scale={0.7}>
      <mesh
        geometry={nodes.Billard_Ball_Front_Side_0.geometry}
        material={materials.Front_Side}
      />
      <mesh
        geometry={nodes.Billard_Ball_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        geometry={nodes.Billard_Ball_Back_Side_0.geometry}
        material={materials.Back_Side}
      />
    </group>
  );
}

useGLTF.preload(`/eightBall-transformed.glb`);
