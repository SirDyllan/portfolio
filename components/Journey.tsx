"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export default function Journey() {
  return (
    <section className="section-pad bg-ink">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow eyebrow-dark">Education & Activity</p>
        <h2 className="mt-3 font-display text-5xl font-black text-cream">
          My Journey<span className="text-gold">.</span>
        </h2>

        <div className="mt-12 max-w-2xl">
          {timeline.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="node-dot flex gap-5 pb-9 last:pb-0"
            >
              <span className="mt-1.5 h-3 w-3 flex-none rounded-full bg-gold" />
              <p className="text-base leading-relaxed text-cream/85">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
