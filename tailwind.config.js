/** @type {import('tailwindcss').Config} */ 3744;
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          darkGunmetal: "#161B22",
          midnightBlack: "#0D1117",
          stormyGray: "#30363D",
          white: "#ffffff",
          lightGray: "#A1A1A1",
          purple: "#6833E4",
          mauve: "#A89AFF",
          mintGreen: "#8EFFA0",
          forestGreen: "#238636",
          darkGreen: "#1E592A",
          coral: "#FF0500"
        },
      },
      keyframes: {
        fadeRight: { "0%": { transform: "scale(1.1)" } },
      },
      animation: {
        fadeRight: "fadeRight 2s ease-in-out both"
      },
      backgroundImage: {
        "circuit-board": "url('/assets/images/circuit.svg')",
        sprinkle: "url('/assets/images/sprinkle-opacity-10.svg')",
      },
    },
  },
  plugins: [],
};
