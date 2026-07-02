"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.6fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">About</p>
          <h2 className="mt-3 font-display text-5xl font-black text-ink">
            Hello<span className="text-gold">.</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="corner-card space-y-5 border border-line bg-white p-8 text-lg leading-relaxed text-muted shadow-sm sm:p-10"
        >
          <p>
            I am passionate about technology, innovation, problem solving,
            software development, databases, data science, analytics, mobile
            app development, and building practical digital solutions that
            solve real-world African problems.
          </p>
          <p>
            My goal is to grow as a serious upcoming IT professional, software
            developer, data enthusiast, and future technology entrepreneur.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
