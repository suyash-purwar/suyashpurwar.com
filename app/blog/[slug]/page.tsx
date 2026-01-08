"use client";

import { getBlogBySlug } from "@/lib/getBlogs";
import { MDXRemote } from "next-mdx-remote";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { serialize } from "next-mdx-remote/serialize";

type BlogData = {
  meta: {
    title: string;
    date: string;
    description: string;
    slug: string;
  };
  content: string;
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [mdxSource, setMdxSource] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadBlog() {
      try {
        setLoading(true);
        const blogData = await getBlogBySlug(slug);
        setBlog(blogData);
        const serialized = await serialize(blogData.content, {
          parseFrontmatter: false,
        });
        setMdxSource(serialized);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      loadBlog();
    }
  }, [slug]);

  if (loading) {
    return <div className="mx-auto max-w-3xl px-4 py-10">Loading...</div>;
  }

  if (error || !blog || !mdxSource) {
    return <div className="mx-auto max-w-3xl px-4 py-10">Blog not found</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
        <h1 className="mb-4 text-5xl font-extrabold text-black">{blog.meta.title}</h1>

        <p className="mb-12 text-lg font-semibold text-black">
          {new Date(blog.meta.date).toDateString()}
        </p>

        <div className="prose prose-lg prose-headings:font-bold! prose-headings:text-black! prose-h1:text-black! prose-h2:text-black! prose-h3:text-black! prose-h4:text-black! prose-h5:text-black! prose-h6:text-black! prose-h2:text-3xl! prose-h3:text-2xl! prose-strong:font-black! prose-p:text-black! prose-li:text-black! prose-ul:text-black! prose-ol:text-black! prose-blockquote:bg-gray-100! prose-blockquote:text-black! prose-blockquote:border-l-4! prose-blockquote:border-gray-400! max-w-none [&_ul>li::marker]:text-black [&_ol>li::marker]:text-black">
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </main>
  );
}
