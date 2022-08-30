/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {},
  extend: {},
  fontFamily: {
    Lobster: ["Lobster", " cursive"],
    Poppins: ["Poppins", "sans-serif"],
  },
  mode: "jit",
  plugins: [],
};
