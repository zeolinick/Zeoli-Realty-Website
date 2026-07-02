"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Progressive-enhancement motion:
 *  - sections fade up as they enter the viewport
 *  - grids stagger their children
 *  - stat numerals count up
 *  - [data-parallax] arch images drift subtly with scroll
 * Without JS (or with prefers-reduced-motion) everything renders static.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const vh = () => window.innerHeight;

    // --- section reveals ---
    const sections = [...document.querySelectorAll("main section")];
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
    for (const el of sections) {
      if (el.getBoundingClientRect().top < vh() * 0.9) continue;
      el.classList.add("will-reveal");
      io.observe(el);
    }

    // --- staggered grids (auto-detected) ---
    const staggered: Element[] = [];
    const gridCandidates = [
      ...document.querySelectorAll("main section [class*='grid'], main section ol"),
    ];
    for (const el of gridCandidates) {
      if (el.children.length < 3 || el.children.length > 24) continue;
      if (staggered.some((s) => s.contains(el) || el.contains(s))) continue;
      if (el.getBoundingClientRect().top < vh() * 0.9) continue;
      staggered.push(el);
    }
    const io2 = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io2.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    for (const el of staggered) {
      el.classList.add("will-stagger");
      [...el.children].forEach((child, i) => {
        (child as HTMLElement).style.transitionDelay = `${Math.min(i * 85, 600)}ms`;
      });
      io2.observe(el);
    }

    // --- count-up numerals ---
    const counters = [...document.querySelectorAll<HTMLElement>("[data-countup]")];
    const io3 = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          io3.unobserve(entry.target);
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
    for (const el of counters) io3.observe(el);

    // --- parallax drift inside arch crops ---
    const parallaxEls = [
      ...document.querySelectorAll<HTMLElement>("[data-parallax]"),
    ];
    let raf = 0;
    const applyParallax = () => {
      raf = 0;
      for (const el of parallaxEls) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh()) continue;
        // -1 (above viewport) … 1 (below); drift up to ±4.5% of height
        const progress =
          (rect.top + rect.height / 2 - vh() / 2) / (vh() / 2 + rect.height / 2);
        el.style.setProperty("--py", `${(-progress * 4.5).toFixed(2)}%`);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(applyParallax);
    };
    if (parallaxEls.length) {
      applyParallax();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
    }

    return () => {
      io.disconnect();
      io2.disconnect();
      io3.disconnect();
      if (parallaxEls.length) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        if (raf) cancelAnimationFrame(raf);
      }
      for (const el of sections) el.classList.remove("will-reveal", "revealed");
      for (const el of staggered) {
        el.classList.remove("will-stagger", "revealed");
        [...el.children].forEach((child) => {
          (child as HTMLElement).style.transitionDelay = "";
        });
      }
    };
  }, [pathname]);

  return null;
}
