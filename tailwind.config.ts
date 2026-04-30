import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F4ECDD",
        linen: "#EADFC8",
        ink: "#2B1D14",
        "shop-red": "#A8331E",
        "retro-green": "#3E5641",
        sepia: "#8A6A4A",
        petal: "#C98A8A",
        halftone: "#7A6F60",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "Georgia", "serif"],
      },
      letterSpacing: {
        caps: "0.18em",
      },
      maxWidth: {
        prose: "44rem",
      },
    },
  },
  plugins: [],
};

export default config;
