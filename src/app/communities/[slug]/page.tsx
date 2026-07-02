import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/ui";
import { communities, getCommunity } from "@/content/communities";

export function generateStaticParams() {
  return communities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const community = getCommunity((await params).slug);
  if (!community) return {};
  return {
    title: `${community.name}, MI Real Estate`,
    description: `${community.positioning} Buy or sell in ${community.name} with Zeoli Realty — Southeast Michigan's team approach to real estate.`,
  };
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const community = getCommunity((await params).slug);
  if (!community) notFound();

  const others = communities.filter((c) => c.slug !== community.slug).slice(0, 5);

  return (
    <>
      <section className="bg-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow">
            <Link href="/communities" className="hover:text-ink">
              Communities
            </Link>{" "}
            · {community.county} County
          </p>
          <h1 className="display mt-4 text-5xl md:text-7xl">
            {community.name}
          </h1>
          <p className="display mt-5 max-w-2xl text-xl text-slate md:text-2xl">
            <em>{community.positioning}</em>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr]">
          <div>
            {community.description.map((para) => (
              <p
                key={para.slice(0, 32)}
                className="mb-6 max-w-2xl text-lg leading-relaxed text-graphite"
              >
                {para}
              </p>
            ))}
            <div className="mt-10 rounded-[10px] bg-bone p-7">
              <p className="eyebrow text-[0.65rem]">Who it's for</p>
              <p className="display mt-3 text-xl leading-snug">
                {community.goodFor}
              </p>
            </div>
          </div>

          <aside>
            <div className="rounded-[10px] border border-linen p-7">
              <p className="eyebrow text-[0.65rem]">
                Why {community.name}
              </p>
              <ul className="mt-4 space-y-3.5">
                {community.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-1 text-stone" aria-hidden="true">
                      —
                    </span>
                    <span className="text-graphite">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 rounded-[10px] border border-linen p-7">
              <p className="eyebrow text-[0.65rem]">Nearby</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {others.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/communities/${c.slug}`}
                      className="font-medium text-graphite hover:text-ink"
                    >
                      {c.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        headline={{
          before: "Selling in ",
          accent: community.name,
          after: "?",
        }}
        body={`Find out what your ${community.name} home is worth — and what our one-week launch could do for your sale.`}
      />
    </>
  );
}
