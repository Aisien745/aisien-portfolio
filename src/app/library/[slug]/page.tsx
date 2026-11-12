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

  if (!item) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: `${item.title} | Library`,
  };
}

export default async function LibraryItemPage({ params }: PageProps) {
  const { slug } = await params;
  const item = library.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      {/* Кнопка возврата */}
      <div className="mb-8">
        <Link
          href="/library"
          className="text-xs font-semibold uppercase tracking-wider text-neutral-500 transition hover:text-red-600"
        >
          ← Back to Library
        </Link>
      </div>

      <header className="mb-10 border-b border-neutral-200 pb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="bg-red-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
            {item.type}
          </span>
          <span className="border border-neutral-300 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
            {item.theme}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight mb-3">
          {item.title}
        </h1>
        
        <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
          {item.author}
        </p>
      </header>

      {/* Основной контент заметки / статьи */}
      <div className="prose prose-neutral max-w-none space-y-6 text-neutral-800 leading-relaxed">
        <p className="text-lg font-medium text-neutral-700">{item.note}</p>
        
        {/* Здесь можно вывести полный текст, если он у тебя есть в объекте item, 
            либо если статьи хранятся в отдельных markdown-файлах */}
      </div>

      {item.fileUrl && (
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <a
            href={item.fileUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 text-sm font-semibold text-neutral-700 transition hover:border-red-600 hover:text-red-600 hover:bg-red-50"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Original PDF
          </a>
        </div>
      )}
    </main>
  );
}