import type { Config } from "tailwindcss";
import scrollbarhide from "tailwind-scrollbar-hide";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "fira-code": ["Fira Code", "monospace"],
        "bio-tif": ["Bio Tif", "sans-serif"],
        "bio-tif-bold": ["Bio Tif Bold", "sans-serif"],
        "neuzeit-grotesk": ["Neuzeit Grotesk", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [scrollbarhide],
};
export default config;
