import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import MarkdownRenderer from "@/components/markdownRenderer";

interface Frontmatter {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
}

interface PostProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params: { slug } }: PostProps) {
  const decodedSlug = decodeURIComponent(slug);
  const markdownWithMeta = fs.readFileSync(
    path.join(process.cwd(), "public", "posts", `${decodedSlug}.md`),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return (
    <div className="bg-gray-600 bg-opacity-30 py-12 my-8">
      <article className="max-w-3xl mx-auto bg-gray-900 shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            {frontmatter.title}
          </h1>
          <div className="flex items-center text-gray-400 mb-8">
            <span className="mr-4">{frontmatter.author}</span>
            <span className="mr-4">•</span>
            <span className="mr-4">{frontmatter.date}</span>
            <span className="mr-4">•</span>
            <span>{frontmatter.readTime} read</span>
          </div>
          <div className="prose prose-lg max-w-none">
            {/* <MDXRemote source={content} /> */}
            <MarkdownRenderer content={content} />
          </div>
        </div>
      </article>
    </div>
  );
}
