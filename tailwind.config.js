/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        amber: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          glow: 'rgba(245,158,11,0.15)',
        },
        navy: {
          DEFAULT: '#070B14',
          mid: '#0D1424',
          light: '#111827',
        },
      },
      animation: {
        'float': 'float 12s ease-in-out infinite',
        'float-delay': 'float 12s ease-in-out 6s infinite',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-30px) scale(1.05)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
