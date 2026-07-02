"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Progressive-enhancement motion: sections fade up as they enter the
 * viewport, and stat numerals count up. Without JS (or with
 * prefers-reduced-motion) everything renders fully visible.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = [
      ...document.querySelectorAll("main section, [data-reveal]"),
    ];
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
    );
    for (const el of targets) {
      const rect = el.getBoundingClientRect();
      // Don't hide anything already on screen at load/navigation.
      if (rect.top < window.innerHeight * 0.9) continue;
      el.classList.add("will-reveal");
      io.observe(el);
    }

    const counters = [...document.querySelectorAll<HTMLElement>("[data-countup]")];
    const io2 = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io2.unobserve(entry.target);
          const el = entry.target as HTMLElement;
          const raw = el.textContent ?? "";
          const match = raw.match(/^([^0-9]*)([0-9.,]+)(.*)$/);
          if (!match) continue;
          const [, pre, numStr, post] = match;
          const target = parseFloat(numStr.replace(/,/g, ""));
          const decimals = numStr.includes(".")
            ? numStr.split(".")[1].length
            : 0;
          const start = performance.now();
          const duration = 1200;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = pre + (target * eased).toFixed(decimals) + post;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    for (const el of counters) io2.observe(el);

    return () => {
      io.disconnect();
      io2.disconnect();
      for (const el of targets) el.classList.remove("will-reveal", "revealed");
    };
  }, [pathname]);

  return null;
}
