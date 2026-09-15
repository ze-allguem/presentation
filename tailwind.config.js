/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Epilogue"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        background: '#f4f4f4',
        foreground: '#111111',
        'brand-orange': '#FF4400',
      },
    },
  },
  plugins: [],
}
