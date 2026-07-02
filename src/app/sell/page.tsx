import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AccentHeadline,
  PageHero,
  StepList,
} from "@/components/ui";
import {
  beyondTheSale,
  launchWeek,
  marketing,
  nextSteps,
  process,
  sellHero,
  teamAdvantage,
  whileListed,
} from "@/content/sell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Sell Your Home",
  description:
    "We don't just list your home — we launch it. A one-week launch strategy, professional media on every listing, and weekly reporting. 800+ closings, 96.5% list-to-sold.",
};

export default function SellPage() {
  return (
    <>
      <PageHero
        eyebrow={sellHero.eyebrow}
        headline={sellHero.headline}
        intro={sellHero.intro}
      />

      {/* Team advantage */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow eyebrow-rule">{teamAdvantage.eyebrow}</p>
            <AccentHeadline
              text={teamAdvantage.headline}
              className="mt-4 text-3xl md:text-5xl"
            />
            <p className="mt-5 max-w-md leading-relaxed text-slate">
              {teamAdvantage.body}
            </p>
          </div>
          <div className="arch relative aspect-[16/10] w-full">
            <Image
              src="/images/team.jpg"
              alt="The Zeoli Realty team"
              fill
              sizes="(min-width: 768px) 36rem, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
        <p className="eyebrow eyebrow-rule">The process</p>
        <h2 className="display mt-4 text-3xl md:text-5xl">
          From first meeting to <em>beyond</em> closing.
        </h2>
        <div className="mt-12">
          <StepList steps={process} />
        </div>
      </section>

      {/* Launch week */}
      <section className="bg-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="eyebrow eyebrow-rule">{launchWeek.eyebrow}</p>
          <AccentHeadline
            text={launchWeek.headline}
            className="mt-4 text-3xl md:text-5xl"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {launchWeek.days.map((d) => (
              <div
                key={d.day}
                className="lift rounded-[10px] border border-linen bg-paper p-6"
              >
                <p className="eyebrow text-[0.65rem]">{d.day}</p>
                <h3 className="mt-3 font-semibold text-ink">{d.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
          <div className="on-dark mt-6 rounded-[10px] bg-ink px-7 py-6 md:flex md:items-center md:justify-between md:gap-8">
            <p className="eyebrow text-white/50">The result</p>
            <p className="display mt-2 text-xl text-paper md:mt-0 md:flex-1 md:px-8">
              {launchWeek.result}
            </p>
          </div>
        </div>
      </section>

      {/* Everyday homes too */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="arch relative aspect-[16/10] w-full" data-parallax>
            <Image
              src="/images/home-ranch.jpg"
              alt="A Zeoli Realty listing at dusk — every home gets the full launch"
              fill
              sizes="(min-width: 768px) 40rem, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow eyebrow-rule">Every home. Every time.</p>
            <h2 className="display mt-4 text-3xl md:text-4xl">
              The launch isn't just for the <em>estates.</em>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate">
              Twilight photography, cinematic video, the full launch sequence —
              whether it's a landmark property in Bloomfield Hills or a
              three-bed ranch in Berkley. Every listing gets the same
              production, because every seller deserves the same result.
            </p>
          </div>
        </div>
      </section>

      {/* Marketing */}
      <section className="mx-auto max-w-6xl px-5 pb-20 md:pb-28">
        <p className="eyebrow eyebrow-rule">{marketing.eyebrow}</p>
        <AccentHeadline
          text={marketing.headline}
          className="mt-4 text-3xl md:text-5xl"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {marketing.items.map((m) => (
            <div
              key={m.title}
              className="lift overflow-hidden rounded-[10px] border border-linen"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={m.image}
                  alt={m.alt}
                  fill
                  sizes="(min-width: 768px) 18rem, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-ink">{m.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="on-dark mt-6 rounded-[10px] bg-ink px-7 py-6">
          <p className="display text-lg text-paper md:text-xl">
            {marketing.callout}
          </p>
        </div>
      </section>

      {/* While listed */}
      <section className="bg-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="eyebrow eyebrow-rule">{whileListed.eyebrow}</p>
          <AccentHeadline
            text={whileListed.headline}
            className="mt-4 text-3xl md:text-5xl"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {whileListed.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[10px] bg-paper p-7"
              >
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond the sale */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="eyebrow eyebrow-rule">{beyondTheSale.eyebrow}</p>
        <AccentHeadline
          text={beyondTheSale.headline}
          className="mt-4 text-3xl md:text-5xl"
        />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {beyondTheSale.items.map((item) => (
            <div
              key={item.title}
              className="rounded-[10px] border border-linen p-6"
            >
              <h3 className="text-sm font-semibold text-ink md:text-base">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate">
          Serving {site.counties.join(" · ")} counties
        </p>
      </section>

      {/* Next steps */}
      <section className="on-dark bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <p className="eyebrow text-white/50">{nextSteps.eyebrow}</p>
          <AccentHeadline
            text={nextSteps.headline}
            className="mt-4 text-3xl text-paper md:text-5xl"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {nextSteps.steps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-[10px] border border-white/15 p-7"
              >
                <p className="display text-4xl text-white/30">0{i + 1}</p>
                <h3 className="mt-3 font-semibold text-paper">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="/home-valuation" className="btn btn-on-dark">
              Start with your home's value
            </Link>
            <a
              href={site.phoneHref}
              className="text-sm text-white/60 transition-colors hover:text-paper"
            >
              or call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
