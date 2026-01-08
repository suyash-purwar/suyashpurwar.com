"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Absolute path to the blogs directory
 */
const BLOGS_DIR = path.join(process.cwd(), "content", "blogs");

/**
 * Blog frontmatter type
 */
export interface BlogMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
}

/**
 * Get all blogs (for listing page)
 */
export async function getAllBlogs(): Promise<BlogMeta[]> {
  const files = fs.readdirSync(BLOGS_DIR);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(BLOGS_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf8");

      const { data } = matter(fileContent);

      return {
        title: data.title,
        date: data.date,
        description: data.description,
        slug,
      };
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

/**
 * Get a single blog by slug
 */
export async function getBlogBySlug(slug: string) {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Blog not found: ${slug}`);
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      title: data.title,
      date: data.date,
      description: data.description,
      slug,
    } as BlogMeta,
    content,
  };
}
