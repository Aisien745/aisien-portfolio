import Link from "next/link";
import { notFound } from "next/navigation";
import { getMarkdownContent } from "@/lib/markdown";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cases } from "@/data/content";

export default async function CaseStudyPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;

  // Ищем базовую информацию о кейсе в content.ts (для заголовков)
  const caseData = cases.find(c => c.slug === slug);
  
  if (!caseData) {
    notFound();
  }

  // Пытаемся найти Markdown файл с заметками
  const markdownData = getMarkdownContent('cases', slug);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Кнопка "Назад" */}
        <Link href="/cases" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-red-600 transition mb-12">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Cases
        </Link>

        {/* Заголовок из content.ts */}
        <div className="mb-12">
          <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-3">{caseData.type}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            {caseData.title}
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            {caseData.summary}
          </p>
        </div>

        {/* Разделитель */}
        <hr className="border-slate-200 mb-12" />

        {/* Рендерим Markdown, если он есть */}
        {markdownData ? (
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-red-600 hover:prose-a:text-red-700">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownData.content}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center">
            <p className="text-slate-500 font-medium">
              Detailed notes for this case study are currently being written. Check back later!
            </p>
          </div>
        )}

      </div>
    </div>
  );
}