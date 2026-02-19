import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#f8fafc",
        primary: {
          DEFAULT: "#6366f1",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#a855f7",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#22d3ee",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#1e1e1e",
          foreground: "#94a3b8",
        },
        card: {
          DEFAULT: "#121212",
          foreground: "#f8fafc",
        },
        border: "#2a2a2a",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #22d3ee 100%)",
        "gradient-mesh": "radial-gradient(at 40% 20%, hsla(240,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(280,100%,50%,0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(180,100%,50%,0.3) 0px, transparent 50%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains)"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "gradient": "gradient 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(168, 85, 247, 0.5)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
}

export default config

