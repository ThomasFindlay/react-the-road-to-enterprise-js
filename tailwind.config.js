// eslint-disable-next-line
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        content: ['Nunito', 'sans-serif'],
      },
    },
    colors: {
      ...colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
