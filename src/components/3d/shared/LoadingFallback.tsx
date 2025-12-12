"use client";

import { motion } from "framer-motion";

interface LoadingFallbackProps {
  message?: string;
}

export default function LoadingFallback({
  message = "Loading 3D Experience...",
}: LoadingFallbackProps) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated loading spinner */}
        <div className="relative w-16 h-16">
          <motion.div className="absolute inset-0 rounded-full border-4 border-purple-500/30" />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner glow */}
          <motion.div
            className="absolute inset-2 rounded-full bg-purple-500/20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          className="text-gray-400 text-sm font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {message}
        </motion.p>
      </motion.div>
    </div>
  );
}
