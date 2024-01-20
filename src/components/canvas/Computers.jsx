import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  SpotLight,
  useDepthBuffer,
  Float,
  Decal,
} from "@react-three/drei";
import { AmbientLight, Vector3 } from "three";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const depthBuffer = useDepthBuffer({ frames: 1 });
  const computer = useGLTF("./william_shakespeare_statue/scene.gltf");

  function MovingSpot({ vec = new Vector3(), ...props }) {
    const light = useRef();
    const viewport = useThree((state) => state.viewport);
    useFrame((state) => {
      light.current.target.position.lerp(
        vec.set(
          (state.mouse.x * viewport.width) / 2,
          (state.mouse.y * viewport.height) / 2,
          0
        ),
        0.1
      );
      light.current.target.updateMatrixWorld();
    });
    // Set castShadow to false to remove shadows
    return (
      <SpotLight
        ref={light}
        penumbra={1}
        distance={6}
        angle={0.35}
        attenuation={5}
        {...props}
      />
    );
  }

  return (
    <mesh>
      {/*<pointLight color="#680CEE" intensity={25} />*/}
      <hemisphereLight intensity={1} groundColor="white" />

      {isMobile ? (
        <MovingSpot
          color="#680CEE"
          position={[4.5, 2.5, -0.5]}
          intensity={10000}
          anglePower={2}
        />
      ) : (
        <MovingSpot
          color="#680CEE"
          position={[2.5, 3, -0.5]}
          intensity={100}
          anglePower={3}
        />
      )}
      {isMobile && (
        <MovingSpot
          color="#680CEE"
          position={[-4.5, 2.5, -0.5]}
          intensity={10000}
          anglePower={2}
        />
      )}

      <primitive
        object={computer.scene}
        scale={isMobile ? 2 : 3}
        position={isMobile ? [-0.65, -2, -0.5] : [0, -3.3, -0.1]}
        rotation={[0, -5, 0]} // Rotate around the center plane
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      //frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {isMobile ? (
          <OrbitControls
            enableZoom={false}
            enableRotate={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            // autoRotate="true"
            // autoRotateSpeed={0.1}
            initialPosition={[10, 0, 0]}
          />
        ) : (
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            // autoRotate="true"
            // autoRotateSpeed={0.5}
            initialPosition={[10, 0, 0]}
          />
        )}
        <Float>
          <Computers isMobile={isMobile} />
        </Float>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
