/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        lightcyan: "#cee3e9",
        neongreen: "#52ffa8",
        grayishblue: "#4e5d73",
        darkgrayishblue: "#323a49",
        darkblue: "#1f2632",
      },
    },
  },
  plugins: [],
};
