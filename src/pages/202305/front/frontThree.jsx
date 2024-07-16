import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei/core/Environment";
import { lazy, Suspense } from "react";
//import debounce from "lodash/debounce.js";
import { Vector3 } from "three";
import EightBall from "./3dModel/eightBall.jsx";
import hdrFile from "./img/file.hdr";
import styles from "./front.module.css";
/* import ModelCar from './3dModel/Scene.jsx';
import Reaper from './3dModel/reap.jsx';
 */
/* const MODELS = [
  <EightBall position={[0, -1.5, 0]} />,
  <Reaper position={[0, -3, 0]} />,
  <ModelCar position={[0, -0.5, 0]} />
]; */

//const EightBall = lazy(() => import("./3dModel/eightBall.jsx"));

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
    /*  const [x, setX] = useState("#666fd9");
    const [rotate, setRotate] = useState(autoR);

    const handleMousePosition = (e) => {
        console.log(e);
        if (0 < e.nativeEvent.offsetX && e.nativeEvent.offsetX <= 1200)
            setX((x) => `#${(e.nativeEvent.offsetX * 13981).toString(16)}`);
        //Xmax = 1200
        //백그라운드에 컬러팔레트를 구현하기 위해
        console.warn = console.error = () => {};
        //erroe 핸들링
    }; */

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
        <div className={styles["front"]}>
            <Canvas
                //onMouseMove={(e) => handleMousePosition(e)}
                style={{
                    cursor: "pointer",
                    width: "1200px",
                }}
                //camera={{ fov: 60, near: 0.1, far: 100, position: camera }}
                // onMouseEnter={autoR ? handleRotateStateFalse : null}
                //onMouseLeave={autoR ? handleRotateStateTrue : null}
            >
                <Environment background files={hdrFile} />
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
                <ambientLight intensity={10} color={"#666fd9"} />
                <EightBall />
                <Rig />
            </Canvas>
        </div>
    );
}
