import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { library } from "@/data/content";
import { getLibraryChapters, getLibraryChapter } from "@/lib/library";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const itemSlug = slug[0];
  const item = library.find((p) => p.slug === itemSlug);
  if (!item) return { title: "Not Found" };
  
  if (slug.length === 2) {
      const chapterData = getLibraryChapter(itemSlug, slug[1]);
      if (chapterData) return { title: `${chapterData.title} | ${item.title}` };
  }
  
  return { title: `${item.title} | Library` };
}

export default async function LibraryItemPage({ params }: PageProps) {
  const { slug } = await params;
  const itemSlug = slug[0];
  const chapterSlug = slug.length > 1 ? slug[1] : null;
  
  const item = library.find((p) => p.slug === itemSlug);

  if (!item) {
    notFound();
  }

  const chapters = getLibraryChapters(itemSlug);

  if (chapters.length > 0 && !chapterSlug) {
      redirect(`/library/${itemSlug}/${chapters[0].slug}`);
  }

  let htmlContent = "";
  let currentChapterTitle = "";
  let prevChapter = null;
  let nextChapter = null;

  try {
    if (chapterSlug) {
        const chapterData = getLibraryChapter(itemSlug, chapterSlug);
        if (!chapterData) notFound();
        
        htmlContent = await marked(chapterData.content);
        currentChapterTitle = chapterData.title;
        
        const i = chapters.findIndex((c) => c.slug === chapterSlug);
        prevChapter = chapters[i - 1];
        nextChapter = chapters[i + 1];
        
    } else {
        const filePath = path.join(process.cwd(), "content", "library", `${itemSlug}.md`);
        if (fs.existsSync(filePath)) {
          const fileFile = fs.readFileSync(filePath, "utf8");
          const parsed = matter(fileFile);
          htmlContent = await marked(parsed.content);
        }
    }
  } catch (e) {
    console.error("Error reading markdown file:", e);
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-8">
        <Link
          href="/library"
          className="text-xs font-semibold uppercase tracking-wider text-neutral-500 transition hover:text-red-600"
        >
          ← Back to Library
        </Link>
      </div>

      <header className="mb-6 border-b border-neutral-200 pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="bg-red-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
            {item.type}
          </span>
          <span className="border border-neutral-300 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
            {item.theme}
          </span>
        </div>

        <h1 className="mb-3 text-3xl font-bold leading-tight tracking-tight text-neutral-900 md:text-4xl">
          {item.title}
        </h1>
        
        <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
          {item.author}
        </p>
      </header>

      {/* Pinned Chapter Navigation Tabs */}
      {chapters.length > 0 && (
        <div className="sticky top-0 z-10 -mx-6 mb-10 overflow-x-auto border-b border-neutral-200 bg-white/90 px-6 backdrop-blur-md">
          <nav className="flex w-full min-w-max gap-8">
            {chapters.map((chap, idx) => {
              const isActive = chap.slug === chapterSlug;
              return (
                <Link
                  key={chap.slug}
                  href={`/library/${itemSlug}/${chap.slug}`}
                  className={`flex items-center gap-2 whitespace-nowrap border-b-2 py-4 text-sm font-semibold transition-colors ${
                    isActive
                      ? "border-red-600 text-red-600"
                      : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-800"
                  }`}
                >
                  <span className={`text-xs font-bold ${isActive ? "opacity-100" : "opacity-50"}`}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {chap.title}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      {currentChapterTitle && (
          <h2 className="mb-6 mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">
              {currentChapterTitle}
          </h2>
      )}

      <div 
        className="prose prose-neutral max-w-none space-y-4 leading-relaxed text-neutral-800"
        dangerouslySetInnerHTML={{ __html: htmlContent || `<p>${item.note}</p>` }}
      />

      {/* Bottom Chapter Navigation */}
      {chapters.length > 0 && (
          <nav className="mt-16 grid gap-4 border-t border-neutral-200 pt-8 sm:grid-cols-2">
            {prevChapter ? (
              <Link href={`/library/${itemSlug}/${prevChapter.slug}`} className="border border-neutral-200 p-5 transition hover:border-red-600">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">← Previous</span>
                <span className="mt-1 block font-bold">{prevChapter.title}</span>
              </Link>
            ) : <span />}
            {nextChapter && (
              <Link href={`/library/${itemSlug}/${nextChapter.slug}`} className="border border-neutral-200 p-5 text-right transition hover:border-red-600">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Next →</span>
                <span className="mt-1 block font-bold">{nextChapter.title}</span>
              </Link>
            )}
          </nav>
      )}

      {/* Download Button */}
      {item.fileUrl && (
        <div className="mt-16 border-t border-neutral-200 pt-10">
          <a
            href={item.fileUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-red-600 hover:bg-red-50 hover:text-red-600"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Original PDF
          </a>
        </div>
      )}
    </main>
  );
}