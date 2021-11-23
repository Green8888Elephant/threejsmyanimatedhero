import React, { Suspense } from 'react';
import './App.css';

import {Canvas} from "@react-three/fiber";
import Mewaving from './Model/Mewaving.js'
import { OrbitControls } from "@react-three/drei";


function App() {
  return (
    <Canvas>
        <OrbitControls />
        {/*<mesh attach='geometry' ></mesh>*/}
        <directionalLight intensity={0.3} />
        <directionalLight intensity={0.6} position={[0,0,1]}/>
        <ambientLight intensity={0.2} position={[50,0,0]}/>
        {/*<Box />*/}
        <Suspense fallback={null}>
            <group position={[0,-0.5,0]}>
                <Mewaving />
            </group>
            {/*<Box />*/}
        </Suspense>
    </Canvas>
  );
}

export default App;
