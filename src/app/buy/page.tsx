import type { Metadata } from "next";
import Image from "next/image";
import {
  AccentHeadline,
  CtaBand,
  PageHero,
  StepList,
} from "@/components/ui";
import { buyerAdvantages, buyHero, buyProcess } from "@/content/buy";

export const metadata: Metadata = {
  title: "Buy a Home",
  description:
    "Buyer representation across Southeast Michigan — early access to coming-soon homes, comp-driven offers, and negotiating experience from 800+ closings.",
};

export default function BuyPage() {
  return (
    <>
      <PageHero
        eyebrow={buyHero.eyebrow}
        headline={buyHero.headline}
        intro={buyHero.intro}
      />

      {/* Process */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="eyebrow">How it works</p>
        <h2 className="display mt-4 text-3xl md:text-5xl">
          From first call to <em>keys.</em>
        </h2>
        <div className="mt-12">
          <StepList steps={buyProcess} />
        </div>
      </section>

      {/* Advantages + image */}
      <section className="bg-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.1fr]">
            <div className="arch relative aspect-[4/5] w-full max-w-md">
              <Image
                src="/images/interior-foyer.jpg"
                alt="A dramatic two-story foyer in a Zeoli Realty listing"
                fill
                sizes="(min-width: 768px) 28rem, 90vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="eyebrow">{buyerAdvantages.eyebrow}</p>
              <AccentHeadline
                text={buyerAdvantages.headline}
                className="mt-4 text-3xl md:text-5xl"
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {buyerAdvantages.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[10px] bg-paper p-6"
                  >
                    <h3 className="font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        headline={{ before: "Ready to start ", accent: "looking", after: "?" }}
        body="Tell us what you're looking for and a member of the team will reach out the same day — with homes you won't find on the portals yet."
        ctaLabel="Talk to the team"
        ctaHref="/contact"
      />
    </>
  );
}
