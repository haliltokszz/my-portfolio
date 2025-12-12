"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";

interface ExperienceData {
  id: number;
  company: string;
  role: string;
  period: string;
  achievements: string[];
  technologies: IconType[];
}

interface LinkedQueueTimelineProps {
  experiences: ExperienceData[];
}

export default function LinkedQueueTimeline({
  experiences,
}: LinkedQueueTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(experiences.length - 1);
  const activeExperience = experiences[activeIndex];

  return (
    <div className="w-full space-y-6">
      {/* Section Header with Queue Notation */}
      <div className="flex flex-col gap-3 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Experience
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
            <span className="text-purple-400">Linked Queue</span>
            <span className="text-xs opacity-60">Data Structure</span>
          </div>
        </div>

        {/* Queue Notation - Stylish */}
        <div className="flex items-center gap-2 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-lg px-4 py-2 overflow-x-auto">
          <span className="text-cyan-400 font-mono text-sm font-bold whitespace-nowrap">
            HEAD
          </span>
          <span className="text-gray-500">→</span>
          {experiences.slice(0, 3).map((exp, i) => (
            <span key={exp.id} className="flex items-center gap-2">
              <button
                onClick={() => setActiveIndex(i)}
                className={`font-mono text-xs px-2 py-0.5 rounded whitespace-nowrap transition-colors ${
                  i === activeIndex
                    ? "bg-purple-500 text-white"
                    : "text-gray-400 hover:text-purple-300"
                }`}
              >
                {exp.company}
              </button>
              {i < 2 && <span className="text-gray-500">→</span>}
            </span>
          ))}
          <span className="text-gray-500">→ ... →</span>
          <button
            onClick={() => setActiveIndex(experiences.length - 1)}
            className={`font-mono text-xs px-2 py-0.5 rounded whitespace-nowrap transition-colors ${
              activeIndex === experiences.length - 1
                ? "bg-green-500 text-white"
                : "text-gray-400 hover:text-green-300"
            }`}
          >
            {experiences[experiences.length - 1]?.company}
          </button>
          <span className="text-green-400 font-mono text-sm font-bold whitespace-nowrap">
            TAIL
          </span>
          <span className="text-green-400 text-xs animate-pulse">
            (Current)
          </span>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-green-500" />

        {/* Timeline nodes */}
        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isActive = index === activeIndex;
            const isLast = index === experiences.length - 1;

            return (
              <motion.div
                key={exp.id}
                className="relative pl-12 sm:pl-16"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Node dot with pointer animation */}
                <button
                  onClick={() => setActiveIndex(index)}
                  className={`
                    absolute left-2 sm:left-4 top-4 w-5 h-5 rounded-full border-2 
                    transition-all duration-300 cursor-pointer z-10
                    ${
                      isActive
                        ? "bg-purple-500 border-white scale-125 shadow-lg shadow-purple-500/50"
                        : "bg-gray-700 border-gray-500 hover:bg-purple-400 hover:border-purple-300"
                    }
                  `}
                >
                  {isLast && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  )}
                </button>

                {/* Pointer arrow to next node */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[1.1rem] sm:left-[1.6rem] top-10 h-4 flex flex-col items-center">
                    <motion.div
                      className="w-0.5 h-full bg-gradient-to-b from-purple-500/80 to-purple-500/20"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    />
                  </div>
                )}

                {/* Card - Always shows summary, expands on active */}
                <motion.div
                  className={`
                    rounded-xl border transition-all duration-300 cursor-pointer overflow-hidden
                    ${
                      isActive
                        ? "bg-gradient-to-br from-purple-900/60 to-pink-900/40 border-purple-500/50 shadow-xl shadow-purple-500/10"
                        : "bg-gray-800/40 border-gray-700/50 hover:border-gray-600 hover:bg-gray-800/60"
                    }
                  `}
                  onClick={() => setActiveIndex(index)}
                  layout
                >
                  {/* Header - Always visible */}
                  <div className="p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3
                            className={`font-bold ${
                              isActive ? "text-white text-lg" : "text-gray-200"
                            }`}
                          >
                            {exp.role}
                          </h3>
                          {isLast && (
                            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-sm ${
                            isActive ? "text-purple-300" : "text-gray-400"
                          }`}
                        >
                          @ {exp.company}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${
                          isActive
                            ? "bg-purple-500/30 text-purple-200"
                            : "bg-gray-700/50 text-gray-400"
                        }`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Mini achievements preview when not active */}
                    {!isActive && (
                      <p className="text-gray-500 text-xs mt-2 line-clamp-1">
                        {exp.achievements[0]}
                      </p>
                    )}
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-gray-700/50">
                          {/* Achievements */}
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2 mb-5">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={`ach-${exp.id}-${i}`}
                                className="flex items-start gap-2 text-gray-300 text-sm"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                              >
                                <span className="text-purple-400 mt-0.5">
                                  ▹
                                </span>
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>

                          {/* Technologies */}
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {exp.technologies.map((Tech, i) => (
                              <motion.div
                                key={`tech-${exp.id}-${i}`}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 + i * 0.03 }}
                              >
                                <Tech className="text-2xl text-gray-400 hover:text-purple-400 transition-colors" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
