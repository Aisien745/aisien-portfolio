import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { notFound } from "next/navigation";
import Link from "next/link";
import { library } from "@/data/content";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = library.find((p) => p.slug === slug);
  if (!item) return { title: "Not Found" };
  return { title: `${item.title} | Library` };
}

export default async function LibraryItemPage({ params }: PageProps) {
  const { slug } = await params;
  const item = library.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  let htmlContent = "";
  try {
    const filePath = path.join(process.cwd(), "content", "library", `${slug}.md`);
    if (fs.existsSync(filePath)) {
      const fileFile = fs.readFileSync(filePath, "utf8");
      const parsed = matter(fileFile);
      // Конвертируем markdown в HTML
      htmlContent = await marked(parsed.content);
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

      <header className="mb-10 border-b border-neutral-200 pb-8">
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

      {/* Рендеринг HTML с поддержкой стилей Tailwind Typography (prose) */}
      <div 
        className="prose prose-neutral max-w-none space-y-4 text-neutral-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: htmlContent || `<p>${item.note}</p>` }}
      />

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