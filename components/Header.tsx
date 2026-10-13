"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/lib/data";
import Logo from "./Logo";

const links = [
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#certifications", label: "Certifications", id: "certifications" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <Logo size={18} />
          <span className="font-display text-lg font-extrabold tracking-tight text-ink">
            Dyllan Mutsereketa
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative font-display text-sm font-semibold transition ${
                active === link.id ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
              {active === link.id && (
                <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-gold" />
              )}
            </a>
          ))}
        </nav>

        <a
          href={profile.cv}
          download
          className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 font-display text-xs font-bold text-cream transition hover:bg-goldDeep hover:text-ink lg:inline-flex"
        >
          <Download size={14} /> CV
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="text-ink md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line bg-cream px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-base font-semibold text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.cv}
              download
              className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-4 py-2 font-display text-sm font-bold text-cream"
            >
              <Download size={14} /> Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
