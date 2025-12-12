"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sphere, Line, Html } from "@react-three/drei";
import * as THREE from "three";
import { useDevicePerformance, useReducedMotion } from "@/hooks";

// Skills organized in a clean circular/orbital pattern
const skills = [
  // Central core
  {
    name: "Halil TOKSÖZ",
    color: "#8B5CF6",
    tier: 0,
    angle: 0,
    radius: 0,
  },

  // Inner ring - Core expertise
  { name: "System\nDesign", color: "#EC4899", tier: 1, angle: 0, radius: 1.8 },
  { name: "DSA", color: "#06B6D4", tier: 1, angle: 120, radius: 1.8 },
  { name: "Architecture", color: "#F59E0B", tier: 1, angle: 240, radius: 1.8 },

  // Outer ring - Technologies
  { name: ".NET", color: "#512BD4", tier: 2, angle: 30, radius: 3.2 },
  { name: "Next.js", color: "#FF2D20", tier: 2, angle: 90, radius: 3.2 },
  { name: "Node.js", color: "#339933", tier: 2, angle: 150, radius: 3.2 },
  { name: "PostgreSQL", color: "#4169E1", tier: 2, angle: 210, radius: 3.2 },
  { name: "Docker", color: "#2496ED", tier: 2, angle: 270, radius: 3.2 },
  { name: "Flutter", color: "#0078D4", tier: 2, angle: 330, radius: 3.2 },
];

function polarToCartesian(
  angle: number,
  radius: number,
  tier: number
): [number, number, number] {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius * 0.6;
  const z = tier * 0.3 - 0.3;
  return [x, y, z];
}

// Pseudo-random function for stability
const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

function SkillOrb({
  position,
  color,
  name,
  size,
  isCore,
  index,
}: {
  position: [number, number, number];
  color: string;
  name: string;
  size: number;
  isCore: boolean;
  index: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Use deterministic offset based on index instead of Math.random
  const offset = useMemo(() => index * 1.618 * Math.PI, [index]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const breath = 1 + Math.sin(state.clock.elapsedTime * 1.5 + offset) * 0.05;
    meshRef.current.scale.setScalar(breath);
  });

  return (
    <group position={position}>
      <Sphere
        ref={meshRef}
        args={[size, 32, 32]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : isCore ? 0.5 : 0.3}
          metalness={0.2}
          roughness={0.4}
        />
      </Sphere>

      <Sphere args={[size * 1.5, 16, 16]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.15 : 0.08}
          side={THREE.BackSide}
        />
      </Sphere>

      <pointLight color={color} intensity={isCore ? 0.6 : 0.25} distance={3} />

      <Html
        position={[0, size + 0.3, 0]}
        center
        style={{
          pointerEvents: "none",
          whiteSpace: "pre-line",
          textAlign: "center",
        }}
        zIndexRange={[100, 0]} // Proper Z-layering
      >
        <div
          className={`
            font-bold text-white text-center leading-tight
            ${isCore ? "text-sm" : "text-xs"}
            ${hovered ? "scale-110" : ""}
            transition-transform duration-200
          `}
          style={{
            textShadow: "0 0 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)",
          }}
        >
          {name}
        </div>
      </Html>
    </group>
  );
}

function Connection({
  start,
  end,
  color,
}: {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
}) {
  return (
    <Line
      points={[start, end]}
      color={color}
      lineWidth={1}
      transparent
      opacity={0.2}
    />
  );
}

function OrbitalRing({
  radius,
  color,
  speed = 1,
  speedFactor = 1,
}: {
  radius: number;
  color: string;
  speed?: number;
  speedFactor?: number;
}) {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z =
      state.clock.elapsedTime * 0.1 * speed * speedFactor;
  });
  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  const performance = useDevicePerformance();
  const reducedMotion = useReducedMotion();
  const { viewport } = useThree();

  const nodesWithPositions = useMemo(() => {
    return skills.map((skill, index) => ({
      ...skill,
      position: polarToCartesian(skill.angle, skill.radius, skill.tier),
      size: skill.tier === 0 ? 0.4 : skill.tier === 1 ? 0.28 : 0.22,
      isCore: skill.tier === 0,
    }));
  }, []);

  const connections = useMemo(() => {
    const conns: Array<{
      start: [number, number, number];
      end: [number, number, number];
      color: string;
    }> = [];
    const core = nodesWithPositions.find((n) => n.tier === 0);
    const innerRing = nodesWithPositions.filter((n) => n.tier === 1);
    const outerRing = nodesWithPositions.filter((n) => n.tier === 2);

    if (core) {
      innerRing.forEach((inner) => {
        conns.push({
          start: core.position,
          end: inner.position,
          color: "#8B5CF6",
        });
      });
      innerRing.forEach((inner, i) => {
        const next = innerRing[(i + 1) % innerRing.length];
        conns.push({
          start: inner.position,
          end: next.position,
          color: "#EC4899",
        });
      });
      innerRing.forEach((inner) => {
        const closest = outerRing
          .map((outer) => ({
            outer,
            dist: Math.abs(outer.angle - inner.angle),
          }))
          .sort((a, b) => a.dist - b.dist)
          .slice(0, 2);
        closest.forEach(({ outer }) => {
          conns.push({
            start: inner.position,
            end: outer.position,
            color: "#06B6D4",
          });
        });
      });
    }
    return conns;
  }, [nodesWithPositions]);

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) return;
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
  });

  const scale = Math.min(viewport.width / 8, 1);

  return (
    <group ref={groupRef} scale={scale}>
      <OrbitalRing radius={1.8} color="#8B5CF6" speed={1} speedFactor={1} />
      <OrbitalRing radius={3.2} color="#06B6D4" speed={-0.7} speedFactor={1} />

      {connections.map((conn, i) => (
        <Connection
          key={`c-${i}`}
          start={conn.start}
          end={conn.end}
          color={conn.color}
        />
      ))}

      {nodesWithPositions.map((node, index) => (
        <SkillOrb
          key={node.name}
          position={node.position}
          color={node.color}
          name={node.name}
          size={node.size}
          isCore={node.isCore}
          index={index}
        />
      ))}

      {performance.tier !== "low" && <FloatingParticles />}
    </group>
  );
}

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 50;

  // Stable random positions
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Deterministic random
      const t1 = pseudoRandom(i * 3);
      const t2 = pseudoRandom(i * 3 + 1);
      const t3 = pseudoRandom(i * 3 + 2);

      const theta = t1 * Math.PI * 2;
      const phi = Math.acos(2 * t2 - 1);
      const r = 4 + t3 * 2;

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
      pos[i * 3 + 2] = r * Math.cos(phi) * 0.5;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8B5CF6"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}
