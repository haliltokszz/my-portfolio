"use client";

import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useDevicePerformance } from "@/hooks";

interface PerformanceMonitorProps {
  onPerformanceIssue?: () => void;
  fpsThreshold?: number;
}

export default function PerformanceMonitor({
  onPerformanceIssue,
  fpsThreshold = 20,
}: PerformanceMonitorProps) {
  const performanceConfig = useDevicePerformance();
  const frameCount = useRef(0);
  const lastTime = useRef(
    typeof globalThis !== "undefined" && globalThis.performance
      ? globalThis.performance.now()
      : Date.now()
  );
  const lowFPSCount = useRef(0);

  useFrame(() => {
    frameCount.current++;
    const now =
      typeof globalThis !== "undefined" && globalThis.performance
        ? globalThis.performance.now()
        : Date.now();

    const delta = now - lastTime.current;

    // Calculate FPS every second
    if (delta >= 1000) {
      const fps = Math.round((frameCount.current * 1000) / delta);
      frameCount.current = 0;
      lastTime.current = now;

      // Track consecutive low FPS frames
      if (fps < fpsThreshold) {
        lowFPSCount.current++;
        if (lowFPSCount.current >= 3 && onPerformanceIssue) {
          onPerformanceIssue();
        }
      } else {
        lowFPSCount.current = 0;
      }
    }
  });

  // Log performance tier (debug)
  useEffect(() => {
    if (performanceConfig.maxFPS < 60) {
      console.log(
        `Performance tier: ${performanceConfig.tier}, max FPS: ${performanceConfig.maxFPS}`
      );
    }
  }, [performanceConfig]);

  return null;
}
