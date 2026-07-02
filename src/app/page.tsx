import Image from "next/image";
import Link from "next/link";
import {
  ArchImage,
  CtaBand,
  StatBar,
  TestimonialCard,
} from "@/components/ui";
import { communities } from "@/content/communities";
import { site } from "@/content/site";
import { featuredTestimonials } from "@/content/testimonials";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bone">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <p className="eyebrow">
              {site.region} · Est. 2021
            </p>
            <h1 className="display mt-5 text-5xl md:text-[4.25rem]">
              Partners in building <em>futures.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
              Zeoli Realty is a premier team of real estate professionals
              serving Southeast Michigan — 800+ closings, $200M+ sold, and a
              process built around your goals.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/sell" className="btn btn-primary">
                Sell with us
              </Link>
              <Link href="/buy" className="btn btn-secondary">
                Find your home
              </Link>
            </div>
          </div>
          <ArchImage
            src="/images/hero-estate.jpg"
            alt="A Zeoli Realty listing at twilight — modern stone home in Southeast Michigan"
            className="aspect-[4/5] w-full max-w-md justify-self-center md:justify-self-end"
            sizes="(min-width: 768px) 28rem, 90vw"
            priority
          />
        </div>
      </section>

      <StatBar />

      {/* Sell / Buy split */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-14 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col items-start">
            <p className="eyebrow">Selling</p>
            <h2 className="display mt-4 text-3xl md:text-4xl">
              We don't just list your home. We <em>launch</em> it.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate">
              Most homes drift onto the market and wait. Ours arrive with a
              plan — a one-week launch built to concentrate attention and turn
              interest into competing offers.
            </p>
            <Link href="/sell" className="btn btn-primary mt-7">
              How we sell for more
            </Link>
          </div>
          <div className="flex flex-col items-start">
            <p className="eyebrow">Buying</p>
            <h2 className="display mt-4 text-3xl md:text-4xl">
              A full team on <em>your</em> side of the table.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-slate">
              Early access to coming-soon homes, offers built on real
              comparable data, and negotiating experience from 800+ closings —
              working for you.
            </p>
            <Link href="/buy" className="btn btn-secondary mt-7">
              Start your search
            </Link>
          </div>
        </div>
      </section>

      {/* Team strip */}
      <section className="bg-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="eyebrow">The team advantage</p>
              <h2 className="display mt-4 text-3xl md:text-5xl">
                You're not hiring an agent. You're hiring a <em>team.</em>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-slate">
                A full in-house team behind every move — your agent, a
                transaction coordinator, a dedicated listing manager, and a
                professional photo &amp; marketing crew.
              </p>
              <Link href="/team" className="btn btn-primary mt-7">
                Meet the team
              </Link>
            </div>
            <div className="arch relative aspect-[16/9] w-full md:aspect-[2/1]">
              <Image
                src="/images/team.jpg"
                alt="The Zeoli Realty team"
                fill
                sizes="(min-width: 768px) 40rem, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Communities</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">
              Rooted in <em>Southeast Michigan.</em>
            </h2>
          </div>
          <Link href="/communities" className="btn btn-secondary">
            All communities
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {communities.slice(0, 6).map((c) => (
            <Link
              key={c.slug}
              href={`/communities/${c.slug}`}
              className="group rounded-[10px] border border-linen p-6 transition-colors hover:bg-bone md:p-8"
            >
              <p className="eyebrow text-[0.65rem]">{c.county} County</p>
              <p className="display mt-3 text-2xl group-hover:underline md:text-3xl">
                {c.name}
              </p>
              <p className="mt-3 hidden text-sm leading-relaxed text-slate md:block">
                {c.positioning}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
          <p className="eyebrow">
            200+ five-star reviews · {site.reviewSources.join(" · ")}
          </p>
          <h2 className="display mt-4 text-3xl md:text-5xl">
            Confident, not loud. Our clients do the <em>talking.</em>
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.quote} {...t} />
            ))}
          </div>
          <Link
            href="/reviews"
            className="mt-8 inline-block font-semibold text-ink underline-offset-4 hover:underline"
          >
            Read more reviews →
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
