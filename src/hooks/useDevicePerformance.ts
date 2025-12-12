"use client";

import { useState, useEffect, useMemo } from "react";

export type PerformanceTier = "high" | "medium" | "low";

export interface PerformanceConfig {
  tier: PerformanceTier;
  particleCount: number;
  postProcessing: boolean;
  shadows: boolean;
  antialias: boolean;
  use2DFallback: boolean;
  maxFPS: number;
}

const configs: Record<PerformanceTier, PerformanceConfig> = {
  high: {
    tier: "high",
    particleCount: 100,
    postProcessing: true,
    shadows: true,
    antialias: true,
    use2DFallback: false,
    maxFPS: 60,
  },
  medium: {
    tier: "medium",
    particleCount: 50,
    postProcessing: false,
    shadows: false,
    antialias: true,
    use2DFallback: false,
    maxFPS: 45,
  },
  low: {
    tier: "low",
    particleCount: 20,
    postProcessing: false,
    shadows: false,
    antialias: false,
    use2DFallback: false, // Changed: don't use fallback by default
    maxFPS: 30,
  },
};

export function useDevicePerformance(): PerformanceConfig {
  // Start with medium as safe default
  const [tier, setTier] = useState<PerformanceTier>("medium");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const detectPerformance = () => {
      // Check for mobile device
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      // Check device memory (if available)
      const deviceMemory =
        (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;

      // Check hardware concurrency (CPU cores)
      const cpuCores = navigator.hardwareConcurrency || 4;

      // Check screen size
      const isSmallScreen = globalThis.innerWidth < 768;

      // Determine tier based on device capabilities
      if (isMobile || isSmallScreen || deviceMemory < 4 || cpuCores < 4) {
        setTier("low");
      } else if (deviceMemory >= 8 && cpuCores >= 8) {
        setTier("high");
      } else {
        setTier("medium");
      }
    };

    detectPerformance();

    // Re-check on resize
    globalThis.addEventListener("resize", detectPerformance);
    return () => globalThis.removeEventListener("resize", detectPerformance);
  }, []);

  return useMemo(() => configs[tier], [tier]);
}
