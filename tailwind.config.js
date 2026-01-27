/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-orchid': '#0B0B2D',
        'light-sand': '#EFEAD5',
        'high-blue': '#2727F4',
        'high-blue-light': '#4747FF',
        'high-blue-dark': '#1E1ECC',
        'neutral-black': '#000000',
        'neutral-grey': '#F1F1F1',
        'neutral-white': '#FFFFFF',
      },
      fontFamily: {
        'audiowide': ['Audiowide', 'cursive'],
        'figtree': ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
