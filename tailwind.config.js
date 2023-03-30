/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        sans : 'Quicksand',
        new : 'IBM Plex Sans Thai Looped',
        new2 : 'Space Grotesk',
      }
    },
  },
  plugins: [],
}

