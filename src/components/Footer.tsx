import Link from "next/link";
import { ArchMark, Logo } from "@/components/Logo";
import { nav, site } from "@/content/site";
import { communities } from "@/content/communities";

function EqualHousingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 3L2.5 10h19L12 3Z" />
      <path d="M4.5 10v10h15V10" />
      <path d="M8.5 13.5h7M8.5 16.5h7" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <ArchMark
        className="pointer-events-none absolute -right-16 top-10 h-[26rem] w-[26rem] opacity-[0.04]"
        color="#ffffff"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-16">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-12 md:flex-row md:items-end md:justify-between">
          <p className="display on-dark max-w-2xl text-3xl text-paper md:text-5xl">
            Your goals are our <em>mission.</em>
          </p>
          <Link href="/contact" className="btn btn-on-dark shrink-0">
            Start the conversation
          </Link>
        </div>
        <div className="grid gap-12 pt-12 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div>
            <Logo variant="light" />
            <p className="display mt-5 max-w-xs text-2xl text-paper">
              Partners in building <em>futures.</em>
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-white/70">
              <p>
                <a href={site.phoneHref} className="hover:text-paper">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-paper">
                  {site.email}
                </a>
              </p>
              <p>{site.region}</p>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4 text-white/50">Explore</p>
            <ul className="space-y-2.5 text-sm">
              {[
                ...nav,
                { href: "/work", label: "Our Work" },
                { href: "/careers", label: "Careers" },
                { href: "/home-valuation", label: "Home Valuation" },
              ].map(
                (item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/70 transition-colors hover:text-paper"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-white/50">Communities</p>
            <ul className="space-y-2.5 text-sm">
              {communities.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/communities/${c.slug}`}
                    className="text-white/70 transition-colors hover:text-paper"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/communities"
                  className="font-semibold text-white/90 hover:text-paper"
                >
                  All communities →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl space-y-2 text-xs leading-relaxed text-white/50">
              <p>
                Zeoli Realty · Brokered by {site.brokerage}. Serving{" "}
                {site.counties.join(", ")} counties.
              </p>
              <p>
                Each office is independently owned and operated. Information
                deemed reliable but not guaranteed. Equal Housing Opportunity.
              </p>
              <p>
                © {new Date().getFullYear()} Zeoli Realty. All rights
                reserved.
              </p>
            </div>
            <div className="flex items-center gap-4 text-white/50">
              <EqualHousingIcon />
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em]">
                Realtor®
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
