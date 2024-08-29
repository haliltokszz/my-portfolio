"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const AvatarCanvas = dynamic(() => import("@/components/avatarCanvas"), {
  ssr: false,
  loading: () => <div>Loading 3D Avatar...</div>,
});

// Zod schema for form validation
const formSchema = z.object({
  fullName: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isBlocked, setIsBlocked] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    if (isBlocked) {
      alert("Please wait 30 seconds!");
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "force-cache", // Implement caching
      });

      if (response.ok) {
        alert("Email sent successfully!");
        reset();
        setIsBlocked(true);
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("SendMail Error: ", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setTimeout(() => {
        setIsBlocked(false);
      }, 30000); // 30 saniye bloklama
    }
  };

  return (
    <div className="min-h-screen mt-5 flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 w-full max-w-[90%] md:max-w-[50%] h-[50vh] md:h-[85vh] flex justify-center items-center mt-10 md:mt-0"
      >
        <AvatarCanvas />
      </motion.div>

      {/* Right Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex-2 w-full max-w md:max-w-[50%] items-start md:items-center md:justify-center text-white"
      >
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Get in Touch
        </h2>
        <div className="flex flex-col gap-6 p-10 xs:p-0 w-full max-w">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <div className="relative">
              <input
                type="text"
                {...register("fullName")}
                placeholder="Full Name"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs italic">
                  {errors.fullName.message}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="email"
                {...register("email")}
                placeholder="Email Address"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="relative">
              <input
                type="text"
                {...register("subject")}
                placeholder="Subject"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs italic">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div className="relative">
              <textarea
                {...register("message")}
                placeholder="Your Message"
                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
              {errors.message && (
                <p className="text-red-500 text-xs italic">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-colors duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
          <div className="flex gap-6 justify-center">
            <Link
              href="mailto:toksozhalil@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-all hover:text-pink-500"
            >
              <FiMail />
            </Link>
            <Link
              href="https://www.linkedin.com/in/halil-toksöz-2b634317b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-all hover:text-blue-500"
            >
              <FiLinkedin />
            </Link>
            <Link
              href="https://github.com/haliltokszz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-all hover:text-gray-400"
            >
              <FiGithub />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
