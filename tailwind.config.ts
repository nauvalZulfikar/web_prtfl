import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF8",
        ink: "#1A1A18",
        muted: "#6B6B67",
        border: "#E8E5DF",
        accent: "#C17D3C",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        display: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};

export default config;
