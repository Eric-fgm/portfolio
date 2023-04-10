/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { center: true },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    backgroundColor: {
      homepage: "var(--homepage-background)",
      sortingpage: "var(--sortingpage-background)",
      graphspage: "var(--graphspage-background)",
      physicspage: "var(--physicspage-background)",
    },
    extend: {
      fontSize: {
        tiny: "11px",
        mini: "11.5px",
        rg: "13px",
        md: "15px",
      },
      spacing: {
        13: "52px",
        18: "72px",
      },
    },
  },
  plugins: [],
};
