/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'loading': '#f1f2f3',
      },
      fontFamily: {
        CabinSketch: "CabinSketch"
      },
    },
  },
  plugins: [],
}
