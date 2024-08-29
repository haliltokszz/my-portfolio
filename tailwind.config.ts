const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#e2e8f0",
        secondary: "#2d3748",
        accent: "#3182ce",
        background: "linear-gradient(to bottom right, #000000, #3f0071)",
        cardBackground: "#2d3748",
        cardText: "#f7fafc",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        gradient: "gradient 15s ease infinite",
        tilt: "tilt 10s infinite linear",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        tilt: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
      },
    },
    typography: (theme: any) => ({
      DEFAULT: {
        css: {
          color: theme("colors.gray.300"),
          a: {
            color: theme("colors.blue.600"),
            "&:hover": {
              color: theme("colors.blue.800"),
            },
          },
          h1: {
            fontWeight: "800",
            letterSpacing: theme("letterSpacing.tight"),
            color: theme("colors.white"),
          },
          h2: {
            fontWeight: "700",
            letterSpacing: theme("letterSpacing.tight"),
            color: theme("colors.gray.100"),
          },
          h3: {
            fontWeight: "600",
            color: theme("colors.gray.200"),
          },
          "ol li:before": {
            fontWeight: "600",
            color: theme("colors.gray.200"),
          },
          "ul li:before": {
            backgroundColor: theme("colors.gray.200"),
          },
          code: {
            color: theme("colors.pink.500"),
          },
          "blockquote p:first-of-type::before": {
            content: "none",
          },
          "blockquote p:first-of-type::after": {
            content: "none",
          },
        },
      },
    }),
  },
  plugins: [addVariablesForColors, require("@tailwindcss/typography")],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
