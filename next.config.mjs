/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "media.licdn.com",
      "images.unsplash.com",
      "miro.medium.com",
      "res.cloudinary.com",
      "blog.cleancoder.com",
      "gh-card.dev",
    ],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

import withMDX from "@next/mdx";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

const withMDXConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default {
  ...nextConfig,
  ...withMDXConfig,
};
