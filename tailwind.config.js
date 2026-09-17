/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,css}"
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        chakra: ['"Chakra Petch"', 'sans-serif'],
        michroma: ['Michroma', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
      },
      colors: {
        slate: {
          grid: '#64748b'
        }
      }
    },
  },
  plugins: [],
}
