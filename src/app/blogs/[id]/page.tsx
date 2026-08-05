import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogSlugs, getBlogBySlug } from "@/lib/blogs";
import BlogContent from "@/app/components/BlogContent";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = getBlogBySlug(id);
  if (!blog) return {};

  return {
    title: `${blog.title} | Arjav Jain`,
    description: blog.description,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = getBlogBySlug(id);

  if (!blog) notFound();

  return (
    <div className="bg-[#212529] min-h-screen flex flex-col">
      <div className="pt-8 max-w-5xl mx-auto grow w-full px-8 py-4 flex flex-col gap-6">
        <Link href="/blogs" className="text-sm text-gray-400 hover:text-pink-400">
          &larr; back to blogs
        </Link>

        <header className="flex flex-col gap-2">
          <h1 className="text-xl sm:text-3xl text-pink-400">{blog.title}</h1>
          {blog.date && <p className="text-xs text-gray-400">{blog.date}</p>}
        </header>

        <section className="nes-container is-dark is-rounded">
          <BlogContent content={blog.content} />
        </section>
      </div>
    </div>
  );
}
