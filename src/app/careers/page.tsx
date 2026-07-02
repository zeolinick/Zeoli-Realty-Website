import type { Metadata } from "next";
import Image from "next/image";
import { LeadForm } from "@/components/LeadForm";
import { StatBar } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Careers — Join Zeoli Realty",
  description:
    "Build your real estate career with a team: Zeoli Academy training, leads, coaching, and a full in-house support staff behind every agent. Offices in Royal Oak, Rochester, and Bloomfield Hills.",
};

const pillars = [
  {
    title: "Zeoli Academy",
    description:
      "A structured in-house training program that takes new agents from license to closing table — scripts, shadowing, and real transactions, not theory.",
  },
  {
    title: "Leads & opportunity",
    description:
      "A steady flow of buyer and seller opportunities from day one, so you spend your energy serving clients — not hunting for them.",
  },
  {
    title: "Coaching & mentorship",
    description:
      "Weekly coaching and direct access to top producers who have closed 800+ transactions. Your ceiling is the team's floor.",
  },
  {
    title: "A real support staff",
    description:
      "Transaction coordination, listing management, and an in-house media crew behind every deal — you sell, the machine runs.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-bone">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <p className="eyebrow eyebrow-rule enter enter-1">Careers</p>
            <h1 className="display enter enter-2 mt-4 text-4xl md:text-6xl">
              Build your career with a <em>team.</em>
            </h1>
            <p className="enter enter-3 mt-6 max-w-lg text-lg leading-relaxed text-slate">
              Most agents are handed a login and wished luck. At Zeoli Realty
              you get training, leads, coaching, and a full in-house staff —
              the same team advantage we promise our clients, working for you.
            </p>
          </div>
          <div className="enter enter-2 arch relative aspect-[4/3] w-full max-w-md justify-self-center md:justify-self-end">
            <Image
              src="/images/team-full.jpg"
              alt="The Zeoli Realty team"
              fill
              sizes="(min-width: 768px) 28rem, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <StatBar />

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="eyebrow eyebrow-rule">What you get</p>
        <h2 className="display mt-4 text-3xl md:text-5xl">
          Everything but the <em>excuses.</em>
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="lift rounded-[10px] border border-linen p-7"
            >
              <h3 className="font-semibold text-ink">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate">
                {p.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate">
          Brokered by {site.brokerage} · Offices in {site.offices.join(", ")} ·
          New and experienced agents welcome.
        </p>
      </section>

      <section className="bg-bone">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow eyebrow-rule">Start the conversation</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">
              Tell us where you're <em>headed.</em>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate">
              Whether you're studying for the exam or already producing, we'd
              like to hear your goals. Conversations are confidential.
            </p>
          </div>
          <div className="h-fit rounded-[10px] border border-linen bg-paper p-7 md:p-9">
            <LeadForm variant="careers" />
          </div>
        </div>
      </section>
    </>
  );
}
