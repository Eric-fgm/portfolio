/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  // json, because of color in dictionaries ([To Do]: remove colors from dictionaries)
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/dictionaries/*"],
  theme: {
    backgroundColor: {
      white: "#fff",
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
      blue: "var(--blue-text)",
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
              borderRadius: "16px",
            },
          }),
          "active-offset": (value) => ({
            "&::before": {
              border: `2px solid ${value}`,
            },
          }),
        },
        { values: theme("backgroundColor") },
      ),
        matchUtilities(
          {
            "animation-delay": (value) => ({
              animationDelay: value,
            }),
          },
          { values: theme("transitionDelay") },
        ),
        matchUtilities(
          {
            "gradient-from": (value) => ({
              background: `-webkit-gradient(-90deg, transparent 0, ${value} 9px)`,
              background: `linear-gradient(-90deg, transparent 0, ${value} 9px)`,
            }),
            "gradient-to": (value) => ({
              background: `-webkit-gradient(90deg, transparent 0, ${value} 9px)`,
              background: `linear-gradient(90deg, transparent 0, ${value} 9px)`,
            }),
          },
          { values: theme("backgroundColor") },
        );
    }),
  ],
};
