import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Fondo principal: blanco cálido neutro (antes tiraba a rosa).
        cream: '#faf8f5',
        // Superficies secundarias (etiquetas, cajas) y bordes.
        stone: '#f3eee9',
        line: '#e8e0da',
        blush: '#f7e5de',
        peach: '#f4cbbf',
        anchor: '#2e2324',
        plum: '#3a2b2c',
        rose: {
          DEFAULT: '#cc6c4e',
          dark: '#b45b41',
        },
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
