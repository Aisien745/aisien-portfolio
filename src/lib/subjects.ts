import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { subjects } from "@/data/content";

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const subjectBySlug = (slug: string) =>
  subjects.find((s) => slugify(s.name) === slug);

const ROOT = path.join(process.cwd(), "content", "subjects");
const SAFE = /^[a-z0-9_-]+$/i;

export type Chapter = { slug: string; title: string };

export function getChapters(subjectSlug: string): Chapter[] {
  if (!SAFE.test(subjectSlug)) return [];
  const dir = path.join(ROOT, subjectSlug);
  if (!fs.existsSync(dir)) return [];
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

export function getChapter(subjectSlug: string, chapterSlug: string) {
  if (!SAFE.test(subjectSlug) || !SAFE.test(chapterSlug)) return null;
  const file = path.join(ROOT, subjectSlug, `${chapterSlug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    title: (data.title as string | undefined) ?? chapterSlug,
    summary: data.summary as string | undefined,
    content,
  };
}
