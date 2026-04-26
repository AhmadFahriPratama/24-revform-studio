import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4338ca",
        secondary: "#6366f1",
        accent: "#eef2ff",
        background: "#fafafa",
        foreground: "#312e81",
      },
    },
  },
  plugins: [],
};

export default config;
