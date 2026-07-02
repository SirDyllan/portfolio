"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "@/lib/data";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section id="top" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 animate-blobMove rounded-full bg-gold/20 blur-3xl" />
      <div
        className="pointer-events-none absolute right-0 top-40 -z-10 h-80 w-80 animate-blobMove rounded-full bg-gold/15 blur-3xl"
        style={{ animationDelay: "3s" }}
      />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow">{profile.name}</p>
          <h1 className="mt-3 font-display text-6xl font-black uppercase leading-[0.92] tracking-tight text-ink sm:text-7xl">
            Portfolio<span className="text-gold">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I am {profile.name}, a Zimbabwean Information Technology student
            building practical digital solutions with software, data, and
            engineering thinking.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-line bg-white px-4 py-2 font-medium text-sm text-ink shadow-sm transition hover:border-gold"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phoneHref}`}
              className="rounded-full border border-line bg-white px-4 py-2 font-medium text-sm text-ink shadow-sm transition hover:border-gold"
            >
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line bg-white px-4 py-2 font-medium text-sm text-ink shadow-sm transition hover:border-gold"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.06, rotate: -1 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 320, damping: 14 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-7 py-3.5 font-display text-sm font-bold text-ink shadow-[0_10px_30px_rgba(240,168,58,0.45)]"
            >
              <Logo size={16} />
              View My Projects
              <span
                aria-hidden
                className="absolute -left-6 -top-6 h-14 w-14 rounded-full bg-white/30 blur-md transition-transform duration-500 group-hover:translate-x-20 group-hover:translate-y-14"
              />
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
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3.5 font-display text-sm font-semibold text-ink transition hover:border-ink"
            >
              LinkedIn
            </a>
          </div>
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
              {profile.role}
            </p>
            <p className="font-display text-base font-extrabold text-ink">{profile.location}</p>
          </div>

          <span className="absolute -left-2 top-2 animate-drift rounded-full border border-line bg-white px-3 py-1.5 font-display text-xs font-bold text-ink shadow-lg">
            PHP
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
            UX
          </span>
        </motion.div>
      </div>
    </section>
  );
}
