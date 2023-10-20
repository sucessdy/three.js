// import React, { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
// import CanvasLoader from '../Loader'

// const Computers = () => {
//   const computer = useGLTF("./desktop_pc/scene.gltf")
//   return (
//     <mesh>
//       {/* Lights */}
//       <hemisphereLight intensity={0.15} groundColor="black"/> 
//       <pointLight intensity={1} />

//       <spotlight position={[20, 50, 10]}/> 

//       {/* GLTF model */}
//       <primitive object={computer.scene} scale={0.75} position={[0, -3.25, -1.5]} rotation={[-0.1, -0.2, -0]} />
//     </mesh>
//   )
// }

// const ComputersCanvas = () => {
//   return (
//     <Canvas frameloop='demand' shadows camera={{position: [20, 3, 5], fov: 25}} gl={{preserveDrawingBuffer: true}}>
//       <Suspense llback={<CanvasLoader/>}>
//         {/* Wrap Computers component in Preload */}
//         <Preload all>
//           <Computers />
//         </Preload>
//         <OrbitControls enableZoom={lse} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
//       </Suspense>
//     </Canvas>
//   )
// }

// export deult ComputersCanvas;
