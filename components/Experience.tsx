"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Briefcase, CalendarDays, Images, MapPin } from "lucide-react";
import { experience, certificates } from "@/lib/data";
import CertificateModal from "./CertificateModal";
import GalleryModal from "./GalleryModal";

export default function Experience() {
  const [activeCert, setActiveCert] = useState<string | null>(null);
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const certificate = certificates.find((c) => c.id === activeCert) ?? null;
  const galleryJob = experience.find((e) => e.company === activeGallery) ?? null;

  return (
    <section id="experience" className="section-pad bg-ink">
      <div className="mx-auto max-w-6xl px-6">
        <p className="eyebrow eyebrow-dark">Where I&apos;ve worked</p>
        <h2 className="mt-3 font-display text-4xl font-black text-cream sm:text-5xl">
          Professional Experience<span className="text-gold">.</span>
        </h2>

        <div className="mt-12 space-y-6">
          {experience.map((job, i) => (
            <motion.article
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`grid gap-6 rounded-2xl border bg-inkSoft p-6 sm:p-8 md:grid-cols-[auto_1fr] ${
                job.current ? "border-gold/60" : "border-lineOnDark"
              }`}
            >
              <div className="flex h-20 w-20 flex-none items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-lg sm:h-24 sm:w-24">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-cream">{job.role}</h3>
                    <p className="mt-1 font-display text-base font-semibold text-gold">
                      {job.company}
                    </p>
                  </div>
                  {job.current && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-[0.68rem] font-bold uppercase tracking-widest text-ink">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
                      </span>
                      Current
                    </span>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-cream/60">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={13} /> {job.start} to {job.end}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase size={13} /> {job.employmentType}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} /> {job.location}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-cream/80 sm:text-base">{job.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-cream/75">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                {job.partners && job.partners.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {job.partners.map((partner) => (
                      <div
                        key={partner.name}
                        className="flex items-center gap-3 rounded-xl border border-lineOnDark bg-ink/60 py-2 pl-2 pr-4"
                      >
                        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-white p-1">
                          <Image
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            width={40}
                            height={40}
                            className="h-full w-full object-contain"
                          />
                        </span>
                        <span>
                          <span className="block font-display text-sm font-bold text-cream">
                            {partner.name}
                          </span>
                          <span className="block text-xs text-cream/60">{partner.note}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-cream/10 px-2.5 py-1 text-[0.68rem] font-semibold text-cream/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {((job.gallery && job.gallery.length > 0) || job.certificateId) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {job.gallery && job.gallery.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setActiveGallery(job.company)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-gold px-4 py-2 text-xs font-bold text-gold transition hover:bg-gold hover:text-ink"
                      >
                        <Images size={13} /> View Work Samples
                      </button>
                    )}
                    {job.certificateId && (
                      <button
                        type="button"
                        onClick={() => setActiveCert(job.certificateId!)}
                        className="inline-flex items-center gap-1.5 rounded-full border border-gold px-4 py-2 text-xs font-bold text-gold transition hover:bg-gold hover:text-ink"
                      >
                        <Award size={13} /> View Certificate
                      </button>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {certificate && (
        <CertificateModal certificate={certificate} onClose={() => setActiveCert(null)} />
      )}

      {galleryJob && galleryJob.gallery && (
        <GalleryModal
          title={`${galleryJob.company}: work samples`}
          images={galleryJob.gallery}
          onClose={() => setActiveGallery(null)}
        />
      )}
    </section>
  );
}
