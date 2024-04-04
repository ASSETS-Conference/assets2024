import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-dark": "#2B2B2B",
        "theme-off-white": "#D4D4D4",
        "theme-red": "#592321",
        // "theme-blue": "#4597BA",
        "theme-blue": "#367691",
        "primary-text-light": "var(--primary-light)",
        "primary-text-dark": "var(--primary-dark)",
        "link-underline-red": "#a62929",
      },
      listStyleType: {
        circle: "circle",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-img": "url(../../public/assets/hero-background.jpg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hoctive", ["&:hover", "&:focus", "&:active"]);
    }),
  ],
};
