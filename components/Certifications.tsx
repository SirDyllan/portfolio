"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Clock } from "lucide-react";
import { certificates } from "@/lib/data";
import CertificateModal from "./CertificateModal";

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<string | null>(null);
  const certificate = certificates.find((c) => c.id === activeCert) ?? null;

  return (
    <section id="certifications" className="section-pad bg-creamAlt">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">Achievements</p>
        <h2 className="mt-3 font-display text-4xl font-black text-ink sm:text-5xl">
          Certifications &amp; Awards<span className="text-gold">.</span>
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={`flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ${
                cert.image ? "border border-line" : "border-2 border-dashed border-mutedLight/70"
              }`}
            >
              {cert.image ? (
                <button
                  type="button"
                  onClick={() => setActiveCert(cert.id)}
                  aria-label={`View ${cert.title} certificate`}
                  className="group relative aspect-[4/3] w-full overflow-hidden bg-cream"
                >
                  <Image
                    src={cert.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              ) : (
                <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 bg-cream text-muted">
                  <Clock size={26} />
                  <span className="text-xs font-bold uppercase tracking-widest">Certificate pending</span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-goldDeep">{cert.issuer}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink">{cert.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{cert.description}</p>
                {cert.image && (
                  <button
                    type="button"
                    onClick={() => setActiveCert(cert.id)}
                    className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-goldDeep px-4 py-2 text-xs font-bold text-goldDeep transition hover:bg-gold hover:text-ink"
                  >
                    <Award size={13} /> View Certificate
                  </button>
                )}
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
