"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface FloatingTerminalProps {
  position?: [number, number, number];
}

const codeLines = [
  "public class ContactMe",
  "{",
  '    [Available("Always")]',
  "    public async Task<Success>",
  "    HireMe()",
  "    {",
  "        await Connect();",
  "        return Victory;",
  "    }",
  "}",
];

export default function FloatingTerminal({
  position = [0, 0, 0],
}: FloatingTerminalProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Gentle floating animation
    groupRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Terminal window background */}
      <RoundedBox args={[4, 3, 0.1]} radius={0.05} position={[0, 0, -0.1]}>
        <meshStandardMaterial
          color="#1a1a2e"
          transparent
          opacity={0.9}
          metalness={0.5}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Terminal header */}
      <mesh position={[0, 1.35, 0]}>
        <planeGeometry args={[3.9, 0.25]} />
        <meshBasicMaterial color="#2d2d44" />
      </mesh>

      {/* Terminal buttons */}
      <mesh position={[-1.7, 1.35, 0.01]}>
        <circleGeometry args={[0.05, 16]} />
        <meshBasicMaterial color="#ff5f56" />
      </mesh>
      <mesh position={[-1.55, 1.35, 0.01]}>
        <circleGeometry args={[0.05, 16]} />
        <meshBasicMaterial color="#ffbd2e" />
      </mesh>
      <mesh position={[-1.4, 1.35, 0.01]}>
        <circleGeometry args={[0.05, 16]} />
        <meshBasicMaterial color="#27ca40" />
      </mesh>

      {/* Code lines */}
      {codeLines.map((line, index) => (
        <Text
          key={`line-${index}`}
          position={[-1.8, 1 - index * 0.22, 0.01]}
          fontSize={0.12}
          color={
            line.includes("class") || line.includes("public")
              ? "#ff79c6"
              : line.includes("[")
              ? "#f1fa8c"
              : line.includes("await") || line.includes("return")
              ? "#8be9fd"
              : "#f8f8f2"
          }
          anchorX="left"
          anchorY="top"
          font="/fonts/FiraCode-Regular.woff"
        >
          {line}
        </Text>
      ))}

      {/* Glowing border effect */}
      <mesh position={[0, 0, -0.15]}>
        <planeGeometry args={[4.2, 3.2]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}
