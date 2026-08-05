import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_DIR = path.join(process.cwd(), "content", "blogs");

export type BlogMeta = {
  id: string;
  title: string;
  date: string;
  description: string;
  cover?: string;
};

export type Blog = BlogMeta & {
  content: string;
};

function readSlugs(): string[] {
  if (!fs.existsSync(BLOGS_DIR)) return [];
  return fs
    .readdirSync(BLOGS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllBlogSlugs(): string[] {
  return readSlugs();
}

export function getBlogBySlug(slug: string): Blog | null {
  const filePath = path.join(BLOGS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    id: slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description ?? "",
    cover: data.cover,
    content,
  };
}

export function getAllBlogs(): BlogMeta[] {
  return readSlugs()
    .map((slug) => getBlogBySlug(slug))
    .filter((blog): blog is Blog => blog !== null)
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
