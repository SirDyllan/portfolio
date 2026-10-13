"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Certificate } from "@/lib/data";

export default function CertificateModal({
  certificate,
  onClose,
}: {
  certificate: Certificate;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${certificate.title} certificate`}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="relative w-full max-w-2xl rounded-2xl border border-line bg-white p-6 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate"
            className="absolute right-4 top-4 text-muted transition hover:text-goldDeep"
          >
            <X size={20} />
          </button>

          <p className="eyebrow">{certificate.issuer}</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-ink">{certificate.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{certificate.description}</p>

          {certificate.image && (
            <div className="mt-5 overflow-hidden rounded-xl border border-line bg-creamAlt">
              <Image
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                width={800}
                height={600}
                className="h-auto w-full object-contain"
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
