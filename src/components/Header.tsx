"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-linen bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.9375rem] font-medium transition-colors ${
                  active ? "text-ink" : "text-graphite hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/home-valuation" className="btn btn-primary px-5 py-3">
            Home Valuation
          </Link>
        </nav>

        <div className="flex items-center gap-4 lg:hidden">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-ink"
            aria-label={`Call ${site.phone}`}
          >
            {site.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-linen"
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
              {open ? (
                <path
                  d="M2 1l14 12M16 1L2 13"
                  stroke="#141414"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M1 1h16M1 7h16M1 13h16"
                  stroke="#141414"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-linen bg-paper px-5 pb-6 pt-3 lg:hidden"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-bone py-3.5 text-base font-medium text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/home-valuation"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-5 w-full"
          >
            Home Valuation
          </Link>
        </nav>
      )}
    </header>
  );
}
