"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Text } from "@react-three/drei";
import * as THREE from "three";
import { useDevicePerformance, useReducedMotion } from "@/hooks";

interface ContactSceneProps {
  className?: string;
}

// Matrix-style floating spheres
function MatrixSpheres() {
  const groupRef = useRef<THREE.Group>(null);

  const spheres = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 6,
    ] as [number, number, number],
    size: 0.03 + Math.random() * 0.08,
    color:
      Math.random() > 0.7
        ? "#00ff00"
        : Math.random() > 0.5
        ? "#8B5CF6"
        : "#06B6D4",
  }));

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <group ref={groupRef}>
      {spheres.map((sphere) => (
        <Sphere
          key={sphere.id}
          args={[sphere.size, 8, 8]}
          position={sphere.position}
        >
          <meshBasicMaterial color={sphere.color} transparent opacity={0.7} />
        </Sphere>
      ))}
    </group>
  );
}

// Terminal 3D box with code text
function Terminal3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle floating
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
  });

  // Code lines for terminal
  const codeLines = [
    { text: "public class ContactMe", color: "#ff79c6", y: 0.5 },
    { text: "{", color: "#f8f8f2", y: 0.35 },
    { text: "  [Available(true)]", color: "#f1fa8c", y: 0.2 },
    { text: "  public async Task<Success>", color: "#ff79c6", y: 0.05 },
    { text: "  HireMe()", color: "#50fa7b", y: -0.1 },
    { text: "  {", color: "#f8f8f2", y: -0.25 },
    { text: "    await Connect();", color: "#8be9fd", y: -0.4 },
    { text: "    return Victory;", color: "#8be9fd", y: -0.55 },
    { text: "  }", color: "#f8f8f2", y: -0.7 },
    { text: "}", color: "#f8f8f2", y: -0.85 },
  ];

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Terminal background */}
      <mesh position={[0, -0.1, -0.05]}>
        <boxGeometry args={[3.2, 2.2, 0.1]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Terminal header bar */}
      <mesh position={[0, 0.95, 0.01]}>
        <boxGeometry args={[3.1, 0.2, 0.02]} />
        <meshBasicMaterial color="#2d2d44" />
      </mesh>

      {/* Terminal buttons */}
      <Sphere args={[0.04, 12, 12]} position={[-1.4, 0.95, 0.05]}>
        <meshBasicMaterial color="#ff5f56" />
      </Sphere>
      <Sphere args={[0.04, 12, 12]} position={[-1.25, 0.95, 0.05]}>
        <meshBasicMaterial color="#ffbd2e" />
      </Sphere>
      <Sphere args={[0.04, 12, 12]} position={[-1.1, 0.95, 0.05]}>
        <meshBasicMaterial color="#27ca40" />
      </Sphere>

      {/* Code text lines */}
      {codeLines.map((line, index) => (
        <Text
          key={`code-${index}`}
          position={[-1.4, line.y, 0.02]}
          fontSize={0.09}
          color={line.color}
          anchorX="left"
          anchorY="middle"
          maxWidth={2.8}
        >
          {line.text}
        </Text>
      ))}

      {/* Glow effect behind terminal */}
      <mesh position={[0, -0.1, -0.15]}>
        <planeGeometry args={[3.5, 2.5]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.1} />
      </mesh>

      {/* Cursor blink effect */}
      <mesh position={[0.9, -0.85, 0.02]}>
        <boxGeometry args={[0.06, 0.1, 0.01]} />
        <meshBasicMaterial color="#50fa7b" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

export default function ContactScene({ className = "" }: ContactSceneProps) {
  const performance = useDevicePerformance();
  const reducedMotion = useReducedMotion();

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: performance.antialias,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: "transparent" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#00ff00" />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#8B5CF6" />
        <pointLight position={[0, 0, 3]} intensity={0.3} color="#ffffff" />

        {/* Content */}
        <Suspense fallback={null}>
          <MatrixSpheres />
          <Terminal3D />
        </Suspense>

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={!reducedMotion}
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
