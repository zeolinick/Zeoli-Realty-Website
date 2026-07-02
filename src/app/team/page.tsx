import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArchMark } from "@/components/Logo";
import { CtaBand, StatBar } from "@/components/ui";
import { site } from "@/content/site";
import { agents, founder, teamRoles } from "@/content/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet Zeoli Realty — roughly thirty Realtors® with in-house transaction coordination, listing management, and a professional media crew, across Royal Oak, Rochester, and Bloomfield Hills.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function TeamPage() {
  return (
    <>
      <section className="bg-bone">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <p className="eyebrow eyebrow-rule">Our team</p>
          <h1 className="display mt-4 max-w-3xl text-4xl md:text-6xl">
            You're not hiring an agent. You're hiring a <em>team.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
            Roughly thirty Realtors® — backed by in-house transaction
            coordination, listing management, and a professional media crew —
            with offices in {site.offices.join(", ")}.
          </p>
        </div>
        <div className="mx-auto max-w-6xl px-5 pb-16 md:pb-24">
          <div className="arch relative aspect-[16/10] w-full md:aspect-[16/8]">
            <Image
              src="/images/team-full.jpg"
              alt="The Zeoli Realty team"
              fill
              sizes="(min-width: 1152px) 72rem, 95vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <StatBar />

      {/* Founder */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="arch relative mb-8 aspect-[5/6] w-48 md:w-56">
              <Image
                src="/images/nick.jpg"
                alt="Nick Zeoli, founder of Zeoli Realty"
                fill
                sizes="14rem"
                className="object-cover object-top"
              />
            </div>
            <p className="eyebrow eyebrow-rule">Founder</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              {founder.name}
            </h2>
            <p className="mt-3 font-semibold text-stone">{founder.role}</p>
            <div className="mt-6 space-y-1.5 text-sm text-slate">
              <p>
                <a href={site.phoneHref} className="hover:text-ink">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-ink">
                  {site.email}
                </a>
              </p>
            </div>
          </div>
          <div>
            {founder.bio.map((para) => (
              <p
                key={para.slice(0, 32)}
                className="mb-6 max-w-2xl text-lg leading-relaxed text-graphite"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Roles behind every move */}
      <section className="bg-bone">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="eyebrow eyebrow-rule">Behind every move</p>
          <h2 className="display mt-4 text-3xl md:text-5xl">
            Four specialists. One <em>standard.</em>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamRoles.map((role) => (
              <div key={role.title} className="rounded-[10px] bg-paper p-7">
                <ArchMark className="h-6 w-6" color="#8c8b7e" />
                <h3 className="mt-4 font-semibold text-ink">{role.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow eyebrow-rule">The Realtors®</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">
              Warm with people. Exact with <em>details.</em>
            </h2>
          </div>
          <Link href="/contact" className="btn btn-secondary">
            Work with the team
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="rounded-[10px] border border-linen p-6 text-center"
            >
              <div className="arch mx-auto flex h-20 w-16 items-end justify-center bg-bone pb-2">
                <span className="display text-xl text-stone">
                  {initials(agent.name)}
                </span>
              </div>
              <p className="mt-4 font-semibold text-ink">{agent.name}</p>
              <p className="mt-1 text-xs text-slate">{agent.role}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate">
          …and the rest of the team across {site.offices.join(", ")}.
        </p>
      </section>

      <CtaBand
        headline={{ before: "Let's build your ", accent: "future", after: "." }}
        body="Whether you're buying, selling, or just weighing options — the conversation costs nothing, and you'll leave knowing where you stand."
        ctaLabel="Talk to the team"
        ctaHref="/contact"
      />
    </>
  );
}
