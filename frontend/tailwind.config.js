/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkTeal: '#091413',
        forestGreen: '#285A48',
        lushGreen: '#408A71',
        mintLight: '#B0E4CC',
        accentOrange: '#d37c36', // Your signature orange
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}