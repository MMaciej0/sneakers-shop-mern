/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        highlight: '#3bcfff',
        primary: '#474747',
        primaryBg: '#fff',
        secondaryBg: '#cfcfcf',
      },
    },
  },
  plugins: [],
};
