const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.violet[600],
        'primary-light': colors.violet[200],
        'on-primary': colors.slate[100],
        'on-primary-light': colors.violet[950],
        'primary-text': colors.gray[900],
      }
    },
  },
  plugins: [],
}

