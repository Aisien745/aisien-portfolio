import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { subjects } from "@/data/content";

const years = [1, 2, 3] as const;

export const metadata = { title: "Subjects | Aisien Solovev" };

export default function SubjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Subjects"
        title="What I studied, and what stayed with me."
        intro="Every course in the degree, grouped by year, with the one idea I carry forward from each."
      />
      <div className="mx-auto max-w-6xl px-6 py-20">
        {years.map((y) => (
          <section key={y} className="mb-20 last:mb-0">
            <Reveal>
              <div className="mb-8 flex items-end gap-4 border-b border-neutral-200 pb-4">
                <span className="text-6xl font-extrabold leading-none tracking-tighter text-bain">0{y}</span>
                <span className="pb-1 text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">Year {y}</span>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {subjects.filter((s) => s.year === y).map((s, i) => (
                <Reveal key={s.name} delay={i * 0.08}>
                  <article className="h-full border border-neutral-200 p-7 transition hover:border-bain">
                    <span className="inline-block bg-bain-tint px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-bain">
                      {s.area}
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold tracking-tight">{s.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.blurb}</p>
                    <p className="mt-5 border-l-4 border-bain pl-4 text-sm font-semibold italic text-neutral-800">
                      {s.takeaway}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
