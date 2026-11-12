import Link from "next/link";
import { library } from "@/data/content";

export const metadata = {
  title: "Library",
};

export default function LibraryPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
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
            className="group flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8 border-b border-neutral-200 py-8"
          >
            {/* Left: Number + Clickable Title & Note */}
            <div className="flex flex-1 items-start gap-6 md:gap-8 w-full">
              <span className="text-2xl font-bold text-red-600 shrink-0">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <Link href={`/library/${item.slug}`} className="flex-1 space-y-2 block pr-4 md:pr-12">
                <h2 className="text-xl md:text-2xl font-bold text-neutral-900 leading-snug transition-colors group-hover:text-red-600">
                  {item.title}
                </h2>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {item.author}
                </p>
                <p className="text-sm text-neutral-700 leading-relaxed pt-1">
                  {item.note}
                </p>
                <div className="pt-2">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-red-600">
                    Read notes →
                  </span>
                </div>
              </Link>
            </div>

            {/* Right: Direct PDF Download + Type/Theme Badges */}
            <div className="flex shrink-0 items-start gap-4 mt-4 md:mt-0">
              {item.fileUrl && (
                <a
                  href={item.fileUrl}
                  download
                  aria-label={`Download ${item.title} PDF`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition hover:border-red-600 hover:text-red-600 hover:bg-red-50"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </a>
              )}

              <div className="flex flex-col items-end gap-2">
                <span className="bg-red-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  {item.type}
                </span>
                <span className="border border-neutral-300 px-2.5 py-1 text-right text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
                  {item.theme}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}