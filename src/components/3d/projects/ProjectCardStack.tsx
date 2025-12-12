"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconType } from "react-icons";
import {
  FiExternalLink,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

interface ProjectData {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  image: string;
  liveLink: string;
  sourceCode: string;
  techStack: IconType[];
  designPatterns: string[];
  complexity: number;
}

interface ProjectCardStackProps {
  projects: ProjectData[];
}

export default function ProjectCardStack({ projects }: ProjectCardStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sort by complexity (highest first)
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => b.complexity - a.complexity);
  }, [projects]);

  const activeProject = sortedProjects[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? sortedProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === sortedProjects.length - 1 ? 0 : prev + 1
    );
  };

  // Gradient colors by complexity level
  const gradientColors: Record<number, string> = {
    5: "from-purple-600 to-purple-400",
    4: "from-blue-600 to-blue-400",
    3: "from-green-600 to-green-400",
    2: "from-yellow-600 to-yellow-400",
    1: "from-gray-600 to-gray-400",
  };

  return (
    <div className="w-full space-y-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Featured Projects
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
          <span className="text-cyan-400">BST Sorted</span>
          <span className="text-xs opacity-60">by Complexity</span>
        </div>
      </div>

      {/* BST Selector */}
      <div className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/50">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {sortedProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveIndex(index)}
              className={`
                px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300
                ${
                  index === activeIndex
                    ? "bg-purple-500 text-white scale-110 shadow-lg shadow-purple-500/30"
                    : "bg-gray-700/50 text-gray-400 hover:bg-gray-600/50 hover:text-white"
                }
              `}
            >
              <span className="text-yellow-400 mr-1">
                {"★".repeat(project.complexity)}
              </span>
              {project.name.split(" ")[0]}
            </button>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-3">
          Click to select • Projects sorted by complexity
        </p>
      </div>

      {/* Navigation + Card */}
      <div className="relative">
        {/* Nav Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-gray-800/90 hover:bg-purple-600 rounded-full transition-colors -ml-2 sm:-ml-4"
          aria-label="Previous project"
        >
          <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-gray-800/90 hover:bg-purple-600 rounded-full transition-colors -mr-2 sm:-mr-4"
          aria-label="Next project"
        >
          <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Card */}
        <div className="mx-8 sm:mx-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`
                bg-gradient-to-br ${
                  gradientColors[activeProject.complexity] || gradientColors[3]
                }
                rounded-2xl overflow-hidden shadow-2xl
              `}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Section - Fixed height with proper object positioning */}
                <div className="lg:w-2/5 relative bg-black/20">
                  <div className="aspect-[16/10] lg:aspect-auto lg:h-full relative min-h-[200px] lg:min-h-[350px]">
                    <Image
                      src={activeProject.image}
                      alt={activeProject.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      onError={(e) => {
                        // Fallback for broken images
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    {/* Fallback gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  {/* Complexity Badge */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-yellow-400 text-sm font-medium">
                      {"★".repeat(activeProject.complexity)}
                      {"☆".repeat(5 - activeProject.complexity)}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 p-5 sm:p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                      {activeProject.name}
                    </h3>

                    <p className="text-white/85 text-sm sm:text-base mb-5 leading-relaxed">
                      {activeProject.longDescription}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-white/80 mb-2">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {activeProject.techStack.map((Tech, i) => (
                          <Tech
                            key={`tech-${activeProject.id}-${i}`}
                            className="text-xl sm:text-2xl text-white/90 hover:text-white hover:scale-110 transition-all"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Design Patterns */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-white/80 mb-2">
                        Design Patterns
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.designPatterns.map((pattern, i) => (
                          <span
                            key={`pattern-${activeProject.id}-${i}`}
                            className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-md"
                          >
                            {pattern}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-white/20">
                    <Link
                      href={activeProject.liveLink}
                      target="_blank"
                      className="flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium"
                    >
                      <FiExternalLink className="text-lg" /> Live Demo
                    </Link>
                    {activeProject.sourceCode !==
                      "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" && (
                      <Link
                        href={activeProject.sourceCode}
                        target="_blank"
                        className="flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium"
                      >
                        <FiGithub className="text-lg" /> Source Code
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2">
        {sortedProjects.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-purple-500 w-8"
                : "bg-gray-600 hover:bg-gray-500 w-2.5"
            }`}
            aria-label={`Project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
