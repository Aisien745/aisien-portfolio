import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.join(process.cwd(), "content", "library");
const SAFE = /^[a-z0-9_-]+$/i;

export type LibraryChapter = { slug: string; title: string };

// Gets chapters IF the library item is a folder (like industrial-economics)
export function getLibraryChapters(bookSlug: string): LibraryChapter[] {
  if (!SAFE.test(bookSlug)) return [];
  const dir = path.join(ROOT, bookSlug);
  
  // If it's not a folder, it has no chapters
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return [];
  
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .sort()
    .map((f) => {
      const slug = f.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return { slug, title: (data.title as string | undefined) ?? slug };
    });
}

// Gets a specific chapter from a folder
export function getLibraryChapter(bookSlug: string, chapterSlug: string) {
  if (!SAFE.test(bookSlug) || !SAFE.test(chapterSlug)) return null;
  const file = path.join(ROOT, bookSlug, `${chapterSlug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    title: (data.title as string | undefined) ?? chapterSlug,
    summary: data.summary as string | undefined,
    content,
  };
}