import Link from "next/link";
import { notFound } from "next/navigation";
import { getMarkdownContent } from "@/lib/markdown";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { library } from "@/data/content";

export default async function LibraryDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;

  // Find the base info in content.ts
  const libraryData = library.find(l => l.slug === slug);
  
  if (!libraryData) {
    notFound();
  }

  // Find the Markdown file in the /content/library/ folder
  const markdownData = getMarkdownContent('library', slug);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Button */}
        <Link href="/library" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-red-600 transition mb-12">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Library
        </Link>

        {/* Header from content.ts */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
              {libraryData.type}
            </span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              • {libraryData.theme}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            {libraryData.title}
          </h1>
          
          <p className="text-lg text-slate-600 font-medium mb-6">
            {libraryData.author}
          </p>
          
          <p className="text-xl text-slate-500 leading-relaxed mb-8">
            {libraryData.note}
          </p>

          {/* PDF Download Button */}
          {libraryData.fileUrl && (
            <a
              href={libraryData.fileUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download Original PDF
            </a>
          )}
        </div>

        {/* Divider */}
        <hr className="border-slate-200 mb-12" />

        {/* Render Markdown if it exists */}
        {markdownData ? (
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-red-600 hover:prose-a:text-red-700">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownData.content}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center">
            <p className="text-slate-500 font-medium">
              Detailed notes for this reading are currently being written. Check back later!
            </p>
          </div>
        )}

      </div>
    </div>
  );
}