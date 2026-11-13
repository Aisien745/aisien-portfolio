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
            className="group flex flex-row items-start gap-6 md:gap-8 border-b border-neutral-200 py-8"
          >
            {/* Left: Number */}
            <span className="shrink-0 pt-1 text-2xl font-bold text-red-600">
              {String(idx + 1).padStart(2, "0")}
            </span>

            {/* Main Content Area */}
            <div className="flex flex-1 flex-col w-full">
              {/* Top Metadata: Type & Theme Badges */}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="bg-red-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  {item.type}
                </span>
                <span className="border border-neutral-300 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
                  {item.theme}
                </span>
              </div>

              {/* Clickable Title, Author, and Note */}
              <Link href={`/library/${item.slug}`} className="block w-full">
                <h2 className="mb-1 text-xl md:text-2xl font-bold leading-snug text-neutral-900 transition-colors group-hover:text-red-600">
                  {item.title}
                </h2>
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {item.author}
                </p>
                <p className="text-sm leading-relaxed text-neutral-700 md:pr-12">
                  {item.note}
                </p>
              </Link>

              {/* Bottom Actions: Read Notes & Download */}
              <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 md:pr-12">
                <Link
                  href={`/library/${item.slug}`}
                  className="inline-block text-xs font-bold uppercase tracking-wider text-red-600 transition-colors hover:text-red-700"
                >
                  Read notes →
                </Link>

                {item.fileUrl && (
                  <a
                    href={item.fileUrl}
                    download
                    aria-label={`Download ${item.title} PDF`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition-colors hover:border-red-600 hover:bg-red-50 hover:text-red-600"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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