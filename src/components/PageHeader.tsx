import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-20 md:pt-28">
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-1 w-10 bg-bain" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-bain">
              {eyebrow}
            </span>
          </div>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            {intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
