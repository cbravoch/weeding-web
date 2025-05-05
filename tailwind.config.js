/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crema: '#FFF8F0',
        dorado: '#D4AF37',
      },
      fontFamily: {
        elegant: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
} 