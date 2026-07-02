import type { Metadata } from "next";
import Image from "next/image";
import { AccentHeadline, CtaBand, PageHero } from "@/components/ui";
import { workIntro, workStudies } from "@/content/work";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Recent Zeoli Realty productions — twilight photography, cinematic video, staging, and one-week launches, from landmark estates to everyday family homes.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow={workIntro.eyebrow}
        headline={workIntro.headline}
        intro={workIntro.intro}
      />

      {workStudies.map((study, i) => (
        <section
          key={study.number}
          className={i % 2 === 1 ? "bg-bone" : "bg-paper"}
        >
          <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
            <div className="grid items-end gap-10 md:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="display text-6xl italic text-linen" aria-hidden="true">
                  {study.number}
                </p>
                <p className="eyebrow eyebrow-rule mt-4">{study.eyebrow}</p>
                <AccentHeadline
                  text={study.title}
                  className="mt-4 text-3xl md:text-4xl"
                />
                <p className="mt-5 max-w-md leading-relaxed text-slate">
                  {study.blurb}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {study.services.map((s) => (
                    <li
                      key={s}
                      className={`rounded-[10px] border border-linen px-3.5 py-2 text-xs font-semibold text-graphite ${
                        i % 2 === 1 ? "bg-paper" : "bg-bone"
                      }`}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="arch relative aspect-[4/3] w-full" data-parallax>
                <Image
                  src={study.lead.src}
                  alt={study.lead.alt}
                  fill
                  sizes="(min-width: 768px) 40rem, 90vw"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {study.gallery.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/5] overflow-hidden rounded-[10px]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 14rem, 45vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        headline={{ before: "Your home could be ", accent: "next", after: "." }}
        body="Every listing gets this production — the photography, the film, the launch. Start with what your home is worth."
      />
    </>
  );
}
