"use client";

import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";

interface QueueNodeData {
  id: number;
  company: string;
  role: string;
  period: string;
  achievements: string[];
  technologies: IconType[];
}

interface QueueNodeProps {
  data: QueueNodeData;
  isActive: boolean;
  isLast: boolean;
  index: number;
  total: number;
  onClick: () => void;
}

export default function QueueNode({
  data,
  isActive,
  isLast,
  index,
  total,
  onClick,
}: QueueNodeProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  // Calculate gradient position based on index
  const gradientColors = [
    "from-blue-600 to-purple-600",
    "from-purple-600 to-pink-600",
    "from-pink-600 to-rose-600",
    "from-rose-600 to-orange-600",
    "from-orange-600 to-yellow-600",
    "from-yellow-600 to-green-600",
  ];

  const gradient = gradientColors[index % gradientColors.length];

  return (
    <div className="flex items-center">
      {/* Node */}
      <motion.div
        ref={nodeRef}
        className={`relative cursor-pointer transition-all duration-300`}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Node Box */}
        <motion.div
          className={`
            relative p-4 rounded-xl border-2 transition-all duration-300
            ${
              isActive
                ? `bg-gradient-to-br ${gradient} border-white/50 shadow-2xl shadow-purple-500/30`
                : "bg-gray-800/80 border-gray-600 hover:border-purple-400/50"
            }
            min-w-[120px] sm:min-w-[140px] md:min-w-[160px]
          `}
          layout
        >
          {/* Current indicator */}
          {isLast && (
            <motion.div
              className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-[8px] text-white font-bold">NOW</span>
            </motion.div>
          )}

          {/* Company name */}
          <h4
            className={`font-bold text-sm sm:text-base ${
              isActive ? "text-white" : "text-gray-200"
            }`}
          >
            {data.company}
          </h4>

          {/* Period */}
          <p
            className={`text-xs mt-1 ${
              isActive ? "text-white/80" : "text-gray-400"
            }`}
          >
            {data.period.split(" – ")[0]}
          </p>

          {/* Node indicator dot */}
          <div
            className={`
            absolute -bottom-3 left-1/2 transform -translate-x-1/2
            w-3 h-3 rounded-full border-2 transition-colors duration-300
            ${
              isActive
                ? "bg-white border-white"
                : "bg-purple-500 border-purple-400"
            }
          `}
          />
        </motion.div>

        {/* Data flow animation line */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 h-6 w-0.5 bg-gradient-to-b from-white to-transparent"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Pointer Arrow to next node */}
      {!isLast && (
        <div className="relative flex items-center mx-2 sm:mx-3">
          {/* Line */}
          <motion.div
            className="w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          />

          {/* Data pulse animation */}
          <motion.div
            className="absolute h-1.5 w-1.5 bg-cyan-400 rounded-full"
            animate={{
              x: [0, 32, 48, 64],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: index * 0.3,
              ease: "linear",
            }}
          />

          {/* Arrow head */}
          <svg
            className="w-3 h-3 text-pink-500 -ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
          </svg>
        </div>
      )}
    </div>
  );
}
