"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import NeuralNetwork from "../objects/NeuralNetwork";
import { useDevicePerformance, useReducedMotion } from "@/hooks";

interface HeroSceneProps {
  className?: string;
}

export default function HeroScene({ className = "" }: HeroSceneProps) {
  const performance = useDevicePerformance();
  const reducedMotion = useReducedMotion();

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        dpr={[1, performance.tier === "high" ? 2 : 1.5]}
        gl={{
          antialias: performance.antialias,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        {/* Responsive Camera */}
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} />
        <pointLight position={[-10, -5, -10]} color="#8B5CF6" intensity={0.3} />

        {/* Neural Network */}
        <Suspense fallback={null}>
          <NeuralNetwork />
        </Suspense>

        {/* Interactive Controls - Zoom enabled */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          autoRotate={!reducedMotion}
          autoRotateSpeed={0.3}
          minDistance={4}
          maxDistance={10}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
