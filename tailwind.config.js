/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fefdf8',
          100: '#fef7e7',
          200: '#fdecc4',
          300: '#fbd896',
          400: '#f8c054',
          500: '#D4A574',
          600: '#b8935f',
          700: '#996f42',
          800: '#7d5a37',
          900: '#674b2f',
        },
        olive: {
          50: '#f6f7f4',
          100: '#e9ece4',
          200: '#d3d9ca',
          300: '#b6c2a7',
          400: '#96a67f',
          500: '#6B7C47',
          600: '#5a6b3e',
          700: '#485533',
          800: '#3c452c',
          900: '#333b26',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};