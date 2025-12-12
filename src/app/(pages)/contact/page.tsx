"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiDownload,
} from "react-icons/fi";
import Link from "next/link";
import { LoadingFallback } from "@/components/3d/shared";

// Dynamic import for 3D scene to avoid SSR issues
const ContactScene = dynamic(
  () => import("@/components/3d/scenes/ContactScene"),
  {
    ssr: false,
    loading: () => <LoadingFallback message="Initializing Terminal..." />,
  }
);

const socialLinks = [
  {
    name: "Email",
    href: "mailto:toksozhalil@gmail.com",
    icon: FiMail,
    color: "from-pink-500 to-rose-500",
    hoverColor: "hover:shadow-pink-500/50",
    description: "toksozhalil@gmail.com",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/halil-toksöz-2b634317b/",
    icon: FiLinkedin,
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:shadow-blue-500/50",
    description: "Connect professionally",
  },
  {
    name: "GitHub",
    href: "https://github.com/haliltokszz",
    icon: FiGithub,
    color: "from-gray-600 to-gray-700",
    hoverColor: "hover:shadow-gray-500/50",
    description: "View my repositories",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/halil_toksz",
    icon: FiTwitter,
    color: "from-cyan-500 to-blue-500",
    hoverColor: "hover:shadow-cyan-500/50",
    description: "Follow for updates",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-4 md:p-8">
      {/* Left Section - 3D Matrix Scene */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-[70vh] relative"
      >
        {/* Glow effect background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-full" />

        {/* 3D Scene */}
        <ContactScene className="relative z-10" />
      </motion.div>

      {/* Right Section - Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full lg:w-1/2 max-w-lg"
      >
        {/* Header */}
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Let&apos;s Connect
        </motion.h1>

        <motion.p
          className="text-gray-400 text-base sm:text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Ready to build something amazing together? Reach out through any of
          these channels.
        </motion.p>

        {/* Social Links Grid */}
        <div className="grid gap-4">
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Link
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  social.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                className={`
                  group flex items-center gap-4 p-4 sm:p-5
                  bg-gray-800/50 hover:bg-gray-800/80
                  border border-gray-700/50 hover:border-gray-600
                  rounded-xl transition-all duration-300
                  hover:scale-[1.02] hover:shadow-lg ${social.hoverColor}
                `}
              >
                {/* Icon */}
                <div
                  className={`
                  p-3 rounded-lg bg-gradient-to-br ${social.color}
                  group-hover:scale-110 transition-transform duration-300
                `}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {social.description}
                  </p>
                </div>

                {/* Arrow */}
                <motion.div
                  className="text-gray-500 group-hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Download CV Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link
            href="/cv/HalilToksöz-CV.pdf"
            download
            className="
              w-full flex items-center justify-center gap-3 p-4
              bg-gradient-to-r from-purple-600 to-pink-600
              hover:from-purple-700 hover:to-pink-700
              text-white font-semibold rounded-xl
              transition-all duration-300
              hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/30
            "
          >
            <FiDownload className="w-5 h-5" />
            Download My CV
          </Link>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          className="mt-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-2.5 h-2.5 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <span className="text-sm text-gray-400">
            Available for new opportunities
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
