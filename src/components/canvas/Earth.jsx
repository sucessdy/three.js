// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// // import {OrbitControls, Preload, useGTF}  from "@react-three/drei"
// import CanvasLoader from "../Loader";
// import { OrbitControls } from "@react-three/drei";
// const Earth = () => {

//   return <div>Earth </div>;
// };

// // i'm not goint to copy tj
// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop="demand"
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{}}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />{" "}
//         <Earth /> 
//       </Suspense>
//     </Canvas>
//   );
// };
// export default EarthCanvas;
