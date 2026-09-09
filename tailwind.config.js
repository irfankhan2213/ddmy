/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-crimson': '#E50914',
        'brand-crimson-hover': '#FF1E27',
        'brand-darkred': '#8B0000',
        'brand-black': '#050505',
        'brand-surface': '#0D0D10',
        'brand-card': '#141418',
        'brand-border': 'rgba(255, 255, 255, 0.08)',
        // Backwards compatibility mappings
        'nn-black': '#050505',
        'nn-gold': '#E50914', // remap legacy gold to crimson
        'nn-green': '#00C87A',
        'nn-red': '#E50914',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        bebas: ['var(--font-bebas)', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
