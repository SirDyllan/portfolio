"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-creamAlt">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">What I work with</p>
        <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl text-ink">
          Technical Stack<span className="text-gold">.</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items], i) => (
            <motion.article
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <h3 className="font-display text-base font-bold text-ink">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-creamAlt px-3 py-1.5 text-xs font-semibold text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
