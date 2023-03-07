/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'menuPurple': '#646cff',
      },
      fontFamily: {
        coolvetica:'coolvetica'
      }
    },
  },
  plugins: [],
}