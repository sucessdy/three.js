// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Decal, OrbitControls, Float, Preload, useTexture } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh>
//         <sphereGeometry args={[1, 32, 32]} /> {/* Create a sphere geometry */}
//         <meshStandardMaterial map={decal} /> {/* Apply the decal texture */}
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// // export default BallCanvas;

// // // import React, { useState } from "react";

// // // function Ball() {
// // //   const [percentage, setPercentage] = useState;
// // //   return (
// // //     <div className="">
// // //       <input type="range" min="1 " max={100} step={1} value={percentage} onChange={(ev)=> setPercentage(ev.target.value)}/>
// // //     </div>
// // //   );
// // // }

// export default BallCanvas;
