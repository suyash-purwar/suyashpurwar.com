import Link from "next/link";
import { getAllBlogs } from "@/lib/getBlogs";

export const metadata = {
  title: "Blog | Suyash Purwar",
  description: "Articles on web development, software engineering, and tech.",
};

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8">
        <h1 className="mb-8 text-4xl font-extrabold text-black">Blogs</h1>

        <ul className="space-y-6">
          {blogs.map((blog) => (
            <li key={blog.slug} className="border-b border-gray-300 pb-6">
              <Link href={`/blog/${blog.slug}`}>
                <h2 className="text-2xl font-bold text-black hover:underline">
                  {blog.title}
                </h2>
              </Link>

              <p className="mt-2 text-sm font-semibold text-black">
                {new Date(blog.date).toDateString()}
              </p>

              <p className="mt-3 text-black">
                {blog.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
