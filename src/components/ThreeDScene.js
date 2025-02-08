import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";

function RotatingText() {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Text ref={mesh} fontSize={1} color="white" position={[0, 0, 0]}>
      Aravind Modala
    </Text>
  );
}

export default function ThreeDScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <RotatingText />
    </Canvas>
  );
}
