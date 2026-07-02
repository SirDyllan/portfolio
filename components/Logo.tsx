export default function Logo({ size = 22 }: { size?: number }) {
  return (
    <span
      className="relative inline-block flex-none"
      style={{ width: size * 1.5, height: size }}
      aria-hidden
    >
      <span
        className="absolute rounded-full bg-ink"
        style={{ width: size, height: size, left: 0, top: 0 }}
      />
      <span
        className="absolute rounded-full bg-gold"
        style={{ width: size, height: size, left: size * 0.5, top: 0 }}
      />
    </span>
  );
}
