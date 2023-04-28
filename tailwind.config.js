/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        app1: '#634780',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
