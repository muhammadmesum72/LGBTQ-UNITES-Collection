/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        primary : " #fc5d87",
        secondary : "#f8d448",
        primaryDark: "rgb(31, 28, 36)",
        secondaryDark : "rgb(37, 38, 52)"

      }
    },
  },
  plugins: [],
}

