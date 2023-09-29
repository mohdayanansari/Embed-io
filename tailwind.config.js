/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        app1: '#634780',
        app2: '#e8d5f5',
        dark: '#141619',
      },
      backgroundImage: {
        'hero-pattern': "url('/imgs/1.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
