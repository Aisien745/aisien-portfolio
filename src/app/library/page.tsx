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
        intro="Books, papers and reports that shaped how I approach economics and management, each with a one-line note."
      />
      <div className="mx-auto max-w-6xl px-6 py-20">
        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          {library.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05}>
              <li className="grid gap-4 py-8 md:grid-cols-[80px_1fr_180px] md:items-baseline">
                <span className="text-3xl font-extrabold tracking-tighter text-bain">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight">{r.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-neutral-500">{r.author}</p>
                  <p className="mt-3 max-w-xl leading-relaxed text-neutral-700">{r.note}</p>
                </div>
                <div className="flex gap-2 md:flex-col md:items-end">
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
