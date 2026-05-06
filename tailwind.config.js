/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        display: ["Cinzel", "serif"],
        accent: ["Playfair Display", "serif"],
        sans: ["Cormorant Garamond", "Georgia", "serif"],
      },
      colors: {
        earth: "#2C1810",
        terracotta: "#8B3A2A",
        maroon: "#5C1A1A",
        wine: "#722F37",
        "rose-gold": "#B5804B",
        "antique-gold": "#C9963A",
        "gold-shimmer": "#E8C97A",
        ivory: "#F5EDD6",
        silk: "#EDD9A3",
        parchment: "#D4B483",
        velvet: "#4A0E0E",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-in-left": "slideInLeft 0.4s ease-out forwards",
        "slide-out-left": "slideOutLeft 0.4s ease-out forwards",
        "expand-fade": "expandFade 2s ease-out infinite",
      },
      keyframes: {
        expandFade: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.5" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
