import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { cases } from "@/data/content";
import Link from "next/link";

export const metadata = { title: "Business Cases | Aisien Solovev" };

export default function CasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Business Cases"
        title="Deconstructing strategy and data."
        intro="My analytical breakdowns of cases"
      />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.1}>
              <div className="flex flex-col h-full bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
                
                {/* Верхняя часть: Тип кейса */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs font-bold text-red-600 uppercase tracking-wider">{c.type}</div>
                </div>
                
                {/* Название и описание */}
                <h3 className="text-xl font-bold text-neutral-900 mb-3 tracking-tight">{c.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">{c.summary}</p>
                
                {/* Теги (Market Sizing, Unit Economics и т.д.) */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {c.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-neutral-100 text-neutral-600 text-[10px] font-bold uppercase tracking-wider rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Кнопки действий (Читать и Скачать) */}
                <div className="flex items-center gap-3 pt-6 border-t border-neutral-100">
                  {/* Ссылка на будущую внутреннюю страницу кейса */}
                  <Link href={`/cases/${c.slug}`} className="flex-1 text-center px-4 py-2 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 transition">
                    Read Case
                  </Link>
                  
                  {/* Кнопка скачивания появляется только если есть fileUrl */}
                  {c.fileUrl && (
                    <a 
                      href={c.fileUrl} 
                      download 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 bg-white text-neutral-900 border border-neutral-200 text-sm font-semibold rounded-xl hover:bg-neutral-50 transition"
                      title={`Download ${c.title} PDF`}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      PDF
                    </a>
                  )}
                </div>
                
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}