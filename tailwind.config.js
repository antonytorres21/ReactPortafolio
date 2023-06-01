/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        pin: "ping 1s linear",
        rounding: "rounding 2s linear",
        roundingoff: "roundingoff 5s infinite",
      },
      height: {
        42: "10.5rem",
      },
      translate: {
        21: "5.1rem",
      },
      keyframes: {
        rounding: {
          "0%": { borderRadius: "4px" },
          "25%": { borderRadius: "25%" },
          "50%": { borderRadius: "50%" },
          "75%": { borderRadius: "75%" },
          "100%": { borderRadius: "9999px" },
        },
        roundingoff: {
          "100%": { borderRadius: "9999px" },
          "50%": { borderRadius: "50%" },
          "0%": { borderRadius: "4px" },
        },
      },
      colors: {
        blue: "#1fb6ff",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        "gray-dark": "#242424",
        "gray-light": "#d3dce6",
      },
      borderRadius: {
        0: "4px",
        full: "9999px",
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ["hover"],
      animation: ["hover"],
    },
  },
  plugins: [],
};
