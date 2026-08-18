"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const items = [
  {
    href: profile.whatsapp,
    label: "Chat on WhatsApp",
    icon: "/icons/whatsapp.png",
  },
  {
    href: profile.instagram,
    label: "Follow on Instagram",
    icon: "/icons/instagram.png",
  },
].filter((item) => item.href);

export default function FloatingSocial() {
  return (
    <div
      className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {items.map((item, i) => (
        <motion.a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          title={item.label}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 260, damping: 18 }}
          whileHover={{ scale: 1.12, rotate: -4 }}
          whileTap={{ scale: 0.92 }}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white shadow-lg sm:h-14 sm:w-14"
        >
          <span className="absolute inset-0 -z-10 animate-ping1 rounded-full bg-gold/30" />
          <Image src={item.icon} alt={item.label} width={28} height={28} className="h-6 w-6 sm:h-7 sm:w-7" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-cream opacity-0 shadow-lg transition group-hover:opacity-100 md:block">
            {item.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
