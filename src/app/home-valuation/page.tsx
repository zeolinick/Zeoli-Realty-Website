import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { stats } from "@/content/site";

export const metadata: Metadata = {
  title: "What's Your Home Worth?",
  description:
    "Request a free, data-backed home valuation from Zeoli Realty — a full market analysis from the team behind 800+ Southeast Michigan closings. No obligation.",
};

const promises = [
  {
    title: "A real market analysis",
    description:
      "Not an instant algorithm guess — a comparable-driven valuation prepared by the team, grounded in what's actually selling on your streets.",
  },
  {
    title: "A launch preview",
    description:
      "How we'd prep, produce, and launch your specific home — including what our one-week launch sequence would look like for you.",
  },
  {
    title: "No obligation, no pressure",
    description:
      "Warm with people, exact with details. If the timing isn't right, you'll still leave knowing exactly where you stand.",
  },
];

export default function HomeValuationPage() {
  return (
    <>
      <section className="bg-bone">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <p className="eyebrow">Free home valuation</p>
            <h1 className="display mt-4 text-4xl md:text-6xl">
              What's your home <em>worth?</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
              Get a data-backed valuation from the team that's closed 800+
              sales across Southeast Michigan — and see what a real launch
              could do for your number.
            </p>

            <div className="mt-10 space-y-7">
              {promises.map((p, i) => (
                <div key={p.title} className="flex gap-5">
                  <span
                    className="display text-3xl text-stone"
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h2 className="font-semibold text-ink">{p.title}</h2>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-slate">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-linen pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="display text-2xl">{s.value}</p>
                  <p className="eyebrow mt-1 text-[0.65rem]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-fit rounded-[10px] border border-linen bg-paper p-7 md:p-9">
            <h2 className="display text-2xl">
              Request your <em>valuation.</em>
            </h2>
            <p className="mb-7 mt-2 text-sm text-slate">
              We'll be in touch within one business day.
            </p>
            <LeadForm variant="valuation" />
          </div>
        </div>
      </section>
    </>
  );
}
