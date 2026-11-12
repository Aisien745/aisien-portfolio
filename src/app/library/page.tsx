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
            className="group flex items-start justify-between gap-6 border-b border-neutral-200 py-8"
          >
            {/* Left: Number + Clickable Title & Note */}
            <div className="flex items-start gap-8">
              <span className="text-2xl font-bold text-red-600">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <Link href={`/library/${item.slug}`} className="block space-y-2">
                <h2 className="text-xl font-bold text-neutral-900 transition-colors group-hover:text-red-600">
                  {item.title}
                </h2>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                  {item.author}
                </p>
                <p className="max-w-2xl text-sm text-neutral-700">{item.note}</p>
                <span className="inline-block pt-1 text-xs font-semibold uppercase tracking-wider text-red-600">
                  Read notes →
                </span>
              </Link>
            </div>

            {/* Right: Direct PDF Download + Type/Theme Badges */}
            <div className="flex shrink-0 items-start gap-4">
              {item.fileUrl && (
                <a
                  href={item.fileUrl}
                  download
                  aria-label={`Download ${item.title} PDF`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition hover:border-red-600 hover:text-red-600"
                >
                  ↓
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