/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#0A0A0A',
          900: '#0A0A0A',
          800: '#0D0D0D',
          700: '#121212',
          600: '#1A1A1A',
          500: '#222222',
        },
        orange: {
          DEFAULT: '#FF6B35',
          400: '#FF8C5A',
          500: '#FF6B35',
          600: '#E55A26',
        },
        gray: {
          100: '#F5F5F5',
          200: '#E0E0E0',
          400: '#AAAAAA',
          500: '#999999',
          600: '#666666',
          700: '#444444',
          800: '#2A2A2A',
          900: '#1A1A1A',
        },
        success: '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '7xl': ['4.5rem', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'orange-sm': '0 4px 16px rgba(255,107,53,0.3)',
        'orange-md': '0 8px 32px rgba(255,107,53,0.35)',
        'orange-lg': '0 16px 48px rgba(255,107,53,0.4)',
        'card': '0 4px 16px rgba(0,0,0,0.3)',
        'card-hover': '0 16px 48px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(135deg, #FF6B35, #FF8C5A)',
        'dark-gradient': 'linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.9) 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
