import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { subjects } from "@/data/content";
import { getChapter, getChapters, slugify } from "@/lib/subjects";

export const dynamicParams = false;

export function generateStaticParams() {
  return subjects.flatMap((s) => {
    const slug = slugify(s.name);
    return getChapters(slug).map((c) => ({ slug, chapter: c.slug }));
  });
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string; chapter: string }>;
}) {
  const { slug, chapter } = await params;
  const data = getChapter(slug, chapter);
  if (!data) notFound();

  const chapters = getChapters(slug);
  const i = chapters.findIndex((c) => c.slug === chapter);
  const prev = chapters[i - 1];
  const next = chapters[i + 1];

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-bain">
        Chapter {String(i + 1).padStart(2, "0")}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
        {data.title}
      </h2>
      {data.summary && (
        <p className="mt-4 text-lg leading-relaxed text-neutral-600">{data.summary}</p>
      )}

      <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-bain prose-blockquote:border-bain prose-th:text-left prose-img:rounded">
        <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
          {data.content}
        </ReactMarkdown>
      </div>

      <nav className="mt-16 grid gap-4 border-t border-neutral-200 pt-8 sm:grid-cols-2">
        {prev ? (
          <Link href={`/subjects/${slug}/${prev.slug}`} className="border border-neutral-200 p-5 transition hover:border-bain">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">← Previous</span>
            <span className="mt-1 block font-bold">{prev.title}</span>
          </Link>
        ) : <span />}
        {next && (
          <Link href={`/subjects/${slug}/${next.slug}`} className="border border-neutral-200 p-5 text-right transition hover:border-bain">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Next →</span>
            <span className="mt-1 block font-bold">{next.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
