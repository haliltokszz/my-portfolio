import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogCard } from "../../../components/blogCard";

export default function BlogPage() {
  const files = fs.readdirSync(path.join(process.cwd(), "public", "posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), "public", "posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.frontmatter.title}
            excerpt={post.frontmatter.excerpt}
            author={post.frontmatter.author}
            readTime={post.frontmatter.readTime}
            imageUrl={post.frontmatter.imageUrl}
            avatarUrl={post.frontmatter.avatarUrl}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
