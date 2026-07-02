"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { profile } from "@/lib/data";

export default function CV() {
  return (
    <section id="cv" className="relative overflow-hidden bg-gold">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-ink/70">
            Recruiter ready
          </p>
          <h2 className="mt-3 font-display text-5xl font-black text-ink">
            Download My CV<span className="text-cream">.</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/75">
            Get my CV for internships, attachments, freelance opportunities,
            and junior technology roles.
          </p>
        </motion.div>

        <motion.a
          href={profile.cv}
          download
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 16 }}
          className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-display text-sm font-bold text-cream shadow-xl"
        >
          <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
          <span>Download CV</span>
          <strong className="rounded-full bg-cream/15 px-2 py-0.5 text-xs">DOCX</strong>
        </motion.a>
      </div>
    </section>
  );
}
