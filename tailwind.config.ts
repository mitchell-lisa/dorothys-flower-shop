import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Neutral ground so photography supplies every bit of colour. */
        paper: "#FFFFFF",
        bone: "#F4F4F2", // image wells, section bands
        ink: "#111111",
        mute: "#767676", // 4.54:1 on paper — AA for body text
        line: "#E3E3E0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        label: ".14em",
        wide: ".08em",
      },
      maxWidth: { shell: "1600px", text: "34rem" },
      transitionTimingFunction: {
        out: "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
  plugins: [],
};

export default config;
