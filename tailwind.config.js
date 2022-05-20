module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'circuit-pattern': "url('/src/assets/circuit-board.svg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}