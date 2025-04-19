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
          dark: "#1a0f2e", // Deep purple background
          primary: "#2a1b4a", // Rich purple
          secondary: "#4a1f3d", // Dark magenta
          accent: "#ff6b6b", // Bright coral red
          light: "#c4b5fd", // Soft lavender
          nebula: {
            blue: "#7c93d6",
            red: "#ff4d6d",
            purple: "#9d4edd",
          }
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
        'space-gradient': 'linear-gradient(to bottom right, #1a0f2e, #2a1b4a, #4a1f3d)',
        'nebula-pattern': "url('/lovable-uploads/53959043-8fd9-4b45-82d2-dabb8aef8919.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
