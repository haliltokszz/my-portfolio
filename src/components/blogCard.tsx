"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiClock, FiUser, FiArrowRight } from "react-icons/fi";

interface CardProps {
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  imageUrl: string;
  avatarUrl: string;
  slug: string;
}

export function BlogCard({
  title,
  excerpt,
  author,
  readTime,
  imageUrl,
  avatarUrl,
  slug,
}: CardProps) {
  return (
    <motion.div
      className="w-full max-w-sm bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col h-full"
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute bottom-4 left-4 flex items-center space-x-2">
          <Image
            src={avatarUrl}
            alt={author}
            width={32}
            height={32}
            className="rounded-full border-2 border-white"
          />
          <span className="text-white text-sm font-medium">{author}</span>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
        <p className="text-gray-300 text-sm flex-grow">{excerpt}</p>
      </div>
      <div className="p-6 pt-0">
        <div className="flex justify-between items-center text-gray-400 text-sm mb-4">
          <div className="flex items-center space-x-2">
            <FiClock />
            <span>{readTime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiUser />
            <span>{author}</span>
          </div>
        </div>
        <motion.a
          href={`/blog/${slug}`}
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
          whileHover={{ x: 5 }}
        >
          <span>Read More</span>
          <FiArrowRight />
        </motion.a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
    </motion.div>
  );
}
