import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to the Zeoli Realty team — offices in Royal Oak, Rochester, and Bloomfield Hills, serving all of Southeast Michigan.",
};

export default function ContactPage() {
  return (
    <section className="bg-bone">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 md:grid-cols-[1fr_1.1fr] md:py-24">
        <div>
          <p className="eyebrow eyebrow-rule">Contact</p>
          <h1 className="display mt-4 text-4xl md:text-6xl">
            Let's <em>talk.</em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate">
            Buying, selling, investing, or just weighing options — reach out
            and a member of the team will get back to you the same business
            day.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="eyebrow text-[0.65rem]">Call or text</dt>
              <dd className="mt-1.5">
                <a
                  href={site.phoneHref}
                  className="display text-2xl hover:underline"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.65rem]">Office</dt>
              <dd className="mt-1.5">
                <a
                  href={site.officePhoneHref}
                  className="font-medium text-graphite hover:text-ink"
                >
                  {site.officePhone}
                </a>
                <p className="mt-1 text-sm text-slate">{site.headquarters}</p>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.65rem]">Email</dt>
              <dd className="mt-1.5">
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-graphite hover:text-ink"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.65rem]">Offices</dt>
              <dd className="mt-1.5 text-graphite">
                {site.offices.join(" · ")}
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.65rem]">Follow</dt>
              <dd className="mt-1.5 flex gap-5 text-sm font-medium">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-graphite hover:text-ink"
                >
                  Instagram
                </a>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-graphite hover:text-ink"
                >
                  Facebook
                </a>
                <a
                  href={site.social.zillow}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-graphite hover:text-ink"
                >
                  Zillow
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="h-fit rounded-[10px] border border-linen bg-paper p-7 md:p-9">
          <h2 className="display text-2xl">
            Send us a <em>message.</em>
          </h2>
          <p className="mb-7 mt-2 text-sm text-slate">
            Tell us a little about what you're planning.
          </p>
          <LeadForm variant="contact" />
        </div>
      </div>
    </section>
  );
}
