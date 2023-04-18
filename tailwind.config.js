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
      "sortingpage-secondary": "var(--sortingpage-secondary-background)",
      graphspage: "var(--graphspage-background)",
      physicspage: "var(--physicspage-background)",
    },
    textColor: {
      white: "#fff",
      muted: "var(--muted-text)",
      red: "var(--red-text)",
      green: "var(--green-text)",
      yellow: "var(--yellow-text)",
      placeholder: "var(--placeholder-text)",
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
        navigation: "calc(100% - 17px)",
      },
    },
  },
  plugins: [],
};
