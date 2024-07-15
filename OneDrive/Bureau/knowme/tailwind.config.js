/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#d7ea01', // Example color, adjust as needed
        hoverColor: '#ffffff', // Example hover color for dark mode
      },
    },
  },
  plugins: [],
}