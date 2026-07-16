/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,css}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0d14',
          card: '#121722',
          cardHover: '#1a202c',
          border: '#1e293b'
        },
        accent: {
          cyan: '#00f2fe',
          blue: '#4facfe',
          purple: '#7f00ff',
          pink: '#e100ff',
          emerald: '#10b981'
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', 'JetBrains Mono', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 242, 254, 0.35)',
        'glow-purple': '0 0 20px rgba(127, 0, 255, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }
    },
  },
  plugins: [],
}
