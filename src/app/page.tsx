import Link from "next/link";
import Reveal from "@/components/Reveal";
import { profile, journey, stats, subjects, library, cases } from "@/data/content";

const sections = [
  { href: "/subjects", label: "Subjects", count: subjects.length, text: "What I studied, year by year, and the idea I took from each course." },
  { href: "/library", label: "Library", count: library.length, text: "Books, papers and reports that shaped how I think." },
  { href: "/cases", label: "Business Cases", count: cases.length, text: "Real problems where I applied theory with data and code." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-bain text-white">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10" />
        <div className="absolute -bottom-32 right-32 h-72 w-72 rounded-full bg-black/10" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 md:pb-32 md:pt-36">
          <Reveal>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              {profile.degree}
            </p>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
              {profile.tagline}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
              {profile.intro}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/cases" className="bg-white px-8 py-4 text-center text-sm font-bold uppercase tracking-wider text-bain transition hover:bg-neutral-100">
                See business cases
              </Link>
              <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="border border-white px-8 py-4 text-center text-sm font-bold uppercase tracking-wider transition hover:bg-white hover:text-bain">
                Download CV
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="border-neutral-200 px-6 py-10 md:border-r md:last:border-r-0">
              <div className="text-5xl font-extrabold tracking-tighter text-bain">{s.value}</div>
              <div className="mt-2 text-xs font-bold uppercase tracking-wider text-neutral-500">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-1 w-10 bg-bain" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-bain">My journey</span>
          </div>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
            Three years, one thread: decisions backed by evidence.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-neutral-200 md:grid-cols-3">
          {journey.map((j, i) => (
            <Reveal key={j.year} delay={i * 0.12} className="bg-white p-8 md:p-10">
              <div className="text-sm font-bold uppercase tracking-wider text-bain">{j.year}</div>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{j.title}</h3>
              <p className="mt-4 leading-relaxed text-neutral-600">{j.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXPLORE */}
      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="mb-12 text-3xl font-extrabold tracking-tight md:text-4xl">Explore</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {sections.map((s, i) => (
              <Reveal key={s.href} delay={i * 0.1}>
                <Link href={s.href} className="group flex h-full flex-col border-t-4 border-bain bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="text-5xl font-extrabold tracking-tighter text-neutral-200 transition group-hover:text-bain">
                    {String(s.count).padStart(2, "0")}
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold tracking-tight">{s.label}</h3>
                  <p className="mt-3 flex-grow text-sm leading-relaxed text-neutral-600">{s.text}</p>
                  <span className="mt-8 text-sm font-bold text-bain">Open →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
