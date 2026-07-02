import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F1E7",
        creamAlt: "#EDE8D9",
        ink: "#1A1A1D",
        inkSoft: "#2A2A2E",
        gold: "#F0A83A",
        goldDeep: "#DB8F1F",
        goldSoft: "#F7C878",
        muted: "#6E6B62",
        mutedLight: "#A8A49A",
        line: "rgba(26,26,29,0.10)",
        lineOnDark: "rgba(245,241,231,0.12)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      keyframes: {
        blobMove: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, -25px) scale(1.08)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.95)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(-2deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        ping1: {
          "0%": { transform: "scale(1)", opacity: "0.5" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        blobMove: "blobMove 10s ease-in-out infinite",
        drift: "drift 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        ping1: "ping1 2.6s cubic-bezier(0,0,0.2,1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
