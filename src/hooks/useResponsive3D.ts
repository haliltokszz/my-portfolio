"use client";

import { useState, useEffect, useMemo } from "react";

export type Breakpoint = "mobile" | "tablet" | "desktop";

interface Responsive3DConfig {
  breakpoint: Breakpoint;
  cameraDistance: number;
  nodeCount: "full" | "reduced" | "minimal";
  showLabels: boolean;
  enableInteraction: boolean;
}

const breakpointConfigs: Record<Breakpoint, Responsive3DConfig> = {
  desktop: {
    breakpoint: "desktop",
    cameraDistance: 8,
    nodeCount: "full",
    showLabels: true,
    enableInteraction: true,
  },
  tablet: {
    breakpoint: "tablet",
    cameraDistance: 10,
    nodeCount: "reduced",
    showLabels: true,
    enableInteraction: true,
  },
  mobile: {
    breakpoint: "mobile",
    cameraDistance: 12,
    nodeCount: "minimal",
    showLabels: false,
    enableInteraction: false,
  },
};

export function useResponsive3D(): Responsive3DConfig {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBreakpoint("mobile");
      } else if (width < 1024) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("desktop");
      }
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return useMemo(() => breakpointConfigs[breakpoint], [breakpoint]);
}
