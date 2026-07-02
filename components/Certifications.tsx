"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certificates } from "@/lib/data";
import CertificateModal from "./CertificateModal";

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<string | null>(null);
  const certificate = certificates.find((c) => c.id === activeCert) ?? null;

  return (
    <section id="certifications" className="section-pad bg-creamAlt">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">Achievements</p>
        <h2 className="mt-3 font-display text-5xl font-black text-ink">
          Certifications<span className="text-gold">.</span>
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {certificates.map((cert, i) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-2xl border border-line bg-white p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold text-ink">
                <Award size={18} />
              </span>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-goldDeep">
                  {cert.issuer}
                </p>
                <h3 className="mt-1 font-display text-base font-bold text-ink">{cert.title}</h3>
                <button
                  type="button"
                  onClick={() => setActiveCert(cert.id)}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-goldDeep px-4 py-2 text-xs font-bold text-goldDeep transition hover:bg-gold hover:text-ink"
                >
                  <Award size={13} /> View Certificate
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {certificate && (
        <CertificateModal certificate={certificate} onClose={() => setActiveCert(null)} />
      )}
    </section>
  );
}
