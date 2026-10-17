import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { library } from "@/data/content";

export const metadata = { title: "Library | Aisien Solovev" };

export default function LibraryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Library"
        title="The reading behind the thinking."
        intro="Books, papers and reports that shaped how I approach economics and management, each with a one-line note. Click to download where available."
      />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          {library.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <li className="grid gap-4 py-8 md:grid-cols-[80px_1fr_180px] md:items-baseline">
                <span className="text-3xl font-extrabold tracking-tighter text-bain">
                  {String(i + 1).padStart(2, "0")}
                </span>
                
                {/* Средняя колонка: Заголовок, автор, описание и опциональная кнопка скачивания */}
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-extrabold tracking-tight">{r.title}</h3>
                    {r.fileUrl && (
                      <a 
                        href={r.fileUrl} 
                        download 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 transition-colors"
                        title={`Download ${r.title}`}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="mt-1 text-sm font-semibold text-neutral-500">{r.author}</p>
                  <p className="mt-3 max-w-xl leading-relaxed text-neutral-700">{r.note}</p>
                </div>

                {/* Правая колонка: Теги */}
                <div className="flex gap-2 md:flex-col md:items-end mt-4 md:mt-0">
                  <span className="bg-bain px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-white">{r.type}</span>
                  <span className="border border-neutral-300 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-600">{r.theme}</span>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </>
  );
}