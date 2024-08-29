"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AvatarModel from "./avatar";

export default function AvatarCanvas() {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 1, 5], near: 0.1, far: 100 }}
    >
      <ambientLight isAmbientLight={true} intensity={0.2} />
      <directionalLight position={[-1, 2, 4]} intensity={0.8} castShadow />
      <pointLight position={[1, 1, 2]} intensity={0.5} />
      <Suspense fallback={null}>
        <AvatarModel />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
