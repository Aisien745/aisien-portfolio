import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mt-24 bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <div className="mb-4 h-1 w-12 bg-bain" />
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Let&apos;s talk.
          </h2>
          <p className="mt-3 max-w-md text-neutral-400">
            Open to business analysis and public policy internships.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm font-semibold md:items-end">
          <a href={`mailto:${profile.email}`} className="hover:text-bain">
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-bain">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-bain">
            GitHub
          </a>
          <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="hover:text-bain">
            Download CV
          </a>
          <span className="text-neutral-500">{profile.locations}</span>
        </div>
      </div>
    </footer>
  );
}
