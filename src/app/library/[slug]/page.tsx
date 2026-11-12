import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { library } from "@/data/content";
// Reuse whatever Markdown renderer you already use in src/app/cases/[slug]/page.tsx
// (e.g., `marked` or `react-markdown`)

export async function generateStaticParams() {
  return library.map((item) => ({ slug: item.slug }));
}

export default async function LibraryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = library.find((entry) => entry.slug === slug);

  if (!item) notFound();

  const filePath = path.join(process.cwd(), "content", "library", `${slug}.md`);
  const markdown = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf8")
    : item.note;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/library"
        className="text-xs font-semibold uppercase tracking-wider text-neutral-500 hover:text-red-600"
      >
        ← Back to Library
      </Link>

      <header className="mt-6 border-b border-neutral-200 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-red-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
            {item.type}
          </span>
          <span className="border border-neutral-300 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
            {item.theme}
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900">
          {item.title}
        </h1>
        <p className="mt-2 text-xs font-medium uppercase tracking-wider text-neutral-500">
          {item.author}
        </p>

        {item.fileUrl && (
          <div className="mt-6">
            <a
              href={item.fileUrl}
              download
              className="inline-flex items-center gap-2 border border-neutral-900 bg-neutral-900 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition hover:border-red-600 hover:bg-red-600"
            >
              Download Original PDF ↓
            </a>
          </div>
        )}
      </header>

      {/* Replace with the same Markdown component/HTML renderer used in cases/[slug]/page.tsx */}
      <article className="prose prose-neutral mt-10 max-w-none">
        {markdown}
      </article>
    </main>
  );
}