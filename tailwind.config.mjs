import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2e9ff',
          100: '#e4d2ff',
          200: '#c9a6ff',
          300: '#ae7aff',
          400: '#9452ff',
          500: '#772be6',
          600: '#5d20b4',
          700: '#441684',
          800: '#2a0d54',
          900: '#14042a'
        },
        accent: '#f8e7ff',
        dark: '#121022'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', ...fontFamily.serif],
        sans: ['"Montserrat"', ...fontFamily.sans]
      },
      boxShadow: {
        glow: '0 20px 60px rgba(119, 43, 230, 0.3)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.9s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

