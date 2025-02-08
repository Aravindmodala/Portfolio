import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function RotatingCube() {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="white" wireframe />
    </mesh>
  );
}

export default function SkillsCube() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <RotatingCube />
    </Canvas>
  );
}
