/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        app1: '#634780',
        app2: '#e8d5f5',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
