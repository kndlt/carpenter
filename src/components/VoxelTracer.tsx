import React from "react";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";

interface BoxProp {
  position: [number, number, number];
  scale: [number, number, number];
}

function Box({ position, scale }: BoxProp) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = React.useRef<MeshProps | undefined>(undefined);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    // @ts-ignore
    ref.current.rotation.y += 0.01;
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}

export default function VoxelTracer({ src }: { src?: File | string }) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} scale={[2, 2, 2]} />
      <Box position={[1.2, 0, 0]} scale={[1, 1, 1]} />
    </Canvas>
  );
}
