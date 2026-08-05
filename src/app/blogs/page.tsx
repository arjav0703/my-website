import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blogs | Arjav Jain",
  description: "Writing on code, cameras, and everything in between.",
};

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="bg-[#212529] min-h-screen flex flex-col">
      <div className="pt-8 max-w-7xl mx-auto grow w-full px-8 py-4 flex flex-col gap-6">
        <h1 className="text-xl sm:text-3xl text-pink-400">BLOGS</h1>

        {blogs.length === 0 ? (
          <p className="text-gray-400">No posts yet. Check back soon.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blogs/${blog.id}`}>
                <section className="nes-container is-dark is-rounded hover:brightness-125 transition">
                  <h2 className="text-base sm:text-lg text-pink-400">
                    {blog.title}
                  </h2>
                  {blog.date && (
                    <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
                  )}
                  {blog.description && (
                    <p className="text-sm text-gray-300 mt-2">
                      {blog.description}
                    </p>
                  )}
                </section>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
