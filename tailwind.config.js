/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'system-ui', 'sans-serif'],
        sans: ['Rajdhani', 'system-ui', 'sans-serif'],
      },
      colors: {
        live: {
          bg: '#0a0a14',
          panel: '#12121f',
          card: '#1a1a2e',
          border: '#2a2a45',
          cyan: '#00f0ff',
          purple: '#a855f7',
          pink: '#ff2d87',
          gold: '#fbbf24',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 240, 255, 0.35)',
        'glow-purple': '0 0 24px rgba(168, 85, 247, 0.4)',
        'glow-gold': '0 0 24px rgba(251, 191, 36, 0.45)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
