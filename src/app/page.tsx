"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiDownload, FiMail, FiArrowRight } from "react-icons/fi";
import TechIcons from "@/components/techIcons";
import dynamic from "next/dynamic";

// Dynamic import for 3D scene - only on tablet and above
const HeroScene = dynamic(() => import("@/components/3d/scenes/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-purple-400 text-sm animate-pulse">Loading 3D...</div>
    </div>
  ),
});

export default function Hero() {
  const [showIntro, setShowIntro] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Typing animation
  useEffect(() => {
    const text = "Halil TOKSÖZ";
    let index = 0;

    const typeWriter = () => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => setShowIntro(false), 600);
      }
    };

    typeWriter();
  }, []);

  // Intro animation
  if (showIntro) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {typedText}
          <span className="animate-pulse text-purple-400">|</span>
        </motion.h1>
      </div>
    );
  }

  // Main content
  return (
    <motion.div
      className="min-h-screen text-white p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[85vh]">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-5 space-y-5 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Halil TOKSÖZ
              </h1>
              <p className="text-purple-400 text-xl sm:text-2xl lg:text-3xl font-semibold">
                Senior Backend Architect
              </p>
            </div>

            {/* Tech Icons */}
            <div className="py-2">
              <TechIcons
                size={24}
                className="flex flex-wrap justify-start gap-3"
              />
            </div>

            {/* Core Skills */}
            <div>
              <h3 className="text-base font-semibold mb-2 text-gray-300">
                Core Expertise:
              </h3>
              <ul className="space-y-1.5">
                {[
                  "Data Structures & Algorithms",
                  "System & Architecture Design",
                  "Backend Development",
                  "Performance Optimization",
                  "Microservices & Cloud",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    className="flex items-center space-x-2 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                  >
                    <FiArrowRight className="text-purple-500 flex-shrink-0 text-sm" />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <motion.a
                href="/cv/HalilToksöz-CV.pdf"
                download
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2.5 px-5 rounded-full inline-flex items-center justify-center transition-all duration-300 text-sm"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(124, 58, 237, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="mr-2" />
                Download CV
              </motion.a>
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-2.5 px-5 rounded-full inline-flex items-center justify-center transition-all duration-300 text-sm"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(168, 85, 247, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail className="mr-2" />
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Right - 3D Neural Network (hidden on mobile, shown on tablet+) */}
          <motion.div
            className="lg:col-span-7 h-[50vh] sm:h-[55vh] lg:h-[70vh] order-1 lg:order-2 relative hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/15 to-cyan-500/20 blur-3xl rounded-full" />

            {/* 3D Scene */}
            <div className="relative z-10 w-full h-full">
              <HeroScene className="w-full h-full" />
            </div>

            {/* Interaction hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-500">
              Drag to rotate • Scroll to zoom
            </div>
          </motion.div>

          {/* Mobile: Show a simple gradient background instead of 3D */}
          {isMobile && (
            <motion.div
              className="md:hidden h-[30vh] relative order-1 rounded-2xl overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/30 to-cyan-900/40 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🧠</div>
                  <p className="text-gray-400 text-xs">
                    Neural Network Visualization
                  </p>
                  <p className="text-gray-500 text-xs">
                    Available on larger screens
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
