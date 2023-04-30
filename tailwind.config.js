/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

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
      "sortingpage-accent": "#202d45",
      graphpage: "var(--graphpage-background)",
      "graphpage-secondary": "var(--graphpage-secondary-background)",
      "graphpage-accent": "#9aafd5",
      physicspage: "var(--physicspage-background)",
    },
    textColor: {
      white: "#fff",
      muted: "var(--muted-text)",
      "muted-graph": "var(--muted-graph-text)",
      graph: "var(--graph-text)",
      red: "var(--red-text)",
      green: "var(--green-text)",
      yellow: "var(--yellow-text)",
      placeholder: "var(--placeholder-text)",
    },
    borderColor: {
      DEFAULT: "#fff",
      graph: "var(--graphpage-background)",
    },
    boxShadowColor: {
      DEFAULT: "#000",
      graph: "var(--graphpage-secondary-background)",
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      boxShadow: {
        "end-over-graph":
          "-2px 0 8px 6px var(--graphpage-secondary-background)",
        "start-over-graph":
          "2px 0 8px 6px var(--graphpage-secondary-background)",
      },
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
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          active: (value) => ({
            position: "relative",
            "&::before": {
              content: "''",
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              boxShadow: `0 0 0 2px ${value}`,
              "border-radius": "16px",
              // opacity: 1,
              // transform: "scale(1)",
              // animation: "appear 0.3s cubic-bezier(0.25, 1, 0.5, 1)",
            },
          }),
          "active-offset": (value) => ({
            "&::before": {
              border: `2px solid ${value}`,
            },
          }),
        },
        { values: theme("backgroundColor") }
      );
    }),
  ],
};
