import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { library } from "@/data/content";

export const metadata = {
  title: "Library | Aisien Solovev",
};

const coverPalettes = [
  {
    bg: "bg-[#E86F3A]",
    eyebrow: "text-neutral-900/80",
    title: "text-neutral-900",
    badge: "text-white/90",
  },
  {
    bg: "bg-[#0F2952]",
    eyebrow: "text-white/80",
    title: "text-[#FACC15]",
    badge: "text-white/80",
  },
  {
    bg: "bg-[#163A70]",
    eyebrow: "text-emerald-300/90",
    title: "text-[#10B981]",
    badge: "text-white/80",
  },
  {
    bg: "bg-[#0E7490]",
    eyebrow: "text-neutral-900/80",
    title: "text-neutral-900",
    badge: "text-white/90",
  },
  {
    bg: "bg-red-600",
    eyebrow: "text-white/80",
    title: "text-white",
    badge: "text-white/80",
  },
];

export default function LibraryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Library"
        title="Papers, books, and frameworks."
        intro="A curated reading archive of economics, industrial organization, and policy research—broken down into definitions, key ideas, and models."
      />

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {library.map((item, idx) => {
            const palette = coverPalettes[idx % coverPalettes.length];
            const shortDisplayTitle = item.title.split(":")[0];

            return (
              <Reveal key={item.slug} delay={idx * 0.06}>
                <div className="group flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Top Visual Cover */}
                  <Link
                    href={`/library/${item.slug}`}
                    className="relative mb-5 block aspect-[3/4] w-full overflow-hidden rounded-2xl border border-neutral-100"
                  >
                    {item.coverUrl ? (
                      <img
                        src={item.coverUrl}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className={`flex h-full w-full flex-col justify-between p-5 transition duration-500 group-hover:scale-[1.03] ${palette.bg}`}
                      >
                        {/* Top Bar inside Typographic Cover */}
                        <div className="flex items-start justify-between">
                          <span
                            className={`text-[11px] font-bold uppercase tracking-widest ${palette.badge}`}
                          >
                            {String(idx + 1).padStart(2, "0")} · {item.type}
                          </span>
                          {/* Minimal Stack Icon */}
                          <svg
                            className={`h-4 w-4 ${palette.badge}`}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M4 6h16v2.5H4V6zm2 4.75h14v2.5H6v-2.5zm-2 4.75h16V18H4v-2.5z" />
                          </svg>
                        </div>

                        {/* Oversized Cropped Display Typography */}
                        <div className="my-auto overflow-hidden py-2">
                          <p
                            className={`mb-1 text-[11px] font-semibold tracking-tight ${palette.eyebrow}`}
                          >
                            {item.theme}
                          </p>
                          <div
                            className={`break-words text-[28px] font-black leading-[0.95] tracking-tighter ${palette.title}`}
                          >
                            {shortDisplayTitle}
                          </div>
                        </div>

                        {/* Subtle Bottom Spine Mark */}
                        <div
                          className={`text-[10px] font-semibold uppercase tracking-widest ${palette.badge}`}
                        >
                          Aisienomics Archive
                        </div>
                      </div>
                    )}
                  </Link>

                  {/* Title & Italicized Author */}
                  <Link href={`/library/${item.slug}`} className="block">
                    <h2 className="line-clamp-2 text-base font-bold leading-snug text-neutral-900 transition-colors group-hover:text-red-600">
                      {item.title}
                    </h2>
                    <p className="mt-1.5 line-clamp-1 text-xs italic text-neutral-500">
                      {item.author}
                    </p>
                  </Link>

                  {/* Bottom Tag & PDF Action */}
                  <div className="mt-auto flex items-center justify-between pt-5">
                    <Link
                      href={`/library/${item.slug}`}
                      className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 transition-colors group-hover:text-red-600"
                    >
                      {item.type} · Read Notes →
                    </Link>

                    {item.fileUrl && (
                      <a
                        href={item.fileUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Download ${item.title} PDF`}
                        title="Download PDF"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-colors hover:border-red-600 hover:bg-red-50 hover:text-red-600"
                      >
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </>
  );
}