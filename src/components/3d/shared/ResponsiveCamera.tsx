"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useResponsive3D } from "@/hooks";
import * as THREE from "three";

interface ResponsiveCameraProps {
  basePosition?: [number, number, number];
  enableAutoRotate?: boolean;
  rotationSpeed?: number;
  lookAt?: [number, number, number];
}

export default function ResponsiveCamera({
  basePosition = [0, 0, 8],
  enableAutoRotate = false,
  rotationSpeed = 0.001,
  lookAt = [0, 0, 0],
}: ResponsiveCameraProps) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const { cameraDistance } = useResponsive3D();
  const { size } = useThree();
  const angleRef = useRef(0);

  useFrame(() => {
    if (!cameraRef.current) return;

    // Adjust camera position based on responsive distance
    const adjustedZ = basePosition[2] * (cameraDistance / 8);

    if (enableAutoRotate) {
      angleRef.current += rotationSpeed;
      const x = Math.sin(angleRef.current) * adjustedZ * 0.3;
      cameraRef.current.position.set(
        basePosition[0] + x,
        basePosition[1],
        adjustedZ
      );
    } else {
      cameraRef.current.position.z = adjustedZ;
    }

    cameraRef.current.lookAt(lookAt[0], lookAt[1], lookAt[2]);
    cameraRef.current.updateProjectionMatrix();
  });

  // Calculate FOV based on aspect ratio
  const fov = size.width < 768 ? 75 : 60;

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={basePosition}
      fov={fov}
      near={0.1}
      far={100}
    />
  );
}
