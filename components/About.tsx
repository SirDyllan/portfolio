"use client";

import { motion } from "framer-motion";
import { quickFacts } from "@/lib/data";

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
          <p className="eyebrow">About me</p>
          <h2 className="mt-3 font-display text-4xl font-black text-ink sm:text-5xl">
            Building software that solves real problems<span className="text-gold">.</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="corner-card border border-line bg-white p-8 shadow-sm sm:p-10"
        >
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m an Information Technology student and software developer
              from Zimbabwe, currently completing a 12 month IT internship at{" "}
              <strong className="text-ink">Prevsol Digital</strong> and its sister
              business <strong className="text-ink">Feltach Contracting</strong>.
            </p>
            <p>
              I build web and mobile applications, design databases and APIs,
              and work across the full delivery cycle, from gathering
              requirements to testing, documentation and deployment.
            </p>
            <p>
              I&apos;m also a <strong className="text-ink">data analyst</strong>,
              cleaning, analysing and visualising data with Python, Power BI
              and Excel to support decisions, and I have a solid grounding in{" "}
              <strong className="text-ink">networking</strong>: configuring,
              troubleshooting and supporting the networks that systems run on.
              My work has been recognised at the CeSHHAR Zimbabwe MASCOT
              Hackathon, the USAII Global Hackathon (finalist) and NESARI 2026.
            </p>
          </div>

          <dl className="mt-8 grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-bold uppercase tracking-widest text-goldDeep">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-display text-base font-bold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
