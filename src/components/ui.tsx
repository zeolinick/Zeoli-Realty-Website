import Image from "next/image";
import Link from "next/link";
import { site, stats } from "@/content/site";

export type Accent = { before: string; accent: string; after: string };

/** Serif display headline with the brand's single italic accent word. */
export function AccentHeadline({
  text,
  as: Tag = "h2",
  className = "",
}: {
  text: Accent;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={`display ${className}`}>
      {text.before}
      <em>{text.accent}</em>
      {text.after}
    </Tag>
  );
}

/** Signature arch-topped image crop. */
export function ArchImage({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`arch relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}

/** Dark band of big serif numerals. */
export function StatBar() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 md:grid-cols-4 md:py-16">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <p className="display text-4xl text-paper md:text-5xl">{s.value}</p>
          <p className="eyebrow mt-3 text-white/50">{s.label}</p>
        </div>
      ))}
      </div>
    </section>
  );
}

/** Numbered step list with oversized ghost numerals. */
export function StepList({
  steps,
}: {
  steps: { number: string; phase: string; title: string; description: string }[];
}) {
  return (
    <ol className="divide-y divide-linen border-y border-linen">
      {steps.map((step) => (
        <li
          key={step.number}
          className="grid gap-4 py-8 md:grid-cols-[110px_220px_1fr] md:gap-8"
        >
          <span
            className="display text-5xl text-linen md:text-6xl"
            aria-hidden="true"
          >
            {step.number}
          </span>
          <div>
            <p className="eyebrow">{step.phase}</p>
            <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
          </div>
          <p className="max-w-xl leading-relaxed text-slate">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function TestimonialCard({
  quote,
  attribution,
  detail,
}: {
  quote: string;
  attribution: string;
  detail: string;
}) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-[10px] bg-bone p-7">
      <blockquote className="display text-xl leading-snug text-ink">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 text-sm">
        <span className="font-semibold text-ink">{attribution}</span>
        <span className="text-slate"> · {detail}</span>
      </figcaption>
    </figure>
  );
}

/** Interior-page header: eyebrow + display headline + intro on bone. */
export function PageHero({
  eyebrow,
  headline,
  intro,
}: {
  eyebrow: string;
  headline: Accent;
  intro?: string;
}) {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <AccentHeadline
          as="h1"
          text={headline}
          className="mt-4 max-w-3xl text-4xl md:text-6xl"
        />
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

/** Dark call-to-action band — the seller lead magnet. */
export function CtaBand({
  headline = { before: "What's your home ", accent: "worth", after: "?" },
  body = "Get a data-backed valuation from the team that's closed 800+ sales across Southeast Michigan — no obligation, no runaround.",
  ctaLabel = "Get your home valuation",
  ctaHref = "/home-valuation",
}: {
  headline?: Accent;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="on-dark bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.5fr_1fr] md:py-20">
        <div>
          <AccentHeadline text={headline} className="text-3xl text-paper md:text-5xl" />
          <p className="mt-5 max-w-xl leading-relaxed text-white/70">{body}</p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <Link href={ctaHref} className="btn btn-on-dark">
            {ctaLabel}
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
  );
}
