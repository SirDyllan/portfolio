"use client";

import { motion } from "framer-motion";
import { academicResults } from "@/lib/data";

const gradeTone = (grade: string) =>
  grade === "A"
    ? "bg-gold text-ink"
    : grade === "A-"
      ? "bg-gold/25 text-goldDeep"
      : "bg-ink/5 text-muted";

export default function Results() {
  return (
    <section id="results" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">{academicResults.school}</p>
        <h2 className="mt-3 font-display text-4xl font-black text-ink sm:text-5xl">
          Academic Results<span className="text-gold">.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          {academicResults.summary}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {academicResults.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-line bg-white p-5 shadow-sm"
            >
              <p className="font-display text-3xl font-black text-ink sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest text-goldDeep">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {academicResults.semesters.map((sem, i) => (
            <motion.article
              key={sem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl border-t-4 border-gold bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold text-ink">{sem.title}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-muted">{sem.period}</p>
              <ul className="mt-5 divide-y divide-line">
                {sem.modules.map((m) => (
                  <li key={m.code} className="flex items-center gap-3 py-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold leading-snug text-ink">{m.name}</p>
                      <p className="text-xs text-muted">{m.code}</p>
                    </div>
                    <span className="font-display text-lg font-bold tabular-nums text-ink">{m.mark}</span>
                    <span className={`w-9 rounded-full py-0.5 text-center text-xs font-bold ${gradeTone(m.grade)}`}>
                      {m.grade}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
