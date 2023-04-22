/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        container: '1520px',
        contentContainer: '1280px',
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
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
