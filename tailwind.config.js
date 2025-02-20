/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        'cream': {
          50: '#FFFBF7',
          100: '#FFF7EE',
          200: '#FFE4C4',
          300: '#FFD39B',
          400: '#FFC16D',
          500: '#FFAF3F',
          600: '#FF9D11',
          700: '#E68A00',
          800: '#B36B00',
          900: '#804C00',
        },
      },
    },
  },
  plugins: [],
}