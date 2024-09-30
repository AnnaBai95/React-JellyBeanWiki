/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        custom: '0 1px 3px 1px hsl(0deg 0% 96.85%)'
      },
      colors:{
        'jelly-red': '#B81F35',
        'jelly-light-red': '#FE6E63'
      }
    },
  },
  plugins: [],
}

