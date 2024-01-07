/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2c384c',
        'secondary': '#1f2733',
        'success': '#5dd075',
        'waring': '#FFD166',
        'error': '#ff4a5d',
        'txt-primary': '#eeeeee',
      },
      keyframes: {
        colorup: {
          '0%': { color: 'rgba(0,0,0,0.0)' },
          '100%': { color: 'inherit' },
        },
        opacity: {
          '0%': { opacity: 1 },
          '100%': { opacity: 1 },
        }
      },
      animation:{
        'colorchange': 'colorup 6s linear',
        'opacity-rise': 'opacity 2s linear'
      }
    },
  },
  plugins: [],
}

