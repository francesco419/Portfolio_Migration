import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei/core/Environment";
import { useRef, useState } from "react";
import debounce from "lodash/debounce.js";
import { Vector3 } from "three";
import EightBall from "./3dModel/eightBall.jsx";
/* import ModelCar from './3dModel/Scene.jsx';
import Reaper from './3dModel/reap.jsx';
 */
/* const MODELS = [
  <EightBall position={[0, -1.5, 0]} />,
  <Reaper position={[0, -3, 0]} />,
  <ModelCar position={[0, -0.5, 0]} />
]; */

function Rig() {
    // 항상 같이 랜더링
    const { camera, mouse } = useThree();
    const vec = new Vector3();

    return useFrame(() => {
        camera.position.lerp(vec.set(-mouse.x, -mouse.y, camera.position.z), 0.05);
        camera.lookAt(0, 0, 0);
    });
}

export default function Three({ lightType, camera = [5, 5, 5] }) {
    const [x, setX] = useState();
    //const [rotate, setRotate] = useState(autoR);
    const ref = useRef();

    const handleMousePosition = (e) => {
        e.preventDefault();
        if (0 < e.nativeEvent.offsetX && e.nativeEvent.offsetX <= 1200)
            setX((x) => `#${(e.nativeEvent.offsetX * 13981).toString(16)}`);
        //Xmax = 1200
        //백그라운드에 컬러팔레트를 구현하기 위해
        console.warn = console.error = () => {};
        //erroe 핸들링
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
                    cursor: "pointer",
                    width: "1200px",
                }}
                camera={{ fov: 60, near: 0.1, far: 100, position: camera }}
                // onMouseEnter={autoR ? handleRotateStateFalse : null}
                //onMouseLeave={autoR ? handleRotateStateTrue : null}
            >
                <Environment preset='dawn' />
                {/* 
        <OrbitControls
          enableDamping
          dampingFactor={0.02}
          autoRotate={rotate}
          autoRotateSpeed={speed}
          enableZoom={false}
        /> 
        */}
                {/* {lightType ? (
          <ambientLight intensity={2} color={0xffffff} />
        ) : (
        )} */}
                <ambientLight intensity={lightType ? 2 : 100} color={x} />
                <EightBall position={[0, -1.5, 0]} />
                <Rig />
            </Canvas>
        </>
    );
}
