import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // classe 'dark' fixa no <html>, sem toggle
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          elevated: "hsl(var(--background-elevated))",
          hover: "hsl(var(--background-hover))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          secondary: "hsl(var(--foreground-secondary))",
          muted: "hsl(var(--foreground-muted))",
        },
        border: {
          DEFAULT: "hsl(var(--border))",
          hover: "hsl(var(--border-hover))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          hover: "hsl(var(--accent-hover))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
