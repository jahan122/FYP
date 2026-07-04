/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e0fffb',
          100: '#b3fff5',
          200: '#80ffef',
          300: '#4dffe9',
          400: '#1affcf',
          500: '#00d4cb',
          600: '#00a8a1',
          700: '#00807a',
          800: '#005c58',
          900: '#003a38',
        },
        navy: {
          50: '#f0f6fc',
          100: '#d9e8f5',
          200: '#b3d1eb',
          300: '#85b5de',
          400: '#5a99cc',
          500: '#3a7db5',
          600: '#2e6394',
          700: '#254f78',
          800: '#1f3d5c',
          900: '#0a1a2e',
          950: '#040e1e',
        },
        amber: {
          400: '#ffbe76',
          500: '#ff9f43',
          600: '#e17b1a',
        },
        danger: {
          400: '#ff6b7a',
          500: '#ff4757',
          600: '#d63447',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(3.5rem, 9vw, 10rem)',
        'hero-sm': 'clamp(2.2rem, 5vw, 5.5rem)',
        'display-xl': 'clamp(2.8rem, 5.5vw, 5.5rem)',
        'display-lg': 'clamp(2rem, 4vw, 3.5rem)',
        'display-md': 'clamp(1.25rem, 2.5vw, 2rem)',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 8px 40px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 20px 60px rgba(0, 0, 0, 0.1)',
        'inner-soft': 'inset 0 2px 8px rgba(0, 0, 0, 0.04)',
        'card': '0 2px 16px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.08), 0 0 1px rgba(0, 0, 0, 0.06)',
        'glow-brand': '0 0 30px rgba(0, 212, 203, 0.15)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'counter-tick': 'counterTick 0.15s ease-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        counterTick: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
