import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "@/data/content";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <article>
      <section className="bg-bain text-white">
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-16 md:pb-20 md:pt-24">
          <Link href="/cases" className="text-sm font-semibold text-white/80 hover:text-white">
            ← All cases
          </Link>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-white/80">{c.type}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">{c.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{c.summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {c.tags.map((t) => (
              <span key={t} className="border border-white/50 px-2 py-1 text-[11px] font-bold uppercase tracking-wider">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-16 px-6 py-20">
        <section>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-bain">01 · Context</h2>
          <p className="text-xl leading-relaxed text-neutral-800">{c.context}</p>
        </section>

        <section>
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-bain">02 · Approach</h2>
          <ol className="space-y-4">
            {c.approach.map((a, i) => (
              <li key={a} className="flex gap-5 border-b border-neutral-200 pb-4">
                <span className="text-2xl font-extrabold tracking-tighter text-bain">{i + 1}</span>
                <span className="pt-1 text-neutral-800">{a}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-l-4 border-bain bg-bain-tint p-8">
          <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-bain">03 · Result</h2>
          <p className="text-xl font-semibold leading-relaxed">{c.result}</p>
        </section>

        {c.link && (
          <a href={c.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-bain px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-bain-dark">
            View project ↗
          </a>
        )}
      </div>
    </article>
  );
}
