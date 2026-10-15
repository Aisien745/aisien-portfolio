"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/subjects", label: "Subjects" },
  { href: "/library", label: "Library" },
  { href: "/cases", label: "Business Cases" },
];

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center bg-bain text-xs font-extrabold text-white">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-bold tracking-tight sm:block">
            {profile.name}
          </span>
        </Link>
        <nav className="flex items-center gap-5 overflow-x-auto text-sm font-semibold md:gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative whitespace-nowrap py-1 transition ${
                isActive(l.href)
                  ? "text-bain"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              {l.label}
              {isActive(l.href) && (
                <span className="absolute -bottom-[17px] left-0 right-0 h-[3px] bg-bain" />
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
