"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const codeCharacters = [
  "{ }",
  "=>",
  "async",
  "await",
  "const",
  "class",
  "public",
  "void",
  "return",
  ".NET",
  "C#",
  "PHP",
  "Node",
  "SQL",
  "API",
  "REST",
  "gRPC",
  "CQRS",
  "DDD",
  "0",
  "1",
  "true",
  "false",
  "null",
];

interface MatrixRainProps {
  count?: number;
}

export default function MatrixRain({ count = 100 }: MatrixRainProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Generate initial positions and velocities
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 15,
      y: Math.random() * 10 + 5,
      z: (Math.random() - 0.5) * 5,
      speed: 0.02 + Math.random() * 0.03,
      char: codeCharacters[Math.floor(Math.random() * codeCharacters.length)],
      opacity: 0.3 + Math.random() * 0.5,
      size: 0.1 + Math.random() * 0.15,
    }));
  }, [count]);

  return (
    <group ref={groupRef}>
      {particles.map((particle) => (
        <MatrixParticle key={particle.id} {...particle} />
      ))}
    </group>
  );
}

interface MatrixParticleProps {
  x: number;
  y: number;
  z: number;
  speed: number;
  char: string;
  opacity: number;
  size: number;
}

function MatrixParticle({
  x,
  y,
  z,
  speed,
  char,
  opacity,
  size,
}: MatrixParticleProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const positionRef = useRef({ y });

  useFrame(() => {
    if (!meshRef.current) return;

    positionRef.current.y -= speed;

    // Reset to top when falling below
    if (positionRef.current.y < -5) {
      positionRef.current.y = 10;
    }

    meshRef.current.position.y = positionRef.current.y;
  });

  return (
    <mesh ref={meshRef} position={[x, y, z]}>
      <planeGeometry args={[size * char.length * 0.5, size]} />
      <meshBasicMaterial
        color="#00ff00"
        transparent
        opacity={opacity}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
