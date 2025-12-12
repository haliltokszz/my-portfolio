"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Sphere } from "@react-three/drei";
import * as THREE from "three";

interface SkillNodeProps {
  position: [number, number, number];
  name: string;
  color: string;
  size?: number;
  isCore?: boolean;
}

export default function SkillNode({
  position,
  name,
  color,
  size = 0.3,
  isCore = false,
}: SkillNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const initialY = useRef(position[1]);
  const phaseOffset = useRef(Math.random() * Math.PI * 2);

  // Floating animation
  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;

    // Gentle floating motion
    meshRef.current.position.y =
      initialY.current + Math.sin(time * 0.5 + phaseOffset.current) * 0.08;

    // Subtle rotation
    meshRef.current.rotation.y += 0.003;

    // Glow pulsing for core nodes
    if (glowRef.current && isCore) {
      const scale = 1 + Math.sin(time * 2) * 0.15;
      glowRef.current.scale.setScalar(scale);
    }
  });

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        emissive: new THREE.Color(color),
        emissiveIntensity: isCore ? 0.6 : 0.25,
        metalness: 0.4,
        roughness: 0.3,
      }),
    [color, isCore]
  );

  const nodeSize = isCore ? size * 1.5 : size;

  return (
    <group position={position}>
      {/* Main node sphere */}
      <Sphere ref={meshRef} args={[nodeSize, 32, 32]} material={material}>
        {/* Inner point light for glow */}
        <pointLight color={color} intensity={isCore ? 1 : 0.4} distance={4} />
      </Sphere>

      {/* Outer glow halo for core nodes */}
      {isCore && (
        <Sphere ref={glowRef} args={[nodeSize * 2, 16, 16]}>
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.12}
            side={THREE.BackSide}
          />
        </Sphere>
      )}

      {/* Skill name label - Using default font (no custom font required) */}
      {name && (
        <Text
          position={[0, nodeSize + 0.25, 0]}
          fontSize={isCore ? 0.18 : 0.14}
          color="white"
          anchorX="center"
          anchorY="bottom"
          maxWidth={2.5}
          textAlign="center"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {name}
        </Text>
      )}

      {/* Ring decoration for core nodes */}
      {isCore && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[nodeSize * 1.3, nodeSize * 1.5, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.3}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  );
}
