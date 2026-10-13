"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";
import { profile, projects, certificates, experience } from "@/lib/data";

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

      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1.15fr_0.85fr] md:items-center">
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
            digital solutions — web and mobile apps, data-driven systems and
            brand visuals that solve real-world problems.
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

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-sm items-center justify-center py-6"
        >
          <div className="absolute right-2 top-0 h-[300px] w-[220px] rounded-[8rem] bg-gold sm:h-[340px] sm:w-[250px]" />
          <div className="absolute -left-6 top-8 h-56 w-56 rounded-full border-2 border-ink/80" />

          <div className="relative aspect-square w-56 overflow-hidden rounded-full border-[6px] border-cream shadow-2xl sm:w-64">
            <Image
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="256px"
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute bottom-0 left-1/2 w-56 -translate-x-1/2 translate-y-6 rounded-2xl border border-line bg-white p-4 shadow-xl sm:w-64">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              {profile.headline}
            </p>
            <p className="font-display text-base font-extrabold text-ink">{profile.location}</p>
          </div>

          <span className="absolute -left-2 top-2 animate-drift rounded-full border border-line bg-white px-3 py-1.5 font-display text-xs font-bold text-ink shadow-lg">
            DEV
          </span>
          <span
            className="absolute right-0 top-1/2 animate-drift rounded-full border border-line bg-white px-3 py-1.5 font-display text-xs font-bold text-ink shadow-lg"
            style={{ animationDelay: "1.4s" }}
          >
            DATA
          </span>
          <span
            className="absolute -left-8 bottom-16 animate-drift rounded-full border border-line bg-white px-3 py-1.5 font-display text-xs font-bold text-ink shadow-lg"
            style={{ animationDelay: "2.6s" }}
          >
            DESIGN
          </span>
        </motion.div>
      </div>
    </section>
  );
}
