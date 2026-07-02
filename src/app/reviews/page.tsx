import type { Metadata } from "next";
import { CtaBand, PageHero, TestimonialCard } from "@/components/ui";
import { site } from "@/content/site";
import { featuredTestimonials, reviews } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "200+ five-star reviews across Zillow, Google, and Homes.com. Read what buyers, sellers, and investors say about working with Zeoli Realty.",
};

export default function ReviewsPage() {
  const all = [...featuredTestimonials, ...reviews];
  return (
    <>
      <PageHero
        eyebrow={`Zillow · Google · Homes.com`}
        headline={{ before: "200+ ", accent: "five-star", after: " reviews." }}
        intro="Confident, not loud — we'd rather let the work speak. Here's what clients across Southeast Michigan say about the experience."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {all.map((t) => (
            <TestimonialCard key={t.quote} {...t} />
          ))}
        </div>

        <div className="mt-14 rounded-[10px] border border-linen p-8 text-center">
          <p className="display text-2xl">
            Read them all, <em>unfiltered.</em>
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate">
            Every review, on the platforms that verify them.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={site.social.zillow}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Zillow
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Facebook
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      <CtaBand
        headline={{ before: "Add your own ", accent: "five stars", after: "." }}
        body="Work with a team whose process was built to earn them — from first meeting to beyond closing."
        ctaLabel="Start with your home's value"
      />
    </>
  );
}
