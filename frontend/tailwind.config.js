/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hive Studio Brand Colors
        'hive-gold': '#DAA520',
        'hive-gold-dark': '#B8860B',
        'honey-bright': '#FFBF00',
        'charcoal': '#1a1a1a',
        'charcoal-light': '#2a2a2a',
        
        // Base colors
        navy: '#1a1a1a', // Using charcoal instead
        primary: '#DAA520', // Hive Gold
        secondary: '#B8860B', // Honeycomb Gold
        accent: '#FFBF00', // Liquid Honey
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'honeycomb': 'honeycomb 20s ease-in-out infinite',
        'drip': 'drip 3s ease-in-out infinite',
        'buzz': 'buzz 0.5s ease-in-out',
        'hexagon-rotate': 'hexagon-rotate 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        honeycomb: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(180deg)' },
        },
        drip: {
          '0%': { transform: 'translateY(0) scaleY(1)', opacity: '1' },
          '50%': { transform: 'translateY(20px) scaleY(1.5)', opacity: '0.8' },
          '100%': { transform: 'translateY(40px) scaleY(0.5)', opacity: '0' },
        },
        buzz: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        },
        'hexagon-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'custom': '0 10px 40px rgba(26, 26, 26, 0.1)',
        'primary': '0 10px 40px rgba(218, 165, 32, 0.3)', // gold shadow
        'secondary': '0 10px 40px rgba(184, 134, 11, 0.3)', // dark gold shadow
        'glow': '0 0 20px rgba(218, 165, 32, 0.5)',
        'glow-honey': '0 0 30px rgba(255, 191, 0, 0.6)',
        'hexagon': '0 10px 30px rgba(218, 165, 32, 0.3)',
      },
      backgroundImage: {
        'honeycomb-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0l15 8.66v17.32L15 34.64 0 25.98V8.66L15 0z' fill='%23DAA520' fill-opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}