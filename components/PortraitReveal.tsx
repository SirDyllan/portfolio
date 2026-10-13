"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import { Code2, BarChart3, Network } from "lucide-react";
import { profile } from "@/lib/data";

const d = (n: number) => ({ "--d": n }) as CSSProperties;

const chips = [
  { label: "Development", icon: Code2, pos: "left-0 top-2 sm:-left-6 sm:top-[8%]" },
  { label: "Data Analysis", icon: BarChart3, pos: "right-0 top-[30%] sm:-right-8" },
  { label: "Networking", icon: Network, pos: "left-0 top-[60%] sm:-left-10" },
];

/**
 * Hero portrait with a curtain-wipe reveal: the photo uncovers from the bottom
 * while zooming out, the gold panel swings in behind it, the chips pop in,
 * then everything floats gently. Styles live in globals.css (.spot-*).
 */
export default function PortraitReveal() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Two frames so the hidden state is painted before the transition starts
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setShown(true)));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div
      data-shown={shown ? "" : undefined}
      className="relative mx-auto w-full max-w-[420px] px-6 pb-12 pt-6 sm:px-10"
    >
      <div
        aria-hidden
        className="spot-panel absolute inset-x-12 bottom-6 top-14 rounded-[32px] bg-gold sm:inset-x-16"
      />
      <div
        aria-hidden
        className="absolute -right-1 -top-1 h-24 w-24 rounded-full border-2 border-dashed border-ink/30 sm:right-2"
      />

      <div className="animate-float relative">
        <div className="spot-frame relative aspect-[4/5] overflow-hidden rounded-[32px] bg-creamAlt shadow-2xl shadow-ink/30">
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 768px) 340px, 80vw"
            className="spot-img object-cover object-[50%_30%]"
          />
        </div>

        <div
          className="spot-chip absolute -bottom-7 left-1/2 w-max -translate-x-1/2 rounded-2xl border border-line bg-white/95 px-5 py-3 text-center shadow-xl backdrop-blur"
          style={d(3)}
        >
          <p className="font-display text-sm font-extrabold text-ink">{profile.headline}</p>
          <p className="mt-0.5 flex items-center justify-center gap-2 text-xs font-semibold text-muted">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            {profile.location}
          </p>
        </div>
      </div>

      {chips.map((c, i) => (
        <div key={c.label} className={`absolute z-10 ${c.pos}`}>
          <div className="animate-float-slow" style={{ animationDelay: `${-i * 2.3}s` }}>
            <p
              className="spot-chip flex items-center gap-2 rounded-full border border-line bg-white/95 py-1.5 pl-1.5 pr-4 font-display text-xs font-bold text-ink shadow-lg backdrop-blur"
              style={d(i)}
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gold text-ink">
                <c.icon size={14} />
              </span>
              {c.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
