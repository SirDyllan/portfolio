"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";
import { profile, projects, certificates, experience } from "@/lib/data";
import PortraitReveal from "./PortraitReveal";

const stats = [
  { value: `${projects.length}+`, label: "Projects built" },
  { value: `${certificates.length}`, label: "Hackathons & competitions" },
  { value: `${experience.reduce((n, e) => n + 1 + (e.partners?.length ?? 0), 0)}`, label: "Companies worked with" },
];

export default function Hero() {
  const current = experience.find((e) => e.current);

  return (
    <section id="top" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 animate-blobMove rounded-full bg-gold/20 blur-3xl" />
      <div
        className="pointer-events-none absolute right-0 top-40 -z-10 h-80 w-80 animate-blobMove rounded-full bg-gold/15 blur-3xl"
        style={{ animationDelay: "3s" }}
      />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {current && (
            <a
              href="#experience"
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-4 text-xs font-semibold text-ink shadow-sm transition hover:border-gold"
            >
              <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-line">
                <Image src={current.logo} alt="" width={24} height={24} className="h-full w-full object-contain" />
              </span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Currently {current.role} at {current.company}
            </a>
          )}

          <p className="eyebrow mt-7">Hello, I&apos;m</p>
          <h1 className="mt-2 font-display text-[2.6rem] font-black uppercase leading-[0.92] tracking-tight text-ink min-[400px]:text-5xl sm:text-6xl lg:text-7xl">
            Dyllan
            <br />
            Mutsereketa<span className="text-gold">.</span>
          </h1>
          <p className="mt-4 font-display text-lg font-bold text-goldDeep sm:text-xl">{profile.role}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            A Zimbabwean Information Technology student building practical
            digital solutions: web and mobile apps, databases and APIs,
            data analysis and network aware systems that solve real world
            problems.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 320, damping: 16 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-display text-sm font-bold text-ink shadow-[0_10px_30px_rgba(240,168,58,0.45)]"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.a>

            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3.5 font-display text-sm font-semibold text-ink transition hover:border-ink"
            >
              <Download size={16} /> Download CV
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-full border border-ink/20 bg-white transition hover:border-ink"
            >
              <Image src="/icons/linkedin.png" alt="" width={24} height={24} className="h-6 w-6" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 font-display text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 transition hover:text-goldDeep"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-black text-ink">
                  {s.value}
                </dd>
                <dd className="mt-1 text-xs font-semibold leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <PortraitReveal />
      </div>
    </section>
  );
}
