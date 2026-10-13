"use client";

import { motion } from "framer-motion";
import { databaseExperience } from "@/lib/data";

export default function Databases() {
  return (
    <section id="databases" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">Database systems experience</p>
        <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl text-ink">
          Database Systems<span className="text-gold">.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          {databaseExperience.summary}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { n: "01", title: "Practical Experience", body: databaseExperience.practical },
            { n: "02", title: "Skills & Knowledge", body: databaseExperience.skills },
          ].map((card, i) => (
            <motion.article
              key={card.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative overflow-hidden rounded-2xl border-t-4 border-gold bg-white p-8 shadow-sm"
            >
              <span className="pointer-events-none absolute -top-3 left-6 font-display text-8xl font-black text-ink/[0.06]">
                {card.n}
              </span>
              <h3 className="relative font-display text-xl font-bold text-ink">{card.title}</h3>

              {card.n === "01" ? (
                <ul className="relative mt-5 space-y-3">
                  {card.body.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {card.body.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-cream px-3 py-1.5 text-xs font-semibold text-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
