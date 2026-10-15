import Link from "next/link";
import { notFound } from "next/navigation";
import ChapterTabs from "@/components/ChapterTabs";
import { subjects } from "@/data/content";
import { getChapters, slugify, subjectBySlug } from "@/lib/subjects";

export const dynamicParams = false;

export function generateStaticParams() {
  return subjects.map((s) => ({ slug: slugify(s.name) }));
}

export default async function SubjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const subject = subjectBySlug(slug);
  if (!subject) notFound();
  const chapters = getChapters(slug);

  const meta = [
    subject.group,
    subject.area,
    subject.code,
    subject.ects ? `${subject.ects} ECTS` : undefined,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <>
      <section className="bg-bain text-white">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-14 md:pb-16 md:pt-20">
          <Link href="/subjects" className="text-sm font-semibold text-white/80 hover:text-white">
            ← All subjects
          </Link>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/80">{meta}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            {subject.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">{subject.blurb}</p>
        </div>
      </section>
      {chapters.length > 0 && (
        <ChapterTabs base={`/subjects/${slug}`} chapters={chapters} />
      )}
      {children}
    </>
  );
}
