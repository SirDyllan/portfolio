"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, Images, Clock, MapPin } from "lucide-react";
import { projects, certificates } from "@/lib/data";
import CertificateModal from "./CertificateModal";
import GalleryModal from "./GalleryModal";

export default function Projects() {
  const [activeCert, setActiveCert] = useState<string | null>(null);
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const certificate = certificates.find((c) => c.id === activeCert) ?? null;
  const galleryProject = projects.find((p) => p.title === activeGallery) ?? null;

  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow">Selected work</p>
        <h2 className="mt-3 font-display text-4xl font-black text-ink sm:text-5xl">
          Featured Projects<span className="text-gold">.</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const cert = certificates.find((c) => c.id === project.certificateId);

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col overflow-hidden rounded-2xl border-t-4 border-gold bg-white p-7 shadow-sm transition-shadow hover:shadow-xl ${
                  project.featured ? "ring-1 ring-gold/40" : ""
                }`}
              >
                <span className="pointer-events-none absolute -top-2 right-6 font-display text-7xl font-black text-ink/[0.05]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative mb-3 flex flex-wrap gap-2">
                  {project.featured && (
                    <span className="inline-flex w-fit rounded-full bg-ink px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-gold">
                      Featured
                    </span>
                  )}
                  {project.status && (
                    <span className="inline-flex w-fit items-center gap-1 rounded-full bg-gold/15 px-3 py-1 text-[0.65rem] font-bold text-goldDeep">
                      <MapPin size={11} /> {project.status}
                    </span>
                  )}
                </div>

                <p className="relative font-display text-xs font-bold uppercase tracking-widest text-goldDeep">
                  {project.type}
                </p>
                <h3 className="relative mt-2 font-display text-xl font-bold text-ink">
                  {project.title}
                </h3>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-creamAlt px-2.5 py-1 text-[0.68rem] font-semibold text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative mt-6 flex flex-wrap gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-bold text-cream transition hover:bg-goldDeep hover:text-ink"
                    >
                      {project.linkLabel ?? "View Live Project"} <ExternalLink size={13} />
                    </a>
                  )}
                  {cert &&
                    (cert.image ? (
                      <button
                        type="button"
                        onClick={() => setActiveCert(cert.id)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-goldDeep px-4 py-2 text-xs font-bold text-goldDeep transition hover:bg-gold hover:text-ink"
                      >
                        <Award size={13} /> View Certificate
                      </button>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-mutedLight px-4 py-2 text-xs font-bold text-muted">
                        <Award size={13} /> Certificate pending
                      </span>
                    ))}
                  {project.gallery && project.gallery.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setActiveGallery(project.title)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-goldDeep px-4 py-2 text-xs font-bold text-goldDeep transition hover:bg-gold hover:text-ink"
                    >
                      <Images size={13} /> View Gallery
                    </button>
                  )}
                  {project.gallery && project.gallery.length === 0 && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-mutedLight px-4 py-2 text-xs font-bold text-muted">
                      <Clock size={13} /> Photos coming soon
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {certificate && (
        <CertificateModal certificate={certificate} onClose={() => setActiveCert(null)} />
      )}

      {galleryProject && galleryProject.gallery && (
        <GalleryModal
          title={galleryProject.title}
          images={galleryProject.gallery}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </section>
  );
}
