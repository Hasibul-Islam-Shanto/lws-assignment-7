/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colorBg: "#1A1A1A",
        colorPurple: "#FD088F",
        colorGray: "#2E2E2E",
      },
      fontFamily: {
        exo: ['"Exo 2"', "sans-serif"],
        play: ['"Play"', "serif"],
      },
    },
  },
  plugins: [],
};
