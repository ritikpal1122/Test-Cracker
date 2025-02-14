/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray': {
          800: '#1a1b26',
          900: '#16161e',
        },
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
      },
    },
  },
  plugins: [],
};