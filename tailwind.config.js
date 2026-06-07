/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-playfair)", ...defaultTheme.fontFamily.serif],
      },

      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0" },
        },
      },

      colors: {
        cream: {
          DEFAULT: "#f6f1e8",
          light:   "#fbf6ed",
          card:    "#fffaf1",
        },
        brown: {
          dark:  "#2b2118",
          mid:   "#7b644b",
          light: "#9a7b57",
        },
        amber: {
          DEFAULT: "#b27600",
          light:   "#e6b65f",
          subtle:  "#fff3cf",
          border:  "#d8ad72",
        },
      },
    },
  },
  plugins: [],
};