import Link from "next/link";
import { notFound } from "next/navigation";

// Заглушка базы данных твоих проектов.
const projectsData = {
  "scitrack": {
    title: "SciTrack — Academic Literature Monitoring",
    description: "Full-stack SaaS for boolean query optimization.",
    tags: ["Next.js", "OpenAI API", "Tailwind"],
  },
  "glp1": {
    title: "GLP-1 Therapeutics Market Sizing",
    description: "Data extraction and financial modeling pipeline.",
    tags: ["Python", "Pandas", "Data Engineering"],
  },
  "ecommerce": {
    title: "E-commerce Intelligence System",
    description: "ETL automation for dynamic retail pricing.",
    tags: ["Python", "Web Scraping", "REST API"],
  },
};

// 1. Добавили async
// 2. Указали, что params — это Promise
export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // 3. Дождались выполнения Promise, чтобы получить slug
  const { slug } = await params;

  // Ищем проект по URL
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans pt-32 pb-20 px-6 selection:bg-blue-200 selection:text-blue-900">
      <div className="max-w-3xl mx-auto">
        
        {/* Кнопка "Назад" */}
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition mb-12">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Home
        </Link>

        {/* Заголовок проекта */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          {project.title}
        </h1>
        
        <p className="text-xl text-slate-500 mb-8 leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-3 mb-16">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Здесь в будущем будет детальный контент */}
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600">
            Case study content is currently being written. Soon you will see architectural diagrams, code snippets, and business impact metrics here.
          </p>
        </div>

      </div>
    </div>
  );
}