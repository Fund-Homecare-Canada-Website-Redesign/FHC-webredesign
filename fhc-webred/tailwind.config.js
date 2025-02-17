const colours = require("./src/assets/styles/BrandColours.js"); 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colours,
    },
  },
  plugins: [],
};
