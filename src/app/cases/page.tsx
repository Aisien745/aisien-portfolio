import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { cases } from "@/data/content";

export const metadata = { title: "Business Cases | Aisien Solovev" };

export default function CasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Business Cases"
        title="Theory, applied."
        intro="Problems I worked on end to end: the question, the approach and the result."
      />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.1}>
              <Link
                href={`/cases/${c.slug}`}
                className="group flex h-full flex-col border-t-4 border-bain bg-white p-8 shadow-sm ring-1 ring-neutral-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-bain">{c.type}</span>
                <h3 className="mt-4 text-xl font-extrabold leading-snug tracking-tight">{c.title}</h3>
                <p className="mt-4 flex-grow text-sm leading-relaxed text-neutral-600">{c.summary}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="bg-neutral-100 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-600">{t}</span>
                  ))}
                </div>
                <span className="mt-8 text-sm font-bold text-bain">Read the case →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
