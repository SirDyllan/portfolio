const words = [
  "PHP",
  "React",
  "Next.js",
  "TypeScript",
  "MySQL",
  "Firebase",
  "Python",
  "Flutter",
  "Power BI",
  "OpenAI API",
  "SQL",
  "Vue.js",
];

export default function Marquee() {
  const loop = [...words, ...words];

  return (
    <div className="overflow-hidden border-y border-line bg-ink py-4">
      <div className="marquee-track flex w-max gap-10">
        {loop.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-3 font-display text-lg font-bold uppercase tracking-tight text-cream/90"
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
