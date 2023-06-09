import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { HemisphereLight } from "three";

const Computers2 = () => {
    const computers=useGLTF('./desktop_pc/scene.gltf')
    return ( 
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black"/>
            <pointLight intensity={1}/>
            <primitive object={computers.scene} 
            scale={ 0.75}
            position={[0, -3.25, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}/>

        </mesh>
     );
}

const ComputersCanvas2=()=>{
    return(
        <Canvas frameLoop='demand' shadows
        camera={{position: [20,3,5 ],fov:25}}
        gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader/>}/> 
                <OrbitControls enableZoom={false}         
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/4}/>
                <Computers2/>
            <Suspense/>
            <Preload all />
        </Canvas>
    )
}
 
export default ComputersCanvas2;