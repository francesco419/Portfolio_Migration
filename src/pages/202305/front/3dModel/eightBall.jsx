/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 eight_ball/scene.gltf --transform 
Files: eight_ball/scene.gltf [9.82KB] > C:\Users\franc\Desktop\Works\ReactAppTest\reactapp2\scene-transformed.glb [162.16KB] (-1551%)
Author: RoutineStudio (https://sketchfab.com/TheRoutine)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/eight-ball-24a32adaf6014528ad71a1de9af6b084
Title: Eight Ball
*/

import React from "react";
import { useGLTF } from "@react-three/drei/core/Gltf";

export default function EightBall(props) {
    const { nodes, materials } = useGLTF(`/eightBall-transformed.glb`);

    return (
        <group {...props} dispose={null} scale={0.7}>
            <mesh
                geometry={nodes.Billard_Ball_Front_Side_0.geometry}
                material={materials.Front_Side}
            />
            <mesh geometry={nodes.Billard_Ball_lambert1_0.geometry} material={materials.lambert1} />
            <mesh
                geometry={nodes.Billard_Ball_Back_Side_0.geometry}
                material={materials.Back_Side}
            />
        </group>
    );
}

useGLTF.preload(`/eightBall-transformed.glb`);
//useGLTF.preload(`${import.meta.env.PUBLIC_URL}/eightBall-transformed.glb`);
