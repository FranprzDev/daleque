
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        space: {
          dark: "#0C1445", // Deep midnight blue
          primary: "#1E3A8A", // Rich navy blue
          secondary: "#1D4ED8", // Deep blue
          accent: "#3B82F6", // Bright blue
          light: "#F0F9FF", // Very soft, pale blue instead of white
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom right, #0C1445, #1E3A8A, #3B82F6)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
