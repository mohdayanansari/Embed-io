/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        app1: '#F7AB0A',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
