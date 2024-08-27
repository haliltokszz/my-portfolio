"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiDownload, FiMail } from "react-icons/fi";
import Link from "next/link";
import TechIcons from "@/components/techIcons";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500); // 2.5 saniye sonra loading ekranını kaldır
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 },
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

  if (loading) {
    return (
      <motion.div
        className="flex items-center justify-center h-screen bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.h1
          className="text-5xl font-bold text-white"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Halil Toksöz
        </motion.h1>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          Backend Architecture
          <span className="text-blue-500"> Reimagined</span>
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={itemVariants}
        >
          <div className="space-y-6">
            <p className="text-xl">
              Crafting robust and scalable backend solutions with a focus on:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Optimized Data Structures & Algorithms</li>
              <li>High-Level System Design</li>
              <li>Microservices Architecture</li>
              <li>Distributed Systems</li>
            </ul>
            <TechIcons />
            <div className="flex space-x-4">
              <motion.a
                href="/path-to-your-cv.pdf"
                download
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload className="mr-2" />
                Download CV
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <FiMail className="mr-2" />
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4A00E0" />
                  <stop offset="100%" stopColor="#8E2DE2" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.text
                x="100"
                y="115"
                textAnchor="middle"
                fill="white"
                fontSize="24"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                System Design
              </motion.text>
            </svg>
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              <pre className="text-sm text-green-400">
                {`function optimizeSystem(data) {
  // Your brilliant code here
  return enhancedPerformance;
}`}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
