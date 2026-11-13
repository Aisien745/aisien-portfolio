import { redirect } from "next/navigation";
import { getChapters } from "@/lib/projects";

export default async function ProjectIndex({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapters = getChapters(slug);
  
  // 1. Update the redirect to point to /projects
  if (chapters.length > 0) redirect(`/projects/${slug}/${chapters[0].slug}`);

  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <div className="border-l-4 border-bain bg-bain-tint p-8">
        <h2 className="text-xl font-extrabold">Notes are coming soon.</h2>
        <p className="mt-2 text-neutral-700">
          Add the first chapter as{" "}
          {/* 2. Update the instructional folder path */}
          <code className="bg-white px-1">content/projects/{slug}/01-intro.md</code>
        </p>
      </div>
    </div>
  );
}