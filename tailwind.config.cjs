const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        content: ["Nunito", "sans-serif"],
      },
    },
    colors: {
      ...colors,
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
