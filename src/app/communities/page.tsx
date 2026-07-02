import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/ui";
import { communities } from "@/content/communities";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Communities We Serve",
  description:
    "Zeoli Realty serves Southeast Michigan — Rochester, Royal Oak, Troy, Birmingham, Bloomfield Hills, Shelby Township, and beyond, across five counties.",
};

export default function CommunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Communities"
        headline={{ before: "Where we're at ", accent: "home", after: "." }}
        intro={`From walkable downtowns to wooded estates — the team lives and works across ${site.counties.join(", ")} counties.`}
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((c) => (
            <Link
              key={c.slug}
              href={`/communities/${c.slug}`}
              className="group flex flex-col rounded-[10px] border border-linen p-7 transition-colors hover:bg-bone"
            >
              <p className="eyebrow text-[0.65rem]">{c.county} County</p>
              <p className="display mt-3 text-3xl group-hover:underline">
                {c.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {c.positioning}
              </p>
              <span className="mt-5 text-sm font-semibold text-ink">
                Explore {c.name} →
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-slate">
          Don't see your city? These are home bases, not boundaries — the team
          closes across all of Southeast Michigan, from Wayne County to the
          Thumb.{" "}
          <Link href="/contact" className="font-semibold text-ink underline-offset-4 hover:underline">
            Ask us about your neighborhood.
          </Link>
        </p>
      </section>

      <CtaBand />
    </>
  );
}
