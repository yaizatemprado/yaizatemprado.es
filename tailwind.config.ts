import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fff8f4',
        blush: '#f7e5de',
        peach: '#f4cbbf',
        anchor: '#2e2324',
        plum: '#3a2b2c',
        rose: {
          DEFAULT: '#cc6c4e',
          dark: '#b45b41',
        },
        lavender: '#e7d7f6',
        slate: '#5e4b4c',
        card: '#ffffff',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-playfair)', '"Times New Roman"', 'serif'],
      },
      fontSize: {
        eyebrow: ['0.78rem', { letterSpacing: '0.22em', fontWeight: '800' }],
      },
    },
  },
  plugins: [],
}

export default config
