import Link from "next/link";
import { library } from "@/data/content";

export const metadata = {
  title: "Library",
};

export default function LibraryPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12 border-b border-neutral-200 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
          Library
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">
          A collection of papers, books, and articles I have read and broken down.
        </p>
      </header>

      <div className="flex flex-col">
        {library.map((item, idx) => (
          <div
            key={item.slug}
            className="group flex flex-col md:flex-row items-start gap-6 md:gap-10 border-b border-neutral-200 py-10"
          >
            {/* Left: Number */}
            <div className="shrink-0 pt-1">
              <span className="text-2xl font-bold text-red-600">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Right: Unified Content Block */}
            <div className="flex-1 flex flex-col gap-4 w-full">
              
              {/* 1. Eyebrow Tags (Moved to top) */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-red-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  {item.type}
                </span>
                <span className="border border-neutral-300 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
                  {item.theme}
                </span>
              </div>

              {/* 2. Clickable Title & Author */}
              <Link href={`/library/${item.slug}`} className="block space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight transition-colors group-hover:text-red-600 pr-4">
                  {item.title}
                </h2>
                <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
                  {item.author}
                </p>
              </Link>

              {/* 3. Abstract / Note */}
              <p className="text-base text-neutral-600 leading-relaxed max-w-3xl">
                {item.note}
              </p>

              {/* 4. Action Zone (Grouped links & download) */}
              <div className="flex items-center gap-6 pt-4">
                <Link 
                  href={`/library/${item.slug}`} 
                  className="inline-block text-xs font-bold uppercase tracking-wider text-red-600 transition hover:text-red-700"
                >
                  Read notes →
                </Link>
                
                {item.fileUrl && (
                  <a
                    href={item.fileUrl}
                    download
                    aria-label={`Download ${item.title} PDF`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition hover:border-red-600 hover:text-red-600 hover:bg-red-50"
                    title="Download Original PDF"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </a>
                )}
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}