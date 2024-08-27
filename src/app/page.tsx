"use client";

import dynamic from "next/dynamic";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { hello } from "@/components/hello";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/animations";
import TechIcons from "@/components/techIcons";
import { FiDownload, FiMail } from "react-icons/fi";

const AvatarCanvas = dynamic(() => import("@/components/avatarCanvas"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex justify-center items-center">
      <div className="animate-pulse text-xl text-purple-500">
        Loading 3D Avatar...
      </div>
    </div>
  ),
});

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, typeof window !== "undefined" ? window.innerHeight : 0], [10, -10]);
  const rotateY = useTransform(mouseX, [0, typeof window !== "undefined" ? window.innerWidth : 0], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    hello();
  }, []);

  useEffect(() => {
    hello();
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Futuristic grid background */}
      {/* <div className="absolute inset-0 grid grid-cols-12 gap-2 transform -skew-y-12 opacity-20">
        {Array.from({ length: 144 }).map((_, i) => (
          <div
            key={i}
            className="h-20 bg-blue-500 animate-pulse rounded-sm"
            style={{ animationDelay: `${i * 0.05}s` }}
          ></div>
        ))}
      </div> */}

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full min-h-screen text-white p-8"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          className="lg:w-3/5 space-y-8 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 p-8 rounded-2xl shadow-xl"
          style={{
            rotateX,
            rotateY,
          }}
        >
          <motion.div variants={slideInFromLeft(0.5)} className="space-y-2">
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight"
              animate={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Halil Toksöz
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-5xl font-semibold"
              animate={{ opacity: [0, 1], y: [30, 0] }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
                Software Architect
              </span>{" "}
              &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 animate-gradient">
                Backend Developer
              </span>
            </motion.h2>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            Crafting robust, scalable architectures and elegant backend
            solutions. Bringing your complex software visions to life with
            cutting-edge technologies and best practices.
          </motion.p>

          <motion.div variants={slideInFromTop} className="py-4">
            <TechIcons />
          </motion.div>

          <motion.div
            variants={slideInFromLeft(1)}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="/path-to-your-cv.pdf"
              download
              className="group flex items-center gap-2 py-3 px-6 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="group-hover:animate-bounce" />
              Download CV
            </motion.a>
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Link
                href="/contact"
                className="relative flex items-center gap-2 py-3 px-6 text-lg font-semibold rounded-full bg-black text-white transition-all duration-300"
              >
                <FiMail className="group-hover:animate-pulse" />
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="lg:w-2/5 h-[50vh] lg:h-[80vh] flex justify-center items-center mt-10 lg:mt-0"
          style={{
            perspective: "1000px",
          }}
        >
          <motion.div
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
            style={{
              rotateX,
              rotateY,
            }}
          >
            <AvatarCanvas />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Interactive particles */}
      {/* <div className="absolute inset-0 z-20 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            animate={{
              x: mousePosition.x * 0.05,
              y: mousePosition.y * 0.05,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random()}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></motion.div>
        ))}
      </div> */}
    </div>
  );
};

export default Hero;
