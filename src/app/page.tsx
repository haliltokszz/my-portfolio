"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiDownload, FiMail, FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import TechIcons from "@/components/techIcons";

const useAnimationLoop = (duration: number) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = (elapsed % duration) / duration;
      setProgress(newProgress);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [duration]);

  return progress;
};

const Hero = () => {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");

  const animationProgress = useAnimationLoop(9000);

  useEffect(() => {
    const text = "Halil TOKSÖZ";
    let index = 0;

    const typeWriter = () => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 180);
      } else {
        setTimeout(() => {
          setLoading(false);
          setContentLoaded(true);
        }, 1200);
      }
    };

    typeWriter();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const userFlowSteps = [
    "Requirement Analysis",
    "System Design",
    "Development",
    "Testing",
    "Deployment",
    "Maintenance",
  ];

  return (
    <div className="min-h-screen text-white p-8">
      {loading ? (
        <motion.div
          className="flex items-center justify-center h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.h1
            className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {typedText}
          </motion.h1>
        </motion.div>
      ) : (
        contentLoaded && (
          <motion.div
            className="max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="lg:col-span-6 space-y-8"
                variants={itemVariants}
              >
                {backendArchitectSection(itemVariants)}
                {techIconsSection(itemVariants)}
                {coreSkillsSection(itemVariants)}
                {actionSection(itemVariants)}
              </motion.div>

              <motion.div
                className="lg:col-span-6 space-y-8"
                variants={itemVariants}
              >
                {developmentProcessSection(
                  itemVariants,
                  userFlowSteps,
                  animationProgress
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )
      )}
    </div>
  );
};
export default Hero;

function developmentProcessSection(
  itemVariants: {
    hidden: { y: number; opacity: number };
    visible: { y: number; opacity: number; transition: { duration: number } };
  },
  userFlowSteps: string[],
  animationProgress: number
) {
  return (
    <motion.div className="relative h-[600px]" variants={itemVariants}>
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4A00E0" />
            <stop offset="100%" stopColor="#8E2DE2" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {userFlowSteps.map((step, index) => {
          const angle =
            (index / userFlowSteps.length + animationProgress) * Math.PI * 2 -
            Math.PI / 2;
          const x = 200 + 150 * Math.cos(angle);
          const y = 200 + 150 * Math.sin(angle);
          return (
            <motion.g
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 + index * 0.5 }}
            >
              <circle cx={x} cy={y} r="30" fill="rgba(124, 58, 237, 0.2)" />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
                dy=".3em"
              >
                {step}
              </text>
              <motion.path
                d={`M${x},${y} L${
                  200 +
                  150 *
                    Math.cos(
                      ((index + 1) / userFlowSteps.length + animationProgress) *
                        Math.PI *
                        2 -
                        Math.PI / 2
                    )
                },${
                  200 +
                  150 *
                    Math.sin(
                      ((index + 1) / userFlowSteps.length + animationProgress) *
                        Math.PI *
                        2 -
                        Math.PI / 2
                    )
                }`}
                stroke="url(#gradient)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  delay: 2 + index * 0.5,
                  duration: 1,
                }}
              />
            </motion.g>
          );
        })}
        <motion.text
          x="200"
          y="200"
          textAnchor="middle"
          fill="white"
          fontSize="24"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Development Process
        </motion.text>
      </svg>
    </motion.div>
  );
}

function actionSection(itemVariants: {
  hidden: { y: number; opacity: number };
  visible: { y: number; opacity: number; transition: { duration: number } };
}) {
  return (
    <motion.div
      className="flex flex-col space-y-4 xs:flex-row xs:space-y-0 xs:space-x-4"
      variants={itemVariants}
    >
      <motion.a
        href="/cv/HalilToksöz-CV-20231108.pdf"
        download
        className="w-full xs:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center transition-all duration-300"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 15px rgba(124, 58, 237, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FiDownload className="mr-2" />
        Download CV
      </motion.a>
      <motion.a
        href="/contact"
        className="w-full xs:w-auto bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center transition-all duration-300"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 15px rgba(168, 85, 247, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
      >
        <FiMail className="mr-2" />
        Contact Me
      </motion.a>
    </motion.div>
  );
}

function coreSkillsSection(itemVariants: {
  hidden: { y: number; opacity: number };
  visible: { y: number; opacity: number; transition: { duration: number } };
}) {
  return (
    <motion.div variants={itemVariants}>
      <h3 className="text-2xl font-semibold mb-4">Core Skills:</h3>
      <ul className="space-y-2">
        {[
          "Data Structures & Algorithms",
          "Backend & Frontend Development",
          "System & Architecture Design",
          "Performance Optimization",
          "Microservices",
          "Distributed Systems",
          "Cloud Computing",
        ].map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <FiArrowRight className="text-purple-500" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function backendArchitectSection(itemVariants: {
  hidden: { y: number; opacity: number };
  visible: { y: number; opacity: number; transition: { duration: number } };
}) {
  return (
    <motion.h1
      className="text-5xl md:text-6xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
      variants={itemVariants}
    >
      Halil TOKSÖZ
      <span className="block text-purple-500">Backend Architect</span>
    </motion.h1>
  );
}

function techIconsSection(itemVariants: {
  hidden: { y: number; opacity: number };
  visible: { y: number; opacity: number; transition: { duration: number } };
}) {
  return (
    <motion.div variants={itemVariants}>
      <TechIcons size={30} className="flex flex-wrap justify-center gap-8" />
    </motion.div>
  );
}
