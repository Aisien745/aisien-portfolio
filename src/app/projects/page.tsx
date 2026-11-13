import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
// Aliasing 'subjects' to 'projects' so you don't have to break your data file immediately
import { programs, projects as projects } from "@/data/content";
import { getChapters, slugify } from "@/lib/projects";

const groups = Array.from(new Set(projects.map((p) => p.group)));

export const metadata = { title: "Projects | Aisien Solovev" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="What I studied, and what stayed with me."
        intro="Every course in the degree, grouped by stage. Open a project to read my notes chapter by chapter."
      />
      <div className="mx-auto max-w-6xl px-6 py-20">
        {groups.map((g, gi) => {
          const program = programs[g];
          return (
            <section key={g} className="mb-20 last:mb-0">
              <Reveal>
                <div className="mb-8 flex items-end gap-4 border-b border-neutral-200 pb-4">
                  <span className="text-6xl font-extrabold leading-none tracking-tighter text-bain">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <span className="pb-1 text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">
                    {g}
                  </span>
                </div>
                {program && (
                  <div className="mb-8 border-l-4 border-bain bg-bain-tint p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-lg font-extrabold tracking-tight">{program.title}</h2>
                      <span className="bg-bain px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                        {program.code}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                        {program.ects} ECTS
                      </span>
                    </div>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-700">{program.text}</p>
                  </div>
                )}
              </Reveal>
              <div className="grid gap-6 md:grid-cols-2">
                {projects.filter((p) => p.group === g).map((p, i) => {
                  const slug = slugify(p.name);
                  const count = getChapters(slug).length;
                  return (
                    <Reveal key={p.name} delay={i * 0.08}>
                      <Link 
                        href={`/projects/${slug}`} 
                        className="group flex h-full flex-col border border-neutral-200 p-7 transition hover:border-bain hover:shadow-lg"
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="bg-bain-tint px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-bain">
                            {p.area}
                          </span>
                          {p.code && (
                            <span className="border border-neutral-300 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                              {p.code}
                            </span>
                          )}
                          {p.ects && (
                            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                              {p.ects} ECTS
                            </span>
                          )}
                        </div>
                        <h3 className="mt-4 text-xl font-extrabold tracking-tight">{p.name}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.blurb}</p>
                        {p.takeaway && (
                          <p className="mt-5 border-l-4 border-bain pl-4 text-sm font-semibold italic text-neutral-800">
                            {p.takeaway}
                          </p>
                        )}
                        <span className="mt-auto pt-6 text-sm font-bold text-bain">
                          {count > 0 ? `${count} chapters →` : "Notes coming soon"}
                        </span>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}