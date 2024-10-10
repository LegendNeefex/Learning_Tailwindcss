/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    fontSize: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    fontFamily:{
      'default': ['Montserrat', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

