/** @type {import('tailwindcss').Config} */

export default {

  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {

    extend: {

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {

        elarbol: {

          50: '#f0fdf4',

          100: '#dcfce7',

          200: '#bbf7d0',

          300: '#86efac',

          400: '#4ade80',

          500: '#22c55e',

          600: '#16a34a',

          700: '#15803d',

          800: '#166534',

          900: '#14532d',

          earth: '#8B6914',

          bark: '#3D2914',

        },

      },

      boxShadow: {

        card: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',

        'card-hover': '0 4px 12px rgba(0,0,0,0.08), 0 8px 24px rgba(22,101,52,0.08)',

      },

    },

  },

  plugins: [],

};

