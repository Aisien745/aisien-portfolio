"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ChapterTabs({
  base,
  chapters,
}: {
  base: string;
  chapters: { slug: string; title: string }[];
}) {
  const pathname = usePathname();
  return (
    <div className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-6">
        {chapters.map((c, i) => {
          const href = `${base}/${c.slug}`;
          const active = pathname === href;
          return (
            <Link
              key={c.slug}
              href={href}
              className={`whitespace-nowrap border-b-[3px] px-4 py-4 text-sm font-semibold transition ${
                active
                  ? "border-bain text-bain"
                  : "border-transparent text-neutral-600 hover:text-neutral-900"
              }`}
            >
              <span className="mr-2 text-xs text-neutral-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              {c.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
