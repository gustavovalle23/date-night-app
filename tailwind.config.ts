import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        romanticPink: "#FFC0CB",
        warmRed: "#FF6F61",
        softYellow: "#FFF8DC",
      },
    },
  },
  plugins: [],
} satisfies Config;
